"use client";
import { useState, useEffect, useRef } from "react";

const AI_Net = () => {
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
    //////////////////////////
    const [position, setPosition] = useState(50); // Starts in the center
    const [dragging, setDragging] = useState(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    // Start dragging
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setDragging(true);
        e.preventDefault();
    };

    // Stop dragging
    const handleMouseUp = () => {
        setDragging(false);
    };
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!dragging || !buttonRef.current) return;

        const parent = buttonRef.current.parentElement;
        if (!parent) return;

        const parentRect = parent.getBoundingClientRect();
        const newX = ((e.clientX - parentRect.left) / parentRect.width) * 100;

        // Ensure the button stays within 0% to 100% range
        if (newX >= 0 && newX <= 100) {
            setPosition(newX);
        }
    };

    // Function to start dragging (Mouse & Touch)
    const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
        setDragging(true);
        e.preventDefault();
    };

    // Function to stop dragging (Mouse & Touch)
    const stopDragging = () => {
        setDragging(false);
    };

    // Function to move button (Mouse & Touch)
    const moveButton = (e: React.MouseEvent | React.TouchEvent) => {
        if (!dragging || !buttonRef.current) return;

        const parent = buttonRef.current.parentElement;
        if (!parent) return;

        const parentRect = parent.getBoundingClientRect();
        const clientX = (e as React.MouseEvent).clientX || (e as React.TouchEvent).touches[0].clientX;

        const newX = ((clientX - parentRect.left) / parentRect.width) * 100;

        // Ensure the button stays within bounds (0% to 100%)
        if (newX >= 0 && newX <= 100) {
            setPosition(newX);
        }
    };




    return (
        <section className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#001427]">
            <div className={`relative grid ${isMobile ? "" : "grid-rows-12"} w-full mx-auto lg:max-w-full`}>
                {!isMobile ?
                    <div className="row-span-2 bg-gradient-to-b from-black to-transparent"
                        style={{ background: "linear-gradient(180deg, #001427 0%, rgba(0, 20, 39, 0) 100%)" }}>
                        <div className="grid grid-cols-6 gap-3">
                            <div className="col-span-1">

                            </div>
                            <div className="col-span-4">
                                <div className="items-center justify-center">
                                    <div className="row-span-1 text-white mb-4">
                                        <div className="flex items-center gap-x-4 mb-8">
                                            <span className="text-5xl font-bold text-left leading-tight">Faith-Driven Success</span>
                                        </div>
                                        <span className="text-3xl text-center leading-tight flex flex-col justify-center mb-8">
                                            Building Business with Purpose
                                        </span>
                                        <span className="text-xl text-center leading-tight flex flex-col justify-center">
                                            Business with intention and barakah starts with the right mindset. Our faith-based insights help you<br />
                                            align your work with ethical values, purpose, and social impact.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    :

                    <div
                        className="row-span-2 bg-gradient-to-b from-black to-transparent flex items-center justify-center text-center mb-4"
                        style={{ background: "linear-gradient(180deg, #001427 0%, rgba(0, 20, 39, 0) 100%)" }}
                    >
                        <div className="w-full max-w-[90%] text-white flex flex-col items-center">
                            <span className="text-3xl font-bold leading-tight mb-4">Faith-Driven Success</span>
                            <span className="text-2xl leading-tight mb-4">Building Business with Purpose</span>
                            <span className="text-lg leading-tight">
                                Business with intention and barakah starts with the right mindset. Our faith-based insights help you
                                align your work with ethical values, purpose, and social impact.
                            </span>
                        </div>
                    </div>


                }
                {!isMobile ?
                    <div className="row-span-3 grid grid-cols-6 items-center justify-center text-white">
                        <div></div>

                        <div className="flex flex-col items-center gap-4">
                            <img src="/assets/Faith/Faith1.svg" alt="Image 1" />
                            <div className="flex flex-col items-center text-center">
                                <span className="text-lg mb-2" >Honesty & Integrity</span>
                                <span className="text-medium" >Business built on<br /> truth flourishes</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <img src="/assets/Faith/Faith2.svg" alt="Image 4" />
                            <div className="flex flex-col items-center text-center">
                                <span className="text-lg mb-2" >Sustainable Growth</span>
                                <span className="text-medium" >Wealth with<br />responsibility</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <img src="/assets/Faith/Faith3.svg" alt="Image 7" />
                            <div className="flex flex-col items-center text-center">
                                <span className="text-lg mb-2" >Community Impact</span>
                                <span className="text-medium" >Profits should<br />empower others</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <img src="/assets/Faith/Faith4.svg" alt="Image 7" />
                            <div className="flex flex-col items-center text-center">
                                <span className="text-lg mb-2" >Trust & Sincerity</span>
                                <span className="text-medium" >Barakah follows pure<br /> intentions</span>
                            </div>
                        </div>
                        <div></div>

                    </div>
                    :
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center justify-center text-white mb-4">
                        <div className="hidden md:block"></div>

                        <div className="flex flex-col items-center gap-4">
                            <img src="/assets/Faith/Faith1.svg" alt="Image 1" />
                            <div className="flex flex-col items-center text-center">
                                <span className="text-lg mb-2">Honesty & Integrity</span>
                                <span className="text-medium">Business built on<br /> truth flourishes</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <img src="/assets/Faith/Faith2.svg" alt="Image 4" />
                            <div className="flex flex-col items-center text-center">
                                <span className="text-lg mb-2">Sustainable Growth</span>
                                <span className="text-medium">Wealth with<br />responsibility</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <img src="/assets/Faith/Faith3.svg" alt="Image 7" />
                            <div className="flex flex-col items-center text-center">
                                <span className="text-lg mb-2">Community Impact</span>
                                <span className="text-medium">Profits should<br />empower others</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <img src="/assets/Faith/Faith4.svg" alt="Image 7" />
                            <div className="flex flex-col items-center text-center">
                                <span className="text-lg mb-2">Trust & Sincerity</span>
                                <span className="text-medium">Barakah follows pure<br /> intentions</span>
                            </div>
                        </div>

                        <div className="hidden md:block"></div>
                    </div>
                }
                {!isMobile ?

                    <div className="row-span-2 items-center justify-center text-white w-full max-w-[90%]">
                        <div className="grid grid-cols-10">
                            <div className="col-span-3"></div>
                            <div className="col-span-5">
                                <div className="flex flex-col w-full h-1 bg-white mb-8">
                                </div>
                            </div>
                            <div className="col-span-2"></div>
                        </div>
                        <div className="grid grid-cols-10">
                            <div className="col-span-3"></div>
                            <div className="col-span-5">
                                <span className="text-3xl text-center leading-tight flex flex-col justify-center mb-8">
                                    Get Clarity, Take Action, and Grow!
                                </span>
                                <span className="text-lg text-center leading-tight flex flex-col items-center justify-center mb-16">
                                    Every great entrepreneur faces challenges — but you don’t have to figure it out alone. Answer these<br />
                                    quick questions, and we’ll help you with a personalized plan to overcome obstacles and unlock new<br />
                                    opportunities.
                                </span>
                            </div>
                            <div className="col-span-2"></div>
                        </div>


                    </div>
                    :
                    <div className="row-span-2 items-center justify-center text-white w-full px-6 ">
                        <div className="grid grid-cols-12">
                            <div className="col-span-1"></div>
                            <div className="col-span-10">
                                <div className="flex flex-col w-full h-1 bg-white mb-8">
                                </div>
                            </div>
                            <div className="col-span-1"></div>
                        </div>
                        <span className="text-2xl text-center leading-tight flex flex-col justify-center mb-8 ">
                            Get Clarity, Take Action, and Grow!
                        </span>
                        <span className="text-lg text-center leading-tight flex flex-col items-center justify-center mb-16">
                            Every great entrepreneur faces challenges — but you don’t have to figure it out alone. Answer these
                            quick questions, and we’ll help you with a personalized plan to overcome obstacles and unlock new
                            opportunities.
                        </span>
                    </div>}

                {!isMobile ?
                    <div className="row-span-3 flex flex-col items-center justify-center text-white">
                        <span className="text-2xl text-center leading-tight justify-center mb-4">
                            5 Quick Questions.
                        </span>

                        <span className="text-lg text-center leading-tight mb-1">
                            Are you trying to understand the true reason why you want to start a business?
                        </span>
                        <div className="flex items-center justify-center w-full mb-3">
                            <span className="text-white text-sm mr-2">Yes</span>

                            <div
                                className="relative w-24 h-6 bg-transparent border border-yellow-500 rounded-full flex items-center select-none"
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                            >
                                <div
                                    ref={buttonRef}
                                    className="absolute w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"
                                    style={{ left: `calc(${position}% - 12px)` }} // Adjust button centering
                                    onMouseDown={handleMouseDown}
                                ></div>
                            </div>

                            <span className="text-white text-sm ml-2">No</span>
                        </div>
                        <span className="text-lg text-center leading-tight flex flex-col justify-center mb-1">
                            Are you struggling to implement your marketing strategy?
                        </span>
                        <div className="flex items-center justify-center w-full mb-3">
                            <span className="text-white text-sm mr-2">Yes</span>

                            <div
                                className="relative w-24 h-6 bg-transparent border border-yellow-500 rounded-full flex items-center select-none"
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                            >
                                <div
                                    ref={buttonRef}
                                    className="absolute w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"
                                    style={{ left: `calc(${position}% - 12px)` }} // Adjust button centering
                                    onMouseDown={handleMouseDown}
                                ></div>
                            </div>

                            <span className="text-white text-sm ml-2">No</span>
                        </div>
                        <span className="text-lg text-center leading-tight flex flex-col justify-center mb-1">
                            Are you finding it difficult to choose a franchise?
                        </span>
                        <div className="flex items-center justify-center w-full mb-3">
                            <span className="text-white text-sm mr-2">Yes</span>

                            <div
                                className="relative w-24 h-6 bg-transparent border border-yellow-500 rounded-full flex items-center select-none"
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                            >
                                <div
                                    ref={buttonRef}
                                    className="absolute w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"
                                    style={{ left: `calc(${position}% - 12px)` }} // Adjust button centering
                                    onMouseDown={handleMouseDown}
                                ></div>
                            </div>

                            <span className="text-white text-sm ml-2">No</span>
                        </div>
                        <span className="text-lg text-center leading-tight flex flex-col justify-center mb-1">
                            Do you get confused how to maximise AI in your business?
                        </span>
                        <div className="flex items-center justify-center w-full mb-3">
                            <span className="text-white text-sm mr-2">Yes</span>

                            <div
                                className="relative w-24 h-6 bg-transparent border border-yellow-500 rounded-full flex items-center select-none"
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                            >
                                <div
                                    ref={buttonRef}
                                    className="absolute w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"
                                    style={{ left: `calc(${position}% - 12px)` }} // Adjust button centering
                                    onMouseDown={handleMouseDown}
                                ></div>
                            </div>

                            <span className="text-white text-sm ml-2">No</span>
                        </div>
                        <span className="text-lg text-center leading-tight flex flex-col justify-center mb-1">
                            Did you know Augmented Reality (AR) is the next big thing?
                        </span>
                        <div className="flex items-center justify-center w-full mb-3">
                            <span className="text-white text-sm mr-2">Yes</span>

                            <div
                                className="relative w-24 h-6 bg-transparent border border-yellow-500 rounded-full flex items-center select-none"
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                            >
                                <div
                                    ref={buttonRef}
                                    className="absolute w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"
                                    style={{ left: `calc(${position}% - 12px)` }} // Adjust button centering
                                    onMouseDown={handleMouseDown}
                                ></div>
                            </div>

                            <span className="text-white text-sm ml-2">No</span>
                        </div>
                    </div>
                    :
                    <div className="row-span-3 items-center justify-center text-white flex flex-col px-6">
                        <span className="text-xl text-center leading-tight mb-4">
                            5 Quick Questions.
                        </span>
                        <span className="text-medium text-center leading-tight mb-3">
                            Are you trying to understand the true reason why you want to start a business?
                        </span>

                        {/* Draggable Yes/No Button */}
                        <div className="flex items-center justify-between w-32 mb-3">
                            {/* "Yes" (Left Side) */}
                            <span className="text-white text-sm">Yes</span>

                            {/* Slider Track */}
                            <div
                                className="relative w-16 h-6 bg-transparent border border-yellow-500 rounded-full flex items-center px-2 select-none"
                                onMouseMove={moveButton}
                                onMouseUp={stopDragging}
                                onMouseLeave={stopDragging}
                                onTouchMove={moveButton}
                                onTouchEnd={stopDragging}
                            >
                                {/* Draggable Button */}
                                <div
                                    ref={buttonRef}
                                    className="absolute w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"
                                    style={{ left: `calc(${position}% - 20px)` }} // Adjust to center
                                    onMouseDown={startDragging}
                                    onTouchStart={startDragging}
                                ></div>
                            </div>

                            {/* "No" (Right Side) */}
                            <span className="text-white text-sm">No</span>
                        </div>

                        <span className="text-medium text-center leading-tight mb-3">
                            Are you struggling to implement your marketing strategy?
                        </span>
                        <div className="flex items-center justify-between w-32 mb-3">
                            {/* "Yes" (Left Side) */}
                            <span className="text-white text-sm">Yes</span>

                            {/* Slider Track */}
                            <div
                                className="relative w-16 h-6 bg-transparent border border-yellow-500 rounded-full flex items-center px-2 select-none"
                                onMouseMove={moveButton}
                                onMouseUp={stopDragging}
                                onMouseLeave={stopDragging}
                                onTouchMove={moveButton}
                                onTouchEnd={stopDragging}
                            >
                                {/* Draggable Button */}
                                <div
                                    ref={buttonRef}
                                    className="absolute w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"
                                    style={{ left: `calc(${position}% - 20px)` }} // Adjust to center
                                    onMouseDown={startDragging}
                                    onTouchStart={startDragging}
                                ></div>
                            </div>

                            {/* "No" (Right Side) */}
                            <span className="text-white text-sm">No</span>
                        </div>
                        <span className="text-medium text-center leading-tight mb-3">
                            Are you finding it difficult to choose a franchise?
                        </span>
                        <div className="flex items-center justify-between w-32 mb-3">
                            {/* "Yes" (Left Side) */}
                            <span className="text-white text-sm">Yes</span>

                            {/* Slider Track */}
                            <div
                                className="relative w-16 h-6 bg-transparent border border-yellow-500 rounded-full flex items-center px-2 select-none"
                                onMouseMove={moveButton}
                                onMouseUp={stopDragging}
                                onMouseLeave={stopDragging}
                                onTouchMove={moveButton}
                                onTouchEnd={stopDragging}
                            >
                                {/* Draggable Button */}
                                <div
                                    ref={buttonRef}
                                    className="absolute w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"
                                    style={{ left: `calc(${position}% - 20px)` }} // Adjust to center
                                    onMouseDown={startDragging}
                                    onTouchStart={startDragging}
                                ></div>
                            </div>

                            {/* "No" (Right Side) */}
                            <span className="text-white text-sm">No</span>
                        </div>
                        <span className="text-medium text-center leading-tight mb-3">
                            Do you get confused how to maximise AI in your business?
                        </span>
                        <div className="flex items-center justify-between w-32 mb-3">
                            {/* "Yes" (Left Side) */}
                            <span className="text-white text-sm">Yes</span>

                            {/* Slider Track */}
                            <div
                                className="relative w-16 h-6 bg-transparent border border-yellow-500 rounded-full flex items-center px-2 select-none"
                                onMouseMove={moveButton}
                                onMouseUp={stopDragging}
                                onMouseLeave={stopDragging}
                                onTouchMove={moveButton}
                                onTouchEnd={stopDragging}
                            >
                                {/* Draggable Button */}
                                <div
                                    ref={buttonRef}
                                    className="absolute w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"
                                    style={{ left: `calc(${position}% - 20px)` }} // Adjust to center
                                    onMouseDown={startDragging}
                                    onTouchStart={startDragging}
                                ></div>
                            </div>

                            {/* "No" (Right Side) */}
                            <span className="text-white text-sm">No</span>
                        </div>
                        <span className="text-medium text-center leading-tight mb-1">
                            Did you know Augmented Reality (AR) is the next big thing?
                        </span>

                    </div>
                }
                {!isMobile ?
                    <div className="row-span-1 grid grid-cols-6 flex flex-col items-center justify-center">
                        <div className="col-span-1"></div>

                        <div className="col-span-1 flex flex-row justify-center items-center gap-6">
                            <input
                                type="text"
                                placeholder="Your name*"
                                className="p-2 bg-transparent border-b-2 text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 w-72"
                            />
                        </div>


                        <div className="col-span-1 flex flex-row justify-center items-center gap-6">
                            <input
                                type="email"
                                placeholder="Your email*"
                                className="p-2 bg-transparent border-b-2 text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 w-72"
                            />
                        </div>

                        <div className="col-span-1 flex flex-row justify-center items-center gap-6">
                            <input
                                type="text"
                                placeholder="Your phone number*"
                                className="p-2 bg-transparent border-b-2 text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 w-72"
                            />

                        </div>

                        <div className="col-span-1 flex flex-row justify-center items-center gap-6">
                            <button className="p-2 bg-yellow-500 text-black font-bold hover:bg-white transition-all w-48">
                                Submit
                            </button>
                        </div>

                        <div className="col-span-1"></div>
                    </div>
                    :

                    <div className="flex flex-col items-center w-full gap-4 px-4 mb-4">
                        <input
                            type="text"
                            placeholder="Your name*"
                            className="p-2 bg-transparent border-b-2 text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 w-full max-w-sm"
                        />

                        <input
                            type="email"
                            placeholder="Your email*"
                            className="p-2 bg-transparent border-b-2 text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 w-full max-w-sm"
                        />

                        <input
                            type="text"
                            placeholder="Your phone number*"
                            className="p-2 bg-transparent border-b-2 text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 w-full max-w-sm"
                        />

                        <button className="p-2 bg-yellow-500 text-black font-bold hover:bg-white transition-all w-full max-w-sm">
                            Submit
                        </button>

                        <div className="flex flex-col w-full h-1 bg-white mb-8"></div>
                    </div>
                }
                {!isMobile && (
                    <div className="grid grid-cols-9">
                        <div className="col-span-1"></div>
                        <div className="col-span-7">
                            <div className="flex flex-col w-full h-1 bg-white mb-8">
                            </div>
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                )}
            </div >
        </section >
    );
};

export default AI_Net;
