import React from "react";

export const CallToActionSection = (): JSX.Element => {
    return (
        <section className="absolute w-full top-0 left-0 h-[1200px] flex items-center justify-center bg-[url(/img/mask-group.svg)] bg-cover bg-[50%_50%]">
            <div className="mt-12 h-[520px] w-[1280px] relative">
                <div className="absolute top-0 left-[calc(50.00%_-_127px)] w-[254px] h-[38px] bg-[#2b7fff1a] rounded-[33554400px] border border-solid border-[#2b7fff4c] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
                    <div
                        className="absolute top-[calc(50.00%_-_8px)] left-[17px] w-4 h-4"
                        aria-hidden="true"
                    >
                        <img
                            className="absolute w-[83.35%] h-[83.35%] top-[8.32%] left-[8.32%]"
                            alt=""
                            src="/img/vector.svg"
                        />

                        <img
                            className="absolute w-0 h-[16.67%] top-[8.33%] left-[83.33%]"
                            alt=""
                            src="/img/vector-1.svg"
                        />

                        <img
                            className="absolute w-[16.67%] h-0 top-[16.67%] left-[75.00%]"
                            alt=""
                            src="/img/vector-2.svg"
                        />

                        <img
                            className="absolute w-[16.67%] h-[16.67%] top-[75.00%] left-[8.33%]"
                            alt=""
                            src="/img/vector-3.svg"
                        />
                    </div>

                    <div className="absolute top-[9px] left-[calc(50.00%_-_86px)] w-[196px] h-5 flex items-center justify-center bg-[linear-gradient(90deg,rgba(81,162,255,1)_0%,rgba(194,122,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-transparent text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                        AI Automation Services Virginia
                    </div>
                </div>

                <h1 className="sr-only">AI Automation That Actually Works</h1>

                <p className="absolute top-[341px] left-[calc(50.00%_-_444px)] w-[888px] h-[63px] flex items-center justify-center [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-[#99a1ae] text-[23.8px] text-center tracking-[0] leading-[39px]">
                    Transform your Northern Virginia business with custom AI agents that
                    save time, cut
                    <br />
                    costs, and boost revenue
                </p>

                <button
                    className="absolute h-[calc(100%_-_460px)] top-[460px] left-[calc(50.00%_-_250px)] w-[247px] rounded-[10px] overflow-hidden bg-[linear-gradient(90deg,rgba(43,127,255,1)_0%,rgba(152,16,250,1)_100%)] cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#2b7fff] focus:ring-offset-2 focus:ring-offset-[#000000]"
                    type="button"
                    aria-label="Get Free Consultation"
                >
                    <span className="absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_92px)] w-[156px] h-6 flex items-center justify-center [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                        Get Free Consultation
                    </span>

                    <div
                        className="absolute top-[calc(50.00%_-_12px)] left-[195px] w-5 h-5"
                        aria-hidden="true"
                    >
                        <img
                            className="absolute w-[25.00%] h-[50.00%] top-[25.00%] left-[37.50%]"
                            alt=""
                            src="/img/vector-4.svg"
                        />
                    </div>
                </button>

                <a
                    href="tel:+17036909726"
                    className="absolute h-[calc(100%_-_460px)] top-[460px] left-[calc(50.00%_+_13px)] w-[237px] rounded-[10px] border-2 border-solid border-[#2b7fff80] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] flex items-center justify-center cursor-pointer transition-all hover:border-[#2b7fff] hover:bg-[#2b7fff1a] focus:outline-none focus:ring-2 focus:ring-[#2b7fff] focus:ring-offset-2 focus:ring-offset-[#000000]"
                    aria-label="Call (703) 690-9726"
                >
                    <div
                        className="absolute top-[calc(50.00%_-_10px)] left-[34px] w-5 h-5"
                        aria-hidden="true"
                    >
                        <img
                            className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
                            alt=""
                            src="/img/vector-21.svg"
                        />
                    </div>

                    <span className="absolute top-[calc(50.00%_-_8px)] left-[calc(50.00%_-_57px)] w-[141px] h-4 flex items-center justify-center [font-family:'Segoe_UI_Symbol-Regular',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                        Call (703) 690-9726
                    </span>
                </a>
            </div>
        </section>
    );
};
