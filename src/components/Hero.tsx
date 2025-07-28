import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Leaf, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-composting.jpg";
import marketImage from "@/assets/market-waste.jpg";
import gardenImage from "@/assets/community-garden.jpg";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage,
      title: "Transform Waste into Wealth",
      subtitle: "Connect with local collectors and turn your organic waste into valuable compost",
      cta: "Schedule Pickup"
    },
    {
      image: marketImage,
      title: "Smart Market Solutions",
      subtitle: "Efficient waste collection for markets, restaurants, and businesses across Kenya",
      cta: "Find Collectors"
    },
    {
      image: gardenImage,
      title: "Premium Compost Marketplace",
      subtitle: "Buy high-quality compost manure directly from certified producers",
      cta: "Shop Compost"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    { icon: Recycle, value: "50K+", label: "Waste Pickups" },
    { icon: Leaf, value: "25K+", label: "Tons Composted" },
    { icon: TrendingUp, value: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 min-h-screen flex items-center">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-medium backdrop-blur-sm">
              🌱 Your No.1 Organic Waste Partner & Compost Finder
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to <br />
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              CompostConnect
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
              {slides[currentSlide].cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};