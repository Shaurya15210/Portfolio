import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Youtube, Twitter, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface FooterSectionProps {
  title?: string;
  navigationLinks?: Array<{ label: string; href: string }>;
  contactEmail?: string;
  contactPhone?: string;
  socialLinks?: Array<{ platform: string; href: string }>;
}

const FooterSection = ({
  title = "Collaborate with me",
  navigationLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
  ],
  contactEmail = "shauryaaasabharwal@gmail.com",
  contactPhone = "+91 96504 47326",
  socialLinks = [
    { platform: "Instagram", href: "https://www.instagram.com/zonex_designs/" },
    { platform: "Youtube", href: "https://www.youtube.com/@Zonex-15" },
    { platform: "Twitter", href: "https://x.com/ZONEX_Designs" },
  ],
}: FooterSectionProps) => {
  return (
    <footer
      id="footer"
      className="bg-black text-white py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-blue-500/10 z-0"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 text-purple-700">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-pink-400">Contact</h3>
            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5 text-pink-400" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
                >
                  {contactEmail}
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-pink-400" />
                <a
                  href={`tel:${contactPhone}`}
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
                >
                  {contactPhone}
                </a>
              </motion.li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                let Icon;
                switch (social.platform) {
                  case "Instagram":
                    Icon = Instagram;
                    break;
                  case "Youtube":
                    Icon = Youtube;
                    break;
                  case "Twitter":
                    Icon = Twitter;
                    break;
                  default:
                    Icon = Instagram;
                }

                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} ZONEX. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
