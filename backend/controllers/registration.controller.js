import Registration from "../models/Registration.js";

/**
 * CREATE REGISTRATION
 * Called when user clicks "Continue to Payment"
 */
export const createRegistration = async (req, res) => {
  try {
    const userId = req.auth?.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { role, paperTitle, domain, mode } = req.body;

    // Prevent duplicate registration
    const existing = await Registration.findOne({ userId });
    if (existing) {
      return res
        .status(400)
        .json({ message: "Registration already exists" });
    }

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
      paymentStatus: "pending",
    });

    res.status(201).json(registration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET MY REGISTRATION
 * Used by Dashboard
 */
export const getMyRegistration = async (req, res) => {
  try {
    const userId = req.auth?.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const registration = await Registration.findOne({ userId });

    if (!registration) {
      return res.status(404).json({ message: "No registration found" });
    }

    res.json(registration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
