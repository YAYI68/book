import { Schema, models, model } from "mongoose";

const PlanSchema = new Schema({
  name: {
    type: String,
    enum: ["free", "basic", "pro"],
  },
  amount: {
    type: Number,
  },
  interval: {
    type: String,
    enum: ["monthly", "yearly"],
  },
  code: {
    type: String,
  },
  features: [String],
});

export default models.BookPlan || model("BookPlan", PlanSchema);
