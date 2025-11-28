import { useState } from "react";
import { Home, FlaskRound, BookOpen, FileText, Users, Mail, LogIn } from "lucide-react";

function App() {
  const [active, setActive] = useState("Home");

  const navLinks = [
    { name: "Home", icon: <Home className="w-4 h-4" /> },
    { name: "About Us", icon: <FileText className="w-4 h-4" /> },
    { name: "Our Team", icon: <Users className="w-4 h-4" /> },
    { name: "Our Sites", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Research", icon: <FlaskRound className="w-4 h-4" /> },
    { name: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen">
      
      {/* Header */}
      <header className="bg-white border-b border-blue-100 shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4 sm:py-6">

            {/* Logo + Tagline */}
            <div className="flex items-center space-x-4 sm:space-x-5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl blur-md opacity-75"></div>
                <div className="relative bg-gradient-to-br from-blue-100 to-gray-200 rounded-xl p-2 shadow-lg border border-blue-200">
                  <img
                    src="/marbar_logo.png"
                    alt="Marbar Africa"
                    className="h-16 sm:h-20 w-auto rounded-lg"
                  />
                </div>
              </div>

              <div className="ml-1 sm:ml-2">
                <h1 className="text-xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                  MarBar Africa
                </h1>

                {/* Infinite Marquee */}
                <div className="overflow-hidden h-5 sm:h-6 mt-0.5 sm:mt-1">
                  <p className="text-xs sm:text-sm text-blue-700 font-semibold tracking-wide whitespace-nowrap animate-marquee">
                    Advancing Mental Health Research
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActive(item.name)}
                  className={`
                    group px-4 py-2 rounded-xl flex items-center space-x-2
                    transition-all duration-300 font-semibold text-lg relative
                    ${active === item.name ? "text-blue-700 bg-blue-50" : "text-gray-800"}
                    hover:bg-blue-100
                  `}
                >
                  <span className="relative flex items-center space-x-2">
                    <span className={`${active === item.name ? "text-blue-700" : "text-gray-600"} 
                      transition-all duration-300`}>
                      {item.icon}
                    </span>
                    <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
                      {item.name}
                    </span>
                  </span>
                </button>
              ))}

              {/* Login Button (unique style) */}
              <button
                onClick={() => setActive("Login")}
                className="px-5 py-3 bg-white border border-blue-600 text-blue-700 font-semibold rounded-xl shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
            </nav>

            {/* Mobile Section */}
            <div className="lg:hidden flex items-center space-x-4">
              {/* Mobile Contact button (styled like the other nav items) */}
              <button
                onClick={() => setActive("Contact")}
                className={`bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition duration-200 ${active === "Contact" ? "bg-blue-100" : ""}`}
              >
                <Mail className="w-4 h-4" />
                Contact
              </button>

              {/* Mobile menu icon */}
              <button className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition-all duration-300 transform hover:scale-110 group">
                <div className="w-6 h-0.5 bg-blue-700 mb-1.5 transition-transform duration-300 group-hover:translate-y-2 group-hover:rotate-45"></div>
                <div className="w-6 h-0.5 bg-blue-700 mb-1.5 transition-opacity duration-300 group-hover:opacity-0"></div>
                <div className="w-6 h-0.5 bg-blue-700 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-rotate-45"></div>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen flex items-center justify-center">
        <h2 className="text-xl sm:text-3xl text-gray-700 font-light px-4 text-center">
          {active === "Login" ? "Login" : `${active} - Coming Next`}
        </h2>
      </section>
    </div>
  );
}

export default App;
