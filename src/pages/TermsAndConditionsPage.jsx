import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import TermsAndConditions from "../components/TermsAndConditions";
import "../css/Navbar.css";
import "../css/Footer.css";

const TermsAndConditionsPage = () => {
  return (
    <>
      <NavbarComponent />
      <TermsAndConditions />
      <FooterComponent />
    </>
  );
};

export default TermsAndConditionsPage;
