import { Link } from "react-router-dom";

const AboutContactBox = () => {
  return (
    <div className="about-contact-box info-box shadow-box">
      <Link className="overlay-link" to="/contact"></Link>
      <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
      <img src="./assets/images/icon2.png" alt="Icon" className="star-icon" />
      <h1>
        Let's <br />
        work <span>together.</span>
      </h1>
      <Link to="/contact" className="about-btn">
        <img src="./assets/images/icon.svg" alt="Button" />
      </Link>
    </div>
  );
};

export default AboutContactBox;
