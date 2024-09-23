import mongoose from "mongoose";

const moovieSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, lowercase: true },
  year: { type: Number, required: true, trim: true },
  rating: { type: Number, required: true },
  genre: { type: String, required: true, trim: true, lowercase: true },
  opinion: { type: String, required: true, trim: true, lowercase: true },
});

const Moovie = mongoose.model("Moovie", moovieSchema);

export default Moovie;
