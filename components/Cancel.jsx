"use client";
export default function Cancel() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-400 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-all hover:scale-105">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Cancelled!</h1>
        <p className="text-gray-700 mb-6">
          Your action was cancelled. No worries!
        </p>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="bg-red-500 cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-all transform hover:scale-110 active:scale-95"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
