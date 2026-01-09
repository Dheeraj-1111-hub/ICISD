// backend/routes/admin.routes.js
import { Router } from "express";
import Registration from "../models/Registration.js";

const router = Router();

/* Approve Payment */
router.patch("/approve/:id", async (req, res) => {
  await Registration.findByIdAndUpdate(req.params.id, {
    paymentStatus: "paid",
  });
  res.json({ message: "Payment approved" });
});

/* Reject Payment */
router.patch("/reject/:id", async (req, res) => {
  await Registration.findByIdAndUpdate(req.params.id, {
    paymentStatus: "rejected",
  });
  res.json({ message: "Payment rejected" });
});

export default router;
