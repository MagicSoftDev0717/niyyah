"use client";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Full-Screen Image Wrapper */}
            <div className="relative w-full h-full">
                {/* Image */}
                <Image
                    src="/assets/Hero/Hero.svg"
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                    className="md:object-contain block"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>

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
                        className="mt-6 px-8 md:px-12 py-3 md:py-3 text-white bg-purple-600 font-bold border border-transparent hover:border-white transition-all duration-300"
                        style={{fontSize: "clamp(1rem, 2vw, 1.5rem)"}}>
                        Let&apos;s Start
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
