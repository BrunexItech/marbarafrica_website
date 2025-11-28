import React from "react";
import { motion } from "framer-motion";

// Import the local image
import knh from '../assets/knh.png';

const institutionData = {
  name: "Kenyatta National Hospital",
  location: "Nairobi, Kenya",
  type: "Teaching & Referral Hospital",
  specialty: "Medical Research & Healthcare Excellence",
  website: "https://knh.or.ke/",
  description: "A premier national referral hospital committed to advancing medical research and providing exceptional healthcare services across East Africa."
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function CollaboratingInstitutions() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

      <div className="container mx-auto relative px-4 max-w-4xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium tracking-wider rounded-full mb-6 shadow-lg"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            STRATEGIC PARTNERSHIP
          </motion.span>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-serif"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Collaborating Institution
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We are proud to collaborate with leading institutions that share our 
            commitment to advancing mental health research and improving patient outcomes.
          </motion.p>
        </motion.div>

        {/* Single Institution Card */}
        <motion.div 
          className="flex justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 w-full max-w-2xl"
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Elegant Header Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <img
                  src={knh}
                  alt={institutionData.name}
                  className="h-20 mx-auto object-contain"
                />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {institutionData.name}
              </motion.h3>
              <motion.p 
                className="text-indigo-100 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {institutionData.type}
              </motion.p>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <p className="text-gray-700 leading-relaxed text-center">
                  {institutionData.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-3 text-gray-600 mb-2">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">Location</span>
                  </div>
                  <p className="text-gray-800">{institutionData.location}</p>
                </motion.div>

                {/* Specialty */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-3 text-gray-600 mb-2">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <span className="font-medium">Specialty</span>
                  </div>
                  <p className="text-gray-800">{institutionData.specialty}</p>
                </motion.div>
              </div>

              {/* Website Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.a
                  href={institutionData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, gap: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Visit Website</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Partnership Statement */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 italic max-w-2xl mx-auto leading-relaxed">
            "Through this strategic partnership, we combine expertise and resources to drive 
            meaningful advancements in mental health research and patient care."
          </p>
        </motion.div>
      </div>
    </section>
  );
}