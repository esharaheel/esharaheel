
import React, { useEffect } from "react";
import { Code, Layout, Pencil, Figma } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Tools: React.FC = () => {
  const tools = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe inDesign",
    "Adobe XD",
    "Figma",
    "Canva",
    "Balsamiq",
    "Draw.io",
    "Marvel",
    "InVision",
    "Google Analytics",
    "Treejack",
    "Concepts",
    "MS Office",
  ];

  return (
    <div className="mt-16 hidden-element">
      <h3 className="text-2xl font-bold text-portfolio-deepPurple mb-6">Tools I Use</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <div 
            key={index} 
            className="tool-item"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Layout className="text-portfolio-purple" size={32} />,
      title: "Web Design",
      description: "Creating responsive, user-friendly websites with modern design principles, focusing on both aesthetics and functionality."
    },
    {
      icon: <Figma className="text-portfolio-purple" size={32} />,
      title: "UI/UX Design",
      description: "Developing intuitive user interfaces and experiences, including wireframing, prototyping, and user flow optimization."
    },
    {
      icon: <Pencil className="text-portfolio-purple" size={32} />,
      title: "Graphic Design",
      description: "Crafting visually compelling graphics for various media, from brand identities to marketing materials."
    },
    {
      icon: <Code className="text-portfolio-purple" size={32} />,
      title: "Additional Design Services",
      description: "Providing wireframing, prototyping, storyboarding, analytics analysis, and UML documentation."
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
    <section id="services" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 hidden-element">
          <h2 className="portfolio-section-title">Services</h2>
          <p className="portfolio-section-subtitle mx-auto">
            Professional design services to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card hidden-element"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-portfolio-deepPurple mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 hidden-element">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-bold text-portfolio-deepPurple mb-6">My Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Graphic Design",
                "Web Design",
                "User Experience Design",
                "User Interface Design",
                "Wireframing",
                "Low & High-Fidelity Prototypes",
                "Storyboarding",
                "Analytics Analysis",
                "Data Annotation",
                "UML Documentation"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2 py-2" 
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-2 h-2 rounded-full bg-portfolio-purple"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Tools />
      </div>
    </section>
  );
};

export default Services;
