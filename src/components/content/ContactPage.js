import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  const linkedinColor = {
    color: "#0077B5",
  };
  return (
    <section className="contact-area">
      <div className="container">
        <div className="gx-row d-flex justify-content-between gap-24">
          <div className="contact-infos">
            <h3 data-aos="fade-up" className="aos-init aos-animate">
              Contact Info
            </h3>
            <ul className="contact-details">
              <li
                className="d-flex align-items-center aos-init aos-animate"
                data-aos="zoom-in"
              >
                <div className="icon-box shadow-box">
                  <i className="iconoir-mail"></i>
                </div>
                <div className="right">
                  <span>MAIL us</span>
                  <h4>
                    <Link
                      className="text-light"
                      to="mailto:manmohanjangra9798@gmail.com"
                    >
                      manmohanjangra9798@gmail.com
                    </Link>
                  </h4>
                  <h4>
                    <Link
                      className="text-light"
                      to="mailto:manmohanjangra9798@gmail.com"
                    >
                      manmohanjangra2528@gmail.com
                    </Link>
                  </h4>
                </div>
              </li>

              <li
                className="d-flex align-items-center aos-init aos-animate"
                data-aos="zoom-in"
              >
                <div className="icon-box shadow-box">
                  <i className="iconoir-phone"></i>
                </div>
                <div className="right">
                  <span>Contact Us</span>
                  <h4>
                    <Link className="text-light" to="tel:7015846550">
                      +91-7015846550
                    </Link>
                  </h4>
                  <h4>
                    <Link className="text-light" to="tel:7015846550">
                      +91-8529392301
                    </Link>
                  </h4>
                </div>
              </li>

              <li
                className="d-flex align-items-center aos-init aos-animate"
                data-aos="zoom-in"
              >
                <div className="icon-box shadow-box">
                  <i className="fa-solid fa-location-crosshairs"></i>
                </div>
                <div className="right">
                  <span>Location</span>
                  <h4>
                    New Delhi <br />
                    India
                  </h4>
                </div>
              </li>
            </ul>

            <h3 data-aos="fade-up" className="aos-init aos-animate">
              Social Info
            </h3>
            <ul
              className="social-links d-flex align-center aos-init aos-animate"
              data-aos="zoom-in"
            >
              <li>
                <Link
                  to="http://linkedin.com/in/manmohan-jangra-b2703201"
                  target="_blank"
                  className="shadow-box"
                >
                  <i
                    className="fa-brands fa-linkedin"
                    style={linkedinColor}
                  ></i>
                </Link>
              </li>
              <li>
                <Link
                  to="https://github.com/ManmohanJangra25/"
                  className="shadow-box"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </Link>
              </li>
              <li>
                <Link
                  className="shadow-box"
                  to="https://www.instagram.com/oyemannu2528"
                  target="_blank"
                >
                  <i className="iconoir-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div data-aos="zoom-in" className="contact-form aos-init aos-animate">
            <div className="shadow-box">
              <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
              <img src="./assets/images/icon3.png" alt="Icon" />
              <h1>
                Let’s work <span>together.</span>
              </h1>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
