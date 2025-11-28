import React from "react";
import { motion } from "framer-motion";

const newsArticlesData = [
  {
    id: 1,
    title: "Vel quaerat explicab",
    date: "Sep 25, 2025",
    author: "Peter Njuguna Mungai",
    excerpt: "test",
    category: "Research",
    image: "https://marbarafrica.co.ke/news/thumbnail/1758794534.jpeg",
    link: "https://marbarafrica.co.ke/news/8",
  },
  // Add more articles here if needed
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

export default function NewsArticles() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 bg-white opacity-95"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

      <div className="relative container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium tracking-wider rounded-full mb-6 shadow-lg"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            RESEARCH UPDATES
          </motion.span>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-serif"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Latest News & Research Articles
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
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
            Stay informed with the latest practice-based research findings and clinical insights from our ongoing studies
          </motion.p>
        </motion.div>

        {/* News Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {newsArticlesData.map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <motion.a 
                  href={article.link}
                  className="block"
                  whileHover="hover"
                >
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-56 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <span className="text-white font-semibold text-sm">
                      Read Full Article →
                    </span>
                  </div>
                </motion.a>
                <span className="absolute top-4 left-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta Information */}
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{article.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-indigo-700 transition-colors duration-300 flex-grow">
                  <a
                    href={article.link}
                    className="hover:no-underline"
                  >
                    {article.title}
                  </a>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <motion.a
                    href={article.link}
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors duration-300 group/link"
                    whileHover={{ gap: 6 }}
                  >
                    <span>Read Full Article</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h4 
            className="text-3xl font-bold text-gray-900 mb-4 font-serif"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Explore Our Research Library
          </motion.h4>
          <motion.p 
            className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            Discover comprehensive insights, clinical studies, and the latest developments 
            in mental health research and evidence-based practices.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://marbarafrica.co.ke/blogs-news"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Articles</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full border border-indigo-200 shadow-lg hover:shadow-xl hover:bg-indigo-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Subscribe to Updates</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}