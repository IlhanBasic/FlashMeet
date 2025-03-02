'use client'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
      <p className="text-2xl text-white mb-6">Oops! The page you're looking for doesn't exist.</p>
      <p className="text-xl text-white mb-8">It seems like you've stumbled upon a dead-end. Let’s get you back on track.</p>
      <a
        href="/"
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Go Back to Home
      </a>
    </div>
  );
}
