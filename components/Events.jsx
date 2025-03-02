"use client";
import { useState } from "react";
import EventCard from "./EventCard";
import { reserveTicket } from "@/actions/serverActions"; 

export default function Events({ events }) {
  async function handleReserve(event) {
    const sessionUrl = await reserveTicket(event);
    if (sessionUrl) {
      window.location.href = sessionUrl; 
    } else {
      console.log("Failed to create Stripe session");
    }
  }

  return (
    <div className="w-full bg-gray-200 grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
      {events.length > 0 &&
        events.map((event) => (
          <EventCard key={event._id} event={event} reserveTicket={handleReserve} />
        ))}
      {events.length === 0 && (
        <div className="flex justify-center text-center items-center w-full h-full">
          <p className="text-2xl text-center font-semibold text-gray-700 w-full h-full">
            Nema događaja za prikazivanje
          </p>
        </div>
      )}
    </div>
  );
}
