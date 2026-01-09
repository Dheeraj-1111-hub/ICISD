// backend/controllers/registration.controller.js
import Registration from "../models/Registration.js";

export const createRegistration = async (req, res) => {
  const userId = req.auth.userId;
  const { role, paperTitle, domain, mode } = req.body;

  const existing = await Registration.findOne({ userId });
  if (existing)
    return res.status(400).json({ message: "Already registered" });

  const amount =
    role === "author"
      ? mode === "offline"
        ? 3500
        : 3000
      : 1500;

  const registration = await Registration.create({
    userId,
    role,
    paperTitle,
    domain,
    mode,
    amount,
  });

  res.status(201).json(registration);
};

export const getMyRegistration = async (req, res) => {
  const registration = await Registration.findOne({
    userId: req.auth.userId,
  });

  if (!registration)
    return res.status(404).json({ message: "Not found" });

  res.json(registration);
};
