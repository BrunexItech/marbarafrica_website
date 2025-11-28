import React from "react";
import { motion } from "framer-motion";

// Import your logo
import marbarLogo from '../assets/marbar_logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-slate-900 to-blue-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description Column */}
          <motion.div 
            className="footer-widget"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo mb-6">
              <motion.a 
                href="https://marbarafrica.co.ke" 
                title="MarBar Africa - Home"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={marbarLogo}
                  alt="MarBar Africa Logo"
                  className="w-48 h-auto"
                />
              </motion.a>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Advancing mental health research across Africa through innovative, 
              culturally-sensitive approaches and collaborative partnerships.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                { 
                  href: "https://x.com", 
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )
                },
                { 
                  href: "https://instagram.com", 
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )
                },
                { 
                  href: "https://linkedin.com", 
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-blue-800/50 rounded-lg hover:bg-blue-600 transition-all duration-300 border border-blue-700/30"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div 
            className="footer-widget"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 font-serif relative">
              Quick Links
              <div className="w-10 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                { href: "https://marbarafrica.co.ke/marbar-africa", text: "About Us" },
                { href: "https://marbarafrica.co.ke/team", text: "Our Team" },
                { href: "https://marbarafrica.co.ke/reaserch-sites", text: "Research Sites" },
                { href: "https://marbarafrica.co.ke/reaserch-gallery", text: "Gallery" },
                { href: "https://marbarafrica.co.ke/contact", text: "Contact" }
              ].map((link, index) => (
                <li key={index}>
                  <motion.a 
                    href={link.href} 
                    className="hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <svg className="w-3 h-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.text}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Research Focus Column */}
          <motion.div 
            className="footer-widget"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 font-serif relative">
              Research Focus
              <div className="w-10 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                { href: "#", text: "Mental Health" },
                { href: "#", text: "Clinical Trials" },
                { href: "#", text: "Community Health" },
                { href: "#", text: "Health Technology" },
                { href: "https://marbarafrica.co.ke/blogs-news", text: "Publications" }
              ].map((link, index) => (
                <li key={index}>
                  <motion.a 
                    href={link.href} 
                    className="hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <svg className="w-3 h-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.text}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter Column */}
          <motion.div 
            className="footer-widget"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 font-serif relative">
              Stay Updated
              <div className="w-10 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
            </h4>
            
            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  text: "Nairobi, Kenya"
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  text: "info@marbarafrica.co.ke",
                  link: "mailto:info@marbarafrica.co.ke"
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  text: "0706571913"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  {item.link ? (
                    <a href={item.link} className="hover:text-blue-300 transition-colors duration-300">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <motion.form 
              className="flex overflow-hidden rounded-lg w-full border border-blue-700/50 bg-blue-900/20 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-grow px-4 py-3 bg-transparent text-white placeholder-blue-300/70 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center gap-1 text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Subscribe</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Bottom Copyright Bar */}
        <motion.div 
          className="border-t border-blue-800/50 pt-6 pb-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-blue-300/80 text-sm">
            <p>
              © {new Date().getFullYear()} <strong className="text-white">MarBar Africa</strong>. All rights reserved.
              <span className="mx-2">•</span>
              Advancing Mental Health Research
            </p>
            <span className="mt-2 md:mt-0">
              {" "}
              <a
                href="https://grandtek.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors duration-300"
              >
                Marbar Africa
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}