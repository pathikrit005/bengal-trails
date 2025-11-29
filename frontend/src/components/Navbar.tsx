// src/components/Navbar.tsx
import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, Mountain } from "lucide-react";
import { useAuth } from "./AuthContext";

export default function Navbar(): JSX.Element {
  const { isAuthenticated, logout, loading } = useAuth();
  const loc = useLocation();
  const navigate = useNavigate();
  const path = loc.pathname;

  const [q, setQ] = useState<string>(() => {
    try {
      const params = new URLSearchParams(location.search);
      return params.get("q") || params.get("search") || "";
    } catch {
      return "";
    }
  });

  const doLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.error("Logout failed", e);
    } finally {
      navigate("/");
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = q.trim();
    navigate(`/search${trimmed ? `?q=${encodeURIComponent(trimmed)}` : ""}`);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg shadow-md flex items-center">
            <Mountain className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-orange-600 font-semibold">Bengal Trails</div>
            <div className="text-xs text-gray-600">Discover West Bengal</div>
          </div>
        </div>

        {/* Left links */}
        <nav className="flex items-center gap-2">
          <Link to="/"><Button variant="ghost" size="sm">Home</Button></Link>
          <Link to="/destinations"><Button variant="ghost" size="sm">Destinations</Button></Link>
          <Link to="/festivals"><Button variant="ghost" size="sm">Festivals</Button></Link>
        </nav>

        {/* Search (ENTER will go to /search?q=...) */}
        <form onSubmit={onSubmit} className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-10 pr-4"
              placeholder="Search destinations, festivals..."
            />
          </div>
        </form>

        {/* Right */}
        <div className="flex items-center gap-2">
          {loading ? (
            <Button variant="ghost" size="sm" disabled>Loading...</Button>
          ) : isAuthenticated ? (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate("/user")}>Profile</Button>
              <Button variant="destructive" size="sm" onClick={doLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" onClick={() => navigate("/login")}>Login</Button>
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white" onClick={() => navigate("/signup")}>Sign Up</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
