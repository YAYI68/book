import { Schema, models, model } from "mongoose";

const DownloadSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    require: true,
  },
  book: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

export default models.ReadBook || model("DownloadBook", DownloadSchema);
