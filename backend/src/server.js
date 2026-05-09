import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.listen(ENV.PORT, () => {
  console.log(`Server running on port ${ENV.PORT}`);
  connectDB();
});
