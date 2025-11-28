// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'

// Import your pages/components
import Hero from './components/Hero'
import Impact from './components/Impact'
import ImpactTimeline from './components/ImpactTimeline'
import StudySites from './components/StudySites'
import EnhancedAbout from './components/EnhancedAbout'
import CollaboratingInstitutions from './components/CollaboratingInstitutions'
import NewsArticles from './components/NewsArticles'

// Individual Pages
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import SitesPage from "./pages/SitesPage";
import ResearchPage from "./pages/ResearchPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <Router>
      <Header />

      <div className="min-h-screen">
        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Impact />
                <ImpactTimeline />
                <StudySites />
                <EnhancedAbout />
                <CollaboratingInstitutions />
                <NewsArticles />
              </>
            }
          />

          {/* OTHER REAL PAGES */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/sites" element={<SitesPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />

        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
