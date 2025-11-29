// src/components/LoginPage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { useAuth } from "./AuthContext";
import { toast } from "sonner"; 

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/user");
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(formData.email, formData.password);
      toast.success("Logged in successfully!");
      // auth state change will redirect via useEffect, but keep explicit navigate
      navigate("/user");
    } catch (err: any) {
      toast.error(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-white p-6">
      <div className="w-full max-w-md">
        <Card className="p-8 shadow-xl rounded-2xl border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-orange-600">Welcome Back</h2>
            <p className="text-sm text-gray-500 mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-2"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="mt-2"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="w-4 h-4"
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                onClick={() => toast.info("Forgot password flow")}
                className="text-orange-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <div className="mt-4">
              <Button
                type="submit"
                disabled={loading}
                variant="ghost"
                className="w-full rounded-lg py-4 h-auto text-base shadow-sm"
                style={{
                  backgroundColor: "#000",
                  color: "#ffffff",
                  opacity: 1,
                  zIndex: 10,
                }}
              >
                {loading ? "Signing in..." : "Log In"}
              </Button>
            </div>
          </form>

          <div className="text-center mt-6 text-gray-600">
            <span>Don't have an account? </span>
            <button
              onClick={() => navigate("/signup")}
              className="text-orange-600 font-medium hover:underline"
            >
              Sign up
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
