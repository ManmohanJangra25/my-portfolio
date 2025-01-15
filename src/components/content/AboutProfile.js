import { Link } from "react-router-dom";

const AboutProfile = () => {
  const linkedinColor = {
    color: "#0077B5",
  };
  return (
    <div className="about-profile-box info-box shadow-box h-full">
      <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
      <div className="inner-profile-icons shadow-box">
        <Link
          to="http://linkedin.com/in/manmohan-jangra-b2703201"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin" style={linkedinColor}></i>
        </Link>
        <Link to="https://github.com/ManmohanJangra25/" target="_blank">
          <i className="fa-brands fa-github"></i>
        </Link>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="infos">
          <h4>Stay with me</h4>
          <h1>Profiles</h1>
        </div>

        <p href="#" className="about-btn">
          <img src="./assets/images/icon.svg" alt="Button" />
        </p>
      </div>
    </div>
  );
};

export default AboutProfile;
