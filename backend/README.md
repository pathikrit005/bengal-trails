# Bengal Trails - Backend (Node + Express + MongoDB)

## What this provides
- Express server with CORS and JSON body parsing
- `/api/auth/signup` -> POST { fullName, email, password } -> creates user (bcrypt hashed)
- `/api/auth/login` -> POST { email, password } -> returns user object (no JWT)
- Mongoose User model

## Setup (local)
1. Copy `.env.example` to `.env` and set `MONGO_URI` if needed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start server:
   ```bash
   npm run dev
   # or
   npm start
   ```
4. Server will run on port defined in `.env` or 5000.

## Notes to integrate with your frontend
- Update your React `AuthContext` to call:
  - `POST http://localhost:5000/api/auth/signup` with `{ fullName, email, password }`
  - `POST http://localhost:5000/api/auth/login` with `{ email, password }`
- On success the backend responds with `{ user: { id, name, email } }`
- Remove localStorage-only login if you want to persist server-side auth; you can still store the returned user in `localStorage` on the client.

## Security
- Passwords are hashed with bcrypt.
- This example does not use JWT or sessions; it simply returns the user object after successful login.
- For production, consider adding sessions, JWT, rate-limiting, input validation, and HTTPS.
