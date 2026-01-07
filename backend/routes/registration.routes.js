import { Router } from "express";
import {
  createRegistration,
  getMyRegistration,
} from "../controllers/registration.controller.js";
import { requireAuth } from "../middleware/clerkAuth.js";

const router = Router();

/**
 * Create registration (called from Register page)
 */
router.post("/", requireAuth, createRegistration);

/**
 * Get logged-in user's registration (Dashboard)
 */
router.get("/me", requireAuth, getMyRegistration);

export default router;
