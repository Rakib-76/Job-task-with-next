"use client";

import { FaArrowRight } from "react-icons/fa";

const OverlayCards = () => {
    return (
        <>
            {/* Parent div overlay */}
            <div className="absolute top-[17%] left-[1050px] transform -translate-x-1/2 flex w-[540px] h-[259px] z-10">
                {/* First child div */}
                <div className="w-[270px] h-[259px] bg-[#EE4B21] p-[65px_38px] text-white font-roboto flex flex-col justify-between space-y-1">
                    <h1 className="text-white text-[22px] font-roboto font-semibold">
                        Quality Product
                    </h1>

                    <p className="text-[16px] font-roboto font-normal">Lorem ipsum dolor sitatu
                        amet consec teturarisa
                        adipiscing elit samed.</p>
                    <p className="text-white text-[16px] font-roboto flex items-center gap-2">
                        Read More <FaArrowRight />
                    </p>
                </div>

                {/* Second child div */}
                <div className="w-[270px] h-[259px] bg-[#07B4B0] p-[65px_38px] text-white font-roboto flex flex-col justify-between">
                    <h1 className="text-white text-[22px] font-roboto font-semibold">
                        Project Overview
                    </h1>
                    <p className="text-[36px] font-roboto font-bold">
                        35 Millions
                    </p>

                    <p className="text-white text-[16px] font-roboto flex items-center gap-2">
                        Read More <FaArrowRight />
                    </p>
                </div>
            </div>

            {/* Responsive adjustments */}
            <style jsx>{`
        @media (max-width: 1024px) {
          div.absolute {
            width: 80%;
            flex-direction: column;
            height: auto;
          }
          div.absolute > div {
            width: 100%;
            margin-bottom: 16px;
            padding: 40px 24px;
          }
        }
        @media (max-width: 640px) {
          div.absolute > div {
            padding: 32px 16px;
          }
        }
      `}</style>
        </>
    );
};

export default OverlayCards;
