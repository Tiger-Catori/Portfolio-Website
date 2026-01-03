import "../css/Home.css";
import NavbarComponment from "../components/Navbar";
import HeroComponent from "../components/Hero";
import BannerComponent from "../components/Banner";
import ProjectsComponent from "../components/Projects";
import FormComponent from "../components/Form";
import FooterComponent from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavbarComponment />
      <HeroComponent />
      <BannerComponent />
      <ProjectsComponent />
      <FormComponent />
      <FooterComponent />
    </>
  );
};

export default Home;
