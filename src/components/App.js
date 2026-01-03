// App.js
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./Navbar";
import Home from "../pages/Home";
// import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
// import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
// import ErrorPage from "./pages/ErrorPage";
// ...other imports

function App() {
  return (
    <div id="home" className="container__body">
      <NavbarComponent />
      <main className="main__content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditionsPage />}
          />
          <Route path="/*" element={<ErrorPage />} />*/}
        </Routes>
      </main>
    </div>
  );
}

export default App;
