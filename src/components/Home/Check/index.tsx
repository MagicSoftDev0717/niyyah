"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const AI_Busi = () => {
    const [isMobile, setIsMobile] = useState(false);

    const images = [
        "/assets/Checks/book_com.svg",
        "/assets/Checks/book_effect.svg",
    ];

    const [currentImage, setCurrentImage] = useState(images[0]); // Initial image index
    const [fade, setFade] = useState(false); // Controls fade effect


    // Detect screen size and update isMobile state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Consider screen width less than 768px as mobile
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check

        const interval = setInterval(() => {
            setFade(true); // Start fade-out effect
            setTimeout(() => {
                setCurrentImage((prevImage) => {
                    const currentIndex = images.indexOf(prevImage);
                    return images[(currentIndex + 1) % images.length]; // Cycle to the next image
                });
                setFade(false); // Start fade-in effect
            }, 1000); // Delay before switching image
        }, 3000); // Change image every 3 seconds

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        }
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

                <div className={`relative ${isMobile ? "w-full px-6" : "col-span-5"}  grid grid-rows-1 flex flex-col items-center justify-left text-white`}>
                    <div className="row-span-1 mb-4">
                        <span className={` ${isMobile ? "text-4xl" : "text-5xl"} font-bold text-left leading-tight flex flex-col justify-center mb-8`}>Niyyah Check</span>
                        <span className={` ${isMobile ? "text-2xl" : "text-3xl"} text-left leading-tight flex flex-col justify-center mb-4`}>
                            Discover your Intentions.
                        </span>
                        {isMobile && (
                            <div className={`transition-opacity duration-500 ${fade ? "opacity-5" : "opacity-100"}`}>
                                <Image
                                    src={currentImage} // Your mobile-specific image path
                                    alt=""
                                    objectFit="contain"
                                    objectPosition="center" // Center the image on mobile
                                    priority
                                    width={380}
                                    height={380}
                                    className="block mx-auto"
                                />
                            </div>
                        )}
                        <span className="text-lg text-left leading-tight flex flex-col justify-center mt-10" style={{ lineHeight: '1.5' }}>
                            Niyyah means an intention in one&apos;s heart to perform an action for the sake of Allah.<br />
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
                        {!isMobile ?

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

                            :
                            <div className="relative grid grid-cols-3 mt-4 mb-4 text-white text-center">
                                {/* Step 1 */}
                                <div className="flex flex-col items-center">
                                    <div className="text-5xl font-bold">1.</div>
                                    <div className="text-medium">
                                        Answer Insightful Questions To Uncover Your True Drive.
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex flex-col items-center">
                                    <div className="text-5xl font-bold">2.</div>
                                    <div className="text-medium">
                                        Use Emotion Tracking To Understand Decision -Making Patterns.
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex flex-col items-center">
                                    <div className="text-5xl font-bold">3.</div>
                                    <div className="text-medium">
                                        Get Personalised Feedback & Tailored Growth Strategies.
                                    </div>
                                </div>
                            </div>
                        }
                        
                        {!isMobile ?
                        <div className="flex flex-col items-center gap-4 w-full px-6">
                            <input
                                type="text"
                                placeholder="Your name*"
                                className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-[98%] md:w-1/2"
                            />

                            <input
                                type="email"
                                placeholder="Your email*"
                                className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-[98%] md:w-1/2"
                            />

                            <input
                                type="tel"
                                placeholder="Your phone number*"
                                className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-[98%] md:w-1/2"
                            />

                            <button
                                className="px-4 py-3 bg-yellow-500 text-black font-bold hover:bg-white transition-all w-full max-w-[98%] md:w-1/3"
                                style={{
                                    fontSize: "clamp(1rem, 2vw, 1.5rem)", // Adjusts button text size dynamically
                                }}>
                                Join Waiting List
                            </button>
                        </div>
                            :
                        <div className="flex flex-col items-center gap-4 w-full">
                            <input
                                type="text"
                                placeholder="Your name*"
                                className="p-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-[100%] md:w-1/2"
                            />

                            <input
                                type="email"
                                placeholder="Your email*"
                                className="p-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-[100%] md:w-1/2"
                            />

                            <input
                                type="tel"
                                placeholder="Your phone number*"
                                className="p-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-[100%] md:w-1/2"
                            />

                            <button
                                className="px-4 py-3 bg-yellow-500 text-black font-bold hover:bg-white transition-all w-full max-w-[100%] md:w-1/3"
                                style={{
                                    fontSize: "clamp(1rem, 2vw, 1.5rem)", // Adjusts button text size dynamically
                                }}>
                                Join Waiting List
                            </button>
                        </div>}


                    </div>
                </div>
                <div className="relative col-span-4 mt-10">
                    {!isMobile && (
                        <img
                            src="/assets/Checks/book.svg"
                            alt=""
                            className="w-4/5 h-auto object-cover justify-right"
                        />
                    )}
                </div>

                <div className="col-span-1 flex flex-col">
                </div>

            </div>
        </section >
    );
};

export default AI_Busi;
