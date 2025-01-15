import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <div className="about-project-box info-box shadow-box h-full">
      <Link className="overlay-link" to="/works"></Link>
      <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
      <img src="./assets/images/my-works.png" alt="My Works" />
      <div className="d-flex align-items-center justify-content-between">
        <div className="infos">
          <h4>SHOWCASE</h4>
          <h1>Projects</h1>
        </div>

        <Link to="/works" className="about-btn">
          <img src="./assets/images/icon.svg" alt="Button" />
        </Link>
      </div>
    </div>
  );
};

export default Showcase;
