import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const AboutSection = ({
  title = "About Shaurya Sabharwal",
  description = "I'm a passionate graphic designer with a unique approach to visual storytelling. My work combines bold typography, vibrant colors, and artistic collage effects to create designs that captivate and communicate. With over 2 years of experience, I've developed a distinctive style that merges classic design principles with contemporary aesthetics.",
  imageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  ctaText = "Learn More",
  onCtaClick = () => console.log("CTA clicked"),
}: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="w-full py-24 bg-gradient-to-tr from-purple-900/20 to-blue-500/10 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-sans tracking-tight">
              {title}
            </h2>
            <div className="w-20 h-1 bg-blue-500"></div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              {/* Base image - black and white */}
              <img
                src="https://i.imgur.com/JC9sYRd.jpeg"
                alt="Designer portrait"
                className="w-full h-auto rounded-lg grayscale object-cover"
                style={{ filter: "contrast(1.2)" }}
              />

              {/* Collage effect elements */}
              <motion.div
                className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-pink-500 rounded-full opacity-70 mix-blend-screen"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute bottom-[-30px] left-[-30px] w-60 h-60 bg-yellow-400 rounded-full opacity-60 mix-blend-screen"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600 rounded-md opacity-50 mix-blend-screen"
                animate={{
                  rotate: [0, 45, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Geometric overlay elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,0 L100,0 L100,100 L0,100 Z"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M25,25 L75,25 L75,75 L25,75 Z"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
