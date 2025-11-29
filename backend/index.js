// backend/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 5000;

// IMPORTANT: set FRONTEND_ORIGIN to the exact origin your frontend uses (including port).
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

// Trust proxy if running behind a proxy (set TRUST_PROXY=1 in production env if needed)
if (process.env.TRUST_PROXY === "1") {
  app.set("trust proxy", 1);
  console.log("Trust proxy is enabled");
}

app.use(express.json());

// ----- CORS: allow credentials and the exact frontend origin -----
app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Simple request logger for debugging (safe for dev)
app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - Cookie:`,
    req.headers.cookie || "<none>"
  );
  next();
});

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/bengaltrails";

// Connect to MongoDB and then initialize session + routes
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    // ----- SESSION: register BEFORE routes so req.session is available in routes -----
    const sessionSecret = process.env.SESSION_SECRET || "replace_me_with_secure_secret";

    app.use(
      session({
        name: "bengalTrails.sid",
        secret: sessionSecret,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
          mongoUrl: MONGO_URI,
          collectionName: "sessions",
          ttl: 60 * 60 * 24 * 7, // 7 days (in seconds)
          autoRemove: "native", // let MongoDB TTL index clean up expired sessions
          // touchAfter: 24 * 3600, // optional: reduce writes (seconds)
        }),
        cookie: {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // set true in production (HTTPS)
          sameSite: "lax", // 'lax' is good for most cases
        },
      })
    );

    // helpful middleware to inspect session object (dev only)
    app.use((req, res, next) => {
      // DO NOT log sensitive info in production
      console.log("SESSION ID:", req.sessionID, "SESSION USERID:", req.session?.userId || "<none>");
      next();
    });

    // Register your routes
    app.use("/api/auth", authRoutes);
    app.use("/api/user", userRoutes);

    // Root test
    app.get("/", (req, res) => res.json({ message: "Backend running with sessions" }));

    // Optional debug endpoint (dev only) to inspect session server-side
    app.get("/api/debug/session", (req, res) => {
      return res.json({
        ok: true,
        cookieHeader: req.headers.cookie || null,
        sessionID: req.sessionID,
        sessionUserId: req.session?.userId || null,
        sessionData: req.session || null,
      });
    });

    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
