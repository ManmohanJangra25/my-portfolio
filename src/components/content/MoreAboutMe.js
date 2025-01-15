import { Link } from "react-router-dom";

const MoreAboutMe = () => {
  return (
    <div className="about-crenditials-box info-box shadow-box h-full d-flex flex-column">
      <Link className="overlay-link" to="/about"></Link>
      <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
      <img src="./assets/images/sign.png" alt="Sign" />
      <div className="d-flex align-items-center justify-content-between">
        <div className="infos">
          <h4>more about me</h4>
          <h1>Discover</h1>
        </div>
        <Link to="/about" className="about-btn">
          <img src="./assets/images/icon.svg" alt="Button" />
        </Link>
      </div>
    </div>
  );
};

export default MoreAboutMe;
