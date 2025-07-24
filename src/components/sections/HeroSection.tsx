import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  stats?: {
    projects?: number;
    experience?: number;
  };
  portraitImage?: string;
}

const HeroSection = ({
  title = "ZONEX",
  subtitle = "Elevating brands through bold, innovative graphic design that captures attention and drives results.",
  ctaText = "Start Now",
  onCtaClick = () => console.log("CTA clicked"),
  stats = {
    projects: 50,
    experience: 2,
  },
  portraitImage = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
}: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-black px-4 py-20 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-blue-500/30 to-fuchsia-500/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-yellow-500/30 to-pink-500/30 blur-3xl rounded-full"></div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Text content */}
        <div className="space-y-8">
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl font-bold text-yellow-400 tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          {/* Statistics */}
          <motion.div
            className="flex gap-12 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <p className="text-4xl md:text-5xl font-bold text-blue-400">
                +{stats.projects}
              </p>
              <p className="text-gray-400">Projects</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-blue-400">
                +{stats.experience}
              </p>
              <p className="text-gray-400">Years of experience</p>
            </div>
          </motion.div>
        </div>

        {/* Right column - Image with graphic elements */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            {/* Main portrait image */}
            <img
              src="https://i.imgur.com/Dh1XC6V.jpeg"
              alt="Designer portrait"
              className="w-full h-full object-cover grayscale contrast-125 z-10 relative"
            />
            {/* Decorative elements */}
            <div className="absolute -top-5 -left-5 w-32 h-32 bg-yellow-400 rounded-full mix-blend-screen z-0 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-500 rounded-full mix-blend-screen z-0 animate-pulse"></div>
            <div className="absolute top-1/4 -right-10 w-24 h-24 bg-pink-500 rounded-full mix-blend-screen z-0 animate-pulse"></div>
            {/* Geometric overlays */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
