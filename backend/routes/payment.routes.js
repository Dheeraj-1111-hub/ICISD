import { Router } from "express";
import { createCheckoutSession } from "../controllers/payment.controller.js";
import { requireAuth } from "../middleware/clerkAuth.js";

const router = Router();

router.post("/create-checkout-session", requireAuth, createCheckoutSession);

export default router;
