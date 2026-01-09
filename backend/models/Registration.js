// backend/models/Registration.js
import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, index: true },

    role: String,
    paperTitle: String,
    domain: String,
    mode: String,

    amount: Number,

    paymentStatus: {
      type: String,
      enum: ["pending", "submitted", "paid", "rejected"],
      default: "pending",
    },

    transactionId: String,
    paymentProofUrl: String,
    paymentDate: Date,
  },
  { timestamps: true }
);

export default mongoose.model("Registration", registrationSchema);
