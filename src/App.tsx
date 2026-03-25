import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { PilgrimagePage, MentorshipPage, SacredSpacesPage } from "./pages/Pages";
import { BookingPage } from "./pages/BookingPage";
import { ContactPage } from "./pages/ContactPage";
import LandingPage from "./pages/funnel/LandingPage";
import CheckoutPage from "./pages/funnel/CheckoutPage";
import ThankYouPage from "./pages/funnel/ThankYouPage";
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
        {/* FUNNEL ROUTES - No Global Navbar/Footer */}
        <Route path="/phoenix-rising" element={<LandingPage />} />
        <Route path="/phoenix-rising/checkout" element={<CheckoutPage />} />
        <Route path="/phoenix-rising/thank-you" element={<ThankYouPage />} />
        
        {/* CORE WEBSITE ROUTES - Includes Navbar/Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pilgrimage" element={<PilgrimagePage />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/sacred-spaces" element={<SacredSpacesPage />} />
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
