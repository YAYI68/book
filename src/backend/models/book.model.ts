import mongoose, { Schema, models, model } from "mongoose";

const bookSchema = new Schema(
  {
    author: {
      type: String,
      require: true,
      maxLength: 50,
    },
    title: {
      type: String,
      require: true,
      maxLength: 50,
    },
    description: {
      type: String,
      require: true,
    },
    note: {
      type: String,
      require: true,
      select: false,
    },
    image: {
      type: String,
    },
    genre: {
      type: mongoose.Types.ObjectId,
      ref: "Genre",
    },
    format: {
      type: String,
      select: false,
    },
    pages: {
      type: Number,
      select: false,
    },
    edition: {
      type: Number,
      select: false,
    },
    downloadCount: {
      type: Number,
      default: 0,
    },
    readCount: {
      type: Number,
      default: 0,
    },
  },
  {
    virtuals: {
      slug: {
        get() {
          return this.title.replaceAll(" ", "_").toLowerCase();
        },
      },
    },
    toJSON: { virtuals: true },
    timestamps: true,
  }
);

export default models.Book || model("Book", bookSchema);
