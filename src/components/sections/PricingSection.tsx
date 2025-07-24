import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PricingSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  backgroundImage?: string;
}

const PricingSection = ({
  title = "Pricing",
  description = "Flexible pricing options tailored to your specific needs. Each project is unique, and so is my approach to pricing. Let's discuss how I can bring your vision to life within your budget.",
  ctaText = "Get a Quote",
  backgroundImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
}: PricingSectionProps) => {
  return (
    <section
      className="w-full py-24 bg-black text-white overflow-hidden"
      id="pricing"
    >
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.h2
              className="text-6xl md:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 rounded-full"
                size="lg"
              >
                {ctaText}
              </Button>
            </motion.div>
          </div>

          {/* Image with Collage Effect */}
          <motion.div
            className="relative h-[500px] w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <img
                src={backgroundImage}
                alt="Artistic collage"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Colorful Overlay Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute bottom-20 -left-10 w-32 h-32 bg-pink-500 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-400 rounded-full opacity-50 blur-xl"></div>

            {/* Geometric Shapes */}
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white opacity-60 transform rotate-12"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-pink-400 opacity-70 transform -rotate-12"></div>

            {/* Text Overlay */}
            <div className="absolute bottom-10 left-10 text-5xl font-bold text-white opacity-80 mix-blend-difference">
              ZONEX
            </div>
          </motion.div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-700 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default PricingSection;
