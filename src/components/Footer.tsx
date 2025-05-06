
import React from "react";
import { Mail, Phone, Linkedin, Globe } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Mail size={18} />,
      href: "mailto:esharaheel11@gmail.com",
      label: "Email"
    },
    {
      icon: <Phone size={18} />,
      href: "tel:+4915254546889",
      label: "Phone"
    },
    {
      icon: <Globe size={18} />,
      href: "https://behance.net/esharaheel",
      label: "Behance"
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/in/esharaheel/",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="bg-portfolio-deepPurple text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-playfair mb-1">Esha Raheel</h2>
            <p className="text-sm text-gray-300">UI/UX, Graphic & Web Designer</p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © {currentYear} Esha Raheel. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Designed with passion and precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
