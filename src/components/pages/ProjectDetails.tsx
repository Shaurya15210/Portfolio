import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../layout/Navbar";
import FooterSection from "../sections/FooterSection";

interface ProjectDetailsProps {
  projectId?: string;
}

const projects = [
  {
    id: "1",
    title: "Podcast Cover Design",
    description:
      "Bold and eye-catching podcast cover design featuring vibrant colors and dynamic typography to capture audience attention.",
    image: "https://i.imgur.com/xjk41fu.jpeg",
    category: "Graphic Design",
    year: "2023",
    client: "Entertainment Studio",
  },
  {
    id: "2",
    title: "Music Promotion Thumbnail",
    description:
      "Striking thumbnail design for music promotion featuring custom typography and visual effects to enhance engagement.",
    image: "https://i.imgur.com/z8UtjeM.jpeg",
    category: "Digital Marketing",
    year: "2023",
    client: "Music Artist",
  },
  {
    id: "3",
    title: "Crime Documentary Poster",
    description:
      "Gritty and atmospheric documentary poster design with collage elements and bold typography to convey the serious tone.",
    image: "https://i.imgur.com/DXgLCEd.jpeg",
    category: "Poster Design",
    year: "2022",
    client: "Production Company",
  },
  {
    id: "4",
    title: "Game Character Guide",
    description:
      "Vibrant and dynamic character guide design for gaming content featuring bold typography and eye-catching visual elements.",
    image: "https://i.imgur.com/L1x7Dq4.jpeg",
    category: "Gaming Content",
    year: "2023",
    client: "Gaming Channel",
  },
  {
    id: "5",
    title: "YouTube Thumbnail Design",
    description:
      "High-impact YouTube thumbnail design with attention-grabbing typography and visual composition to increase click-through rates.",
    image: "https://i.imgur.com/fbagPki.jpeg",
    category: "Content Creation",
    year: "2023",
    client: "Content Creator",
  },
  {
    id: "6",
    title: "Viral Marketing Design",
    description:
      "Bold marketing design with striking typography and visual elements designed to maximize social media engagement.",
    image: "https://i.imgur.com/IFxeF16.jpeg",
    category: "Social Media",
    year: "2022",
    client: "Tech Company",
  },
  {
    id: "7",
    title: "Travel Guide Cover",
    description:
      "Eye-catching travel guide cover featuring iconic landmarks and vibrant design elements to inspire wanderlust.",
    image: "https://i.imgur.com/OZ1jk3C.jpeg",
    category: "Travel Content",
    year: "2022",
    client: "Travel Agency",
  },
  {
    id: "8",
    title: "Entertainment Show Artwork",
    description:
      "Dynamic and colorful artwork for an entertainment show featuring bold typography and visual composition to attract viewers.",
    image: "https://i.imgur.com/WOvNfL6.jpeg",
    category: "Entertainment",
    year: "2023",
    client: "Media Company",
  },
];

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  projectId: propProjectId,
}) => {
  const params = useParams<{ projectId: string }>();
  const projectId = propProjectId || params.projectId;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-blue-400 hover:text-blue-300">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar transparent={true} />

      <main className="container mx-auto px-4 py-20">
        <Link to="/">
          <Button
            variant="ghost"
            className="mb-8 text-gray-400 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-lg bg-[#111]"
          >
            <img src={project.image} alt={project.title} className="w-full" />
            {/* Colored Overlay Effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0070f3] opacity-30 rounded-full -translate-x-1/4 -translate-y-1/4 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#ff00a0] opacity-30 rounded-full translate-x-1/4 translate-y-1/4 blur-2xl" />
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8">{project.description}</p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm text-gray-400 mb-1">CLIENT</h3>
                <p className="text-lg">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400 mb-1">YEAR</h3>
                <p className="text-lg">{project.year}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400 mb-1">CATEGORY</h3>
                <p className="text-lg">{project.category}</p>
              </div>
            </div>

            <Button className="bg-[#0070f3] hover:bg-[#0060d3] text-white px-8 py-6 text-lg rounded-full group">
              <span>View Live Project</span>
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Related Projects Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== projectId)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  to={`/project/${relatedProject.id}`}
                  key={relatedProject.id}
                >
                  <motion.div
                    className="relative overflow-hidden group bg-[#111] rounded-lg cursor-pointer"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      className="w-full transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-90" />
                    <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {relatedProject.category}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default ProjectDetails;
