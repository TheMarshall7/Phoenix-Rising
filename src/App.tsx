import { BrowserRouter as Router, Routes, Route, useLocation, Outlet, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { MentorshipPage } from "./pages/Pages";
import { FrancePilgrimagePage } from "./pages/FrancePilgrimagePage";
import { EgyptPilgrimagePage } from "./pages/EgyptPilgrimagePage";
import { HumanDesignPage } from "./pages/HumanDesignPage";
import { AncestralChildPage } from "./pages/AncestralChildPage";
import { BookingPage } from "./pages/BookingPage";
import { ContactPage } from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout for the main website that includes the Navbar and Footer
function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* CORE WEBSITE ROUTES - Includes Navbar/Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pilgrimage" element={<Navigate to="/pilgrimage/france" replace />} />
          <Route path="/pilgrimage/france" element={<FrancePilgrimagePage />} />
          <Route path="/pilgrimage/egypt" element={<EgyptPilgrimagePage />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/human-design" element={<HumanDesignPage />} />
          <Route path="/ancestral-child" element={<AncestralChildPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
