"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
// import { signIn } from "next-auth/react"; // For Google and Apple authentication if using next-auth
import { FaTimes } from 'react-icons/fa'; // Importing Google and Apple icons

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
                {/* <div className="absolute bottom-0 w-full h-1/6 "
                    style={{
                        background: "linear-gradient(180deg, #180033 0%, rgba(24, 0, 51, 0) 100%)",
                        transform: "matrix(1, 0, 0, -1, 0, 0)"
                    }}>
                </div> */}
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
                                    <button onClick={() => setIsSignInOpen(!isSignInOpen)}
                                        className="px-8 md:px-6 py-3 md:py-3 bg-transparent rounded-lg text-white font-bold border border-transparent hover:border-white hover:text-white transition-all duration-300"
                                        style={{ backgroundColor: "#7C23DD", fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>
                                        Join the Vision
                                    </button>
                                    {isSignInOpen && (
                                        <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-20 flex items-center justify-center z-50">
                                            <div className="relative bg-gray-600 opacity-90 p-6 w-96">
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
                                        </div>
                                    )}
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
                                    <button onClick={() => setIsSignInOpen(!isSignInOpen)}
                                        className="px-8 md:px-6 py-3 md:py-3 bg-transparent rounded-lg text-white font-bold border border-transparent hover:border-white hover:text-white transition-all duration-300"
                                        style={{ backgroundColor: "#7C23DD", fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>
                                        Join the Vision
                                    </button>
                                    {isSignInOpen && (
                                        <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-20 flex items-center justify-center z-50">
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
                                        </div>
                                    )}
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
