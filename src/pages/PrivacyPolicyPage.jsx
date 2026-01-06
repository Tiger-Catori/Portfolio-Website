import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";
import PrivacyPolicy from "../components/PrivacyPolicy";
import "../css/Navbar.css";
import "../css/Footer.css";

const PrivacyPolicyPage = () => {
  return (
    <>
      <NavbarComponent />
      <PrivacyPolicy />
      <FooterComponent />
    </>
  );
};

export default PrivacyPolicyPage;
