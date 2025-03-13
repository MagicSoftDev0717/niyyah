"use client";
import { useState, useEffect } from "react";


const Sights = () => {
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
        <section className="relative w-full bg-[#000000]">
            <div className="relative grid grid-rows-2 mx-auto lg:max-w-full ">
                <div className={`relative row-span-1 ${isMobile ? "w-full px-6" : "grid grid-cols-12"} flex flex-col`}>

                    {/* Left Spacing for Desktop */}
                    {!isMobile && <div className="col-span-2"></div>}

                    {/* Text Content */}
                    <div className={`${isMobile ? "w-full" : "col-span-5"} text-white`}>
                        <span className="text-3xl flex flex-col mb-4"></span>
                        <span className="text-3xl font-bold text-left leading-tight flex flex-col justify-center mb-4">
                            Stay Ahead with Exclusive Insights.
                        </span>
                        <span className="text-lg text-left flex flex-col justify-center mb-4">
                            Join our community and be the first to access expert tips. <br />
                            Capital Entrepreneurial and Success – Innovation
                        </span>
                    </div>

                    {/* Right Spacing for Desktop */}
                    {!isMobile && <div className="col-span-4"></div>}

                </div>


                <div className={`relative row-span-1 ${isMobile ? "flex flex-col w-full px-6 space-y-4" : "grid grid-cols-6 gap-4"} items-center justify-center`}>

                    {!isMobile && <div className="col-span-1"></div>}

                    <div className={`${isMobile ? "w-full" : "col-span-1"} flex justify-center items-center`}>
                        <input
                            type="text"
                            placeholder="Your name*"
                            className="p-2 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-md"
                        />
                    </div>

                    <div className={`${isMobile ? "w-full" : "col-span-1"} flex justify-center items-center`}>
                        <input
                            type="email"
                            placeholder="Your email*"
                            className="p-2 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-md"
                        />
                    </div>

                    <div className={`${isMobile ? "w-full" : "col-span-1"} flex justify-center items-center`}>
                        <input
                            type="text"
                            placeholder="Your phone number*"
                            className="p-2 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-md"
                        />
                    </div>


                    <div className={`${isMobile ? "w-full" : "col-span-1"} flex justify-center items-center`}>
                        <button
                            className="p-3 bg-purple-600 text-white font-bold hover:bg-white hover:text-purple-700 transition-all w-full max-w-md">
                            Join Community
                        </button>
                    </div>

                    {!isMobile && <div className="col-span-1"></div>}

                </div>


            </div>
        </section>
    );
};

export default Sights;
