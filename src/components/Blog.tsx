
import React, { useEffect } from "react";

interface BlogPost {
  date: string;
  title: string;
  content: string;
  tags: string[];
}

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      date: "Jan 2024",
      title: "Brushing Dreams into Reality: The Alchemy of Graphic Design",
      content: "Embarking on the journey of turning ideas into visual wonders, a graphic designer's magic is in the ability to bring concepts to life through artistry. With strokes of creativity and a keen eye for detail, we transform visions into captivating designs that resonate with the world. It's not just about graphics; it's about crafting experiences that leave a lasting impression.",
      tags: ["GraphicDesign", "DesignMagic"]
    },
    {
      date: "Dec 2023",
      title: "Crafting Memorable Digital Journeys: The Art of UI/UX Design",
      content: "In the digital realm, UI/UX design is the magic that transforms interfaces into unforgettable experiences. As a UI/UX designer, I blend aesthetics and functionality to create seamless and purposeful interactions. UI captivates with visual allure, while UX ensures every click is intuitive and delightful. Join me on this journey of crafting digital landscapes where design isn't just seen but felt—a symphony of user-centric creativity. Let's shape the future of digital experiences together, pixel by pixel.",
      tags: ["UIUXDesign", "DigitalExperience"]
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
    <section id="blog" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 hidden-element">
          <h2 className="portfolio-section-title">Blog</h2>
          <p className="portfolio-section-subtitle mx-auto">
            Thoughts and insights on design
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {posts.map((post, index) => (
            <div 
              key={index}
              className="mb-12 last:mb-0 hidden-element"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 md:p-8">
                  <span className="text-sm text-portfolio-purple font-medium">
                    {post.date}
                  </span>
                  <h3 className="text-2xl font-bold text-portfolio-deepPurple mt-2 mb-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {post.content}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="inline-block bg-portfolio-lightPurple text-portfolio-darkPurple px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
