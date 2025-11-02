// components/TechnologiesSection.jsx
import React from 'react';

const Section = () => {
  const technologies = [
    {
      title: "Software Development",
      description: "Building scalable and efficient software solutions.",
     
      items: ["Web Development", "App Development", "UI/UX Designing"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Driven Strategy & Solutions",
      description: "AI experts design intelligent systems that solve complex problems.",
      
      items: ["Machine Learning Models", "Intelligent Automation", "Data Analytics & Insights"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "DeepTech Talent Solutions",
      description: "DeepTech environments, ensuring your projects move forward with clarity and expertise.",
      
      items: ["Specialized Tech Hiring", "AI/ML Engineering Talent", "End-to-End Talent Acquisition"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="relative py-20 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technologies We Use
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Delivering expert solutions tailored to meet your unique business needs.
          </p>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl"
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-linear-to-br ${tech.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                {tech.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {tech.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {tech.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-linear-to-r from-blue-400 to-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Bottom Gradient Border Effect */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-linear-to-r ${tech.gradient} group-hover:w-4/5 transition-all duration-500 rounded-full`}></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Section;