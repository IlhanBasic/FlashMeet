    "use client";
    import { useState, useEffect } from "react";
    import { FaHome, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

    const ErrorPage = ({ errorCode = ':(', errorMessage = "Error" }) => {
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        if (countdown <= 0) {
        window.location.href = "/";
        return;
        }

        const timer = setTimeout(() => {
        setCountdown(countdown - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown]);

    const getErrorTitle = () => {
        switch (errorCode) {
        case 404:
            return "Page Not Found";
        case 500:
            return "Server Error";
        case 403:
            return "Access Denied";
        default:
            return "Something Went Wrong";
        }
    };

    const getErrorDescription = () => {
        switch (errorCode) {
        case 404:
            return "The page you're looking for doesn't exist or has been moved.";
        case 500:
            return "Our servers are experiencing issues. Please try again later.";
        case 403:
            return "You don't have permission to access this resource.";
        default:
            return "An unexpected error occurred. Please try again later.";
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="max-w-lg w-full text-center">
            <div className="relative mb-8 mx-auto">
            {/* Abstract background shape */}
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/4"></div>

            {/* Error code */}
            <h1 className="text-9xl font-bold text-primary relative z-10">
                {errorCode}
            </h1>

            {/* Warning icon */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 bg-white rounded-full p-4 shadow-lg">
                <FaExclamationTriangle className="text-4xl text-yellow-500" />
            </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {getErrorTitle()}
            </h2>

            <p className="text-gray-600 mb-8 max-w-md mx-auto">
            {errorMessage || getErrorDescription()}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
                onClick={() => window.history.back()}
                className="cursor-pointer flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary border border-primary rounded-full hover:bg-primary/5 transition-colors w-full sm:w-auto"
            >
                <FaArrowLeft />
                <span>Go Back</span>
            </button>

            <button
                onClick={() => (window.location.href = "/")}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors w-full sm:w-auto"
            >
                <FaHome />
                <span>Back to Home</span>
            </button>
            </div>

            <div className="text-sm text-gray-500">
            Redirecting to home page in{" "}
            <span className="font-semibold">{countdown}</span> seconds
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-gray-200 rounded-full max-w-xs mx-auto mt-3 overflow-hidden">
            <div
                className="h-full bg-primary rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${(countdown / 10) * 100}%` }}
            ></div>
            </div>
        </div>
        </div>
    );
    };

    export default ErrorPage;
