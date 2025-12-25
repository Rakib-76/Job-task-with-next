"use client";

import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const InfoAndPartners = () => {
    return (
        <>
            {/* ================= SECTION 1 ================= */}
            <section className="w-[1440px] mx-auto bg-white">
                <div className="py-[44px]">
                    <div className="flex items-center gap-[5px] ml-[120px]" style={{ width: "756px" }}>
                        {/* Location */}
                        <div className="flex items-center gap-2 w-[366px]">
                            <FaMapMarkerAlt className="text-[#07B4B0]" size={25} />
                            <div>
                                <p className="text-[16px] font-semibold font-roboto text-[#07B4B0]">Location</p>
                                <p className="text-sm text-gray-400">Kashimpur,Gazipur Sadar / Gazipur</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-3 w-[366px]">
                            <FaEnvelope className="text-[#07B4B0]" size={25} />
                            <div>
                                <p className="text-[16px] font-semibold font-roboto text-[#07B4B0]">Email</p>
                                <p className="text-sm text-gray-400">compliance@danysknitwear.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SECTION 2 ================= */}
            <section className="w-[1440px] mx-auto bg-white py-[24px] overflow-hidden relative">
                <div className="px-[120px] relative">
                    {/* Logo Slider */}
                    <div
                        className="flex items-center gap-20 animate-slide"
                        style={{
                            WebkitMaskImage:
                                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
                            maskImage:
                                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskSize: "100% 100%",
                            maskSize: "100% 100%",
                            whiteSpace: "nowrap",
                        }}

                    >
                        {/* Logos */}
                        <img src="/logo1.png" className="w-[100px] h-[20px] object-contain" alt="logo" />
                        <img src="/logo2.png" className="w-[100px] h-[20px] object-contain" alt="logo" />
                        <img src="/logo3.png" className="w-[100px] h-[20px] object-contain" alt="logo" />

                        <img src="/logo1.png" className="w-[100px] h-[20px] object-contain" alt="logo" />
                        <img src="/logo2.png" className="w-[100px] h-[20px] object-contain" alt="logo" />
                        <img src="/logo3.png" className="w-[100px] h-[20px] object-contain" alt="logo" />

                        <img src="/logo1.png" className="w-[100px] h-[20px] object-contain" alt="logo" />
                        <img src="/logo2.png" className="w-[100px] h-[20px] object-contain" alt="logo" />
                        <img src="/logo3.png" className="w-[100px] h-[20px] object-contain" alt="logo" />

                        <img src="/logo1.png" className="w-[100px] h-[20px] object-contain" alt="logo" />
                        <img src="/logo2.png" className="w-[100px] h-[20px] object-contain" alt="logo" />
                        <img src="/logo3.png" className="w-[100px] h-[20px] object-contain" alt="logo" />
                    </div>
                </div>
            </section >

            {/* ================= ANIMATION ================= */}
            <style jsx>{`
  .animate-slide {
    display: flex;
    width: max-content;
    animation: slide 10s linear infinite;
    will-change: transform;
  }

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`}</style>

        </>
    );
};

export default InfoAndPartners;
