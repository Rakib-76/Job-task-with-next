"use client";

import Image from "next/image";

const FeatureCard = ({ number, image, title, description }) => {
  return (
    <div className="relative w-[280px] h-[251.18px] mx-auto md:mx-0 pt-5 overflow-visible group">

      {/* Card with Shadow */}
      <div className="absolute inset-0 rounded shadow-[0_4px_12px_rgba(104,104,104,0.17)] bg-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-[#07B4B0] scale-y-0 origin-bottom transition-transform duration-700 ease-in-out group-hover:scale-y-100"></div>
      </div>

      {/* Top Number Circle */}
      <div
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white 
                   flex items-center justify-center font-bold z-10
                   shadow-[0_4px_12px_rgba(104,104,104,0.17)]
                   transition-colors duration-300
                   group-hover:bg-[#f15a29] group-hover:text-white"
      >
        {number}
      </div>

      {/* Card Content */}
      <div className="relative flex flex-col items-start justify-start h-full pt-6 px-4 space-y-3 z-10">

        {/* Image Icon */}
        <Image
          src={image}
          alt={title}
          width={48}
          height={48}
          className="group-hover:brightness-0 group-hover:invert"
        />

        <h1 className="font-['Roboto'] font-semibold text-[22px] text-[#4D4D4D] group-hover:text-white">
          {title}
        </h1>


        <p className="font-['Roboto'] font-normal text-[16px] text-[#4F4F4F] group-hover:text-white">
          {description}
        </p>

      </div>
    </div>
  );
};

export default FeatureCard;
