import NavbarComponment from "../components/Navbar";
import NotFound from "../components/NotFound.jsx";
import FooterComponent from "../components/Footer";
import "../css/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page-wrapper">
      <NavbarComponment />
      <main className="not-found-main">
        <NotFound />
      </main>
      <FooterComponent />
    </div>
  );
};

export default ErrorPage;
