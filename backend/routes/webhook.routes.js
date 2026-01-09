// backend/routes/webhook.routes.js
import express from "express";
import stripe from "../utils/stripe.js";
import Registration from "../models/Registration.js";

const router = express.Router();

router.post(
  "/stripe",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      await Registration.findByIdAndUpdate(
        session.metadata.registrationId,
        { paymentStatus: "paid" }
      );
    }

    res.json({ received: true });
  }
);

export default router;
