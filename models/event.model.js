import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    startDate: { type: Date, required: true }, 
    endDate: { type: Date, required: true }, 
    description: { type: String, required: true },
    image: { type: String, required: true },
    placeId: { type: mongoose.Schema.Types.ObjectId, ref: "Place", required: true },
    performerId: { type: mongoose.Schema.Types.ObjectId, ref: "Performer", required: true }, 
    tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ticket" }],
    price: { type: Number, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const Event = mongoose.models?.Event || mongoose.model("Event", eventSchema);

export default Event;