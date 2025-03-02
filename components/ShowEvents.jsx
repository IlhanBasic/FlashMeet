"use client";
import Events from "@/components/Events";
import CategoriesButton from "@/components/CategoriesButtons";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
export default function ShowEvents({ events }) {
  const [eventArray, setEventArray] = useState(events);
  function handleFilter(name) {
    if (name === "all") {
      setEventArray(events);
    } else {
      setEventArray(events.filter((event) => event.category === name));
    }
  }
  function searchTerm(term){
    setEventArray(events.filter((event) => event.title.toLowerCase().includes(term.toLowerCase())))
  }
  return (
    <>
      <SearchBar searchTerm={searchTerm}/>
      <CategoriesButton changeShow={handleFilter} />
      <Events events={eventArray} />
    </>
  );
}
