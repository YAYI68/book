import { Schema, models, model } from "mongoose";

const GenreSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
});

export default models.Genre || model("Genre", GenreSchema);
