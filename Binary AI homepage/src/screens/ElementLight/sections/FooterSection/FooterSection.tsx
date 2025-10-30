import React from "react";

export const FooterSection = (): JSX.Element => {
  const footerData = {
    mainText:
      "Binary Ideas AI - Northern Virginia's Premier AI Automation Agency",
    subText: "Transforming businesses with intelligent automation",
  };

  return (
    <footer className="absolute w-full top-[6662px] left-0 h-[149px] flex bg-transparent border-t [border-top-style:solid] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] border-[#fffefe1a]">
      <div className="mt-[49px] h-[52px] ml-80 mr-80 flex-1 flex flex-col items-center gap-2">
        <p className="flex items-center justify-center ml-[0.2px] h-6 w-[476.58px] [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-[#697282] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
          {footerData.mainText}
        </p>

        <p className="flex items-center justify-center ml-[0.2px] h-5 w-[319.09px] [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-[#697282] text-[13.8px] text-center tracking-[0] leading-5 whitespace-nowrap">
          {footerData.subText}
        </p>
      </div>
    </footer>
  );
};
