import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import { connectDB } from "./config/db.js";
import registrationRoutes from "./routes/registration.routes.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* -------------------- Middleware -------------------- */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:8080",
      "https://icisd-2w8g.vercel.app", // 👈 ADD THIS
    ],
    credentials: true,
  })
);


app.use(express.json());

/* 🔥 Clerk middleware (MANDATORY) */
app.use(clerkMiddleware());

/* -------------------- Routes -------------------- */
app.use("/api/registrations", registrationRoutes);


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
