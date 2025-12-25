import stripe from "../utils/stripe.js";
import Registration from "../models/Registration.js";

export const createCheckoutSession = async (req, res) => {
  try {
    const userId = req.auth.userId;

    const registration = await Registration.findOne({
      userId,
      paymentStatus: "pending",
    });

    if (!registration) {
      return res.status(400).json({ message: "No pending registration" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: req.auth.sessionClaims.email,
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "ICISD 2026 Registration",
            },
            unit_amount: registration.amount * 100,
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:8080/payment-success",
      cancel_url: "http://localhost:8080/payment-cancel",
      metadata: {
        registrationId: registration._id.toString(),
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Stripe session error" });
  }
};
