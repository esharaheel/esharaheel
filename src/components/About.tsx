
import React, { useEffect } from "react";

const About: React.FC = () => {
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
    <section id="about" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-5/12 hidden-element">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-portfolio-purple opacity-10 rounded-lg"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-portfolio-darkPurple opacity-10 rounded-lg"></div>
              
              <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-portfolio-deepPurple">
                  Esha Raheel
                </h3>
                <p className="text-portfolio-purple font-medium mb-6">
                  UI/UX, Graphic & Web Designer
                </p>
                <p className="text-gray-700 mb-6">
                  I'm a UI/UX, Graphic & Web Designer with expertise in Adobe Illustrator, Photoshop, Canva, Figma, and Balsamiq. My creative approach and attention to detail allow me to design visually captivating graphics and craft intuitive user experiences. Let's collaborate on bringing your ideas to life!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-portfolio-deepPurple mb-2">Location</h4>
                    <p className="text-gray-700">Mannheim, Germany</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-portfolio-deepPurple mb-2">Email</h4>
                    <p className="text-gray-700">esharaheel11@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-7/12">
            <div className="hidden-element">
              <h2 className="portfolio-section-title heading-underline">About ME</h2>
              <p className="mt-6 text-gray-700">
                As a passionate UI/UX, Graphic & Web Designer, I blend creativity and functionality to craft compelling digital experiences. With a keen eye for design and a user-centered approach, I create interfaces that are not only aesthetically pleasing but also intuitive and engaging.
              </p>
            </div>
            
            <div className="mt-10 hidden-element" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-bold text-portfolio-deepPurple mb-4">Certificates</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-portfolio-purple transition-colors duration-300">
                  <h4 className="font-medium">UI / UX Design Specialization</h4>
                  <a 
                    href="https://www.coursera.org/account/accomplishments/specialization/UK2CBSGMF7KM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-portfolio-purple hover:underline"
                  >
                    View Certificate
                  </a>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-portfolio-purple transition-colors duration-300">
                  <h4 className="font-medium">Visual Elements of User Interface Design</h4>
                  <a 
                    href="https://www.coursera.org/account/accomplishments/verify/5ZETFAEQNF7J"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-sm text-portfolio-purple hover:underline"
                  >
                    View Certificate
                  </a>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-portfolio-purple transition-colors duration-300">
                  <h4 className="font-medium">UX Design Fundamentals</h4>
                  <a 
                    href="https://www.coursera.org/account/accomplishments/verify/MPBG7MVTRA6K"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-sm text-portfolio-purple hover:underline"
                  >
                    View Certificate
                  </a>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-portfolio-purple transition-colors duration-300">
                  <h4 className="font-medium">Web Design: Strategy and Information Architecture</h4>
                  <a 
                    href="https://www.coursera.org/account/accomplishments/verify/2ZR9NSJQHTQG"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-sm text-portfolio-purple hover:underline"
                  >
                    View Certificate
                  </a>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-portfolio-purple transition-colors duration-300">
                  <h4 className="font-medium">Web Design: Wireframes to Prototypes</h4>
                  <a 
                    href="https://www.coursera.org/account/accomplishments/verify/2D8RMHP73CBP"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-sm text-portfolio-purple hover:underline"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
