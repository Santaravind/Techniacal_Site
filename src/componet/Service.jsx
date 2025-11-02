// components/ServicesSection.jsx
import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Search, 
  Palette, 
  TrendingUp, 
  Code2, 
  Layout, 
  Video 
} from 'lucide-react';

const Service = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience."
    },
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Native Android applications that provide seamless user experiences and robust functionality."
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Boost your online visibility and drive organic traffic with our comprehensive SEO strategies."
    },
    {
      icon: Palette,
      title: "Logo Design",
      description: "Creative and memorable logo designs that represent your brand identity and values."
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns to grow your online presence and reach your target audience."
    },
    {
      icon: Code2,
      title: "API Development",
      description: "Robust and scalable API solutions to power your applications and enable seamless integrations."
    },
    {
      icon: Layout,
      title: "UI/UX Development",
      description: "Intuitive and engaging user interfaces designed to enhance user experience and drive conversions."
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing services to create compelling visual content for your brand."
    }
  ];

  return (
    <section className="relative py-20 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Empowering Your Digital Presence with SpriteEra
          </h3>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At SpriteEra, we specialize in transforming businesses through innovative digital solutions. 
            From creating stunning websites to enhancing your social media footprint, we are your go-to 
            partner for all things digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Service Icon */}
                <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <div className="w-16 h-16 bg-linear-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-500">
                    <IconComponent 
                      size={32} 
                      className="text-blue-400 group-hover:text-purple-400 transition-colors duration-500" 
                    />
                  </div>
                </div>

                {/* Service Title */}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h4>

                {/* Service Description */}
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Gradient Border Bottom */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-linear-to-r from-blue-500 to-purple-600 group-hover:w-4/5 transition-all duration-500 rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-2xl mx-auto hover:border-white/20 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how our services can help your business grow and succeed in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative bg-linear-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center space-x-2">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Service;