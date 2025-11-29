// src/components/FestivalDetailPage.tsx
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowLeft, MapPin, Calendar, Info, Sparkles, Heart } from "lucide-react";
import { festivals } from "../data/festivals";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function FestivalDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const festival = festivals.find((fest) => fest.id === id);

  // Back button: use browser history if available, otherwise fallback to home
  function BackButton() {
    const goBack = () => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
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

  if (!festival) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="mb-4">Festival Not Found</h2>
          <BackButton />
        </Card>
      </div>
    );
  }

  const handlePlanVisit = () => {
    // Create Google Maps URL with festival place
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      festival.place + ", West Bengal, India"
    )}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <main className="container mx-auto px-4 py-6">
        {/* Back button (uses browser back, not a hard redirect) */}
        <div className="mb-4">
          <BackButton />
        </div>

        {/* Hero Section */}
        <div className="mb-8">
          <Badge className="bg-rose-100 text-rose-700 mb-4">Festival</Badge>
          <h1 className="mb-2">{festival.name}</h1>
          <p className="text-gray-600 italic text-xl">{festival.tagline}</p>
        </div>

        {/* Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <ImageWithFallback
         src={festival.image}
         alt={festival.name} 
         className="w-full h-[400px] object-cover"
         />
         </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-rose-600" />
                <h3>About the Festival</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{festival.description}</p>
            </Card>

            {/* Highlights */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-rose-600" />
                <h3>Festival Highlights</h3>
              </div>
              <ul className="space-y-3">
                {festival.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-rose-500 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Cultural Significance */}
            <Card className="p-6 border-l-4 border-l-rose-500">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-rose-600" />
                <h3>Cultural Significance</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{festival.culturalSignificance}</p>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Location */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-rose-600" />
                <h4>Location</h4>
              </div>
              <p className="text-gray-700">{festival.place}</p>
            </Card>

            {/* When Celebrated */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-rose-600" />
                <h4>When Celebrated</h4>
              </div>
              <p className="text-gray-700">{festival.whenCelebrated}</p>
            </Card>

            {/* CTA */}
            <Card className="p-6 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
              <h4 className="mb-3 text-white">Experience the Festival</h4>
              <p className="text-white/90 mb-4">
                Join thousands of devotees and celebrate {festival.name} at {festival.place}!
              </p>
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-100" onClick={handlePlanVisit}>
                Plan Your Visit
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
