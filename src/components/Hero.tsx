
import React, { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white via-purple-50 to-white"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="space-y-6 max-w-xl">
              <p className="text-portfolio-purple font-medium hidden-element">
                Available for work
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-deepPurple hidden-element">
                Hello! I'm Esha <span className="inline-block animate-pulse-slow">👏</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-portfolio-darkPurple font-playfair hidden-element">
                Real Things. Experienced Designer.
              </h2>
              <p className="text-gray-600 hidden-element">
                I'm a UI/UX, Graphic & Web Designer with expertise in Adobe Illustrator, Photoshop, Canva, 
                Figma, and Balsamiq. My creative approach and attention to detail allow me to design 
                visually captivating graphics and craft intuitive user experiences.
              </p>
              <p className="text-gray-700 font-medium hidden-element">
                Mannheim, Germany
              </p>
              <div className="flex space-x-4 hidden-element">
                <a href="#contact" className="btn-primary">
                  Get in Touch
                </a>
                <a href="#projects" className="btn-outline">
                  View Projects
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative hidden-element">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-portfolio-purple opacity-10 rounded-full"></div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-portfolio-darkPurple opacity-10 rounded-full"></div>
              
              {/* Purple gradient circle background */}
              <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] mx-auto bg-gradient-to-br from-portfolio-purple to-portfolio-lightPurple rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-3 rounded-full bg-white"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-purple/20 to-transparent"></div>
                
                {/* This is where an actual profile photo would go - for now using a placeholder */}
                <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
                    <span className="text-6xl text-portfolio-purple font-playfair font-bold">ER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div 
            className="bounce animate-bounce" 
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center pt-1 cursor-pointer">
              <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
