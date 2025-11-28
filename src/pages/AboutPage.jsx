import React, { useState } from 'react';

const ProfessionalAboutPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [researchDropdown, setResearchDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center w-full">
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                About Us
              </h1>
              <div className="flex justify-center items-center text-white/90 text-lg">
                <a href="https://marbarafrica.co.ke" className="hover:text-white transition-colors duration-300">Home</a>
                <span className="mx-4">/</span>
                <span className="font-semibold text-white">About Us</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                  fill="#ffffff" opacity="1"></path>
          </svg>
        </div>
      </section>

      {/* About Content Section */}
      <section className="w-full py-20 relative -mt-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div>
                  <span className="text-blue-600 inline-block font-semibold uppercase mb-4 text-sm tracking-wider border border-blue-200 bg-blue-50 px-4 py-2 rounded-full">
                    About Us
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    MarBar Africa
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    MarBar Africa dashboard is geared towards three types of sub-systems. It will provide a patient facing engagement tool where patient can also share therapeutic alliance, quality of care, symptom reduction feedback. The findings from tools can be relayed back to the patient which we believe will improve education and understanding of one's condition.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The second sub-system will be process-outcome monitoring that will take intake, session-by-session progress tracking through therapist data and patient feedback and an interactive tool for therapist to learn from their own practice and patient profile and treatment trajectory so far.
                  </p>
                </div>

                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 transition-all duration-300 hover:shadow-xl hover:border-blue-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 text-lg">Research Timeline</span>
                      <p className="text-blue-700 font-medium">1st September 2024 to 31st July 2026</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h5 className="text-2xl md:text-3xl font-semibold text-gray-900">Why MarBar-Africa Matters</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Pioneering mental health research in Africa",
                      "Evidence-based healthcare solutions",
                      "Multi-site collaborative research approach",
                      "Improving patient care and treatment outcomes"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700 leading-relaxed font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <a href="https://marbarafrica.co.ke/reaserch-sites" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    Explore Our Sites
                  </a>
                  <a href="https://marbarafrica.co.ke/contact" className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-xl transform hover:-translate-y-1 flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Get Involved
                  </a>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="relative group">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-105">
                      <img 
                        src="https://marbarafrica.co.ke/aboutus/thumbnail/1731573033img.jpg" 
                        alt="Research Leadership Team"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 rounded-2xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-105">
                      <img 
                        src="https://marbarafrica.co.ke/aboutus/thumbnail/1731573033img2.jpeg" 
                        alt="Secondary Research Facility"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 rounded-2xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="relative group">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-105">
                      <img 
                        src="https://marbarafrica.co.ke/aboutus/thumbnail/1731573033img1.jpeg" 
                        alt="Primary Research Facility"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 rounded-2xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-105">
                      <img 
                        src="https://marbarafrica.co.ke/aboutus/thumbnail/1731573033img3.jpeg" 
                        alt="Tertiary Research Facility"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 rounded-2xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact Section */}
      <section className="w-full py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 inline-block font-semibold uppercase mb-4 text-sm tracking-wider border border-blue-200 bg-blue-50 px-4 py-2 rounded-full">
              Research Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Research Contributions</h2>
            <p className="text-gray-700 mx-auto max-w-2xl text-lg leading-relaxed">
              MarBar-Africa is making significant contributions to mental healthcare research and practice across Kenya through innovative approaches and collaborative efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                number: "3+", 
                title: "Research Sites", 
                description: "Major healthcare facilities participating", 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                )
              },
              { 
                number: "10+", 
                title: "Research Team", 
                description: "Expert investigators and co-investigators", 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                )
              },
              { 
                number: "5+", 
                title: "Research Areas", 
                description: "Focused research domains and studies", 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                )
              },
              { 
                number: "2024-2026", 
                title: "Timeline", 
                description: "Research project duration and phases", 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-300 text-center group">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <div className="text-blue-600">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-blue-600 mb-3">{item.number}</h3>
                <h6 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h6>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-lg border border-blue-100 transition-all duration-500 hover:shadow-xl">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To advance mental healthcare research in Africa through innovative, collaborative approaches that improve patient outcomes, enhance healthcare delivery systems, and contribute to evidence-based practice and policy development across Kenya and the broader African continent.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-lg border border-blue-100 transition-all duration-500 hover:shadow-xl">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a leading force in transforming mental healthcare across Africa by establishing robust research foundations, fostering international collaborations, and creating sustainable healthcare solutions that address the unique challenges and opportunities within African healthcare systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 inline-block font-semibold uppercase mb-4 text-sm tracking-wider border border-blue-200 bg-blue-50 px-4 py-2 rounded-full">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Research Team</h2>
            <p className="text-gray-700 mx-auto max-w-2xl text-lg leading-relaxed">
              Our team comprises mental health and IT experts who use the MarBar Africa Dashboard to deliver data-driven insights, enhancing patient care and outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Manasi Kumar", 
                role: "Investigator",
                image: "https://marbarafrica.co.ke/teams/thumbnail/1735819438.png"
              },
              { 
                name: "Fredrik Falkenström", 
                role: "Co investigator",
                image: "https://marbarafrica.co.ke/teams/thumbnail/1732609979.jpg"
              },
              { 
                name: "Keng-Yen Huang", 
                role: "Co investigator",
                image: "https://marbarafrica.co.ke/teams/thumbnail/1758960505_keng.jpg"
              },
              { 
                name: "Anne Obondo", 
                role: "Investigator",
                image: "https://marbarafrica.co.ke/teams/thumbnail/1731574918.png"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-300">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                    <div className="flex gap-3 opacity-0 hover:opacity-100 transform translate-y-4 hover:translate-y-0 transition-all duration-500">
                      {[
                        { icon: "twitter", color: "text-blue-400" },
                        { icon: "facebook", color: "text-blue-600" },
                        { icon: "linkedin", color: "text-blue-700" }
                      ].map((social, socialIndex) => (
                        <a key={socialIndex} href="#" className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white">
                          <svg className={`w-5 h-5 ${social.color}`} fill="currentColor" viewBox="0 0 24 24">
                            <path d={`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`}></path>
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h5>
                  <span className="text-blue-600 font-semibold">{member.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 mb-6 text-lg">Want to connect with our experts?</p>
            <a href="https://marbarafrica.co.ke/team" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              View Full Research Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalAboutPage;