// src/components/SignupPage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { useAuth } from "./AuthContext";
import { toast } from "sonner";

export default function SignupPage() {
  const navigate = useNavigate();
  const { signup, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/user");
  }, [isAuthenticated, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (!agree) {
      toast.error("Please agree to the Terms of Service.");
      return;
    }
    setLoading(true);
    try {
      await signup(formData.fullName, formData.email, formData.password);
      toast.success("Account created — welcome!"); // success feedback
      navigate("/user");
    } catch (err: any) {
      // show backend message if present, else generic
      toast.error(err?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-white p-6">
      <div className="w-full max-w-md">
        <Card className="p-8 shadow-xl rounded-2xl border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-orange-600">Create Account</h2>
            <p className="text-sm text-gray-500 mt-2">Join us to explore West Bengal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-2"
                required
              />
            </div>

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
                placeholder="Create a password"
                className="mt-2"
                required
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="mt-2"
                required
              />
            </div>

            <div className="flex items-center gap-3 mt-2 text-sm">
              <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
              <span className="text-gray-600">I agree to the Terms of Service and Privacy Policy</span>
            </div>

            <div>
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
                {loading ? "Signing up..." : "Sign Up"}
              </Button>
            </div>
          </form>

          <div className="text-center mt-6 text-gray-600">
            <span>Already have an account? </span>
            <button onClick={() => navigate("/login")} className="text-orange-600 font-medium hover:underline">
              Login
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
