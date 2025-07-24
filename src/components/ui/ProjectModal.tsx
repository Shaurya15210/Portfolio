import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Share2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectDetails {
  title: string;
  description: string;
  client: string;
  year: string;
  category: string;
  images: ProjectImage[];
  link?: string;
}

interface ProjectModalProps {
  project?: ProjectDetails;
  isOpen?: boolean;
  onClose?: () => void;
  fullScreenMode?: boolean;
}

const ProjectModal = ({
  project = {
    title: "Neon Collage Campaign",
    description:
      "A vibrant advertising campaign featuring bold typography and collage-style imagery with neon accents. The project aimed to create a visually striking identity for a fashion brand's seasonal collection.",
    client: "Fashion Brand X",
    year: "2023",
    category: "Ad Campaign",
    images: [
      {
        src: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80",
        alt: "Neon collage design with fashion model",
      },
      {
        src: "https://images.unsplash.com/photo-1633789638578-b1644efe6c4d?w=800&q=80",
        alt: "Vibrant typography layout",
      },
      {
        src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
        alt: "Neon geometric patterns",
      },
    ],
    link: "https://example.com/project",
  },
  isOpen = true,
  onClose = () => {},
  fullScreenMode = false,
}: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className={cn(
          "bg-black text-white p-0 overflow-hidden",
          fullScreenMode ? "max-w-[95vw] max-h-[95vh]" : "max-w-6xl",
        )}
      >
        {fullScreenMode ? (
          /* Full Screen Image Mode */
          <div className="relative bg-black w-full h-full overflow-hidden">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentImageIndex === index ? 1 : 0,
                  y: currentImageIndex === index ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "absolute inset-0 w-full h-full",
                  currentImageIndex === index ? "z-10" : "z-0",
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}

            {/* Navigation Arrows (only if multiple images) */}
            {project.images.length > 1 && (
              <div className="absolute z-20 bottom-4 right-4 flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevImage}
                  className="bg-black/50 border-white/20 hover:bg-white/20 text-white rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextImage}
                  className="bg-black/50 border-white/20 hover:bg-white/20 text-white rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            )}

            {/* Image Counter (only if multiple images) */}
            {project.images.length > 1 && (
              <div className="absolute z-20 bottom-4 left-4 bg-black/50 px-3 py-1 rounded-full text-xs font-medium">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            )}

            {/* Title Overlay */}
            <div className="absolute top-4 left-4 z-20">
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            </div>
          </div>
        ) : (
          /* Regular Mode with Details */
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            {/* Image Section */}
            <div className="relative bg-black h-[300px] md:h-[600px] overflow-hidden">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentImageIndex === index ? 1 : 0,
                    y: currentImageIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "absolute inset-0 w-full h-full",
                    currentImageIndex === index ? "z-10" : "z-0",
                  )}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
                </motion.div>
              ))}

              {/* Navigation Arrows */}
              <div className="absolute z-20 bottom-4 right-4 flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevImage}
                  className="bg-black/50 border-white/20 hover:bg-white/20 text-white rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextImage}
                  className="bg-black/50 border-white/20 hover:bg-white/20 text-white rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              {/* Image Counter */}
              <div className="absolute z-20 bottom-4 left-4 bg-black/50 px-3 py-1 rounded-full text-xs font-medium">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 bg-black relative">
              <DialogHeader>
                <DialogTitle className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-lg text-gray-300 mt-4">
                  {project.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-8 space-y-6">
                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Client</p>
                    <p className="font-medium text-white">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Year</p>
                    <p className="font-medium text-white">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Category</p>
                    <p className="font-medium text-white">{project.category}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-6">
                  {project.link && (
                    <Button
                      className="bg-white text-black hover:bg-white/90 rounded-full"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Project
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 rounded-full"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/20 to-transparent -z-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/20 to-transparent -z-10"></div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
