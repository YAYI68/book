import { Schema, models, model } from "mongoose";

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: { type: String, minLength: 8, select: false },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    plan: {
      type: String,
      enum: ["free", "starter", "professional"],
      default: "free",
    },
    is_active: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    duration: {
      type: Date,
      default: +new Date() + 7 * 24 * 60 * 60 * 1000,
    },
  },
  {
    virtuals: {
      fullname: {
        get() {
          return this.firstname + " " + this.lastname;
        },
      },
      id: {
        get() {
          return this._id;
        },
      },
    },
    timestamps: true,
  }
);

export default models.User || model("User", userSchema);
