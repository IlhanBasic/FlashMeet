'use client'

import { useEffect, useState } from "react";

export default function ButtonToTop() {
  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  const [show,setShow] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {show >= 250 && <button onClick={scrollToTop} className="fixed bottom-10 right-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-[100] cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>}
    </>
  );
}
