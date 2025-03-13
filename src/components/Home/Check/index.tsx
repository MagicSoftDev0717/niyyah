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
        <section className="relative w-full flex items-center justify-center overflow-hidden">

            <div className={`relative w-full grid ${isMobile ? "grid-rows-auto min-h-screen" : "grid-cols-12 h-screen"} flex flex-col mx-auto lg:max-w-full items-center justify-center`}>

                {!isMobile && (
                    <Image
                        src="/assets/Checks/Niyyah_Check.svg" // Your desktop image path
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
                        src="/assets/Checks/m_Niyyah_Check.svg" // Your mobile-specific image path
                        alt="About Us"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center" // Center the image on mobile
                        priority
                        className="block"
                    />
                )}

                <div className="relative col-span-2 flex flex-col items-start justify-center">
                </div>

                <div className="relative col-span-5 grid grid-rows-1 flex flex-col items-center justify-left text-white">
                    <div className="row-span-1 mb-4">
                        <span className="text-5xl font-bold text-left leading-tight flex flex-col justify-center mb-8">Niyyah Check</span>
                        <span className="text-3xl text-left leading-tight flex flex-col justify-center mb-4">
                            Discover your Intentions.
                        </span>
                        <span className="text-lg text-left leading-tight flex flex-col justify-center" style={{ lineHeight: '1.5' }}>
                            Niyyah means an intention in one's heart to perform an action for the sake of Allah.<br />
                            Niyyah Check is a self-assessment and personalised experience designed to help  <br />
                            you reflect on your business intentions, motivations, and mindset.
                        </span>
                        <div className="flex items-center justify-center mt-8 relative">
                            <img src="/assets/Checks/Check1.svg" alt="Image 1" className="w-24 h-24" />
                            <div className="w-36 h-1 bg-yellow-500"></div>
                            <img src="/assets/Checks/Check2.svg" alt="Image 3" className="w-24 h-24" />
                            <div className="w-36 h-1 bg-yellow-500"></div>
                            <img src="/assets/Checks/Check3.svg" alt="Image 5" className="w-24 h-24" />
                        </div>
                        <div className="flex items-center justify-center gap-6 mt-8 relative mb-6">
                            <div className="grid grid-cols-6 gap-x-0 text-white items-center">
                                <div className="col-span-1 flex items-center justify-center text-5xl font-bold">1.</div>
                                <div className="col-span-5 flex items-center justify-center text-medium">
                                    Answer Insightful<br />Questions To Uncover<br /> Your True Drive.
                                </div>
                            </div>

                            <div className="grid grid-cols-6 gap-x-0 text-white items-center ">
                                <div className="col-span-1 flex items-center justify-center text-5xl font-bold">2.</div>
                                <div className="col-span-5 flex items-center justify-center text-medium">
                                    Use Emotion Tracking <br />To Understand Decision<br />-Making Patterns.
                                </div>
                            </div>

                            <div className="grid grid-cols-6 gap-x-0 text-white items-center">
                                <div className="col-span-1 flex items-center justify-center text-5xl font-bold">3.</div>
                                <div className="col-span-5 flex items-center justify-center text-medium">
                                    Get Personalised<br />Feedback & Tailored <br />Growth Strategies.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-left gap-4">
                            <input
                                type="text"
                                placeholder="Your name*"
                                className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-1/2"
                            />

                            <input
                                type="email"
                                placeholder="Your email*"
                                className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-1/2"
                            />

                            <input
                                type="tel"
                                placeholder="Your phone number*"
                                className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-1/2"
                            />

                            <button
                                className="px-4 md:px-8 py-3 md:py-2 bg-yellow-600 text-black font-bold hover:bg-white transition-all w-1/3"
                                style={{
                                    fontSize: "clamp(1rem, 2vw, 1.5rem)", // Adjusts button text size dynamically
                                }}>
                                Join Waiting List
                            </button>
                        </div>

                    </div>
                </div>
                <div className="relative col-span-4 mt-10">
                    <img
                        src="/assets/Checks/book.svg"
                        alt=""
                        className="w-4/5 h-auto object-cover justify-right"
                    />
                </div>

                <div className="col-span-1 flex flex-col">
                </div>

            </div>
        </section >
    );
};

export default AI_Busi;
