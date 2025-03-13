"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size and update isMobile state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Consider screen width less than 768px as mobile
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Full-Screen Image Wrapper */}
            <div className="relative w-full h-full">
                {/* Desktop Image */}
                {!isMobile && (
                    <Image
                        src="/assets/AboutUs/AboutUs.svg" // Your desktop image path
                        alt="About Us"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        priority
                        className="block"
                    />


                )}

                {/* Mobile Image */}
                {isMobile && (
                    <Image
                        src="/assets/AboutUs/m_AboutUs.svg" // Your mobile-specific image path
                        alt="About Us"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center" // Center the image on mobile
                        priority
                        className="block"
                    />
                )}

                <div className="relative grid grid-rows-12">
                    {!isMobile ?
                        <div className="row-span-4 grid grid-cols-6 bg-gradient-to-b from-black to-transparent"
                            style={{ background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)" }}>

                            <div className="col-span-1 flex flex-col items-start justify-center text-white">

                            </div>

                            <div className="col-span-3 flex flex-col items-start justify-center text-white gap-6">
                                <div className="row-span-1 mb-4">
                                    <div className="flex items-center gap-x-4 text-center mb-16">
                                        <span className="text-5xl font-bold text-left leading-tight">Vision Behind</span>
                                        <img src="/assets/AboutUs/NE.svg" alt="Vision Icon" className="w-24 h-24" />
                                    </div>
                                    <span className="text-2xl text-left leading-tight flex flex-col justify-center mb-8">
                                        Empowering Ethical Entrepreneurs<br /> Transforming Ideas into Impact.
                                    </span>
                                    <span className="text-lg text-left leading-tight flex flex-col justify-center">
                                        Niyyah Entrepreneur is a mission-driven platform designed to<br />
                                        educate, inspire, and empower Muslim entrepreneurs. Rooted in<br />
                                        faith, ethical business practices, and innovation, we guide aspiring<br />
                                        leaders through education, community engagement, and<br />
                                        technology. Our goal? To create industry leaders who not only<br />
                                        succeed in business but also leave a lasting impact on society.
                                    </span>
                                </div>
                                <div className="text-lg font-sm text-white">
                                    <button
                                        className="px-8 md:px-6 py-3 md:py-3 bg-transparent text-white font-bold border border-transparent hover:border-white hover:text-white transition-all duration-300"
                                        style={{ backgroundColor: "#7C23DD", fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>
                                        Join the Vision
                                    </button>
                                </div>
                            </div>
                            <div className="col-span-2">
                            </div>
                        </div>
                        :
                        <div className="row-span-5 grid grid-cols-11">
                         
                            <div className="col-span-1 flex flex-col items-start justify-center text-white">

                            </div>
                            <div className="col-span-9 flex flex-col items-center justify-center text-white gap-6">
                                <div className="row-span-1 mb-4">
                                    <div className="flex items-center justify-left  gap-x-4 text-left mb-72">
                                        <span className="text-4xl font-bold text-left leading-tight whitespace-nowrap">Vision Behind</span>
                                        <img src="/assets/AboutUs/NE.svg" alt="Vision Icon" className="w-16 h-16" />
                                    </div>
                                </div>
                               
                                <div className="row-span-1 mb-4 flex flex-col md:flex-row md:justify-between w-full md:w-auto">
                                    <span className="text-xl text-left leading-tight flex flex-col w-full md:w-1/2 mb-8">
                                        Empowering Ethical Entrepreneurs Transforming Ideas into Impact.
                                    </span>
                                    <span className="text-1xl text-left leading-tight flex flex-col justify-center">
                                        Niyyah Entrepreneur is a mission-driven platform designed to
                                        educate, inspire, and empower Muslim entrepreneurs. Rooted in
                                        faith, ethical business practices, and innovation, we guide aspiring
                                        leaders through education, community engagement, and
                                        technology. Our goal? To create industry leaders who not only
                                        succeed in business but also leave a lasting impact on society.
                                    </span>
                                </div>
                                <div className="text-lg font-sm text-white">
                                    <button
                                        className="px-8 md:px-6 py-3 md:py-3 bg-transparent text-white font-bold border border-transparent hover:border-white hover:text-white transition-all duration-300"
                                        style={{ backgroundColor: "#7C23DD", fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>
                                        Join the Vision
                                    </button>
                                </div>
                            </div>

                            <div className="col-span-1"></div>
                        </div>
                
                    }

                    {!isMobile ?
                        <div className="row-span-4 grid grid-cols-6"
                        style={{ background: "linear-gradient(180deg,  #180033 0%, rgba(24, 0, 51, 0) 100%)", transform: "matrix(1, 0, 0, -1, 0, 0)" }}>
                            <div className="col-span-1 flex flex-col items-start justify-center text-white">
                            </div>

                            <div className="col-span-3 flex flex-col items-start justify-top text-white gap-6">
                                <div className="text-lg font-sm text-white gap-4">
                                </div>
                            </div>

                            <div className="col-span-2">
                            </div>
                        </div>
                        :
                        <div className="row-span-2 grid grid-cols-6">
                            <div className="col-span-1 flex flex-col items-start justify-center text-white">
                            </div>

                            <div className="col-span-3 flex flex-col items-start justify-top text-white gap-6">
                                <div className="text-lg font-sm text-white gap-4">
                                </div>
                            </div>

                            <div className="col-span-2">
                            </div>
                        </div>}
                    <div
                        className="row-span-3  flex flex-col items-center justify-center text-white p-6 bg-gradient-to-b from-black to-transparent via-transparent md:block hidden"
                        style={{ background: "linear-gradient(180deg,  #180033 0%, rgba(24, 0, 51, 0) 100%)", transform: "matrix(1, 0, 0, -1, 0, 0)" }}
                    >
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
