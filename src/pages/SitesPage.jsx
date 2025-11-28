import React from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Microscope, ArrowRight, Hospital, Shield, Target } from "lucide-react";

const SitesPage = () => {
  const researchHighlights = [
    {
      icon: <Hospital className="w-8 h-8" />,
      title: "3 Major Hospitals",
      description: "Strategic healthcare facilities"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Diverse Population",
      description: "Urban and regional coverage"
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Research Excellence",
      description: "Teaching and referral hospitals"
    }
  ];

  const researchSites = [
    {
      name: "Kenyatta National Hospital",
      location: "Nairobi, Kenya",
      image: "https://marbarafrica.co.ke/Slidders/thumbnail/1730554686.jpg",
      description: "Kenyatta National Hospital (KNH) is located in Nairobi city and is the largest teaching and referral hospital in East Africa...",
      link: "https://marbarafrica.co.ke/more/6"
    },
    {
      name: "Jaramogi Oginga Odinga Teaching and Referral Hospital",
      location: "Kisumu, Kenya",
      image: "https://marbarafrica.co.ke/Slidders/thumbnail/1730554777.jpg",
      description: "Jaramogi Oginga Odinga Teaching and Referral Hospital (JOOTRH) is a level 6 hospital according to the current health sector...",
      link: "https://marbarafrica.co.ke/more/7"
    },
    {
      name: "Kisumu County Referral Hospital",
      location: "Kisumu, Kenya",
      image: "https://marbarafrica.co.ke/Slidders/thumbnail/1730554967.jpeg",
      description: "Kisumu County Referral Hospital (KCRH) is a level 5 hospital located in Kisumu City, along Angawa Avenue, opposite Kenya...",
      link: "https://marbarafrica.co.ke/more/8"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative py-28 bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 font-serif"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Research Sites
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
            <motion.p 
              className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Explore our strategically located research facilities across Kenya, each contributing unique insights to the MarBar-Africa project
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Research Highlights */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium tracking-wider rounded-full mb-4"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              RESEARCH IMPACT
            </motion.span>
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4 font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our Research Foundation
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Key highlights of our research infrastructure and capabilities
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {researchHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Research Sites Section */}
      <div className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-medium tracking-wider rounded-full mb-4"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              OUR LOCATIONS
            </motion.span>
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4 font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Research Sites
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover our network of research facilities strategically positioned to advance mental health research across diverse populations
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {researchSites.map((site, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
                whileHover={{ y: -8 }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={site.image}
                    alt={site.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <motion.a
                      href={site.link}
                      className="inline-flex items-center gap-2 text-white font-semibold text-sm"
                      whileHover={{ x: 5 }}
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
                        {site.name}
                      </h3>
                      <p className="text-blue-600 text-sm font-medium">{site.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {site.description}
                  </p>

                  <motion.a
                    href={site.link}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/link"
                    whileHover={{ gap: 6 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Partnership Opportunities</h3>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
                Interested in collaborating with our research sites? We welcome partnerships with healthcare institutions, 
                academic researchers, and mental health organizations.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SitesPage;