'use client'
export default function CategoriesButton({changeShow}) {
  function handleClick(name){
    changeShow(name)
  }
  return (
    <>
      <div className="flex gap-4 justify-evenly items-center p-4 flex-wrap">
        <button onClick={() => handleClick("music")} className="cursor-pointer hover:scale-110 text-center rounded-2xl shadow-lg shadow-gray-400 p-3 bg-white w-[150px] h-[100px]">
          🎸 <br />
          <span>Music Events</span>
        </button>
        <button onClick={() => handleClick("gaming")} className="cursor-pointer hover:scale-110 text-center rounded-2xl shadow-lg shadow-gray-400 p-3 bg-white w-[150px] h-[100px]">
          🎮 <br />
          <span>Gaming Events</span>
        </button>
        <button onClick={() => handleClick("movies")} className="cursor-pointer hover:scale-110 text-center rounded-2xl shadow-lg shadow-gray-400 p-3 bg-white w-[150px] h-[100px]">
          🎬
          <br />
          <span>Movies and Theatres</span>
        </button>
        <button onClick={() => handleClick("comedy")} className="cursor-pointer hover:scale-110 text-center rounded-2xl shadow-lg shadow-gray-400 p-3 bg-white w-[150px] h-[100px]">
          🤣 <br />
          <span>Stand Up Comedy</span>
        </button>
        <button onClick={() => handleClick("all")} className="cursor-pointer hover:scale-110 text-center rounded-2xl shadow-lg shadow-gray-400 p-3 bg-white w-[150px] h-[100px]">
          🌍 <br />
          <span>All Events</span>
        </button>
      </div>
    </>
  );
}
