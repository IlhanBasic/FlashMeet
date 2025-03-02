"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Bounce, ToastContainer, toast } from "react-toastify";
export default function Navbar() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const extractedToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      setToken(extractedToken || null);
    }
  }, []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  useEffect(() => {
    if (token) {
      toast.success("You are logged in");
    }
  }, [token]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add overflow hidden to body when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);
  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    toast.success("You are logged out");
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };
  const handleLanguageChange = (language) => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav
        className={`top-0 z-50 w-full px-4 transition-all duration-300 py-3 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Language Selector - Visible on all screens */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <Image
                  src="/united-kingdom.png"
                  alt="English flag"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-sm font-medium text-gray-700 hidden sm:inline-block">
                  English
                </span>
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 px-4 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition-all duration-200 ease-in-out cursor-pointer">
                  <div className="py-1 cursor-pointer">
                    <button
                      className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm cursor-pointer text-gray-700 hover:bg-gray-1000"
                      onClick={() => handleLanguageChange("serbian")}
                    >
                      <Image
                        src="/serbia.png"
                        alt="Serbian flag"
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                      <span>Srpski</span>
                    </button>
                    <button
                      className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm cursor-pointer ${
                     text-gray-700 hover:bg-gray-100"
                      onClick={() => handleLanguageChange("english")}
                    >
                      <Image
                        src="/united-kingdom.png"
                        alt="English flag"
                        width={20}
                        height={20}
                        className="rounded-full"
                      />
                      <span>English</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-center text-center items-center">
              <Image
                src="/logo.png"
                alt="FlashMeet Logo"
                width={80}
                height={80}
                className="rounded-full transform object-cover md:w-[100px] md:h-[100px]"
              />
            </div>

            {/* Mobile menu button */}
            <button
              className="mobile-menu-button md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>

            {/* Auth Buttons - Hidden on mobile, visible on desktop */}
            {token ? (
              <div className="hidden md:flex items-center space-x-3">
                <button
                  onClick={() => handleLogout()}
                  className="px-4 cursor-pointer py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <button
                  onClick={() => (window.location.href = "/auth")}
                  className="px-4 cursor-pointer py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Log In
                </button>
              </div>
            )}
          </div>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden md:block">
            <ul className="flex flex-wrap justify-center space-x-8 py-4 gap-3">
              {["Home", "About", "Contact", "Events"].map((item) => (
                <li key={item} className="relative group">
                  <Link
                    href={item==="Home" ? '/' :`${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 py-2 inline-block"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu - Fixed position overlay */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden fixed inset-0 z-40 bg-white overflow-y-auto"
          >
            <div className="px-4 pt-24 pb-6">
              {/* Mobile Navigation Links */}
              <ul className="flex flex-col space-y-4 py-4 gap-3">
                {["Home", "About", "Contact", "Events"].map((item) => (
                  <li key={item} className="border-b border-gray-100 pb-2">
                    <Link
                      href={item==="Home" ? '/' :`${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 py-2 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-3 mt-6">
                <button
                  onClick={() => (window.location.href = "/auth")}
                  className="w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      {token && (
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      )}
    </>
  );
}
