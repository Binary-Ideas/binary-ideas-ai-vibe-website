import React from "react";

interface NavItem {
  label: string;
  width: string;
  fontSize?: string;
}

export const HeaderSection = (): JSX.Element => {
  const navItems: NavItem[] = [
    { label: "Services", width: "w-[61.98px]", fontSize: "text-base" },
    { label: "How It Works", width: "w-[94.75px]", fontSize: "text-[15.8px]" },
    { label: "Service Area", width: "w-[92.01px]", fontSize: "text-base" },
  ];

  return (
    <header className="fixed top-0 left-0 w-[1920px] h-[97px] z-[2] flex gap-[542.1px] bg-[#0a0a0fcc] [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border-[#fffefe1a] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]">
      <img
        className="mt-[22px] w-[216px] h-[53px] ml-[344px] aspect-[4.06] object-cover"
        alt="Bi AI logo white"
        src="/img/bi-ai-logo-white-2x-1.png"
      />

      <nav
        className="-mt-px w-[473.94px] self-center flex gap-[31.8px]"
        role="navigation"
        aria-label="Main navigation"
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}
            className={`flex items-center justify-center mt-2 ${item.width} h-6 [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-[#d0d5db] ${item.fontSize || "text-base"} tracking-[0] leading-6 whitespace-nowrap hover:text-white transition-colors duration-200`}
          >
            {item.label}
          </a>
        ))}

        <a
          href="#get-started"
          className="h-10 w-[129.8px] self-center flex rounded-[10px] bg-[linear-gradient(90deg,rgba(43,127,255,1)_0%,rgba(152,16,250,1)_100%)] hover:opacity-90 transition-opacity duration-200"
        >
          <span className="flex items-center justify-center mt-3 w-[82px] h-4 ml-6 [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
            Get Started
          </span>
        </a>
      </nav>
    </header>
  );
};
