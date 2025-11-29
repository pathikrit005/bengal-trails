// src/components/ExplorePage.tsx
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "./ui/card";
import {
  MapPin,
  Mountain,
  Waves,
  TreePine,
  Landmark,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { locations } from "../data/locations";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function ExplorePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  const locationsByCategory = {
    "Kolkata & Nearby": locations.filter(
      (loc) => loc.category === "Kolkata & Nearby"
    ),
    "Culture & Heritage": locations.filter(
      (loc) => loc.category === "Culture & Heritage"
    ),
    "Hills & Adventure": locations.filter(
      (loc) => loc.category === "Hills & Adventure"
    ),
    "Beaches & Islands": locations.filter(
      (loc) => loc.category === "Beaches & Islands"
    ),
    "Wildlife & Nature": locations.filter(
      (loc) => loc.category === "Wildlife & Nature"
    ),
    Gateway: locations.filter((loc) => loc.category === "Gateway"),
  };

  // Use the icon *components* (not instantiated JSX) so we can size/color them consistently
  const categoryIconComponents: Record<string, any> = {
    "Kolkata & Nearby": Landmark,
    "Culture & Heritage": Sparkles,
    "Hills & Adventure": Mountain,
    "Beaches & Islands": Waves,
    "Wildlife & Nature": TreePine,
    Gateway: MapPin,
  };

  // per-category style map (text color, icon background, border)
  const styles: Record<
    string,
    { text: string; iconBg: string; border: string; headerBg?: string }
  > = {
    "Kolkata & Nearby": {
      text: "text-orange-600",
      iconBg: "bg-orange-500",
      border: "border-orange-200",
      headerBg: "bg-orange-100",
    },
    "Culture & Heritage": {
      text: "text-purple-600",
      iconBg: "bg-purple-500",
      border: "border-purple-200",
      headerBg: "bg-purple-100",
    },
    "Hills & Adventure": {
      text: "text-green-700",
      iconBg: "bg-green-600",
      border: "border-green-200",
      headerBg: "bg-green-50",
    },
    "Beaches & Islands": {
      text: "text-blue-600",
      iconBg: "bg-blue-500",
      border: "border-blue-200",
      headerBg: "bg-blue-50",
    },
    "Wildlife & Nature": {
      text: "text-emerald-700",
      iconBg: "bg-emerald-600",
      border: "border-emerald-200",
      headerBg: "bg-emerald-50",
    },
    Gateway: {
      text: "text-amber-600",
      iconBg: "bg-amber-500",
      border: "border-amber-200",
      headerBg: "bg-amber-50",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-6">
      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-16">
            <ImageWithFallback
              src="/image/locations/kolkata-howrah-bridge.jpg"
              alt="West Bengal"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/90 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-white mb-4">Discover West Bengal</h2>
                <p className="text-white text-xl max-w-2xl mx-auto">
                  From the bustling streets of Kolkata to the serene hills of
                  Darjeeling, explore 35+ stunning destinations
                </p>
              </div>
            </div>
          </div>

          {/* Sections for each category */}
          {Object.keys(locationsByCategory).map((category) => {
            const id =
              category === "Kolkata & Nearby"
                ? "kolkata"
                : category === "Culture & Heritage"
                ? "heritage"
                : category === "Hills & Adventure"
                ? "hills"
                : category === "Beaches & Islands"
                ? "beaches"
                : category === "Wildlife & Nature"
                ? "wildlife"
                : "gateway";

            const s = styles[category] || styles["Kolkata & Nearby"];
            const Icon = categoryIconComponents[category] || Landmark;

            return (
              <div
                id={id}
                key={category}
                className={`mb-20 bg-white rounded-3xl p-8 shadow-lg scroll-mt-20`}
              >
                <div
                  className={`flex items-center justify-between mb-8 pb-4 ${s.border}`}
                >
                  <div className="flex items-center gap-4">
                    {/* --- RESTORED ICON LOOK: colored rounded box + larger white icon (just like pehle) --- */}
                    <div className={`${s.iconBg} p-3 rounded-2xl shadow-md inline-flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <h3 className={`${s.text} mb-1`}>{category}</h3>
                      <p className="text-gray-600 text-sm">
                        {locationsByCategory[category].length} destinations to
                        explore
                      </p>
                    </div>
                  </div>

                  {/* Optional small action on right */}
                  <div>
                    <button
                      onClick={() => {
                        const el = document.getElementById(id);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="text-sm text-gray-500 hover:underline"
                    >
                      View
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {locationsByCategory[category].map((location) => (
                    <Card
                      key={location.id}
                      className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 group"
                      onClick={() => navigate(`/location/${location.id}`)}
                    > 
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback
                          src={location.image}
                          alt={location.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-5 h-5 text-white" />
                            <span className="text-xs text-white/90">{category}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 bg-white">
                        <h4 className={`mb-3 group-hover:opacity-95 transition-colors ${s.text}`}>
                          {location.name}
                        </h4>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                          {location.description}
                        </p>
                        <div className={`flex items-center ${s.text} group-hover:gap-2 transition-all`}>
                          <span className="text-sm">Explore destination</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
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
