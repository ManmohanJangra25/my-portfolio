const AboutProfile = () => {
  const linkedinColor = {
    color: "#0077B5",
  };
  return (
    <div className="about-profile-box info-box shadow-box h-full">
      <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
      <div className="inner-profile-icons shadow-box">
        <a href="#">
          <i className="fa-brands fa-linkedin" style={linkedinColor}></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="infos">
          <h4>Stay with me</h4>
          <h1>Profiles</h1>
        </div>

        <a href="./contact.html" className="about-btn">
          <img src="./assets/images/icon.svg" alt="Button" />
        </a>
      </div>
    </div>
  );
};

export default AboutProfile;
