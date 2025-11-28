import React from "react";

const galleryImages = [
  {
    src: "https://marbarafrica.co.ke/aboutus/thumbnail/1731573033img.jpg",
    alt: "Research Leadership",
    label: "Research Leadership",
    link: "https://marbarafrica.co.ke/aboutus/thumbnail/1731573033img.jpg",
  },
  {
    src: "https://marbarafrica.co.ke/aboutus/thumbnail/1731573033img1.jpeg",
    alt: "Research Site 1",
    link: "https://marbarafrica.co.ke/aboutus/thumbnail/1731573033img1.jpeg",
  },
  {
    src: "https://marbarafrica.co.ke/aboutus/thumbnail/1731573033img2.jpeg",
    alt: "Research Site 2",
    link: "https://marbarafrica.co.ke/aboutus/thumbnail/1731573033img2.jpeg",
  },
  {
    src: "https://marbarafrica.co.ke/aboutus/thumbnail/1731573033img3.jpeg",
    alt: "Research Site 3",
    link: "https://marbarafrica.co.ke/aboutus/thumbnail/1731573033img3.jpeg",
  },
];

export default function EnhancedAbout() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto relative px-4 max-w-6xl">
        {/* Section Header with Classic Typography */}
        <div className="text-center mb-16 relative z-10">
          <span className="inline-block px-4 py-2 bg-indigo-600 text-white text-sm font-medium tracking-wider rounded-full mb-6 shadow-lg">
            ABOUT MARBAR AFRICA
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 font-serif">
            Advancing Mental Health Research
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Pioneering innovative approaches to mental healthcare through comprehensive research and collaborative systems
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 relative z-10">
          {/* Gallery Section - Enhanced Layout */}
          <div className="lg:w-1/2 space-y-6">
            {/* Main Featured Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500 group">
              <a href={galleryImages[0].link} target="_blank" rel="noreferrer" className="block">
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                  {galleryImages[0].label}
                </div>
              </a>
            </div>

            {/* Secondary Images Grid */}
            <div className="grid grid-cols-3 gap-4">
              {galleryImages.slice(1).map((img, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 group"
                >
                  <a href={img.link} target="_blank" rel="noreferrer" className="block">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Content Section - Professional Layout */}
          <div className="lg:w-1/2 space-y-8">
            {/* Main Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-gray-700 text-lg leading-relaxed font-light">
                MarBar Africa is revolutionizing mental healthcare through three integrated subsystems. Our patient-facing platform empowers individuals with real-time therapeutic feedback and educational resources. The process-outcome monitoring system enables comprehensive session-by-session progress tracking, while our collaborative care framework facilitates seamless team-based treatment decisions and consultations.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-md border border-indigo-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl">
                    ⏱
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-1">Research Timeline</h6>
                    <p className="text-gray-600 text-sm">Sept 2024 - July 2026</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md border border-blue-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                    🎯
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-1">Research Focus</h6>
                    <p className="text-gray-600 text-sm">Mental Health Innovation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-lg flex-shrink-0">
                  💡
                </div>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-1">Patient Empowerment</h6>
                  <p className="text-gray-600 text-sm">Interactive tools for self-awareness and treatment understanding</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-lg flex-shrink-0">
                  📊
                </div>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-1">Progress Monitoring</h6>
                  <p className="text-gray-600 text-sm">Real-time session tracking and outcome measurement</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 text-lg flex-shrink-0">
                  🤝
                </div>
                <div>
                  <h6 className="font-semibold text-gray-900 mb-1">Collaborative Care</h6>
                  <p className="text-gray-600 text-sm">Team-based treatment decisions and consultations</p>
                </div>
              </div>
            </div>

            {/* Enhanced Call to Action */}
            <div className="pt-4">
              <a
                href="https://marbarafrica.co.ke/marbar-africa"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Our Research
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations to tailwind config */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}