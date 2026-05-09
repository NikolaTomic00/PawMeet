import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "https://pawmeet-1.onrender.com",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/api/test", (req, res) => {
  res.json({ message: "backend radi ✔" });
});

app.listen(ENV.PORT, () => {
  console.log(`Server running on port ${ENV.PORT}`);
  connectDB();
});
