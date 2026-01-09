// backend/routes/payment.routes.js
import { Router } from "express";
import { submitPaymentProof } from "../controllers/payment.controller.js";
import { requireAuth } from "../middleware/clerkAuth.js";

const router = Router();

router.post("/submit-proof", requireAuth, submitPaymentProof);

export default router;
