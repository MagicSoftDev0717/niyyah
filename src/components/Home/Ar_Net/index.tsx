"use client";
import { useState, useEffect } from "react";

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
            {/* Full-Screen Image Wrapper */}
            <div className={`relative grid  ${isMobile ? "" : "grid-cols-12"}  w-full h-full`}>

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
                            <div key={idx} className="flex items-center justify-left gap-4 mb-6">
                                <img
                                    src={`/assets/AR/${imgSrc}`}
                                    alt={`Image ${idx + 1}`}
                                    className="w-48 h-auto object-contain"
                                    onMouseEnter={() => handleMouseEnter(idx)}
                                    onMouseLeave={() => handleMouseLeave(idx)}
                                    onClick={() => handleImageClick(idx)} />
                            </div>
                        ))}
                        <button
                            className="px-8 md:px-8 py-3 md:py-1 bg-purple-600 text-white font-bold hover:bg-white hover:text-purple-700 transition-all duration-300"
                            style={{
                                fontSize: "clamp(1rem, 2vw, 1.5rem)", // Adjusts button text size dynamically
                            }}
                        >Join Waiting
                        </button>
                    </div>
                    {/* <div className="row-span-1">

                    </div> */}

                    <div className="row-span-1"></div>
                    {popupImg && (
                        <div className="fixed inset-0 flex items-bottom justify-center bg-black bg-opacity-60 z-50" onClick={handleClosePopup} >
                            <img
                                src={`/assets/AR/${popupImg}`}
                                alt="Popup"
                                className="w-1/2 h-auto object-cover"
                            />
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
        </section>
    );
};

export default AI_Net;
