# 🌄 Bengal Trails — West Bengal Tourism Platform

A modern full-stack tourism web application showcasing the beauty, culture, festivals, 
and destinations of **West Bengal, India**.  
Built with **React + Vite + TypeScript**, **Node.js + Express**, and **MongoDB**  
with **secure session-based authentication**.

Repo: https://github.com/pathikrit005/bengal-trails

---

## 🚀 Features

### 🏞 Destinations
- Explore 30+ famous places in West Bengal  
- Hills, beaches, heritage sites, wildlife & nature  
- Clean cards with local **optimized images**  
- Smart **Image Fallback System** to prevent broken images  

### 🎉 Festivals
- Detailed festival pages with cultural history  
- High-quality local images for each festival  
- Highlights, significance, timeline & more  

### 🔐 Authentication
- Secure Login & Signup  
- Session-based authentication  
- Auto logout when tab closes (smart logout hook)  
- User profile page  

### 🔎 Search System
- Real-time search through destinations & festivals  
- Highlighting matched text  
- Auto redirect when only one match is found  

### 📱 Fully Responsive UI
- Built with TailwindCSS + shadcn/ui  
- Works on Mobile, Tablet & Desktop  

---

## 🛠 Tech Stack

### **Frontend**
- React 18 + Vite  
- TypeScript  
- TailwindCSS  
- ShadCN UI  
- Lucide Icons  
- Sonner Toasts  
- Custom ImageWithFallback Component  

### **Backend**
- Node.js + Express  
- MongoDB + Mongoose  
- Session-based authentication  
- Connect-Mongo session store  

### **Tools**
- npm-run-all  
- Git + GitHub  
- VS Code  

---

## 📁 Folder Structure

```
project/
├── backend/
│   ├── index.js
│   ├── models/User.js
│   ├── middleware/authMiddleware.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── user.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── image/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── styles/
│   │   ├── main.tsx
│   │   └── App.tsx
│   └── package.json
│
├── .gitignore
├── .gitattributes
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/pathikrit005/bengal-trails.git
cd bengal-trails
```

---

## 2️⃣ Install dependencies

### 🔸 Install root dependencies  
```bash
npm install
```

### 🔸 Install frontend
```bash
cd frontend
npm install
cd ..
```

### 🔸 Install backend
```bash
cd backend
npm install
cd ..
```

---

## 3️⃣ Environment Variables

Create `.env` inside `backend/`:

```
MONGO_URI=mongodb://localhost:27017/bengaltrails
SESSION_SECRET=your_secret_key
FRONTEND_ORIGIN=http://localhost:5173
```

---

## 4️⃣ Start the Project (Both Frontend + Backend Together)

From root:

```bash
npm start
```

This runs:
- Backend → http://localhost:5000  
- Frontend → http://localhost:5173  

---

## 🔐 Authentication Flow

1. Signup creates user + session  
2. Login sets a secure HTTP-only cookie  
3. Profile page fetches data from `/api/user/profile`  
4. Logout clears session  
5. Smart Auto Logout triggers on tab close or switch  

---

## 🧠 Smart Image Fallback System

Each image automatically tries:
1. Local category image  
2. Local general image  
3. Global placeholder  

This ensures zero broken images.

---

## 🧪 API Endpoints

### 🔸 Auth Routes
| Method | Route | Purpose |
|--------|-------|----------|
| POST | `/api/auth/signup` | Create user |
| POST | `/api/auth/login`  | Login user |
| POST | `/api/auth/logout` | Logout user |

### 🔸 User Routes
| Method | Route | Purpose |
|--------|-------|----------|
| GET | `/api/user/profile` | Get logged-in user |
| POST | `/api/user/update` | Update name/profile |

---

## 🌐 Screenshots (Add later)
Place files in:

```
/screenshots/
 ├── home.png
 ├── destinations.png
 └── festivals.png
```

---

## 🧩 Future Enhancements
- Bookmark destinations  
- Trip planner  
- Admin dashboard  
- Dark mode  
- Deployed version on Render / Vercel  
- Offline caching  

---

## 🤝 Contributing

1. Fork repository  
2. Create new branch  
3. Commit changes  
4. Open Pull Request  

---

## 📜 License

MIT License — free to use, modify, and distribute.

---

# ⭐ Acknowledgements
- Icons: lucide.dev  
- UI Components: shadcn/ui  
- All images: custom/local collection  

---

### Made with ❤️ for exploring West Bengal.
