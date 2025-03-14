"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react"; // For Google and Apple authentication if using next-auth
import { FaGoogle, FaApple, FaTimes } from 'react-icons/fa'; // Importing Google and Apple icons
const Hero = () => {
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
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Full-Screen Image Wrapper */}
            <div className="relative w-full h-full">
                {!isMobile && (
                    <Image
                        src="/assets/Hero/HeroScreen.svg"
                        alt="Hero Image"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        priority
                        className="md:object-contain block"
                    />
                )}

                {isMobile && (
                    <Image
                        src="/assets/Hero/m_HeroScreen.svg" // Your mobile-specific image path
                        alt="Hero"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center" // Center the image on mobile
                        priority
                        className="block"
                    />
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>

                <div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-b from-black via-transparent to-transparent md:block hidden"
                    style={{
                        background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
                        transform: "matrix(1, 0, 0, -1, 0, 0)",
                    }}></div>

                {/* Content Section: Positioned at the bottom 1/5 of the screen */}
                <div className="absolute bottom-1/7 w-full flex flex-col items-center justify-center text-white text-center px-6">
                    {/* Responsive Heading */}
                    <h2
                        className="leading-tight font-bold"
                        style={{
                            fontSize: "clamp(2rem, 5vw, 4rem)", // Adjust for mobile and desktop
                            lineHeight: "1.2", // Adjust line height for better spacing
                        }}
                    >
                        <span>
                            Where <span style={{ color: "#1FE4C6" }}>Faith</span> Meets
                        </span>
                        <br className="md:inline" />
                        <span>
                            <span style={{ color: "#A18FF7" }}>Innovation</span> in Business
                        </span>
                    </h2>


                    <button onClick={() => setIsSignInOpen(!isSignInOpen)}
                        className="mt-6 px-8 md:px-12 py-3 md:py-3 text-white bg-purple-600 font-bold border border-transparent hover:bg-purple-500 transition-all duration-300"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>
                        Let&apos;s Start
                    </button>
                    {isSignInOpen && (
                        <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-20 flex items-center justify-center z-50">
                            {isMobile ?

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

                                    {/* Google and Apple Sign Up in one row */}
                                    {/* <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                                    <button
                                        onClick={handleGoogleSignIn}
                                        className="w-1/2 sm:w-full py-2 px-4 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600"
                                    >
                                        <FaGoogle className="text-2xl mr-2" /> 
                                    </button>
                                    <button
                                        onClick={handleAppleSignIn}
                                        className="w-1/2 sm:w-full py-2 px-4 bg-green-500 flex items-center justify-center text-white hover:bg-green-600"
                                    >
                                        <FaApple className="text-2xl mr-2" /> 
                                    </button>
                                </div> */}

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
                                :
                                <div className="relative bg-gray-600 opacity-90 p-6 w-96">
                                    <button
                                        onClick={() => setIsSignInOpen(false)}
                                        className="absolute top-2 right-2 text-2xl text-white hover:text-gray-700"
                                    >
                                        <FaTimes />
                                    </button>

                                    <h2 className="text-2xl text-white font-semibold text-center mb-6">Unlock Your Full Potential!</h2>

                                    {/* Google and Apple Sign Up in one row */}
                                    {/* <div className="flex items-center justify-center gap-4 mb-6">
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="w-1/3 py-2 px-4 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600"
                                >
                                    <FaGoogle className="text-2xl mr-2" /> 

                                </button>
                                <button
                                    onClick={handleAppleSignIn}
                                    className="w-1/3 py-2 px-4 bg-black flex items-center justify-center text-white hover:bg-gray-800"
                                >
                                    <FaApple className="text-2xl mr-2" /> 

                                </button>
                            </div> */}

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
                            }

                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
