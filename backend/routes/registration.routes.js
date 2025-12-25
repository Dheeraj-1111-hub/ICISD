import { Router } from "express";
import { createRegistration } from "../controllers/registration.controller.js";
import { requireAuth } from "../middleware/clerkAuth.js";

const router = Router();

router.post("/", requireAuth, createRegistration);

export default router;
