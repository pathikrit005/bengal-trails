// src/components/ExploreChoicePage.tsx
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { MapPin, Sparkles, ArrowRight, Mountain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function ExploreChoicePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-purple-50 to-pink-50 pt-6">
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="mb-6 bg-gradient-to-r from-orange-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            What Would You Like to Explore?
          </h2>
          <p className="text-gray-600 text-xl">Choose your adventure - discover magnificent destinations or experience vibrant festivals</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 hover:scale-105" onClick={() => navigate("/destinations")}>
            <div className="relative h-80 overflow-hidden">
              <ImageWithFallback src="/image/locations/kolkata-howrah-bridge.jpg" alt="Discover West Bengal" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900 via-orange-600/50 to-transparent" />
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:bg-white/30 transition-all">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white mb-3">Discover West Bengal</h3>
                <p className="text-white/90 mb-6">Explore 35+ stunning destinations across 6 categories - from Kolkata's heritage to Darjeeling's hills</p>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-sm">View All Destinations</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
              <div className="grid grid-cols-3 gap-4 text-center text-white">
                <div><div className="text-2xl mb-1">35+</div><div className="text-xs text-white/80">Locations</div></div>
                <div><div className="text-2xl mb-1">6</div><div className="text-xs text-white/80">Categories</div></div>
                <div><div className="text-2xl mb-1">🏆</div><div className="text-xs text-white/80">UNESCO Sites</div></div>
              </div>
            </div>
          </Card>

          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 hover:scale-105" onClick={() => navigate("/festivals")}>
            <div className="relative h-80 overflow-hidden">
              <ImageWithFallback src="/image/festivals/jagaddhatri-puja-chandannagar.jpg" alt="Discover Festivals" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900 via-pink-600/50 to-transparent" />
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:bg-white/30 transition-all">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white mb-3">Discover Upcoming Festivals</h3>
                <p className="text-white/90 mb-6">Experience 11 grand festivals including UNESCO-listed Durga Puja and vibrant cultural celebrations</p>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-sm">Explore Festivals</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-6">
              <div className="grid grid-cols-3 gap-4 text-center text-white">
                <div><div className="text-2xl mb-1">11</div><div className="text-xs text-white/80">Festivals</div></div>
                <div><div className="text-2xl mb-1">🎨</div><div className="text-xs text-white/80">UNESCO</div></div>
                <div><div className="text-2xl mb-1">Million+</div><div className="text-xs text-white/80">Visitors</div></div>
              </div>
            </div>
          </Card>
        </div>
      </main>
                  {/* Footer*/}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg">
                  <Mountain className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-white">Bengal Trails</h4>
              </div>
              <p className="text-gray-400">
                Experience the rich heritage, stunning landscapes, and vibrant culture of West Bengal.
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => navigate('/destinations')} className="hover:text-white transition-colors">All Destinations</button></li>
                <li><button onClick={() => navigate('/festivals')} className="hover:text-white transition-colors">Festivals</button></li>
                <li><button onClick={() => navigate('/explore')} className="hover:text-white transition-colors">Explore</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => navigate('/destinations#kolkata')} className="hover:text-white transition-colors">Kolkata & Nearby</button></li>
                <li><button onClick={() => navigate('/destinations#heritage')} className="hover:text-white transition-colors">Culture & Heritage</button></li>
                <li><button onClick={() => navigate('/destinations#hills')} className="hover:text-white transition-colors">Hills & Adventure</button></li>
                <li><button onClick={() => navigate('/destinations#beaches')} className="hover:text-white transition-colors">Beaches & Islands</button></li>
                <li><button onClick={() => navigate('/destinations#wildlife')} className="hover:text-white transition-colors">Wildlife & Nature</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Contact</h4>
              <p className="text-gray-400">
                Bengal Trails<br />
                Kolkata, West Bengal<br />
                India
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Bengal Trails - West Bengal Tourism. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
