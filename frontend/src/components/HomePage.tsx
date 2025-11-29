// src/components/HomePage.tsx
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
  Award,
  Users,
  ArrowRight,
  Search,
  Mountain,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { locations } from "../data/locations";

const sliderImages = [
  {
    url: "/image/locations/kolkata-howrah-bridge.jpg",
    alt: "Howrah Bridge, Kolkata",
    title: "Iconic Howrah Bridge",
    description: "Experience the heart of Kolkata",
  },
  {
    url: "/image/locations/victoria-memorial.jpg",
    alt: "Victoria Memorial, Kolkata",
    title: "Victoria Memorial",
    description: "A testament to colonial grandeur",
  },
  {
    url: "/image/locations/darjeeling-tea.jpg",
    alt: "Darjeeling Tea Gardens",
    title: "Darjeeling Hills and Tea Gardens",
    description: "Scenic tea gardens and mountain views",
  },
  {
    url: "/image/locations/sundarbans.jpg",
    alt: "Sundarbans National Park",
    title: "Sundarbans Wildlife",
    description: "Home of the Royal Bengal Tiger",
  },
  {
    url: "/image/festivals/durga-puja-kolkata.jpg",
    alt: "Indian Festivals",
    title: "Vibrant Festivals",
    description: "Celebrate Bengal's rich culture",
  },
];

const features = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "35+ Destinations",
    description: "Explore diverse locations across West Bengal",
    color: "orange",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Cultural Heritage",
    description: "UNESCO sites and ancient temples",
    color: "purple",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Grand Festivals",
    description: "Experience world-famous celebrations",
    color: "rose",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Local Experiences",
    description: "Authentic Bengali culture and cuisine",
    color: "green",
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slider */}
      <section className="relative">
        <div className="relative h-[600px] bg-gray-900">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl animate-fade-in">
                  <h2 className="mb-4 text-white">{image.title}</h2>
                  <p className="text-xl mb-8 text-gray-200">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-12 flex justify-center">
          <Button
            onClick={() => navigate("/explore")}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-6 text-lg shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105"
          >
            Explore Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose West Bengal?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From majestic mountains to serene beaches, ancient temples to
              vibrant festivals, West Bengal offers an unforgettable journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover:shadow-xl transition-all hover:scale-105 cursor-pointer group border-t-4 border-t-${feature.color}-500`}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${feature.color}-100 text-${feature.color}-600 mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Popular Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through West Bengal&apos;s must-visit locations
            </p>
          </div>

          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-6" style={{ width: "max-content" }}>
              {locations.slice(0, 12).map((location) => (
                <Card
                  key={location.id}
                  className="w-80 flex-shrink-0 overflow-hidden hover:shadow-2xl transition-all cursor-pointer group border-0"
                  onClick={() => navigate(`/location/${location.id}`)}
                >

                  {/*LOCAL IMAGE BLOCK */}
                  <div
                    className="relative overflow-hidden"
                    style={{ width: "100%", aspectRatio: "16/9" }}
                  >
                    <ImageWithFallback
                      src={
                        location.image && location.image.length > 0
                          ? location.image
                          : ["/image/placeholder.jpg"]
                      }
                      alt={location.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-white" />
                        <span className="text-xs text-white/90">
                          {location.category}
                        </span>
                      </div>
                      <h4 className="text-white">{location.name}</h4>
                    </div>
                  </div>

                  <div className="p-4 bg-white">
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {location.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="text-orange-600 hover:text-orange-700 p-0"
                    >
                      Explore <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={() => navigate("/destinations")}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              View All Destinations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
                Experience the rich heritage, stunning landscapes, and vibrant
                culture of West Bengal.
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => navigate("/destinations")}
                    className="hover:text-white transition-colors"
                  >
                    All Destinations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/festivals")}
                    className="hover:text-white transition-colors"
                  >
                    Festivals
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/explore")}
                    className="hover:text-white transition-colors"
                  >
                    Explore
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => navigate("/destinations#kolkata")}
                    className="hover:text-white transition-colors"
                  >
                    Kolkata & Nearby
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/destinations#heritage")}
                    className="hover:text-white transition-colors"
                  >
                    Culture & Heritage
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/destinations#hills")}
                    className="hover:text-white transition-colors"
                  >
                    Hills & Adventure
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/destinations#beaches")}
                    className="hover:text-white transition-colors"
                  >
                    Beaches & Islands
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/destinations#wildlife")}
                    className="hover:text-white transition-colors"
                  >
                    Wildlife & Nature
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Contact</h4>
              <p className="text-gray-400">
                Bengal Trails
                <br />
                Kolkata, West Bengal
                <br />
                India
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Bengal Trails - West Bengal Tourism. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
