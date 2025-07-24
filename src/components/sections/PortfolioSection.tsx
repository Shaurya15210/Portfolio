import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface GalleryImage {
	id: string;
	image: string;
	title?: string;
	category?: string;
}

interface PortfolioSectionProps {
	title?: string;
	subtitle?: string;
	images?: GalleryImage[];
	images2?: GalleryImage[];
	images3?: GalleryImage[];
	images4?: GalleryImage[];
	onItemClick?: (project: any) => void;
}

const defaultGalleryImages: GalleryImage[] = [
	{
		id: "1",
		image: "/thumbnails/GTA-V.jpg",
		title: "GTA V Thumbnail Cover",
		category: "Travel Content",
	},
	{
		id: "2",
		image: "/thumbnails/Speed.jpg",
		title: "IShowSpeed Thumbnail Cover",
		category: "Entertainment",
	},
	{
		id: "3",
		image: "/thumbnails/1947.jpg",
		title: "History Thumbnail Cover",
		category: "Entertainment",
	},
	{
		id: "4",
		image: "/thumbnails/Valorant-2.jpg",
		title: "Game Character Guide",
		category: "Gaming Content",
	},
	{
		id: "5",
		image: "/thumbnails/IranVsIsrael.jpg",		
		title: "Documentary Thumbnail Cover",
		category: "Digital Art",
	},	
	{
		id: "6",
		image: "/thumbnails/Anvikshiki.jpg",
		title: "History Thumbnail Cover",
		category: "Entertainment",
	},
];

