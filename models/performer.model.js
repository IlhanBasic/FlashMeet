import mongoose from "mongoose";

const performerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    image: { type: String, required: true },
    socialLinks: {
      website: { type: String },
      instagram: { type: String },
      twitter: { type: String },
      facebook: { type: String }
    },
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }] // Lista događaja gde nastupa
  },
  { timestamps: true }
);

// Sprečavanje OverwriteModelError
const Performer = mongoose.models.Performer || mongoose.model("Performer", performerSchema);

export default Performer;
