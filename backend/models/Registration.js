import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },

    role: {
      type: String,
      enum: ["author", "listener"],
      required: true,
    },

    paperTitle: String,
    domain: String,

    mode: {
      type: String,
      enum: ["hybrid", "offline"],
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Registration", registrationSchema);
