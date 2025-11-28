import heroImage from '../assets/hero.png';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mental Health Research" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-blue-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Advancing Mental Health
          <span className="block text-white bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            Research Excellence
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-8 text-blue-50 leading-relaxed">
          Pioneering innovative research and solutions for mental wellness across Africa
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Learn More About Us
          </button>
          <button className="border-2 border-white/80 hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero