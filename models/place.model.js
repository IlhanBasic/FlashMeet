import mongoose from "mongoose";

const placeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    image: { type: String, required: true },
    capacity: { type: Number, required: true },
  },
  { timestamps: true }
);

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place;