import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { MainContentSection } from "./sections/MainContentSection";
import { OurServiceAreaSection } from "./sections/OurServiceAreaSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export const ElementLight = (): JSX.Element => {
  return (
    <div
      className="bg-white w-full min-w-[1920px] min-h-[6811px] flex flex-col relative"
      data-model-id="1:55"
    >
      <HeaderSection />

      <main className="z-[1] w-full flex-1 relative bg-[#0a0a0f]">
        <div className="absolute top-0 left-0 w-[1920px] h-[1200px] opacity-30 pointer-events-none">
          <div className="absolute top-0 left-[480px] w-96 h-96 bg-[#2b7fff] rounded-[33554400px] blur-3xl" />
          <div className="right-[480px] bottom-0 bg-[#ac46ff] absolute w-96 h-96 rounded-[33554400px] blur-3xl" />
          <div className="top-[50.00%] left-[50.00%] bg-[#f6329a] absolute w-96 h-96 rounded-[33554400px] blur-3xl" />
        </div>

        <CallToActionSection />
        <MainContentSection />
        <ServicesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <OurServiceAreaSection />
        <FooterSection />
      </main>
    </div>
  );
};
