import React from "react";

const industryTags = [
  { label: "Healthcare", width: "w-[84px]", textWidth: "w-[58.04px]" },
  { label: "Legal", width: "w-[55px]", textWidth: "w-[29.29px]" },
  { label: "Retail", width: "w-14", textWidth: "w-[30.62px]" },
  { label: "Restaurants", width: "w-[90px]", textWidth: "w-[64.62px]" },
  { label: "Real Estate", width: "w-[87px]", textWidth: "w-[61.54px]" },
  { label: "Contractors", width: "w-[88px]", textWidth: "w-[62.11px]" },
];

const tagPositions = [
  "left-[33px]",
  "left-[125px]",
  "left-[188px]",
  "left-[252px]",
  "left-[351px]",
  "left-[446px]",
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section
      className="absolute w-[calc(100%_-_640px)] top-[3288px] left-80 h-[562px]"
      aria-labelledby="features-heading"
    >
      <div
        className="absolute w-[calc(100%_-_632px)] h-[calc(100%_-_64px)] top-20 -left-4 rounded-3xl blur-[20px] bg-[linear-gradient(154deg,rgba(43,127,255,0.2)_0%,rgba(173,70,255,0.2)_100%)]"
        aria-hidden="true"
      />

      <div className="absolute w-[calc(100%_-_664px)] top-24 left-0 h-[466px] flex rounded-2xl overflow-hidden border border-solid border-[#fffefe1a] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] bg-[linear-gradient(155deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)]">
        <div className="mt-[9px] h-[448.5px] ml-[9px] mr-[9px] flex-1 flex rounded-[14px] overflow-hidden bg-[url(/img/local-northern-virginia-storefront.png)] bg-cover bg-[50%_50%]">
          <div
            className="flex-1 w-[598px] bg-[linear-gradient(25deg,rgba(43,127,255,0.2)_0%,rgba(43,127,255,0)_50%,rgba(173,70,255,0.2)_100%)]"
            aria-hidden="true"
          />
        </div>
      </div>

      <div
        className="absolute right-[648px] -bottom-4 w-[143px] h-[94px] flex flex-col rounded-[14px] border border-solid border-[#fffefe33] shadow-[0px_0px_30px_#3b82f666] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] bg-[linear-gradient(159deg,rgba(43,127,255,1)_0%,rgba(152,16,250,1)_100%)]"
        role="figure"
        aria-label="Serving over 100 local businesses"
      >
        <div className="flex items-center justify-center ml-[25px] w-[48.01px] h-5 mt-[13px] [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-[#fffefecc] text-sm tracking-[0] leading-5 whitespace-nowrap">
          Serving
        </div>

        <div className="flex items-center justify-center ml-[25px] w-[54.26px] h-8 [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-white text-[23.4px] tracking-[0] leading-8 whitespace-nowrap">
          100+
        </div>

        <div className="flex items-center justify-center ml-[25px] w-[93.47px] h-4 [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-[#fffefeb2] text-xs tracking-[0] leading-4 whitespace-nowrap">
          Local Businesses
        </div>
      </div>

      <article className="w-[calc(100%_-_664px)] top-[138px] left-[664px] h-[383px] bg-[#fffefe0d] rounded-2xl border-[#fffefe1a] absolute border border-solid backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
        <div
          className="absolute w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] top-px left-px rounded-2xl bg-[linear-gradient(160deg,rgba(43,127,255,0.05)_0%,rgba(173,70,255,0.05)_100%)]"
          aria-hidden="true"
        />

        <p className="absolute top-[38px] left-[33px] w-[550px] h-[252px] flex items-center justify-center [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-[#d0d5db] text-lg tracking-[0] leading-[29.2px]">
          We specialize in helping small and medium businesses across
          <br />
          Northern Virginia transform their operations with AI automation. Our
          <br />
          clients include healthcare practices, professional services firms,
          retail
          <br />
          businesses, restaurants, real estate agencies, and government
          <br />
          contractors. Whether you&#39;re a 5-person startup or a 200-employee
          <br />
          company, we create solutions that scale with your growth. We
          <br />
          understand the unique challenges of doing business in the
          <br />
          competitive Northern Virginia market and provide the local expertise
          <br />
          you need to succeed.
        </p>

        <div
          className="absolute top-80 left-[33px] flex gap-[8px]"
          role="list"
          aria-label="Industries served"
        >
          {industryTags.map((tag, index) => (
            <div
              key={tag.label}
              className={`h-[calc(100%_-_353px)] ${tag.width} flex rounded-[33554400px] border-[#2b7fff4c] bg-[linear-gradient(90deg,rgba(43,127,255,0.2)_0%,rgba(173,70,255,0.2)_100%)] border border-solid backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]`}
              role="listitem"
            >
              <span
                className={`flex items-center justify-center mt-[9px] ${tag.textWidth} h-3 ml-[13px] [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-[#8dc5ff] text-xs tracking-[0] leading-4 whitespace-nowrap`}
              >
                {tag.label}
              </span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};
