// import React from 'react'

// export default function Banner() {
//     return (
//         <div className='  mx-auto mb-10 mt-'>
//             <div className="hero  min-h-screen">
//                 <div className="hero-content flex-col gap-5 lg:flex-row">
//                     <img
//                         src="https://i.postimg.cc/k4cG3J86/4667595-removebg-preview.png"
//                         className=" rounded-lg shadow-2xl flex-1"
//                     />
//                     <div className='flex-1'>
//                         <h1 className="font-bold text-white text-5xl">Welcome to Our Store!</h1>
//                         <p className="py-6 text-white">
//                            Find your favorites at the best price
//                         </p>
//                         <button className="btn bg-[#201235] text-white p-2 rounded-xl">Get Started</button>
//                     </div>
//                     <div className="hero-content flex-col lg:flex-row">
//                         <img
//                             src="https://i.postimg.cc/kXZ4dhVc/levitating-music-headphones-display-removebg-preview.png"
//                             className=" flex-1 rounded-lg shadow-2xl"
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div className='border-b-2 border-b-zinc-500 shadow-2xl'></div>
//         </div>
//     )
// }






"use client";

import { FaPlay } from "react-icons/fa";

const Banner = () => {
    return (
        <section className="relative w-[1440px] h-[659px] overflow-hidden mx-auto">

            {/* ===== Background Video ===== */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                {/* 🔴 CHANGE VIDEO SOURCE HERE */}
                <source src="/5124231_Person_People_1280x720.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay (optional but recommended for readability) */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* ===== LEFT CONTENT ===== */}
            <div
                className="absolute text-white"
                style={{
                    top: "159.22px",
                    left: "121px",
                    width: "768px",
                    height: "287px",
                    fontFamily: "Roboto",
                }}
            >
                <p className="text-[20px] font-normal text-white/60 mb-3">
                    elevate your Band With
                </p>

                <h1 className="text-[56px] font-bold leading-tight mb-4">
                    High-Quality Garments. Ethically Made.
                </h1>

                <p className="text-[20px] font-normal text-white/60 mb-6">
                    At  Zaheen Knitwear Ltd., we pride ourselves on being your reliable partner for apparel production. Our commitment to ethical manufacturing ensures that every garment is crafted with care and integrity.
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                    <button className="bg-[#f15a29] text-white px-6 py-2 text-sm font-medium hover:bg-orange-600 transition">
                        Contact Us
                    </button>
                    <button className="border border-white rounded-[1px] text-white px-6 py-2 text-sm font-medium hover:bg-white/10 transition">
                        Learn More
                    </button>

                </div>
            </div>

            {/* ===== RIGHT PLAY BUTTON ===== */}
            <div
                className="absolute flex items-center justify-center rounded-full border"
                style={{
                    width: "135px",
                    height: "135px",
                    top: "262.22px",
                    left: "1185px",
                    borderColor: "rgba(255,255,255,0.2)",
                }}
            >
                {/* Inner Circle */}
                <div className="w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center">
                    <FaPlay className="text-[#f15a29] w-[16px] h-[18px]" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
