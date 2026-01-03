import "../css/Form.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "emailjs-com";

const FormComponent = () => {
  return <FormSection />;
};

export default FormComponent;

const FormSection = () => {
  return (
    <>
      <section className="section section__form" id="form-section">
        <div className="form__container">
          <Form />

          <div
            className="container__image"
            data-aos="flip-left"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <img src="images/michael/michael-hero2.webp" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

const Form = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_saxrs49", // ← replace
        "template_8arc4fe", // ← replace
        formRef.current,
        "HJGGHxDB7ombFB3zD", // ← replace
      )
      .then(
        () => {
          alert("Form submission successful!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message.");
        },
      );
  };

  return (
    <div
      className="form__section"
      id="form2__box"
      data-aos="flip-right"
      data-aos-duration="1500"
      data-aos-delay="500"
    >
      <form ref={formRef} onSubmit={sendEmail} className="web__form">
        <FormHeading />

        <div className="input__box">
          <FormInputs />
        </div>

        <AgreementCheckbox />

        <button className="button red-button btn__form" type="submit">
          <div className="button-content">
            <span className="text">Get Started</span>
          </div>
        </button>

        {/* <HowItWorks />*/}
      </form>
    </div>
  );
};

const FormHeading = () => (
  <div className="heading__container">
    <h1 className="heading">Get Started!</h1>
    <p>Let us know about you and your goals</p>
  </div>
);

const FormInputs = () => (
  <>
    <input
      type="text"
      className="input"
      name="from_name"
      placeholder="Full name"
      required
    />
    <input
      type="email"
      className="input"
      name="from_email"
      placeholder="Email address"
      required
    />
    <input
      type="tel"
      className="input"
      name="from_phone"
      placeholder="Phone number"
    />
    <textarea
      id="message"
      name="message"
      className="textarea"
      placeholder="Message..."
      autoComplete="off"
      required
    />
  </>
);

const AgreementCheckbox = () => (
  <div className="checkbox-container">
    <input type="checkbox" id="subscribe" name="subscribe" required />
    <label htmlFor="subscribe" className="label">
      I agree to have my information stored&nbsp;
      <span>
        <Link target="_blank" to="/privacy-policy">
          Privacy Policy
        </Link>
      </span>
    </label>
  </div>
);

// const HowItWorks = () => (
//   <div className="how-it-works">
//     <h1>How it works</h1>
//     <div className="steps">
//       <img src="images/general/form-steps.webp" alt="" />
//     </div>
//   </div>
// );
