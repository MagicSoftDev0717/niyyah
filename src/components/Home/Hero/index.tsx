"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
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
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Full-Screen Image Wrapper */}
            <div className="relative w-full h-full">
                {!isMobile && (
                    <Image
                        src="/assets/Hero/Photo222.svg"
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
                        src="/assets/Hero/m_hero.svg" // Your mobile-specific image path
                        alt="About Us"
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

                    {/* CTA Button */}
                    <button
                        className="mt-6 px-8 md:px-12 py-3 md:py-3 text-white bg-purple-600 font-bold border border-transparent hover:bg-purple-500 transition-all duration-300"
                        style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>
                        Let&apos;s Start
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
