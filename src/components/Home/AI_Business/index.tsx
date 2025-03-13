"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const AI_Busi = () => {
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
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

            <div className="relative w-full h-full flex flex-col items-center justify-center">

                {!isMobile && (
                    <Image
                        src="/assets/AI_business/AI.svg" // Your desktop image path
                        alt="About Us"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        priority
                        className="block"
                    />
                )}

                {isMobile && (
                    <Image
                        src="/assets/AI_business/m_AI business.svg" // Your mobile-specific image path
                        alt="About Us"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center" // Center the image on mobile
                        priority
                        className="block"
                    />
                )}

                <div className={`relative row-span-2 grid ${isMobile ? "grid-cols-9" : "grid-cols-7"} gap-3`}
                    style={{ background: "linear-gradient(180deg, #000833 0%, rgba(0, 8, 51, 0) 100%)" }}>
                    <div className="col-span-1">

                    </div>
                    <div className={`  ${isMobile ? "col-span-7" : "col-span-5"}`}>
                        <div className="items-center justify-center">
                            <div className="row-span-1 text-white mb-4">
                                <div className="flex items-center gap-x-4 mb-12">
                                    <span className={`${isMobile ? "text-3xl text-left" : "text-5xl text-center"} font-bold leading-tight`}>Meet the AI Team</span>
                                </div>
                                <span className={`${isMobile ? "text-lg" : "text-4xl"} text-center leading-tight flex flex-col justify-center mb-12`}>
                                    AI Experts Driven by Sincerity and Passion
                                </span>
                                <span className={`${isMobile ? "text-medium" : "text-3xl"} text-center leading-tight flex flex-col justify-center`}>
                                    Supercharge your business with Intelligent Al Experts and AI Influencers designed to
                                    help you Start or Grow Your Business Mission.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`relative flex ${isMobile ? "flex-wrap" : "grid grid-cols-5"} 
                items-center justify-center text-white gap-6 w-full min-h-screen overflow-visible`}
                    style={{ color: '#A18FF7' }}>
                    <div></div>


                    <div className="flex flex-col items-center gap-4">
                        <img src="/assets/AI_business/Niyyah_Ai.svg" alt="Image 1" />
                        <span className="text-lg text-white" >Ali AI</span>
                        <span className="text-sm" >Spiritual Coach</span>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <img src="/assets/AI_business/Group 32.svg" alt="Image 4" />
                        <span className="text-lg text-white">Amina AI</span>
                        <span className="text-sm" >Marriage Coach</span>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <img src="/assets/AI_business/Group 31.svg" alt="Image 7" />
                        <span className="text-lg text-white">Bilal AI</span>
                        <span className="text-sm" >Fitness Coach</span>
                    </div>

                    <div></div>
                </div>
                <div className="relative row-span-2 gap-3 flex flex-col items-top justify-center text-white"
                    style={{
                        background: "linear-gradient(180deg, #000833 0%, rgba(0, 8, 51, 0) 100%)",
                        transform: "matrix(1, 0, 0, -1, 0, 0)"
                    }}>
                    <div className="flex flex-col items-center justify-center transform scale-y-[-1]">
                        {/* Responsive Heading */}

                        <span className={`${isMobile ? "text-lg" : "text-2xl"} text-center leading-tight flex flex-col items-center justify-center mb-4 font-bold`}>
                            Ready to Start or Scale your Business?
                        </span>
                        <span className={`${isMobile ? "text-medium" : "text-lg"} text-center leading-tight flex flex-col items-center justify-center mb-4`}>
                            Unlock the power of AI-driven entrepreneurship. Join now and take your business to the next level!
                        </span>

                        {/* Responsive Button */}
                        <button

                            className="px-8 md:px-12 py-2 md:py-2 bg-purple-600 text-white font-bold hover:bg-white hover:text-purple-700 transition-all duration-300"
                            style={{
                                fontSize: "clamp(1rem, 2vw, 1.5rem)", // Adjusts button text size dynamically
                            }}
                        >
                            Join Now
                        </button>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default AI_Busi;
