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
      enum: ["Male", "Female"],
    },
    plan: {
      type: String,
      enum: ["free", "starter", "professional"],
      default: "free",
    },
    readLimit: {
      type: Number,
      default: function () {
        if (this.plan === "free") {
          return 5;
        }
        if (this.plan === "starter") {
          return 15;
        }
        if (this.plan === "professional") {
          return Number.POSITIVE_INFINITY;
        }
      },
    },
    downloadLimit: {
      type: Number,
      default: function () {
        if (this.plan === "free") {
          return 10;
        }
        if (this.plan === "starter") {
          return 20;
        }
        if (this.plan === "professional") {
          return Number.POSITIVE_INFINITY;
        }
      },
    },
    readCount: {
      type: Number,
      default: 0,
    },
    downloadCount: {
      type: Number,
      default: 0,
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
      default: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
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
