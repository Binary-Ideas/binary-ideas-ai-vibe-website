import React from "react";

interface City {
  name: string;
  fontSize?: string;
  width?: string;
}

export const HowItWorksSection = (): JSX.Element => {
  const citiesRow1: City[] = [
    { name: "Fairfax", width: "w-[43.04px]" },
    { name: "Arlington", fontSize: "text-[13.3px]", width: "w-[55.23px]" },
    { name: "Alexandria", width: "w-[65.7px]" },
    { name: "Burke", width: "w-[36.56px]" },
    { name: "Woodbridge", fontSize: "text-[13.5px]", width: "w-[75.31px]" },
    { name: "Fairfax Station", width: "w-[90.22px]" },
  ];

  const citiesRow2: City[] = [
    { name: "Manassas", width: "w-[64.01px]" },
    { name: "Fredericksburg", width: "w-[92.95px]" },
    { name: "Springfield", fontSize: "text-[13.8px]", width: "w-[66.29px]" },
    { name: "Reston", width: "w-[44.15px]" },
    { name: "Tysons", width: "w-[43.73px]" },
    { name: "Herndon", fontSize: "text-[13.8px]", width: "w-[53.9px]" },
  ];

  const cityPositions = [0, 173, 347, 520, 693, 867];

  const renderCityBadge = (
    city: City,
    leftPosition: number,
    topPosition: number,
  ) => {
    const fontSize = city.fontSize || "text-sm";
    const width = city.width || "w-auto";

    return (
      <div
        key={`${city.name}-${topPosition}`}
        className="w-[calc(100%_-_867px)] h-[50px] flex justify-center bg-[#2b7fff0d] rounded-[10px] border-[#2b7fff33] absolute border border-solid backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]"
        style={{ top: `${topPosition}px`, left: `${leftPosition}px` }}
      >
        <div
          className={`mt-[19px] ${width} h-3.5 ml-[0.2px] ${fontSize} text-center leading-5 flex items-center justify-center [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-white tracking-[0] whitespace-nowrap`}
        >
          {city.name}
        </div>
      </div>
    );
  };

  return (
    <section className="absolute w-[calc(100%_-_640px)] top-[5490px] left-80 h-[368px] flex flex-col">
      <p className="flex items-center justify-center ml-[0.2px] h-[46px] w-[755.12px] self-center mt-[77px] [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-[#99a1ae] text-lg text-center tracking-[0] leading-7">
        We proudly serve businesses across 12 cities in Northern Virginia with
        fast response times and
        <br />
        local expertise
      </p>

      <div
        className="ml-32 mr-32 flex-1 max-h-[116px] relative mt-[53px]"
        role="list"
        aria-label="Cities served"
      >
        {citiesRow1.map((city, index) =>
          renderCityBadge(city, cityPositions[index], 0),
        )}
        {citiesRow2.map((city, index) =>
          renderCityBadge(city, cityPositions[index], 66),
        )}
      </div>

      <p className="flex items-center justify-center ml-[0.2px] h-7 w-[910.36px] self-center mt-12 [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-[#50a2ff] text-[17.9px] text-center tracking-[0] leading-7 whitespace-nowrap">
        Based in Lorton, we provide same-day consultations and rapid
        implementation for all Northern Virginia businesses.
      </p>
    </section>
  );
};
