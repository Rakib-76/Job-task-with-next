"use client";

const ProcessSection = () => {
    return (
        <section
            className="w-[1440px] h-[586px] mx-auto mt-[40px] relative"
            style={{ backgroundColor: "#07B4B01A" }}
        >
            {/* LEFT SIDE (BACKGROUND IMAGE WITH TEXT) */}
            <div
                className="absolute flex flex-col justify-center gap-4 px-[38px] font-roboto"
                style={{
                    width: "750px",
                    height: "370px",
                    left: "90px",
                    top: "108px",
                    backgroundImage: "url('/left-image.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Process Button */}
                <div className="pl-10 -mt-10">
                    <button className="w-fit border border-[#07B4B0] px-6 py-2 text-sm font-medium text-[#07B4B0] bg-white rounded-full">
                        Process
                    </button>

                    {/* Heading */}
                    <h1 className="text-[32px] font-semibold text-[#212529] mb-3 ">
                        Do You Want Custom Project With Textilery? Contact Us Now
                    </h1>

                    {/* Paragraph */}
                    <p className="text-[16px] font-normal text-[#464646] max-w-[550px] mb-2">
                        At  Zaheen Knitwear Ltd., we pride ourselves on being your reliable partner for apparel production. Our commitment to ethical manufacturing ensures that every garment is crafted with care and integrity.
                    </p>

                    {/* Learn More Button */}
                    <button className="w-fit border border-[#07B4B0] px-6 py-2 text-sm font-medium text-[#07B4B0] bg-white">
                        Learn More
                    </button>
                </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <img
                src="/right-image.png"
                alt="Process Visual"
                className="absolute object-cover"
                style={{
                    width: "320px",
                    height: "460px",
                    top: "56px",
                    left: "970px",
                }}
            />
        </section >
    );
};

export default ProcessSection;
