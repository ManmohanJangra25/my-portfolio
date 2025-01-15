import { Link } from "react-router-dom";

const DownloadResume = () => {
  return (
    <div className="about-blog-box info-box shadow-box h-full">
      <Link
        to="./assets/Manmohan Jangra Frontend Engineer.pdf"
        download={true}
        className="overlay-link"
      >
        {" "}
      </Link>
      <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
      <img src="./assets/images/gfonts.png" alt="GFonts" />
      <div className="d-flex align-items-center justify-content-between">
        <div className="infos">
          <h4>Download</h4>
          <h1>Resume</h1>
        </div>

        <a
          href="./assets/Manmohan Jangra Frontend Engineer.pdf"
          className="about-btn"
        >
          <img src="./assets/images/icon.svg" alt="Button" />
        </a>
      </div>
    </div>
  );
};

export default DownloadResume;
