"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    //////////////
    const [imageSrc, setImageSrc] = useState("/assets/Header/Property_Default.svg");
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="fixed top-0 z-50 w-full bg-black text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                {/* Mobile: Two Rows | Desktop: One Row */}
                {!isMobile ?
                    <div className={`flex ${isMobile ? "flex-col" : "flex-row"} justify-between items-center gap-4`}>
                        {/* Row 1: Logo, Language, Join Free */}
                        <div className="flex justify-between w-full md:w-auto gap-6">

                            <div className="flex items-center">
                                <Image src="/assets/Logo/Logo_Niyyah.svg" alt="Logo" width={160} height={80} />
                            </div>

                            <div className="flex items-center">
                                <Image
                                    src={imageSrc}
                                    alt="icon"
                                    width={45}
                                    height={45}
                                    onMouseEnter={() => setImageSrc("/assets/Header/Property_Variant2.svg")}
                                    onMouseLeave={() => setImageSrc("/assets/Header/Property_Default.svg")}
                                    onClick={() => setIsModalOpen(true)} // Open modal on click
                                />
                            </div>



                        </div>

                        {/* Row 2: Date, Other Elements */}
                        <div className="flex justify-between w-full md:w-auto gap-6">
                        <div className="flex items-center space-x-4">
                            <div className="flex flex-row md:flex-wrap justify-end w-full md:w-auto items-center gap-2 text-center md:text-right">
                                <p className="text-sm w-1/2 md:w-full">Ramadan 1, 1446 AH</p>
                                <p className="text-sm w-1/2 md:w-full">March 12, 2025</p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full md:w-auto gap-6">
                            <div className="flex items-center space-x-4">
                                <Image
                                    src="/assets/Header/Default_Lang.svg"
                                    alt="Language"
                                    width={24}
                                    height={24}
                                />
                                <span className="text-white hover:text-yellow-500">EN</span>
                                <button className="border border-white px-4 py-1">Join Free</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    :
                    <div className={`flex ${isMobile ? "flex-col" : "flex-row"} justify-between items-center gap-4`}>
                        {/* Row 1: Logo, Language, Join Free */}
                        <div className="flex justify-between w-full md:w-auto gap-6">

                            <div className="flex items-center">
                                <Image src="/assets/Logo/Logo_Niyyah.svg" alt="Logo" width={160} height={80} />
                            </div>

                            <div className="flex items-center space-x-4">
                                <Image
                                    src="/assets/Header/Default_Lang.svg"
                                    alt="Language"
                                    width={24}
                                    height={24}
                                />
                                <span className="text-white hover:text-yellow-500">EN</span>
                                <button className="border border-white px-4 py-1">Join Free</button>
                            </div>

                        </div>

                        {/* Row 2: Date, Other Elements */}
                        <div className="flex justify-between w-full md:w-auto space-x-8">
                            <Image
                                src={imageSrc}
                                alt="icon"
                                width={45}
                                height={45}
                                onMouseEnter={() => setImageSrc("/assets/Header/Property_Variant2.svg")}
                                onMouseLeave={() => setImageSrc("/assets/Header/Property_Default.svg")}
                                onClick={() => setIsModalOpen(true)} // Open modal on click
                            />

                            <div className="flex flex-row md:flex-wrap i-center justify-end w-full md:w-auto items-center gap-2 text-center md:text-right">
                                <p className="text-sm w-1/2 md:w-full">Ramadan 1, 1446 AH </p>
                                <p className="text-sm w-1/2 md:w-full items-left">March 12, 2025</p>
                            </div>
                        </div>
                    </div>}
            </div>
        </header>
    );
};

export default Header;
