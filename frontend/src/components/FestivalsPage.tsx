// src/components/FestivalsPage.tsx
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { MapPin, Sparkles, ArrowRight, Calendar, Mountain } from "lucide-react";
import { festivals } from "../data/festivals";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function FestivalsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-6">
      <main className="container mx-auto px-4 py-12">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-12">
          <ImageWithFallback
            src="/image/festivals/jagaddhatri-puja-chandannagar.jpg"
            alt="West Bengal Festivals"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 to-rose-600/80 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-white mb-4">Discover Upcoming Festivals</h2>
              <p className="text-pink-100 text-xl max-w-2xl mx-auto">
                Experience the vibrant celebrations and cultural richness of West Bengal's 11 grand festivals
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center border-t-4 border-t-rose-500">
            <div className="text-3xl mb-2">🎉</div>
            <div className="text-gray-900 mb-1">11 Festivals</div>
            <p className="text-sm text-gray-600">Grand Celebrations</p>
          </Card>
          <Card className="p-6 text-center border-t-4 border-t-pink-500">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-gray-900 mb-1">UNESCO Heritage</div>
            <p className="text-sm text-gray-600">Durga Puja</p>
          </Card>
          <Card className="p-6 text-center border-t-4 border-t-purple-500">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-gray-900 mb-1">Million+ Visitors</div>
            <p className="text-sm text-gray-600">Annual Footfall</p>
          </Card>
          <Card className="p-6 text-center border-t-4 border-t-orange-500">
            <div className="text-3xl mb-2">🎨</div>
            <div className="text-gray-900 mb-1">Cultural Pride</div>
            <p className="text-sm text-gray-600">250+ Year Traditions</p>
          </Card>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-rose-100 p-3 rounded-full">
              <Sparkles className="w-6 h-6 text-rose-600" />
            </div>
            <h3 className="text-rose-600">All Festivals</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivals.map((festival) => (
              <Card
                key={festival.id}
                className="overflow-hidden hover:shadow-2xl transition-all cursor-pointer border-0 group"
                onClick={() => navigate(`/festival/${festival.id}`)}
              >

                {/* import photos */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={festival.image}
                    alt={festival.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="w-3 h-3 text-rose-600" />
                      <span className="text-rose-600">Upcoming</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-rose-600 mb-3 group-hover:text-rose-700 transition-colors">
                    {festival.name}
                  </h4>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">
                        <span className="text-gray-900">Location:</span> {festival.place}
                      </p>
                    </div>

                    <p className="text-gray-600 italic text-sm line-clamp-2">
                      {festival.tagline}
                    </p>
                  </div>

                  <div className="flex items-center text-rose-600 text-sm group-hover:gap-2 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </Card>
            ))}
          </div>
        </div>
      </main>
      {/* footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div
            className="
              flex flex-row flex-nowrap
              justify-between items-center
              py-8 gap-12
            "
          >
            <div className="flex items-start gap-3 max-w-[520px] flex-shrink-0 -ml-4">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg">
                <Mountain className="w-6 h-6 text-white" />
              </div>

              <div>
                <h4 className="text-white text-lg font-semibold leading-none">
                  Bengal Trails
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  Experience the rich heritage, stunning landscapes,<br />
                  and vibrant culture of West Bengal.
                </p>
              </div>
            </div>

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

          <div className="border-t border-gray-800" />

          <div className="text-center text-gray-500 text-sm py-4">
            © 2025 Bengal Trails — West Bengal Tourism. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
