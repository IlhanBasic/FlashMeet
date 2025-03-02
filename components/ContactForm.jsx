"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
export default function ContactForm() {
  const [submited, setSubmited] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSubmited(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_CONTACT_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Successfully sent your message ✔!");
      })
      .catch((e) => { 
        toast.error("Something went wrong ❌. \n" + e.text);
      });
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-pink-500 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="bg-white shadow-lg rounded-xl px-8 pt-12 pb-8 w-full max-w-md transform transition-all duration-300 hover:scale-105"
      >
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8 tracking-wide">
          Get in Touch
        </h2>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            className="shadow-sm border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            id="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            className="shadow-sm border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            className="shadow-sm border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            id="message"
            placeholder="Write your message"
            rows="5"
            required
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
      {submited && (
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
    </div>
  );
}
