// src/components/LocationDetailPage.tsx
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Info, Star, MapPin, Clock, ArrowLeft } from "lucide-react";
import { locations } from "../data/locations";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function LocationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const location = locations.find((loc) => loc.id === id);

  // Small reusable back button using browser history (with safe fallback)
  function BackButton() {
    const goBack = () => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        // fallback if there is no history
        navigate("/");
      }
    };

    return (
      <Button
        variant="ghost"
        onClick={goBack}
        className="flex items-center gap-2 text-gray-700 hover:bg-gray-100"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>
    );
  }

  if (!location) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="mb-4">Location Not Found</h2>
          <BackButton />
        </Card>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, any> = {
      "Kolkata & Nearby": {
        badge: "bg-orange-100 text-orange-700",
        dot: "bg-orange-500",
        icon: "text-orange-600",
        gradient: "bg-gradient-to-br from-orange-500 to-orange-600",
      },
      "Culture & Heritage": {
        badge: "bg-purple-100 text-purple-700",
        dot: "bg-purple-500",
        icon: "text-purple-600",
        gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
      },
      "Hills & Adventure": {
        badge: "bg-green-100 text-green-700",
        dot: "bg-green-500",
        icon: "text-green-600",
        gradient: "bg-gradient-to-br from-green-500 to-green-600",
      },
      "Beaches & Islands": {
        badge: "bg-blue-100 text-blue-700",
        dot: "bg-blue-500",
        icon: "text-blue-600",
        gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
      },
      "Wildlife & Nature": {
        badge: "bg-emerald-100 text-emerald-700",
        dot: "bg-emerald-500",
        icon: "text-emerald-600",
        gradient: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      },
      Gateway: {
        badge: "bg-amber-100 text-amber-700",
        dot: "bg-amber-500",
        icon: "text-amber-600",
        gradient: "bg-gradient-to-br from-amber-500 to-amber-600",
      },
    };
    return colors[category] || colors["Kolkata & Nearby"];
  };

  const color = getCategoryColor(location.category);

  const handleGetDirections = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      location.name + ", West Bengal, India"
    )}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <main className="container mx-auto px-4 py-6">
        <div className="mb-4">
          <BackButton />
        </div>

        <div className="mb-8">
          <Badge className={color.badge}>{location.category}</Badge>
          <h1 className="mb-4">{location.name}</h1>
        </div>

        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src={location.image}
            alt={location.name}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className={color.icon} />
                <h3>About</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{location.description}</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className={color.icon} />
                <h3>Highlights</h3>
              </div>
              <ul className="space-y-3">
                {location.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`mt-1 w-2 h-2 rounded-full ${color.dot} flex-shrink-0`} />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className={color.icon} />
                <h4>Best Time to Visit</h4>
              </div>
              <p className="text-gray-700">{location.bestTime}</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className={color.icon} />
                <h4>How to Reach</h4>
              </div>
              <p className="text-gray-700">{location.howToReach}</p>
            </Card>

            <Card className={`p-6 ${color.gradient} text-white`}>
              <h4 className="mb-3 text-white">Plan Your Visit</h4>
              <p className="text-white/90 mb-4">Ready to explore {location.name}? Start planning your journey today!</p>
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-100" onClick={handleGetDirections}>
                Get Directions
              </Button>
            </Card>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-gray-100 mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2025 Bengal Trails - West Bengal Tourism. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
