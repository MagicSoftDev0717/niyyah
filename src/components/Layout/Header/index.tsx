"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
// import { signIn } from "next-auth/react"; // For Google and Apple authentication if using next-auth
import { FaTimes } from 'react-icons/fa'; // Importing Google and Apple icons
const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const handleGoogleSignIn = () => {
    //     signIn("google");
    // };

    // const handleAppleSignIn = () => {
    //     signIn("apple");
    // };

    const handleEmailSignUp = () => {
        // Your email sign-up logic
        console.log("Proceed to email sign-up");
    };


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
            <div className="container mx-auto px-2 py-2">
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
                                    onClick={() => setIsModalOpen(true)} // Open modal on click
                                />
                            </div>
                            {isModalOpen && (
                                <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-20 flex items-center justify-center z-50">
                                    <div className="relative bg-gray-600 bg-opacity-90  p-6 shadow-lg w-96">
                                        <button
                                            className="absolute top-0 right-0 mr-2 mt-2 dark:invert"
                                            onClick={() => setIsModalOpen(false)} // Close modal on click
                                        >
                                            <FaTimes />
                                        </button>
                                        <h2 className="text-xl text-yellow-400 font-bold mb-4 text-center">Intention Starts with Prayer 😊</h2>
                                        <p className="text-lg text-center text-white">Coming Soon. Watch this space.</p>

                                    </div>
                                </div>
                            )}

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
                                        width={32}
                                        height={32}
                                    />
                                    <span className="text-white underline hover:text-yellow-500 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>{selectedLang}</span>
                                    {isOpen && (
                                        <div className="absolute top-full w-40 bg-gray-900 text-white shadow-lg">
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
                                    <button className="border text-lg border-white px-6 py-2 cursor-pointer" onClick={() => setIsSignInOpen(!isSignInOpen)}>JOIN FREE</button>
                                  
                                </div>
                                {isSignInOpen && (
                                        <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-20 flex items-center justify-center z-50">
                                            <div className="relative bg-gray-600 opacity-90 p-6 w-96">
                                                <button
                                                    onClick={() => setIsSignInOpen(false)}
                                                    className="absolute top-2 right-2 text-2xl text-white hover:text-gray-700"
                                                >
                                                    <FaTimes />
                                                </button>

                                                <h2 className="text-2xl text-white font-semibold text-center mb-6">Unlock Your Full Potential!</h2>

                                                {/* Google and Apple Sign Up in one row */}
                                                {/* <div className="flex items-center justify-center gap-4 mb-6">
                                                    <button
                                                        onClick={handleGoogleSignIn}
                                                        className="w-1/3 py-2 px-4 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600"
                                                    >
                                                        <FaGoogle className="text-2xl mr-2" /> 

                                                    </button>
                                                    <button
                                                        onClick={handleAppleSignIn}
                                                        className="w-1/3 py-2 px-4 bg-black flex items-center justify-center text-white hover:bg-gray-800"
                                                    >
                                                        <FaApple className="text-2xl mr-2" /> 

                                                    </button>
                                                </div> */}

                                                {/* Form for Name, Email, and Password */}
                                                <div className="flex flex-col gap-4 mb-6">
                                                    <input
                                                        type="text"
                                                        placeholder="Full Name*"
                                                        className="p-2 bg-transparent border-b-2 text-white placeholder-white focus:outline-none focus:ring-0 focus:border-purple-500"
                                                    />
                                                    <input
                                                        type="email"
                                                        placeholder="Email*"
                                                        className="p-2 bg-transparent border-b-2 text-white placeholder-white focus:outline-none focus:ring-0 focus:border-purple-500"
                                                    />
                                                    <input
                                                        type="password"
                                                        placeholder="Password*"
                                                        className="p-2 bg-transparent border-b-2 text-white placeholder-white focus:outline-none focus:ring-0 focus:border-purple-500"
                                                    />
                                                </div>

                                                {/* Submit Button */}
                                                <div className="flex items-center justify-center">
                                                    <button
                                                        onClick={handleEmailSignUp}
                                                        className="w-1/2 py-2 px-4 bg-purple-600 text-white hover:bg-purple-500"
                                                    >
                                                        Send
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                            </div>

                        </div>
                    </div>
                    :
                    <div className={`flex ${isMobile ? "flex-col" : "flex-row"} justify-between items-center gap-1`}>
                        {/* Row 1: Logo, Language, Join Free */}
                        <div className="flex justify-between w-full md:w-auto gap-1">

                            <div className="flex items-center">
                                <Image src="/assets/Logo/Logo_Niyyah.svg" alt="Logo" width={160} height={80} />
                            </div>

                            <div className="relative flex items-center space-x-2">
                                <Image
                                    src="/assets/Header/Default_Lang.svg"
                                    alt="Language"
                                    width={32}
                                    height={32}
                                />
                                <span className="text-white underline hover:text-yellow-500" onClick={() => setIsOpen(!isOpen)}>{selectedLang}</span>
                                {isOpen && (
                                    <div className="absolute right-10 top-full w-40 bg-gray-900 text-white shadow-lg">
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
                                <button className="text-sm border border-white px-1 py-2" onClick={() => setIsSignInOpen(!isSignInOpen)}>JOIN FREE</button>
                            </div>
                            {isSignInOpen && (
                                <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-20 flex items-center justify-center z-50">
                                    <div className="relative bg-gray-600 opacity-90 p-10 sm:px-4 w-88 sm:w-full mx-auto">
                                        {/* Close button */}
                                        <button
                                            onClick={() => setIsSignInOpen(false)}
                                            className="absolute top-2 right-2 text-2xl text-white hover:text-gray-700"
                                        >
                                            <FaTimes />
                                        </button>
                                        <h2 className="text-xl text-white font-semibold text-center mb-6">Unlock Your Full Potential!</h2>

                                        {/* <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                                                <button
                                                    onClick={handleGoogleSignIn}
                                                    className="w-1/2 sm:w-full py-2 px-4 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600"
                                                >
                                                    <FaGoogle className="text-2xl mr-2" /> 
                                                </button>
                                                <button
                                                    onClick={handleAppleSignIn}
                                                    className="w-1/2 sm:w-full py-2 px-4 bg-green-500 flex items-center justify-center text-white hover:bg-green-600"
                                                >
                                                    <FaApple className="text-2xl mr-2" />
                                                </button>
                                            </div> */}

                                        {/* Form for Name, Email, and Password */}
                                        <div className="flex flex-col gap-4 mb-6">
                                            <input
                                                type="text"
                                                placeholder="Full Name*"
                                                className="p-2 bg-transparent border-b-2 text-white placeholder-white focus:outline-none focus:ring-0 focus:border-purple-500"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email*"
                                                className="p-2 bg-transparent border-b-2 text-white placeholder-white focus:outline-none focus:ring-0 focus:border-purple-500"
                                            />
                                            <input
                                                type="password"
                                                placeholder="Password*"
                                                className="p-2 bg-transparent border-b-2 text-white placeholder-white focus:outline-none focus:ring-0 focus:border-purple-500"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <div className="flex items-center justify-center">
                                            <button
                                                onClick={handleEmailSignUp}
                                                className="w-1/2 sm:w-full py-2 px-4 bg-purple-600 text-white hover:bg-purple-500"
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </div>
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
                                onClick={() => setIsModalOpen(true)} // Open modal on click
                            />
                            {isModalOpen && (
                                <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-50 flex items-center justify-center z-50 px-4">
                                    <div className="relative bg-gray-600 bg-opacity-90 p-6 shadow-lg w-full max-w-sm">
                                        {/* Close Button (Top Right) */}
                                        <button
                                            className="absolute top-2 right-2 text-white hover:text-gray-400"
                                            onClick={() => setIsModalOpen(false)}
                                        >
                                            <FaTimes className="text-2xl" />
                                        </button>

                                        {/* Heading */}
                                        <h2 className="text-xl text-yellow-400 font-bold mb-4 text-center">
                                            Intention Starts with Prayer 😊
                                        </h2>

                                        {/* Message */}
                                        <p className="text-lg text-center text-white">
                                            Coming Soon. Watch this space.
                                        </p>
                                    </div>
                                </div>

                            )}
                            <div className="flex flex-row md:flex-wrap i-center justify-end w-full md:w-auto items-center text-center md:text-right">
                                <p className="text-medium w-1/2 md:w-full">{`${dayShort}, ${monthName} ${date}, ${year}`}</p>
                                <p className="text-medium w-1/2 md:w-full">Ramadan 1, 1446 AH</p>

                            </div>
                        </div>
                    </div>}

            </div>

        </header>
    );
};

export default Header;
