
import React, { useEffect } from "react";

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      period: "Jan 2024 - Present",
      degree: "Master's degree, Business Informatics",
      institution: "University of Mannheim, Germany"
    },
    {
      period: "Nov 2023 - Mar 2024",
      degree: "UI / UX Design Specialization (Coursera.org)",
      institution: "California Institute of the Arts"
    },
    {
      period: "2019 - 2023",
      degree: "Bachelor in Software Engineering",
      institution: "COMSATS University Islamabad"
    },
    {
      period: "2016 - 2018",
      degree: "Intermediate in Computer Science",
      institution: "Punjab Group Of Colleges"
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
    <section id="education" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16 hidden-element">
          <h2 className="portfolio-section-title">Education</h2>
          <p className="portfolio-section-subtitle mx-auto">
            Academic background and professional development
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-portfolio-purple"></div>

            {educationItems.map((item, index) => (
              <div 
                key={index}
                className={`relative mb-12 hidden-element ${
                  index % 2 === 0 
                    ? "md:pr-12 md:text-right md:ml-auto md:mr-1/2" 
                    : "md:pl-12 md:text-left md:mr-auto md:ml-1/2"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div 
                  className="absolute left-[-8px] md:left-1/2 top-0 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-portfolio-purple"
                >
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 ml-6 md:ml-0">
                  <span className="inline-block text-sm text-portfolio-purple font-medium mb-2">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-portfolio-deepPurple mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-gray-600">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
