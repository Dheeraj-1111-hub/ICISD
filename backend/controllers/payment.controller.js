// backend/controllers/payment.controller.js
import Registration from "../models/Registration.js";

export const submitPaymentProof = async (req, res) => {
  const { transactionId, paymentDate, paymentProofUrl } = req.body;
  const userId = req.auth.userId;

  const registration = await Registration.findOne({ userId });
  if (!registration)
    return res.status(404).json({ message: "Registration not found" });

  registration.transactionId = transactionId;
  registration.paymentDate = paymentDate;
  registration.paymentProofUrl = paymentProofUrl;
  registration.paymentStatus = "submitted";

  await registration.save();

  res.json({ message: "Payment proof submitted" });
};
