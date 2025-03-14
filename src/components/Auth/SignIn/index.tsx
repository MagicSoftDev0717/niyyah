import { useState, useRef } from "react";

// Assuming you are using Next.js and have set up Google and Apple login via next-auth or similar

const SignUpModal = () => {
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const signInRef = useRef(null);

    const handleGoogleSignUp = () => {
        // Handle Google Sign-Up logic
        console.log("Google Sign Up");
    };

    const handleAppleSignUp = () => {
        // Handle Apple Sign-Up logic
        console.log("Apple Sign Up");
    };

    const handleEmailSignUp = () => {
        // Handle Email Sign-Up logic
        console.log("Email Sign Up");
    };

    return (
        <div>
            <button
                className="border text-lg border-white px-6 py-2 cursor-pointer"
                onClick={() => setIsSignInOpen(!isSignInOpen)}
            >
                JOIN FREE
            </button>

            {isSignInOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-transparent bg-opacity-20 flex items-center justify-center z-50">
                    <div
                        ref={signInRef}
                        className="relative mx-auto bg-black bg-opacity-20 w-full max-w-md overflow-hidden px-8 pt-14 pb-8 text-center bg-dark_grey bg-opacity-90 backdrop-blur-md"
                    >
                        <button
                            onClick={() => setIsSignInOpen(false)}
                            className="absolute top-0 right-0 mr-3 mt-4 dark:invert"
                            aria-label="Close Sign In Modal"
                        >
                            {/* Close icon, you can use any icon library or SVG */}
                            X
                        </button>

                        {/* Title */}
                        <h2 className="text-2xl text-white mb-6">Sign Up</h2>

                        {/* Google and Apple sign-up buttons */}
                        <div className="flex flex-col gap-4">
                            <button
                                className="bg-blue-600 text-white py-2 rounded-lg w-full"
                                onClick={handleGoogleSignUp}
                            >
                                Sign Up with Google
                            </button>
                            <button
                                className="bg-black text-white py-2 rounded-lg w-full"
                                onClick={handleAppleSignUp}
                            >
                                Sign Up with Apple
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="my-4">
                            <span className="text-white">OR</span>
                        </div>

                        {/* Email Sign-Up */}
                        <div className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 bg-transparent border-b-2 text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 w-full"
                            />
                            <input
                                type="password"
                                placeholder="Create a password"
                                className="p-2 bg-transparent border-b-2 text-white placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-purple-500 w-full"
                            />
                            <button
                                className="bg-yellow-600 text-black font-bold py-2 rounded-lg w-full"
                                onClick={handleEmailSignUp}
                            >
                                Sign Up with Email
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignUpModal;
