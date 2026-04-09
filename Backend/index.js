import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.log("❌ DB Error:", err);
    process.exit(1);
  });

// Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  time: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

// Route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    await User.create({ email, password });

    res.json({ message: "Login successful" });

  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* ---------------- SERVER ---------------- */ 
app.listen(5000, () =>
  console.log("🚀 Server running on port 5000") 
          );
