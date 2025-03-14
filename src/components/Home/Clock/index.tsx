"use client";
import { useState, useEffect } from "react";
import { FaTimes } from 'react-icons/fa'; // Importing Google and Apple icons
const Clock = () => {
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



    const getTargetDate = () => {
        const now = new Date();
        const targetDate = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000);
        return targetDate;
    };

    const [targetDate, setTargetDate] = useState(getTargetDate());
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const remaining = calculateTimeLeft(targetDate);
            setTimeLeft(remaining);

            // When countdown reaches zero, restart and flip the layout
            if (remaining.total <= 0) {
                setTargetDate(getTargetDate());
                setIsFlipped((prev) => !prev);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    function calculateTimeLeft(target: Date) {
        const now = new Date().getTime();
        const diff = target.getTime() - now;

        return {
            total: diff,
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0'),
            seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, '0'),
        };
    }



    return (
        <section
            className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#180033]"
        >
            {/* Full-Screen Image Wrapper */}
            <div className={`relative grid  ${isMobile ? "grid-rows-3" : "grid-rows-8"}  w-full h-full`}>
                <div className={` ${isMobile ? "row-span-1" : "row-span-2"} gap-6 items-center justify-center text-white`}>
                    <div className="items-center justify-center p-16 ">
                        <div className="font-lg text-white gap-6">
                            <span className={` ${isMobile ? "text-3xl" : "text-5xl"} font-semibold text-center leading-tight flex flex-col items-center justify-center`}>Are you ready?</span>
                        </div>
                        <div className="text-lg font-sm text-white">
                            <span className={` ${isMobile ? "text-xl" : "text-3xl"}  text-center leading-tight flex flex-col items-center justify-center`}>
                                Count down to Beta Launch
                            </span>
                        </div>
                    </div>
                </div>

                <div className={` ${isMobile ? "row-span-1" : "row-span-2"} flex flex-col justify-center items-center`}>
                    <div className={`grid grid-cols-4 ${isMobile ? "" : "gap-6"} transform ${isFlipped ? "rotate-180" : ""}`}>
                        {[
                            { label: "days", value: timeLeft.days, img: "clock1.svg" },
                            { label: "hours", value: timeLeft.hours, img: "clock2.svg" },
                            { label: "minutes", value: timeLeft.minutes, img: "clock3.svg" },
                            { label: "seconds", value: timeLeft.seconds, img: "clock4.svg" },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col justify-center items-center text-white text-center">
                                {/* SVG Container with Relative Positioning */}
                                <div className={`relative  ${isMobile ? "w-24 h-24" : "w-36 h-36"} flex justify-center items-center`}>
                                    <img src={`/assets/Clock/${item.img}`} alt={item.label} className="w-3/4 h-3/4" />

                                    {/* Absolutely Centered Time Value */}
                                    <span className={`absolute ${isMobile ? "text-6xl" : "text-7xl"} font-bold text-white`}>{item.value}</span>
                                </div>

                                {/* Label Below the SVG */}
                                <p className={` ${isMobile ? "text-lg" : "text-2xl"} text-white`}>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>



                <div className={` ${isMobile ? "row-span-1" : "row-span-2"} lex-col justify-center items-center p-4`}>
                    <div className="text-lg font-sm text-white mb-12">
                        {isMobile ?
                            <span className="text-lg text-center leading-tight flex flex-col items-center justify-center">
                                Be the First to Experience the Future. 🚀<br />
                                Join our exclusive waiting list and get early access to groundbreaking features.
                                Don’t miss out – secure your spot today!
                            </span>
                            :
                            <span className="text-xl text-center leading-tight flex flex-col items-center justify-center">
                                Be the First to Experience the Future. 🚀<br />
                                Join our exclusive waiting list and get early access to groundbreaking features.<br />
                                Don’t miss out – secure your spot today!
                            </span>
                        }

                    </div>
                    {!isMobile ?
                        <div className="flex text-white items-center justify-center">
                            <button onClick={() => setIsSignInOpen(!isSignInOpen)}
                                className="px-8 md:px-6 py-1 md:py-3 bg-purple-600 font-bold hover:bg-white hover:text-purple-700 transition-all duration-300"
                                style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>
                                Join the Journey
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
                        :
                        <div className="flex text-white items-center justify-center">
                            <button onClick={() => setIsSignInOpen(!isSignInOpen)}
                                className="px-8 md:px-6 py-1 md:py-3 bg-purple-600 font-bold hover:bg-white hover:text-purple-700 transition-all duration-300"
                                style={{ fontSize: "clamp(1rem, 5vw, 1.5rem)" }}>
                                Join the Journey
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

                    }

                </div>

                <div className="row-span-2 bg-gradient-to-b from-black via-transparent to-transparent md:block hidden" style={{
                    background: "linear-gradient(180deg,  #000833 0%, rgba(0, 8, 51, 0) 100%)",
                    transform: "matrix(1, 0, 0, -1, 0, 0)"
                }}>
                </div>
            </div>
        </section>
    );
};

export default Clock;
