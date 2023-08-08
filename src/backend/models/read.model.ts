import mongoose, { Schema, models, model } from "mongoose";

const ReadSchema = new Schema({
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
});

export default models.ReadBook || model("ReadBook", ReadSchema);
