"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {FaTimes } from 'react-icons/fa'; // Importing Google and Apple icons
const AI_Busi = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    // const handleGoogleSignIn = () => {
    //     signIn("google");
    // };

    // const handleAppleSignIn = () => {
    //     signIn("apple");
    // };

    const handleEmailSignUp = () => {
        // Your email sign-up logic
        console.log("Proceed to email sign-up");
    };

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
        <section className="relative w-full flex items-center justify-center overflow-visible">

            <div className={`relative w-full grid grid ${isMobile ? "grid-rows-auto min-h-screen" : "grid-rows-8 h-screen"} flex flex-col items-center justify-center`}>

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

                <div className={`relative row-span-2 grid ${isMobile ? "grid-cols-10" : "grid-cols-7"} gap-3`}
                    style={{ background: "linear-gradient(180deg, #000833 0%, rgba(0, 8, 51, 0) 100%)" }}>

                    <div className="col-span-1">

                    </div>
                    <div className={`  ${isMobile ? "col-span-8" : "col-span-5"}`}>
                        <div className="items-center justify-center">
                            <div className="row-span-1 text-white mb-4">
                                <div className="flex items-center gap-x-4 mb-12">
                                    <span className={`${isMobile ? "text-3xl text-left" : "text-5xl text-center"} font-bold leading-tight`}>Meet the AI Team</span>
                                </div>
                                <span className={`${isMobile ? "text-xl" : "text-4xl"} text-center leading-tight flex flex-col justify-center mb-12`}>
                                    AI Experts Driven by Sincerity and Passion
                                </span>
                                <span className={`${isMobile ? "text-lg" : "text-2xl"} text-center leading-tight flex flex-col justify-center`}>
                                    Supercharge your business with Intelligent Al Experts and AI Influencers designed to
                                    help you Start or Grow Your Business Mission.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">

                    </div>
                </div>

                <div className={`relative row-span-4 flex ${isMobile ? "flex-wrap" : "grid grid-cols-5"} 
                    items-center justify-center text-white gap-12 w-full min-h-screen overflow-visible`}
                    style={{ color: '#A18FF7' }}>

                    <div></div>
                    <div className="flex flex-col items-center gap-2">
                        <img src="/assets/AI_business/1.svg" alt="Ali AI" className="w-363 h-full" />
                        <span className="text-2xl text-white leading-tight">Ali AI</span>
                        <span className="text-lg leading-tight">Spiritual Coach</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <img src="/assets/AI_business/Group 32.svg" alt="Amina AI" className="w-363 h-full" />
                        <span className="text-2xl text-white leading-tight">Amina AI</span>
                        <span className="text-lg leading-tight" >Marriage Coach</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <img src="/assets/AI_business/Group 31.svg" alt="Bilal AI" className="w-363 h-full" />
                        <span className="text-2xl text-white leading-tight">Bilal AI</span>
                        <span className="text-lg leading-tight">Fitness Coach</span>
                    </div>

                    <div></div>
                </div>
                <div className="relative row-span-2 gap-3 flex flex-col items-top justify-center text-white"
                    style={{
                        background: "linear-gradient(180deg, #000833 0%, rgba(0, 8, 51, 0) 100%)",
                        transform: "matrix(1, 0, 0, -1, 0, 0)"
                    }}>
                    <div className="flex flex-col items-center justify-center transform scale-y-[-1]">

                        <span className={`${isMobile ? "text-lg" : "text-2xl"} text-center leading-tight flex flex-col items-center justify-center mb-4 font-bold`}>
                            Ready to Start or Scale your Business?
                        </span>
                        <span className={`${isMobile ? "text-medium" : "text-lg"} text-center leading-tight flex flex-col items-center justify-center mb-4`}>
                            Unlock the power of AI-driven entrepreneurship. Join now and take your business to the next level!
                        </span>

                        <button onClick={() => setIsSignInOpen(!isSignInOpen)}
                            className="px-8 md:px-12 py-2 md:py-2 bg-purple-600 text-white font-bold hover:bg-white hover:text-purple-700 transition-all duration-300"
                            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>
                            Join Now
                        </button>
                        {isSignInOpen && (
                            <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-20 flex items-center justify-center z-50">
                                {!isMobile ?
                                    < div className="relative bg-gray-600 opacity-90 p-6 w-96">
                                        <button
                                            onClick={() => setIsSignInOpen(false)}
                                            className="absolute top-2 right-2 text-2xl text-white hover:text-gray-700"
                                        >
                                            <FaTimes />
                                        </button>

                                        <h2 className="text-2xl text-white font-semibold text-center mb-6">Unlock Your Full Potential!</h2>

                                        {/* Form for Name, Email, and Password */}
                                        <div className="flex flex-col gap-4 mb-6">
                                            <input
                                                type="text"
                                                placeholder="Full Name*"
                                                className="p-2 bg-transparent border-b-2 text-white placeholder-white focus:outline-none focus:ring-0 focus:border-purple-500"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email*"
                                                className="p-2 bg-transparent border-b-2 text-white placeholder-white focus:outline-none focus:ring-0 focus:border-purple-500"
                                            />
                                            <input
                                                type="password"
                                                placeholder="Password*"
                                                className="p-2 bg-transparent border-b-2 text-white placeholder-white focus:outline-none focus:ring-0 focus:border-purple-500"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <div className="flex items-center justify-center">
                                            <button
                                                onClick={handleEmailSignUp}
                                                className="w-1/2 py-2 px-4 bg-purple-600 text-white hover:bg-purple-500"
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                    :
                                    <div className="relative bg-gray-600 opacity-90 p-10 sm:px-4 w-88 sm:w-full mx-auto">
                                        {/* Close button */}
                                        <button
                                            onClick={() => setIsSignInOpen(false)}
                                            className="absolute top-2 right-2 text-2xl text-white hover:text-gray-700"
                                        >
                                            <FaTimes />
                                        </button>

                                        {/* Header */}
                                        <h2 className="text-xl text-white font-semibold text-center mb-6">Unlock Your Full Potential!</h2>

                                        {/* Form for Name, Email, and Password */}
                                        <div className="flex flex-col gap-4 mb-6">
                                            <input
                                                type="text"
                                                placeholder="Full Name*"
                                                className="p-2 bg-transparent border-b-2 text-white placeholder-white focus:outline-none focus:ring-0 focus:border-purple-500"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email*"
                                                className="p-2 bg-transparent border-b-2 text-white placeholder-white focus:outline-none focus:ring-0 focus:border-purple-500"
                                            />
                                            <input
                                                type="password"
                                                placeholder="Password*"
                                                className="p-2 bg-transparent border-b-2 text-white placeholder-white focus:outline-none focus:ring-0 focus:border-purple-500"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <div className="flex items-center justify-center">
                                            <button
                                                onClick={handleEmailSignUp}
                                                className="w-1/2 sm:w-full py-2 px-4 bg-purple-600 text-white hover:bg-purple-500"
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                }
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section >
    );
};

export default AI_Busi;
