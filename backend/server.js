import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import { connectDB } from "./config/db.js";
import registrationRoutes from "./routes/registration.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import webhookRoutes from "./routes/webhook.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* -------------------- Middleware -------------------- */
app.use(
  cors({
    origin: ["http://localhost:8080", "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());

/* 🔥 Clerk middleware (MANDATORY) */
app.use(clerkMiddleware());

/* -------------------- Routes -------------------- */
app.use("/api/registrations", registrationRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/webhooks", webhookRoutes);

/* -------------------- Start Server -------------------- */
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server", err);
    process.exit(1);
  }
};

startServer();
