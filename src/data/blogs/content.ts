export interface BlogHeroImage {
  src: string;
  alt: string;
}

export interface BlogPostMeta {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  heroImage: BlogHeroImage;
}

export interface BlogPostFrontmatter {
  meta: BlogPostMeta;
  pageTitle: string;
  categories?: string[];
  excerpt?: string;
  tags?: string[];
  schema?: Record<string, unknown> | string;
}

export interface BlogPostContent {
  meta: BlogPostMeta;
  pageTitle: string;
  categories: string[];
  excerpt?: string;
  tags: string[];
  slugSegments: string[];
  Page: (props: Record<string, unknown>) => any;
  frontmatter: BlogPostFrontmatter;
  schema?: Record<string, unknown> | string;
}

const markdownModules = import.meta.glob<{ default: BlogPostContent['Page']; frontmatter: BlogPostFrontmatter }>(
  './**/index.md',
  {
    eager: true
  }
);

function resolveSlugSegments(filePath: string, frontmatter: BlogPostFrontmatter): string[] {
  const normalizedPath = filePath
    .replace(/^\.\//, '')
    .replace(/index\.md$/, '')
    .replace(/\.md$/, '');

  const pathSegments = normalizedPath.split('/').filter(Boolean);

  if (pathSegments.length > 0) {
    return pathSegments;
  }

  const metaSegments = [
    ...(frontmatter.meta.slug?.split('/').filter(Boolean) ?? [])
  ];

  return metaSegments.length > 0 ? metaSegments : [''];
}

function toTimestamp(dateValue: string): number {
  const parsed = Date.parse(dateValue);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export const blogPostsContent: BlogPostContent[] = Object.entries(markdownModules)
  .map(([path, module]) => {
    const frontmatter = module.frontmatter as BlogPostFrontmatter;
    const slugSegments = resolveSlugSegments(path, frontmatter);
    const normalizedMeta: BlogPostMeta = {
      ...frontmatter.meta,
      slug: slugSegments[slugSegments.length - 1] ?? frontmatter.meta.slug
    };

    const normalizedFrontmatter: BlogPostFrontmatter = {
      ...frontmatter,
      meta: normalizedMeta,
      categories: frontmatter.categories ?? [],
      tags: frontmatter.tags ?? []
    };

    return {
      meta: normalizedMeta,
      pageTitle: normalizedFrontmatter.pageTitle,
      categories: normalizedFrontmatter.categories ?? [],
      excerpt: normalizedFrontmatter.excerpt,
      tags: normalizedFrontmatter.tags ?? [],
      slugSegments,
      Page: module.default,
      frontmatter: normalizedFrontmatter,
      schema: normalizedFrontmatter.schema
    };
  })
  .sort((a, b) => toTimestamp(b.meta.publishDate) - toTimestamp(a.meta.publishDate));

export const blogPostsContentMap: Record<string, BlogPostContent> = Object.fromEntries(
  blogPostsContent.map((post) => [post.slugSegments.join('/'), post])
);

export const BLOG_POSTS_PER_PAGE = 9;

export function getBlogPagination(page: number, postsPerPage = BLOG_POSTS_PER_PAGE) {
  const totalPosts = blogPostsContent.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / postsPerPage));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;

  return {
    posts: blogPostsContent.slice(start, end),
    totalPages,
    currentPage
  };
}


