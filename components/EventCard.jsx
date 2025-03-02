'use client';

export default function EventCard({event,reserveTicket}) {
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Slika */}
      <div className="relative h-56">
        <img
          src={event.image}
          alt="Event Photo"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-black text-white text-xs px-3 py-1 rounded-full">
          {event.category}
        </div>
      </div>

      {/* Detalji */}
      <div className="p-5 space-y-4">
        {/* Datum */}
        <div className="flex justify-center items-center gap-3 text-gray-700">
          <span className="bg-gray-200 px-4 py-2 rounded-full text-sm font-semibold">
            📅 {event.startDate.replace(/T.*/, '')}
          </span>
        </div>

        {/* Vreme */}
        <div className="flex justify-center items-center gap-3 text-gray-700">
          <span className="bg-gray-200 px-4 py-2 rounded-full text-sm font-semibold">
           {event.startDate.slice(11, 16)}
          </span>
          <span> - </span>
          <span className="bg-gray-200 px-4 py-2 rounded-full text-sm font-semibold">
            {event.endDate.slice(11, 16)}
          </span>
        </div>

        {/* Naslov i opis */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
          <p className="text-gray-600 text-sm">
            {event.description}
          </p>
        </div>

        {/* Lokacija i cena */}
        <div className="flex justify-between items-center text-gray-700">
          <span className="bg-gray-200 px-4 py-2 rounded-full text-sm font-semibold">
            📍 {event.placeId.address}, {event.placeId.city}
          </span>
          <span className="bg-green-200 px-4 py-2 rounded-full text-sm font-semibold">
            💰 {event.price} EUR
          </span>
        </div>

        {/* Dugme */}
        <button onClick={() => reserveTicket(event)} className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700">
          Get Ticket 🎟️
        </button>
      </div>
    </div>
  );
}