const defaultGalleryImages2: GalleryImage[] = [
	{
		id: "1",
		image: "/thumbnails/JesseShowalter.jpg",
		title: "Code With AI Thumbnail",
		category: "Travel Content",
	},
	{
		id: "2",
		image: "/thumbnails/ED.jpg",
		title: "Food Content Thumbnail",
		category: "Digital Art",
	},
	{
		id: "3",
		image: "/thumbnails/DhruvRatheeThumbnail.jpg",
		title: "Dhruv Rathee Thumbnail Cover",
		category: "Entertainment",
	},
	{
		id: "4",
		image: "/thumbnails/JulianGoldie.jpg",
		title: "Gemini AI Thumbnail Cover",
		category: "Digital Art",
	},
	{
		id: "5",
		image: "/thumbnails/LebronJames.jpg",
		title: "Basketball Lebron Cover",
		category: "Travel Content",
	},
	{
		id: "6",
		image: "/thumbnails/JustinM.jpg",
		title: "Affordable House Thumbnail Cover",
		category: "Digital Art",
	},
];
const defaultGalleryImages3: GalleryImage[] = [
	{
		id: "1",
		image: "/thumbnails/SamayPodcast.jpg",
		title: "Samay Podcast Thumbnail Cover",
		category: "Graphic Design",
	},
	{
		id: "2",
		image: "/thumbnails/DetectiveThumbnail.jpg",
		title: "Crime Documentary Poster",
		category: "Poster Design",
	},
	{
		id: "3",
		image: "/thumbnails/TheBig4.jpg",
		title: "Big 4 Thumbnail Cover",
		category: "Digital Art",
	},
	{
		id: "4",
		image: "/thumbnails/Mukesh2.jpg",
		title: "Reverse Age Thumbnail",
		category: "Digital Art",
	},
	{
		id: "5",
		image: "/thumbnails/Matthew.jpg",
		title: "Motivation Video Thumbnail Cover",
		category: "Digital Art",
	},
	{
		id: "6",
		image: "/thumbnails/Mukesh1.jpg",
		title: "Live Longer Thumbnail Cover",
		category: "Digital Art",
	},
];
const defaultGalleryImages4: GalleryImage[] = [
	{
		id: "1",
		image: "/thumbnails/Ozempic.jpg",
		title: "Ozempic Thumbnail Cover",
		category: "Informative Content",
	},
	{
		id: "2",
		image: "/thumbnails/Ayush.jpg",
		title: "Indian History Thumbnail Cover",
		category: "Travel Content",
	},
	{
		id: "3",
		image: "/thumbnails/BenAlistor.jpg",
		title: "Money Making Hacks Cover",
		category: "Digital Art",
	},
	{
		id: "4",
		image: "/thumbnails/ACThumbnail-2.jpg",
		title: "Brand Scaling Cover",
		category: "Digital Art",
	},
	{
		id: "5",
		image: "/thumbnails/MRBEAST-2.jpg",
		title: "YouTube Thumbnail Design",
		category: "Content Creation",
	},
	{
		id: "6",
		image: "/thumbnails/NewMoneyThumbnail-2.jpg",
		title: "Views Hack Thumbnail Cover",
		category: "Social Media",
	},
];

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
	title = "MY PORTFOLIO",
	subtitle = "Explore my creative projects featuring bold designs, vibrant colors, and artistic collage effects that push the boundaries of conventional design.",
	images = defaultGalleryImages,
	images2 = defaultGalleryImages2,
	images3 = defaultGalleryImages3,
	images4 = defaultGalleryImages4,
	onItemClick,
}) => {
	const [hoveredImage, setHoveredImage] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const navigate = useNavigate();

	const handleProjectClick = (projectId: string) => {
		if (onItemClick) {
			// If onItemClick is provided, use it (for modal display in home component)
			const project = images.find((img) => img.id === projectId);
			if (project) {
				onItemClick(project);
			}
		} else {
			// Otherwise navigate to the project details page
			navigate(`/project/${projectId}`);
		}
	};

	const handleRightClick = () => {
		if (currentPage === 4) {
			setCurrentPage(1);
			return;
		};
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handleLeftClick = () => {
		if (currentPage === 1) return;
		setCurrentPage((prevPage) => prevPage - 1);
	};

	return (
		<section
			className="w-full py-20 bg-gradient-to-tr from-purple-900/20 to-blue-500/10 text-white"
			id="portfolio"
		>
			<div className="container mx-auto px-4 md:px-8 ">
				{/* Section Header */}
				<div className="mb-16">
					<motion.h2
						className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-green-400"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						{title}
					</motion.h2>
					<motion.p
						className="text-lg md:text-xl text-gray-300 max-w-3xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						{subtitle}
					</motion.p>
				</div>

				{/* Gallery Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6">
					{currentPage === 1 &&
						images.map((item, index) => (
							<motion.div
								key={item.id}
								className={`relative overflow-hidden group bg-[#111] border-2 border-gray-700 rounded-lg cursor-pointer ${
									index >= images.length - 3 ? "aspect-auto" : ""
								}`}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 * index }}
								onMouseEnter={() => setHoveredImage(item.id)}
								onMouseLeave={() => setHoveredImage(null)}
								onClick={() => handleProjectClick(item.id)}
							>
								{/* Project Image with Overlay */}
								<div
									className={`relative overflow-hidden ${
										index >= images.length - 3 ? "h-auto" : ""
									}`}
								>
									<img
										src={item.image}
										alt={item.title || `Gallery image ${item.id}`}
										className={`w-full transition-transform duration-700 ease-out group-hover:scale-110 ${
											index >= images.length - 3
												? "object-contain"
												: "object-cover"
										}`}
									/>

									{/* Colored Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-90" />

									{/* Geometric Shape Overlay */}
									<div className="absolute top-0 right-0 w-32 h-32 bg-[#0070f3] opacity-0 rounded-full -translate-x-1/4 -translate-y-1/4 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
									<div className="absolute bottom-0 left-0 w-24 h-24 bg-[#ff00a0] opacity-0 rounded-full translate-x-1/4 translate-y-1/4 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />

									{/* Project Title Overlay (visible on hover) */}
									{item.title && (
										<div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											<h3 className="text-xl font-bold">{item.title}</h3>
											{item.category && (
												<p className="text-sm text-gray-300">{item.category}</p>
											)}
										</div>
									)}
								</div>
							</motion.div>
						))}
					{currentPage === 2 &&
						images2.map((item, index) => (
							<motion.div
								key={item.id}
								className={`relative overflow-hidden group border-2 border-gray-700 bg-[#111] rounded-lg cursor-pointer ${
									index >= images.length - 3 ? "aspect-auto" : ""
								}`}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 * index }}
								onMouseEnter={() => setHoveredImage(item.id)}
								onMouseLeave={() => setHoveredImage(null)}
								onClick={() => handleProjectClick(item.id)}
							>
								{/* Project Image with Overlay */}
								<div
									className={`relative overflow-hidden ${
										index >= images.length - 3 ? "h-auto" : ""
									}`}
								>
									<img
										src={item.image}
										alt={item.title || `Gallery image ${item.id}`}
										className={`w-full transition-transform duration-700 ease-out group-hover:scale-110 ${
											index >= images.length - 3
												? "object-contain"
												: "object-cover"
										}`}
									/>

									{/* Colored Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-90" />

									{/* Geometric Shape Overlay */}
									<div className="absolute top-0 right-0 w-32 h-32 bg-[#0070f3] opacity-0 rounded-full -translate-x-1/4 -translate-y-1/4 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
									<div className="absolute bottom-0 left-0 w-24 h-24 bg-[#ff00a0] opacity-0 rounded-full translate-x-1/4 translate-y-1/4 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />

									{/* Project Title Overlay (visible on hover) */}
									{item.title && (
										<div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											<h3 className="text-xl font-bold">{item.title}</h3>
											{item.category && (
												<p className="text-sm text-gray-300">{item.category}</p>
											)}
										</div>
									)}
								</div>
							</motion.div>
						))}
					{currentPage === 3 &&
						images3.map((item, index) => (
							<motion.div
								key={item.id}
								className={`relative overflow-hidden group border-2 border-gray-700 bg-[#111] rounded-lg cursor-pointer ${
									index >= images.length - 3 ? "aspect-auto" : ""
								}`}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 * index }}
								onMouseEnter={() => setHoveredImage(item.id)}
								onMouseLeave={() => setHoveredImage(null)}
								onClick={() => handleProjectClick(item.id)}
							>
								{/* Project Image with Overlay */}
								<div
									className={`relative overflow-hidden ${
										index >= images.length - 3 ? "h-auto" : ""
									}`}
								>
									<img
										src={item.image}
										alt={item.title || `Gallery image ${item.id}`}
										className={`w-full transition-transform duration-700 ease-out group-hover:scale-110 ${
											index >= images.length - 3
												? "object-contain"
												: "object-cover"
										}`}
									/>

									{/* Colored Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-90" />

									{/* Geometric Shape Overlay */}
									<div className="absolute top-0 right-0 w-32 h-32 bg-[#0070f3] opacity-0 rounded-full -translate-x-1/4 -translate-y-1/4 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
									<div className="absolute bottom-0 left-0 w-24 h-24 bg-[#ff00a0] opacity-0 rounded-full translate-x-1/4 translate-y-1/4 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />

									{/* Project Title Overlay (visible on hover) */}
									{item.title && (
										<div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											<h3 className="text-xl font-bold">{item.title}</h3>
											{item.category && (
												<p className="text-sm text-gray-300">{item.category}</p>
											)}
										</div>
									)}
								</div>
							</motion.div>
						))}
					{currentPage === 4 &&
						images4.map((item, index) => (
							<motion.div
								key={item.id}
								className={`relative overflow-hidden group border-2 border-gray-700 bg-[#111] rounded-lg cursor-pointer ${
									index >= images.length - 3 ? "aspect-auto" : ""
								}`}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 * index }}
								onMouseEnter={() => setHoveredImage(item.id)}
								onMouseLeave={() => setHoveredImage(null)}
								onClick={() => handleProjectClick(item.id)}
							>
								{/* Project Image with Overlay */}
								<div
									className={`relative overflow-hidden ${
										index >= images.length - 3 ? "h-auto" : ""
									}`}
								>
									<img
										src={item.image}
										alt={item.title || `Gallery image ${item.id}`}
										className={`w-full transition-transform duration-700 ease-out group-hover:scale-110 ${
											index >= images.length - 3
												? "object-contain"
												: "object-cover"
										}`}
									/>

									{/* Colored Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-90" />

									{/* Geometric Shape Overlay */}
									<div className="absolute top-0 right-0 w-32 h-32 bg-[#0070f3] opacity-0 rounded-full -translate-x-1/4 -translate-y-1/4 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
									<div className="absolute bottom-0 left-0 w-24 h-24 bg-[#ff00a0] opacity-0 rounded-full translate-x-1/4 translate-y-1/4 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />

									{/* Project Title Overlay (visible on hover) */}
									{item.title && (
										<div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											<h3 className="text-xl font-bold">{item.title}</h3>
											{item.category && (
												<p className="text-sm text-gray-300">{item.category}</p>
											)}
										</div>
									)}
								</div>
							</motion.div>
						))}
				</div>
				<div className="flex justify-center gap-4 font-semibold text-xl">
					<div
						className="rounded-full hover:bg-purple-600 cursor-pointer w-8 h-8 border-1 flex items-center justify-center border-white"
            onClick={() => handleLeftClick()}
					>
						<ChevronLeft />
					</div>
					<div
						className={`rounded-full ${
							currentPage === 1 ? "bg-purple-700" : ""
						} hover:bg-purple-600 cursor-pointer w-8 h-8 border-1 text-center leading-8 border-white`}
            onClick={() => setCurrentPage(1)}
					>
						1
					</div>
					<div
						className={`rounded-full ${
							currentPage === 2 ? "bg-purple-700" : ""
						} hover:bg-purple-600 cursor-pointer w-8 h-8 border-1 text-center leading-8 border-white`}
            onClick={() => setCurrentPage(2)}
					>
						2
					</div>
					<div
						className={`rounded-full ${
							currentPage === 3 ? "bg-purple-700" : ""
						} hover:bg-purple-600 cursor-pointer w-8 h-8 border-1 text-center leading-8 border-white`}
            onClick={() => setCurrentPage(3)}
					>
						3
					</div>
					<div
						className={`rounded-full ${
							currentPage === 4 ? "bg-purple-700" : ""
						} hover:bg-purple-600 cursor-pointer w-8 h-8 border-1 text-center leading-8 border-white`}
            onClick={() => setCurrentPage(4)}
					>
						4
					</div>
					<div
						className="rounded-full hover:bg-purple-600 cursor-pointer w-8 h-8 border-1 flex items-center justify-center border-white"
            onClick={() => handleRightClick()}
					>
						<ChevronRight />
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioSection;
