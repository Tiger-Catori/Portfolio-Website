// NotFound.jsx
import "../css/NotFound.css";
import "../css/Hero.css";
import ButtonLink from "./ButtonLink";
import { useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoToHome = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
    }

    setTimeout(() => {
      const homeElement = document.getElementById("home");
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="not__found">
      <h1>
        <span className="digit">4</span>
        <span className="digit">0</span>
        <span className="digit">4</span>
      </h1>
      <h2 className="path">
        404 - <span>{location.pathname}</span>
      </h2>
      <p>The requested page does not exist.</p>

      {/* ✅ Now using component composition with custom onClick */}
      <ButtonLink href="#home" onClick={handleGoToHome}>
        Go to Home Page
      </ButtonLink>
    </div>
  );
};

export default NotFound;
