// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./components/HomePage";
import ExploreChoicePage from "./components/ExploreChoicePage";
import ExplorePage from "./components/ExplorePage";
import FestivalsPage from "./components/FestivalsPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import LocationDetailPage from "./components/LocationDetailPage";
import FestivalDetailPage from "./components/FestivalDetailPage";
import UserPage from "./components/UserPage";
import SearchResultsPage from "./components/SearchResultsPage";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      {/*GLOBAL TOAST SYSTEM (for login/signup errors & success messages) */}
      <Toaster position="top-center" richColors />

      {/* SINGLE Navbar for whole app */}
      <Navbar />
      
      {/* Pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExploreChoicePage />} />
        <Route path="/destinations" element={<ExplorePage />} />
        <Route path="/festivals" element={<FestivalsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/location/:id" element={<LocationDetailPage />} />
        <Route path="/festival/:id" element={<FestivalDetailPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
