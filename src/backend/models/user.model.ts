import { Schema, models, model } from "mongoose";
import { downloadLimitDefault, readLimitDefault } from "../utils";

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
    plan: {
      type: String,
      enum: ["free", "basic", "pro"],
      default: "free",
    },
    readLimit: {
      type: Number,
      default: 5,
    },
    downloadLimit: {
      type: Number,
      default: 10,
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

userSchema.pre("save", async function () {
  if (this.isModified("plan")) {
    this.readLimit = readLimitDefault();
    this.downloadLimit = downloadLimitDefault();
  }
});

export default models.User || model("User", userSchema);
