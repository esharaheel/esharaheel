
import React, { useEffect } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Beauty Products Website",
      description: "A modern, easy-to-use platform for all your beauty needs with simple navigation, attractive product displays, and personalized recommendations.",
      link: "https://www.behance.net/gallery/187006191/Beauty-Products-Website",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6a7229187006191.657f0d4f4c572.png"
    },
    {
      title: "E-Restaurant Website",
      description: "Modern platform for exploring and ordering food with simple navigation, attractive meal displays, and personalized recommendations.",
      link: "https://www.behance.net/gallery/185619199/E-Restaurant",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ffe95e185619199.6566bf895633a.png"
    },
    {
      title: "Smart Surveillance",
      description: "AI-based threat detection system utilizing advanced algorithms to monitor real-time footage and detect weapons for enhancing safety.",
      link: "https://www.behance.net/gallery/185615853/Smart-Surveillance",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/1b56b4185615853.65675708df255.png"
    },
    {
      title: "The World of Travel",
      description: "A modern, user-friendly platform for discovering and booking trips with straightforward navigation and beautiful destination displays.",
      link: "https://www.behance.net/gallery/185691851/The-World-Of-Tavel",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e877f7185691851.6566e4b7c6ba6.png"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible-element");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".hidden-element");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 hidden-element">
          <h2 className="portfolio-section-title">Projects</h2>
          <p className="portfolio-section-subtitle mx-auto">
            Showcase of innovative design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card hidden-element"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-portfolio-purple hover:text-portfolio-darkPurple font-medium"
                >
                  View on Behance
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
