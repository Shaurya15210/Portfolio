import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import PortfolioSection from "./sections/PortfolioSection";
import FooterSection from "./sections/FooterSection";
import ContactForm from "./ui/ContactForm";
import ProjectModal from "./ui/ProjectModal";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(true);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const handleOpenContactForm = () => {
    setIsContactFormOpen(true);
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsProjectModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Navigation */}
      <Navbar transparent={true} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection onCtaClick={handleOpenContactForm} />
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AboutSection onCtaClick={handleOpenContactForm} />
        </motion.div>

        {/* Portfolio Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <PortfolioSection onItemClick={handleProjectClick} />
        </motion.div>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FooterSection />
        </motion.div>
      </main>

      {/* Modals */}
      <ContactForm
        open={isContactFormOpen}
        onOpenChange={setIsContactFormOpen}
      />

      {selectedProject && (
        <ProjectModal
          project={{
            title: selectedProject.title,
            description: selectedProject.description,
            client: "Client Name",
            year: selectedProject.year,
            category: selectedProject.category,
            images: [
              {
                src: selectedProject.image,
                alt: selectedProject.title,
              },
            ],
            link: "#",
          }}
          isOpen={isProjectModalOpen}
          onClose={() => setIsProjectModalOpen(false)}
          fullScreenMode={true}
        />
      )}
    </div>
  );
};

export default Home;
