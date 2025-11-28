import React from "react";
import { motion } from "framer-motion";

const researchSites = [
  {
    title: "Kenyatta National Hospital",
    img: "https://marbarafrica.co.ke/Slidders/thumbnail/1730554686.jpg",
    link: "https://marbarafrica.co.ke/more/6",
  },
  {
    title: "Jaramogi Oginga Odinga Teaching and Referral Hospital",
    img: "https://marbarafrica.co.ke/Slidders/thumbnail/1730554777.jpg",
    link: "https://marbarafrica.co.ke/more/7",
  },
  {
    title: "Kisumu County Referral Hospital",
    img: "https://marbarafrica.co.ke/Slidders/thumbnail/1730554967.jpeg",
    link: "https://marbarafrica.co.ke/more/8",
  },
];

const highlights = [
  {
    title: "3 Major Hospitals",
    description: "Strategic healthcare facilities",
    icon: "🏥",
  },
  {
    title: "Diverse Population",
    description: "Urban and regional coverage",
    icon: "👥",
  },
  {
    title: "Research Excellence",
    description: "Teaching and referral hospitals",
    icon: "🔬",
  },
];

export default function StudySites() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white opacity-95 z-0"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="inline-block px-5 py-2 bg-indigo-600 text-white font-semibold rounded-full mb-3 cursor-pointer shadow-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            MarBar Africa Research Sites
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Site of the Study</h2>
          <p className="text-gray-700">
            The MarBar-Africa study is strategically conducted across key healthcare
            facilities in Kenya, ensuring comprehensive data collection and maximum
            impact across diverse patient populations.
          </p>
        </motion.div>

        {/* Research Highlights */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 w-full max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white shadow-lg rounded-xl"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h6 className="font-semibold mb-2">{item.title}</h6>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Site Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-6xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          {researchSites.map((site, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.03 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden relative">
                <img
                  src={site.img}
                  alt={site.title}
                  className="w-full h-64 object-cover transition-transform duration-500 transform hover:scale-110"
                />
                <a
                  href={site.link}
                  className="absolute inset-0 flex items-center justify-center text-white text-4xl opacity-0 hover:opacity-100 bg-black bg-opacity-30 transition-opacity duration-300"
                  title="View Site"
                >
                  +
                </a>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">
                  <a href={site.link}>{site.title}</a>
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.a
          href="https://marbarafrica.co.ke/reaserch-sites"
          className="mt-12 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          View Our Sites
        </motion.a>
      </div>
    </section>
  );
}
