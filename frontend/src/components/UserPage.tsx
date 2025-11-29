// src/components/UserPage.tsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { User, Mail, MapPin, Calendar, Mountain, LogOut } from "lucide-react";
import { useEffect } from "react";

export default function UserPage() {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <div className="flex items-center gap-6">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <User className="w-16 h-16 text-white" />
              </div>
              <div>
                <h2 className="text-white mb-2">Welcome back, {user.name}!</h2>
                <div className="flex items-center gap-2 text-white/90">
                  <Mail className="w-4 h-4" />
                  <span>{user.email}</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <User className="w-6 h-6 text-orange-600" />
                </div>
                <h3>Profile Information</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-600 text-sm">Full Name</p>
                  <p className="text-gray-900">{user.name}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email Address</p>
                  <p className="text-gray-900">{user.email}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Member Since</p>
                  <p className="text-gray-900">{new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3>Travel Statistics</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Destinations Explored</span>
                  <span className="text-2xl text-orange-600">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Festivals Attended</span>
                  <span className="text-2xl text-orange-600">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Saved Places</span>
                  <span className="text-2xl text-orange-600">3</span>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="mb-4">Quick Actions</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Button
                onClick={() => navigate("/destinations")}
                variant="outline"
                className="w-full justify-start border-orange-200 hover:bg-orange-50"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Explore Destinations
              </Button>
              <Button
                onClick={() => navigate("/festivals")}
                variant="outline"
                className="w-full justify-start border-pink-200 hover:bg-pink-50"
              >
                <Calendar className="w-4 h-4 mr-2" />
                View Festivals
              </Button>
              <Button
                onClick={() => navigate("/explore")}
                variant="outline"
                className="w-full justify-start border-blue-200 hover:bg-blue-50"
              >
                <Mountain className="w-4 h-4 mr-2" />
                Plan a Trip
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-900 text-white">
  <div className="container mx-auto px-4 max-w-6xl">

    {/* side-by-side clean alignment */}
    <div
      className="
        flex flex-row flex-nowrap
        justify-between items-center
        py-8 gap-12
      "
    >

      {/* logo + text */}
      <div className="flex items-start gap-3 max-w-[520px] flex-shrink-0 -ml-4">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg">
          <Mountain className="w-6 h-6 text-white" />
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold leading-none">
            Bengal Trails
          </h4>

          {/* 2-line clean description */}
          <p className="text-gray-400 text-sm leading-relaxed mt-2">
            Experience the rich heritage, stunning landscapes,<br />
            and vibrant culture of West Bengal.
          </p>
        </div>
      </div>

      {/* contact */}
      <div className="text-right max-w-[300px] flex-shrink-0 pr-3 translate-x-1">
        <h4 className="text-white mb-2 font-medium text-base leading-none">
          Contact
        </h4>

        <div className="text-gray-400 text-sm leading-relaxed space-y-1">
          <div>Bengal Trails</div>
          <div>Kolkata, West Bengal</div>
          <div>India</div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-800" />

    {/* COPYRIGHT */}
    <div className="text-center text-gray-500 text-sm py-4">
      © 2025 Bengal Trails — West Bengal Tourism. All rights reserved.
    </div>
  </div>
</footer>
    </div>
  );
}
