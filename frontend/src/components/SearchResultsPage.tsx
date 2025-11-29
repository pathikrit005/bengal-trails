// src/components/SearchResultsPage.tsx
import React, { useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, ArrowRight } from "lucide-react";
import { locations } from "../data/locations";
import { festivals } from "../data/festivals";

// Helper for reading query string
function useQS(): URLSearchParams {
  try {
    return new URLSearchParams(window.location.search);
  } catch {
    return new URLSearchParams();
  }
}

// Escape regex special characters
function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Highlight matching part
function highlight(text: string, q: string) {
  if (!q) return text;
  const esc = escapeRegExp(q);
  const re = new RegExp(`(${esc})`, "ig");
  const parts = text.split(re);
  return parts.map((p, i) =>
    re.test(p) ? (
      <mark key={i} className="bg-yellow-200 px-1 rounded">
        {p}
      </mark>
    ) : (
      p
    )
  );
}

export default function SearchResultsPage() {
  const navigate = useNavigate();
  const params = useQS();
  const q = (params.get("q") || "").trim().toLowerCase();

  // --- SEARCH LOCATIONS ---
  const matchedLocations = useMemo(() => {
    if (!q) return [];
    return locations.filter((loc) => {
      const name = loc.name?.toLowerCase() || "";
      const desc = loc.description?.toLowerCase() || "";
      const cat = loc.category?.toLowerCase() || "";
      return name.includes(q) || desc.includes(q) || cat.includes(q);
    });
  }, [q]);

  // --- SEARCH FESTIVALS ---
  const matchedFestivals = useMemo(() => {
    if (!q) return [];
    return festivals.filter((fest) => {
      const name = fest.name?.toLowerCase() || "";
      const tag = fest.tagline?.toLowerCase() || "";
      const place = fest.place?.toLowerCase() || "";
      const desc = fest.description?.toLowerCase() || "";
      return name.includes(q) || tag.includes(q) || place.includes(q) || desc.includes(q);
    });
  }, [q]);

  const totalHits = matchedLocations.length + matchedFestivals.length;

  // --- AUTO REDIRECT IF ONLY 1 RESULT ---
  useEffect(() => {
    if (!q) return;
    if (totalHits === 1) {
      if (matchedLocations.length === 1) {
        navigate(`/location/${matchedLocations[0].id}`);
      } else if (matchedFestivals.length === 1) {
        navigate(`/festival/${matchedFestivals[0].id}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalHits, matchedLocations, matchedFestivals, navigate, q]);

  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Page Content */}
      <main className="container mx-auto px-4 pb-20">
        <h2 className="text-2xl font-semibold mb-6">
          Search Results for <span className="text-orange-600">"{q || "all"}"</span>
        </h2>

        {/* Quick actions */}
        <div className="mb-10 flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => navigate("/destinations")}>
            All Destinations
          </Button>
          <Button variant="outline" size="sm" onClick={() => navigate("/festivals")}>
            All Festivals
          </Button>
          {q && (
            <Button variant="ghost" size="sm" onClick={() => navigate("/search")}>
              Clear
            </Button>
          )}
        </div>

        {/* DESTINATIONS SECTION */}
        <section className="mb-16">
          <h3 className="text-xl font-semibold mb-4">Destinations ({matchedLocations.length})</h3>

          {matchedLocations.length === 0 ? (
            <p className="text-gray-500">No destinations matched.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchedLocations.map((loc) => (
                <Card
                  key={loc.id}
                  className="cursor-pointer hover:shadow-xl transition-all"
                  onClick={() => navigate(`/location/${loc.id}`)}
                >
                  {/* IMAGE: uses local image candidates (from loc.image) and falls back to placeholder */}
                  <div className="relative h-44 overflow-hidden">
                    <ImageWithFallback
                      src={loc.image && loc.image.length > 0 ? loc.image : ["/image/placeholder.jpg"]}
                      alt={loc.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                      <MapPin className="w-4 h-4 text-orange-600" />
                      {loc.category}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {highlight(loc.name, q)}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {highlight(loc.description || "", q)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* FESTIVALS SECTION */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Festivals ({matchedFestivals.length})</h3>

          {matchedFestivals.length === 0 ? (
            <p className="text-gray-500">No festivals matched.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchedFestivals.map((fest) => (
                <Card
                  key={fest.id}
                  className="cursor-pointer hover:shadow-xl transition-all"
                  onClick={() => navigate(`/festival/${fest.id}`)}
                >
                  {/* FESTIVAL IMAGE: show local festival image (fall back to placeholder) */}
                  <div className="relative h-44 overflow-hidden">
                    <ImageWithFallback
                      src={fest.image ? [fest.image] : ["/image/placeholder.jpg"]}
                      alt={fest.name}
                      className="w-full h-full object-cover"
                    />
                    {/* keep subtle overlay so text remains readable, same visual style as destinations */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-rose-700 mb-1">
                      {highlight(fest.name, q)}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {highlight(fest.tagline || fest.description || "", q)}
                    </p>

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">{fest.place}</span>
                      <ArrowRight className="w-4 h-4 text-rose-600" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}