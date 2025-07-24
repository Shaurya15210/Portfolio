import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title?: string;
  description?: string;
  image?: string;
  index?: number;
}

const ServiceCard = ({
  title = "Service Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nisi ut tellus eleifend.",
  image = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  index = 0,
}: ServiceCardProps) => {
  const colors = ["#00FFFF", "#FF00FF", "#FFFF00"];
  const color = colors[index % colors.length];

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg bg-black text-white h-[400px] group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Background image with grayscale filter */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover filter grayscale transition-all duration-300"
        />
      </div>

      {/* Colored overlay shape */}
      <div
        className="absolute -right-20 -top-20 w-40 h-40 rounded-full opacity-70 transition-all duration-500 group-hover:scale-150"
        style={{ backgroundColor: color }}
      />

      {/* Cut-out shape */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-black transform rotate-45 translate-x-[-50%] translate-y-[50%]" />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-bold mb-3 font-['Bebas_Neue',_sans-serif]">
            {title}
          </h3>
          <p className="text-gray-300 max-w-[80%]">{description}</p>
        </div>

        <motion.div
          className="flex items-center space-x-2 text-sm font-medium"
          whileHover={{ x: 5 }}
        >
          <span style={{ color }}>Learn more</span>
          <ArrowRight size={16} style={{ color }} />
        </motion.div>
      </div>
    </motion.div>
  );
};

interface ServicesSectionProps {
  title?: string;
  description?: string;
  services?: ServiceCardProps[];
}

const ServicesSection = ({
  title = "MY SERVICES",
  description = "Elevate your brand with cutting-edge design solutions that combine bold aesthetics with strategic thinking.",
  services = [
    {
      title: "Ad Campaigns",
      description:
        "Strategic visual storytelling that captures attention and drives engagement across all platforms.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
      index: 0,
    },
    {
      title: "Social Media Management",
      description:
        "Cohesive visual identity and content strategy that builds community and enhances brand presence.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      index: 1,
    },
    {
      title: "Creative Strategy",
      description:
        "Innovative design thinking that solves problems and creates memorable brand experiences.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      index: 2,
    },
  ],
}: ServicesSectionProps) => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-['Montserrat',_sans-serif]">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl">{description}</p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-6 text-lg rounded-full transition-all duration-300">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
