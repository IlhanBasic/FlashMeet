import { connectDB } from "../config/db";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Event from "@/models/event.model";
import Ticket from "@/models/ticket.model";
import Place from "@/models/place.model";
import mongoose from "mongoose";
import Performer from "@/models/performer.model";
import ShowEvents from "@/components/ShowEvents";
import ButtonToTop from "@/components/ButtonToTop";
export default async function Home() {
  await connectDB();
  if (!mongoose.models.Place) {
    mongoose.model("Place", placeSchema);
  }

  if (!mongoose.models.Performer) {
    mongoose.model("Performer", performerSchema);
  }
  if(!mongoose.models.Ticket){
    mongoose.model("Ticket", ticketSchema);
  }
  let events = await Event.find({}).populate("placeId").populate("performerId");
  events = JSON.parse(JSON.stringify(events));
  return (
    <>
      <Navbar />
      <Hero />
      <ShowEvents events={events} />
      <Footer />
      <ButtonToTop />
    </>
  );
}
