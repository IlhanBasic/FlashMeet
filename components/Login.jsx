"use client";
import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import User from "@/models/user.model";
export default function Login() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState("");

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      setToken(credentialResponse.credential);
      const decoded = jwtDecode(credentialResponse.credential);
      setUser(decoded);
      setError("");
      document.cookie = `token=${credentialResponse.credential}; path=/; max-age=3600; Secure; SameSite=Strict`;
    } catch (error) {
      console.error("Error decoding JWT:", error);
      setError("Failed to process login information");
    }
  };

  const handleLoginError = () => {
    window.location.href = "/";
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to FlashMeet
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Book your next event with ease
          </p>
        </div>

        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {user ? (
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="flex flex-col items-center">
              {user.picture && (
                <img
                  src={user.picture}
                  alt={user.name}
                  className="h-24 w-24 rounded-full mb-4"
                />
              )}
              <h3 className="text-xl font-medium text-gray-900">
                Welcome, {user.name}
              </h3>
              <p className="text-gray-600 mt-1">{user.email}</p>

              <div className="mt-6 flex flex-col gap-2">
                <button
                  onClick={handleLogout}
                  className="w-full coursor-pointer flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Sign Out
                </button>
                <button
                  onClick={() => (window.location.href = "/")}
                  className="w-full coursor-pointer flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Home
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="flex flex-col items-center">
              <div className="w-full flex justify-center">
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={handleLoginError}
                />
              </div>

              <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
