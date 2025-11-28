import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, FlaskRound, BookOpen, FileText, Users, Mail, LogIn } from "lucide-react";
import logo from '../assets/marbar_logo.png';

function Header() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false); // dropdown hover state

  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "About Us", path: "/about", icon: <FileText className="w-4 h-4" /> },
    { name: "Our Team", path: "/team", icon: <Users className="w-4 h-4" /> },
    { name: "Our Sites", path: "/sites", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Research", path: "/research", icon: <FlaskRound className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const researchDropdown = [
    { name: "Training", path: "/research/training" },
    { name: "Tools", path: "/research/tools" },
    { name: "News & Blogs", path: "/research/news" },
    { name: "Gallery", path: "/research/gallery" },
    { name: "Impact", path: "/research/impact" },
  ];

  return (
    <header className="bg-white border-b border-blue-100 shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/90">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 sm:py-6">

          {/* LOGO + TAGLINE */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl blur-md opacity-75"></div>
              <div className="relative bg-gradient-to-br from-blue-100 to-gray-200 rounded-xl p-2 shadow-lg border border-blue-200">
                <img
                  src={logo}
                  alt="Marbar Africa"
                  className="h-16 sm:h-20 w-auto rounded-lg"
                />
              </div>
            </div>

            <div className="ml-1 sm:ml-2">
              <h1 className="text-xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                MarBar Africa
              </h1>

              <div className="overflow-hidden h-5 sm:h-6 mt-0.5 sm:mt-1">
                <p className="text-xs sm:text-sm text-blue-700 font-semibold tracking-wide whitespace-nowrap animate-marquee">
                  Advancing Mental Health Research
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-6 relative">
            {navLinks.map((item) => {
              if (item.name === "Research") {
                return (
                  <div 
                    key={item.name} 
                    className="relative"
                    onMouseEnter={() => setResearchOpen(true)}
                    onMouseLeave={() => setResearchOpen(false)}
                  >
                    <button
                      className={`
                        group px-4 py-2 rounded-xl flex items-center space-x-2
                        transition-all duration-300 font-semibold text-lg
                        ${active === item.name ? "text-blue-700 bg-blue-50" : "text-gray-800"}
                        hover:bg-blue-100
                      `}
                    >
                      <span className={`${active === item.name ? "text-blue-700" : "text-gray-600"} transition-all`}>
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </button>

                    {/* Dropdown */}
                    {researchOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                        {researchDropdown.map((drop) => (
                          <Link
                            key={drop.name}
                            to={drop.path}
                            onClick={() => setActive("Research")}
                            className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 font-medium"
                          >
                            {drop.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setActive(item.name)}
                  className={`
                    group px-4 py-2 rounded-xl flex items-center space-x-2
                    transition-all duration-300 font-semibold text-lg
                    ${active === item.name ? "text-blue-700 bg-blue-50" : "text-gray-800"}
                    hover:bg-blue-100
                  `}
                >
                  <span className={`${active === item.name ? "text-blue-700" : "text-gray-600"} transition-all`}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              )
            })}

            <Link
              to="/login"
              onClick={() => setActive("Login")}
              className="px-5 py-3 bg-white border border-blue-600 text-blue-700 font-semibold rounded-xl shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </nav>

          {/* MOBILE SECTION */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={() => {
                const newState = !menuOpen;
                setMenuOpen(newState);
                if (!newState) setActive("Home"); // redirect to Home on X
              }}
              className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition-all duration-300 transform hover:scale-110 group"
            >
              <div className={`w-6 h-0.5 bg-blue-700 mb-1.5 transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}></div>
              <div className={`w-6 h-0.5 bg-blue-700 mb-1.5 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}></div>
              <div className={`w-6 h-0.5 bg-blue-700 transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-blue-100 shadow-md">
          <ul className="flex flex-col p-4 space-y-3">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setActive(item.name);
                  setMenuOpen(false);
                }}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 font-semibold text-gray-700"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => {
                setActive("Login");
                setMenuOpen(false);
              }}
              className="p-3 bg-blue-600 text-white rounded-lg text-center font-semibold"
            >
              Login
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
