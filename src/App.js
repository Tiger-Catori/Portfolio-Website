// App.js
import { Routes, Route } from "react-router-dom";

import "./css/App.css";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage"; // import error page
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"; // import privacy policy page
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage"; // import terms and conditions page
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quad",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="container__body" id="home">
      <NavbarComponent />
      <main className="main__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditionsPage />}
          />
          <Route path="/*" element={<ErrorPage />} />
          {/* Add more routes here if needed */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
