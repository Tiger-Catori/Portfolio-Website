import { Routes, Route } from "react-router-dom";
import "./css/App.css";

import NavbarComponent from "./components/Navbar";
import CanvasCursor from "./components/CanvasCursor/CanvasCursor";
// import NeonCursor from "./components/CanvasCursor/NeonCursor";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";

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
      <CanvasCursor />
      {/* <NeonCursor />*/}
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
        </Routes>
      </main>
    </div>
  );
}

export default App;
