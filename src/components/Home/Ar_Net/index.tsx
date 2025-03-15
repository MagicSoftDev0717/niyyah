"use client";
import { useState, useEffect } from "react";

import { FaTimes } from 'react-icons/fa'; // Importing Google and Apple icons
const defaultImages = [
    "AR-1.svg",
    "AR-2.svg",
    "AR-3.svg",
    "AR-4.svg",
    "AR-5.svg",
    "AR-6.svg",
    "AR-7.svg",
    "AR-8.svg",
    "AR-9.svg"
];

// Hover images for each medium image
const hoverImages = [
    "AR-hover-1.svg",
    "AR-hover-2.svg",
    "AR-hover-3.svg",
    "AR-hover-4.svg",
    "AR-hover-5.svg",
    "AR-hover-6.svg",
    "AR-hover-7.svg",
    "AR-hover-8.svg",
    "AR-hover-9.svg"
];

const popupImages = [
    "AR-zoom-1.svg",
    "AR-zoom-2.svg",
    "AR-zoom-3.svg",
    "AR-zoom-4.svg",
    "AR-zoom-5.svg",
    "AR-zoom-6.svg",
    "AR-zoom-7.svg",
    "AR-zoom-8.svg",
    "AR-zoom-9.svg"
];


const AI_Net = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);


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


    const [arImgs, setArImgs] = useState(defaultImages);
    const [popupImg, setPopupImg] = useState<string | null>(null);

    // Handle hover effect
    const handleMouseEnter = (index: number) => {

        setArImgs((prev) =>
            prev.map((img, i) => (i === index ? hoverImages[i] : img))
        );
    };

    const handleMouseLeave = (index: number) => {
        setArImgs((prev) =>
            prev.map((img, i) => (i === index ? defaultImages[i] : img))
        );
    };

    // Handle click to open zoomed-in popup image
    const handleImageClick = (index: number) => {
        setPopupImg(popupImages[index]); // Show zoomed-in version
    };

    // Close popup
    const handleClosePopup = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            setPopupImg(null);
        }
    };


    return (
        <section className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#000833]">
            {!isMobile ?
                <div className={`relative grid ${isMobile ? "" : "grid-cols-12 h-screen"} w-full`}>

                    <div className="col-span-2 flex flex-col items-start justify-center">

                    </div>
                    <div className="relative col-span-4 grid grid-rows-4 flex flex-col items-start justify-center text-white">
                        <div className="row-span-1 mb-4">
                            <span className="flex flex-col mb-8"></span>
                            <span className="flex flex-col mb-8"></span>
                            <span className="text-5xl font-bold text-left leading-tight flex flex-col justify-center mb-12">AR Network</span>
                            <span className="text-2xl text-left leading-tight flex flex-col justify-center mb-8">
                                The Ummah’s Augmented Reality Network<br /> Creating Immersive Experiences
                            </span>
                            <span className="text-lg text-left leading-tight flex flex-col justify-center">
                                Bring your ideas to life with cutting-edge AR technology! Enhance customer engagement, create
                                immersive experiences, and elevate your brand with interactive, next-gen solutions. Whether for
                                marketing, training, or product visualization — AR takes your business to the future.
                            </span>
                        </div>

                        <div className="relative row-span-2 grid grid-cols-3 grid-rows-3 mb-2">

                            {arImgs.map((imgSrc, idx) => (
                                <div key={idx} className="flex items-center justify-left gap-4 mb-6 cursor-pointer">
                                    <img
                                        src={`/assets/AR/${imgSrc}`}
                                        alt={`Image ${idx + 1}`}
                                        className="w-48 h-auto object-contain cursor-pointer"
                                        onMouseEnter={() => handleMouseEnter(idx)}
                                        onMouseLeave={() => handleMouseLeave(idx)}
                                        onClick={() => handleImageClick(idx)} />
                                </div>
                            ))}
                            <button onClick={() => setIsSignInOpen(!isSignInOpen)}
                                className="px-8 md:px-8 py-3 md:py-1 bg-purple-600 text-white font-bold hover:bg-white hover:text-purple-700 transition-all duration-300"
                                style={{
                                    fontSize: "clamp(1rem, 2vw, 1.5rem)", // Adjusts button text size dynamically
                                }}
                            >Join Waiting
                            </button>
                            {isSignInOpen && (
                                <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-20 flex items-center justify-center z-50">

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
                                </div>
                            )}
                        </div>
                        {/* <div className="row-span-1">

                    </div> */}

                        <div className="row-span-1"></div>
                        {popupImg && (
                            <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 px-4" onClick={handleClosePopup}>

                                <div className="relative w-full max-w-sm mx-auto">

                                    <img
                                        src={`/assets/AR/${popupImg}`}
                                        alt="Full Image"
                                        className="w-full md:w-auto max-h-[90vh] object-contain"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="col-span-4 flex flex-col items-start justify-top" style={{ marginTop: '1.5em' }}>
                        <img
                            src="/assets/AR/AR-human.svg"
                            alt="AR Human"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="col-span-2 flex flex-col items-start justify-center text-white">

                    </div>

                </div>
                :
                <div className={`relative grid ${isMobile ? "grid row-7" : "grid-cols-12 h-screen"} w-full`}>

                    <div className="relative row-span-1 col-span-1 flex flex-col items-start justify-center">

                    </div>
                    <div className="relative row-span-6 col-span-10 grid grid-rows-4 flex flex-col items-start justify-center text-white">
                        <div className="row-span-1 mx-auto px-6 md:px-12">
                            <span className="flex flex-col mb-8"></span>
                            <span className="text-4xl font-bold text-left leading-tight flex flex-col justify-center mb-12">AR Network</span>
                            <span className="text-2xl text-left leading-tight flex flex-col justify-center">
                                The Ummah’s Augmented Reality Network Creating Immersive Experiences
                            </span>
                        </div>

                        <div className="row-span-4 flex flex-col items-start justify-between gap-4 w-full relative mb-4">
                            <div className="relative w-full">
                                <img
                                    src="/assets/AR/AR-human.svg"
                                    alt="AR Human"
                                    className="w-screen h-auto object-cover md:w-full"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute bottom-0 left-0 w-full"
                                    style={{ height: "33%", background: "linear-gradient(180deg, #000833 0%,  rgba(0, 8, 51, 0.84) 40.5%,rgba(0, 8, 51, 0) 100%)", transform: "matrix(1, 0, 0, -1, 0, 0)" }}></div>
                            </div>
                            <span className="text-lg text-left leading-tight flex flex-col justify-center mx-auto px-6 md:px-12">
                                Bring your ideas to life with cutting-edge AR technology! Enhance customer engagement, create
                                immersive experiences, and elevate your brand with interactive, next-gen solutions. Whether for
                                marketing, training, or product visualization — AR takes your business to the future.
                            </span>
                        </div>

                        <div className="relative row-span-1 grid grid-cols-3 mb-2">
                            {arImgs.map((imgSrc, idx) => (
                                <div key={idx} className="flex items-center justify-left gap-2 mb-2 mx-auto px-4 md:px-12">
                                    <img
                                        src={`/assets/AR/${imgSrc}`}
                                        alt={`Image ${idx + 1}`}
                                        className="w-48 h-auto object-contain cursor-pointer"
                                        onMouseEnter={() => handleMouseEnter(idx)}
                                        onMouseLeave={() => handleMouseLeave(idx)}
                                        onClick={() => handleImageClick(idx)} />
                                </div>
                            ))}
                        </div>
                        <div className="relative row-span-1 flex flex-col items-center justify-center mb-2">
                            <button onClick={() => setIsSignInOpen(!isSignInOpen)}
                                className="px-8 md:px-8 py-3 md:py-1 bg-purple-600 text-white font-bold hover:bg-white hover:text-purple-700 transition-all duration-300"
                                style={{
                                    fontSize: "clamp(1rem, 2vw, 1.5rem)", // Adjusts button text size dynamically
                                }}
                            >Join Waiting
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


                        {/* <div className="row-span-1"></div> */}

                        <div className="row-span-1"></div>
                        {/* {popupImg && (
                            <div className="fixed inset-0 flex items-bottom justify-center bg-black bg-opacity-60 z-50"  >
                                <img
                                    src={`/assets/AR/${popupImg}`}
                                    alt="Popup"
                                    className="w-1/2 h-auto object-cover"
                                />
                            </div>
                        )} */}
                        {popupImg && (

                            <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 px-4" onClick={handleClosePopup}>
                                {!isMobile ?
                                    <div className="relative w-full max-w-sm mx-auto">

                                        <img
                                            src={`/assets/AR/${popupImg}`}
                                            alt="Full Image"
                                            className="w-full md:w-auto max-h-[90vh] object-contain"
                                        />
                                    </div>
                                    :
                                    <div className="relative w-full max-w-sm mx-auto">
                                        {/* Display Full-Width Image */}
                                        <img
                                            src={`/assets/AR/${popupImg}`}
                                            alt="Zoomed Image"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                }

                            </div>
                        )}

                    </div>
                </div>}
        </section >
    );
};

export default AI_Net;
