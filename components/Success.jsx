'use client'
const Success = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
        <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-all hover:scale-105">
          <h1 className="text-4xl font-bold text-green-600 mb-4">Success!</h1>
          <p className="text-gray-700 mb-6">
            Your action was successful. Thank you!
          </p>
          <button
            onClick={()=>{window.location.href = "/"}}
            className="bg-green-500 cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  };
  
  export default Success;
  