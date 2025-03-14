"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    //////////////
    const [imageSrc, setImageSrc] = useState("/assets/Header/Property_Default.svg");
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        setCurrentDate(new Date());

        window.addEventListener("resize", handleResize);
        return () => {

            window.removeEventListener("resize", handleResize);

        }
    }, []);


    const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const dayShort = daysShort[currentDate.getDay()];
    const monthName = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();


    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState("EN");

    const languages = [
        { code: "AR", name: "Arabic" },
        { code: "EN", name: "English (US)" },
        { code: "EN", name: "English (UK)" },
        { code: "HI", name: "Hindi" },
        { code: "UR", name: "Urdu" },
        { code: "BN", name: "Bengali" },
        { code: "ZH", name: "Mandarin" },
        { code: "ES", name: "Spanish" },
        { code: "FR", name: "French" },
        { code: "RU", name: "Russian" },
        { code: "ID", name: "Indonesian" },
        { code: "TR", name: "Turkish" },
        { code: "SW", name: "Swahili" },
        { code: "MS", name: "Malay" },
        { code: "DE", name: "German" },
        { code: "JA", name: "Japanese" },
    ];


    return (
        <header className="fixed top-0 z-50 w-full bg-gray-900 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                {/* Mobile: Two Rows | Desktop: One Row */}
                {!isMobile ?
                    <div className={`flex ${isMobile ? "flex-col" : "flex-row"} justify-between items-center gap-4`}>
                        {/* Row 1: Logo, Language, Join Free */}
                        <div className="flex justify-between w-full md:w-auto gap-6">

                            <div className="flex items-center">
                                <Image src="/assets/Logo/Logo_Niyyah.svg" alt="Logo" width={180} height={90} />
                            </div>

                            <div className="flex items-center">
                                <Image
                                    src={imageSrc}
                                    alt="icon"
                                    width={50}
                                    height={50}
                                    onMouseEnter={() => setImageSrc("/assets/Header/Property_Variant2.svg")}
                                    onMouseLeave={() => setImageSrc("/assets/Header/Property_Default.svg")}
                                // onClick={() => setIsModalOpen(true)} // Open modal on click
                                />
                            </div>

                        </div>

                        {/* Row 2: Date, Other Elements */}
                        <div className="flex justify-between w-full md:w-auto gap-6">
                            <div className="flex items-center space-x-4">
                                <div className="flex flex-row md:flex-wrap justify-end w-full md:w-auto items-center text-center md:text-right">
                                    <p className="text-lg w-1/2 md:w-full">Ramadan 1, 1446 AH</p>
                                    <p className="text-lg w-1/2 md:w-full">{`${dayShort}, ${monthName} ${date}, ${year}`}</p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full md:w-auto gap-6 ">
                                <div className="flex items-center space-x-4" >
                                    <Image
                                        src="/assets/Header/Default_Lang.svg"
                                        alt="Language"
                                        width={24}
                                        height={24}
                                    />
                                    <span className="text-white hover:text-yellow-500 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>{selectedLang}</span>
                                    {isOpen && (
                                        <div className="absolute top-full w-40 bg-black text-white shadow-lg">
                                            {languages.map((lang, index) => (
                                                <div
                                                    key={index}
                                                    className="px-4 py-2 hover:text-black hover:bg-white "
                                                    onClick={() => {
                                                        setSelectedLang(lang.code);
                                                        setIsOpen(false);
                                                    }}
                                                >
                                                    <span className="font-bold"> {lang.code}</span><span>&nbsp;&nbsp;{lang.name} </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <button className="border text-lg border-white px-6 py-2">JOIN FREE</button>
                                </div>

                            </div>

                        </div>
                    </div>
                    :
                    <div className={`flex ${isMobile ? "flex-col" : "flex-row"} justify-between items-center gap-2`}>
                        {/* Row 1: Logo, Language, Join Free */}
                        <div className="flex justify-between w-full md:w-auto">

                            <div className="flex items-center">
                                <Image src="/assets/Logo/Logo_Niyyah.svg" alt="Logo" width={160} height={80} />
                            </div>

                            <div className="relative flex items-center space-x-4" onClick={() => setIsOpen(!isOpen)}>
                                <Image
                                    src="/assets/Header/Default_Lang.svg"
                                    alt="Language"
                                    width={24}
                                    height={24}
                                />
                                <span className="text-white hover:text-yellow-500">{selectedLang}</span>
                                <button className="border border-white px-4 py-1">Join Free</button>
                            </div>
                            {isOpen && (
                                <div className="absolute right-10 top-full w-40 bg-black text-white shadow-lg">
                                    {languages.map((lang, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-2 hover:text-black hover:bg-white"
                                            onClick={() => {
                                                setSelectedLang(lang.code);
                                                setIsOpen(false);
                                            }}
                                        >
                                            <span className="font-bold"> {lang.code}</span><span>&nbsp;&nbsp;{lang.name} </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>

                        {/* Row 2: Date, Other Elements */}
                        <div className="flex justify-between w-full md:w-auto space-x-0">
                            <Image
                                src={imageSrc}
                                alt="icon"
                                width={45}
                                height={45}
                                onMouseEnter={() => setImageSrc("/assets/Header/Property_Variant2.svg")}
                                onMouseLeave={() => setImageSrc("/assets/Header/Property_Default.svg")}
                            // onClick={() => setIsModalOpen(true)} // Open modal on click
                            />

                            <div className="flex flex-row md:flex-wrap i-center justify-end w-full md:w-auto items-center text-center md:text-right">
                                <p className="text-medium w-1/2 md:w-full items-left">{`${dayShort}, ${monthName} ${date}, ${year}`}</p>
                                <p className="text-medium w-1/2 md:w-full">Ramadan 1, 1446 AH</p>

                            </div>
                        </div>
                    </div>}

            </div>

        </header>
    );
};

export default Header;
