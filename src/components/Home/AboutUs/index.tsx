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
        {/* Desktop Image */}
        {!isMobile && (
          <Image
            src="/assets/AboutUs/AboutUs.svg" // Your desktop image path
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            className="block"
          />
        )}

        {/* Mobile Image */}
        {isMobile && (
          <Image
            src="/assets/AboutUs/aboutus_mobile.svg" // Your mobile-specific image path
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center" // Center the image on mobile
            priority
            className="block"
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
