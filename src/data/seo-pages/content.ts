export interface SeoPageMeta {
  title: string;
  description: string;
  slug: string;
  parentSlug?: string;
}

export interface SeoPageFrontmatter {
  meta: SeoPageMeta;
  pageTitle: string;
  pageCategories?: string[];
}

type MarkdownPageComponent = (props: Record<string, unknown>) => any;

interface MarkdownPageModule {
  default: MarkdownPageComponent;
  frontmatter: SeoPageFrontmatter;
}

export interface SeoPageContent {
  meta: SeoPageMeta;
  pageTitle: string;
  pageCategories?: string[];
  slugSegments: string[];
  Page: MarkdownPageComponent;
  frontmatter: SeoPageFrontmatter;
}

const markdownModules = import.meta.glob<MarkdownPageModule>('./**/*.md', {
  eager: true
});

function resolveSlugSegments(filePath: string, frontmatter: SeoPageFrontmatter): string[] {
  const normalizedPath = filePath
    .replace(/^\.\//, '')
    .replace(/index\.md$/, '')
    .replace(/\.md$/, '');

  const pathSegments = normalizedPath.split('/').filter(Boolean);

  if (pathSegments.length > 0) {
    return pathSegments;
  }

  const metaSegments = [
    ...(frontmatter.meta.parentSlug?.split('/').filter(Boolean) ?? []),
    frontmatter.meta.slug
  ].filter(Boolean);

  return metaSegments.length > 0 ? metaSegments : [''];
}

export const seoPagesContent: SeoPageContent[] = Object.entries(markdownModules).map(
  ([path, module]) => {
    const frontmatter = module.frontmatter as SeoPageFrontmatter;
    const slugSegments = resolveSlugSegments(path, frontmatter);
    const normalizedMeta: SeoPageMeta = {
      ...frontmatter.meta,
      slug: slugSegments[slugSegments.length - 1] ?? frontmatter.meta.slug,
      parentSlug:
        slugSegments.length > 1
          ? slugSegments.slice(0, -1).join('/')
          : frontmatter.meta.parentSlug
    };

    const normalizedFrontmatter: SeoPageFrontmatter = {
      ...frontmatter,
      meta: normalizedMeta
    };

    return {
      meta: normalizedMeta,
      pageTitle: normalizedFrontmatter.pageTitle,
      pageCategories: normalizedFrontmatter.pageCategories,
      slugSegments,
      Page: module.default,
      frontmatter: normalizedFrontmatter
    };
  }
);

export const seoPagesContentMap: Record<string, SeoPageContent> = Object.fromEntries(
  seoPagesContent.map((page) => [page.slugSegments.join('/'), page])
);

