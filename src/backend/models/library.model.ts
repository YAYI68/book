import mongoose, { Schema, models, model } from "mongoose";

const LibrarySchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    require: true,
  },
  book: {
    type: mongoose.Types.ObjectId,
    ref: "Book",
    require: true,
  },
  status: {
    type: String,
    enum: ["read", "download"],
  },
});

export default models.ReadBook || model("ReadBook", LibrarySchema);
