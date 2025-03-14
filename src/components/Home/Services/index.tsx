"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Services = () => {
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


    const defaultImages = [
        "md-1.svg",
        "md-2.svg",
        "md-3.svg",
        "md-4.svg",
    ];

    // Hover images for each medium image
    const hoverImages = [
        "md-1-hover.svg",
        "md-2-hover.svg",
        "md-3-hover.svg",
        "md-4-hover.svg",
    ];
    const [lgImg, setLgImg] = useState("/assets/Services/lg.svg");

    const [mediumImages, setMediumImages] = useState(defaultImages);

    // Handle hover effect
    const handleMouseEnter = (index: number) => {

        setMediumImages((prev) =>
            prev.map((img, i) => (i === index ? hoverImages[i] : img))
        );
    };

    const handleMouseLeave = (index: number) => {
        setMediumImages((prev) =>
            prev.map((img, i) => (i === index ? defaultImages[i] : img))
        );
    };

    return (
        <section
            className={`relative  w-full h-full flex items-center justify-center overflow-hidden ${isMobile ? 'bg-[#2D0048]' : ''}`}
        >
            {/* Full-Screen Image Wrapper */}
            <div className="relative grid grid-rows-12 w-full h-full">
                {/* Desktop Image */}
                {!isMobile && (
                    <Image
                        src="/assets/Services/Services.svg" // Your desktop image path
                        alt="About Us"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        priority
                        className="block"
                    />
                )}

                {/* Mobile Background Color (No Image) */}
                {/* {isMobile && (
                    <div className="relative inset-0 bg-[#2D0048]"  style={{ background: "linear-gradient(180deg, #180033 0%, rgba(24, 0, 51, 0) 100%)" }}></div> // Change the color as needed
                )} */}
                {!isMobile ?
                    <div className="relative row-span-2 grid grid-cols-6 bg-gradient-to-b from-black to-transparent"
                        style={{ background: "linear-gradient(180deg, #180033 0%, rgba(24, 0, 51, 0) 100%)" }}>
                        <div className="col-span-1">

                        </div>
                        <div className="col-span-4">
                            <div className="row-span-1 text-white mb-4">
                                <div className="flex items-center gap-x-4 mb-8">
                                    <img src="/assets/AboutUs/NE.svg" alt="Vision Icon" className="w-24 h-24" />
                                    <span className="text-5xl font-bold text-left leading-tight">Solutions For You</span>
                                </div>
                                <span className="text-3xl text-center leading-tight flex flex-col justify-center">
                                    Niyyah for Success. Achieve Business Excellence
                                </span>
                            </div>
                        </div>
                    </div>
                    :
                    <div
                        className="relative row-span-2 grid grid-cols-10 bg-gradient-to-b from-black to-transparent">

                        <div className="col-span-1"></div>

                        <div className="col-span-8">
                            <div className="row-span-1 text-white mb-4">
                                <div className="flex flex-row items-center gap-x-4 mb-8">
                                    
                                    <img
                                        src="/assets/AboutUs/NE.svg"
                                        alt="Vision Icon"
                                        className="w-16 h-16 flex-shrink-0"
                                    />
                                    
                                    <span className="text-2xl md:text-5xl font-bold text-left leading-tight inline-block">
                                        Solutions For You
                                    </span>
                                </div>
                                {/* Updated Span for Mobile Two-Line Display */}
                                <span
                                    className="text-xl md:text-3xl text-center md:text-left leading-tight flex flex-col justify-center w-full md:w-auto max-w-xs mx-auto"
                                >
                                    Niyyah for Success.<br /> Achieve Business Excellence
                                </span>
                            </div>
                        </div>
                    </div>

                }

                {!isMobile ?
                    <div
                        className="relative row-span-10 bg-gradient-to-b from-black to-transparent flex flex-col items-center justify-center text-white p-6"
                        style={{ background: "linear-gradient(180deg,  #180033 0%, rgba(24, 0, 51, 0) 100%)", transform: "matrix(1, 0, 0, -1, 0, 0)" }}>
                        {/* Center Large Image */}

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img src={lgImg} alt="Large Center Image" className="transform scale-y-[-1]"
                                onMouseEnter={() => setLgImg("/assets/Services/lg-hover.svg")}
                                onMouseLeave={() => setLgImg("/assets/Services/lg.svg")} />
                        </div>


                        {[
                            { top: "26%", left: "32%", src: "md-1.svg" },
                            { top: "28%", right: "22%", src: "md-2.svg" },
                            { bottom: "20%", left: "30%", src: "md-3.svg" },
                            { bottom: "22%", right: "20%", src: "md-4.svg" },
                        ].map((img, idx) => (
                            <div key={idx} className="absolute" style={{ top: img.top, left: img.left, right: img.right, bottom: img.bottom, transform: "translate(-50%, -50%)" }}>
                                <img src={`/assets/Services/${mediumImages[idx]}`} alt={`Medium ${idx + 1}`} className="w-35 h-35 transform scale-y-[-1]"
                                    onMouseEnter={() => handleMouseEnter(idx)}
                                    onMouseLeave={() => handleMouseLeave(idx)} />
                            </div>
                        ))}
                    </div> 
                    :
                    <div
                        className="relative row-span-10 bg-gradient-to-b from-black to-transparent flex flex-col items-center justify-center text-white p-6 min-h-screen"
                        style={{
                            background: "linear-gradient(180deg,  #180033 0%, rgba(24, 0, 51, 0) 100%)",
                            transform: "matrix(1, 0, 0, -1, 0, 0)"
                        }}
                    >
                        {/* Images Container */}
                        <div className="flex flex-col items-center space-y-6 w-full">
                            {/* Small Images Stack (for Mobile Mode) */}
                            <div className="flex flex-col items-center space-y-4 md:hidden">
                                {[
                                    { src: "md-1.svg" },
                                    { src: "md-2.svg" },
                                    { src: "md-3.svg" },
                                    { src: "md-4.svg" },
                                ].map((img, idx) => (
                                    <div key={idx} className="w-36 h-36 max-w-[80%] transform scale-y-[-1]">
                                        <img
                                            src={`/assets/Services/${img.src}`}
                                            alt={`Small ${idx + 1}`}
                                            className="w-full h-auto"
                                            onMouseEnter={() => handleMouseEnter(idx)}
                                            onMouseLeave={() => handleMouseLeave(idx)}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Large Image */}
                            <div className="w-48 h-auto max-w-[90%] md:w-64 transform scale-y-[-1]">
                                <img
                                    src={lgImg}
                                    alt="Large Image"
                                    className="w-full h-auto"
                                    onMouseEnter={() => setLgImg("/assets/Services/lg-hover.svg")}
                                    onMouseLeave={() => setLgImg("/assets/Services/lg.svg")}
                                />
                            </div>

                            {/* Small Images Row (for Desktop Mode) */}
                            <div className="hidden md:flex flex-row items-center justify-center space-x-4">
                                {[
                                    { src: "md-1.svg" },
                                    { src: "md-2.svg" },
                                    { src: "md-3.svg" },
                                    { src: "md-4.svg" },
                                ].map((img, idx) => (
                                    <div key={idx} className="w-36 h-auto max-w-[20%] transform scale-y-[-1]">
                                        <img
                                            src={`/assets/Services/${img.src}`}
                                            alt={`Medium ${idx + 1}`}
                                            className="w-full h-auto"
                                            onMouseEnter={() => handleMouseEnter(idx)}
                                            onMouseLeave={() => handleMouseLeave(idx)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                }
            </div>
        </section>
    );
};

export default Services;
