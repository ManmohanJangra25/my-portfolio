const MoreAboutMe = () => {
  return (
    <div className="about-crenditials-box info-box shadow-box h-full d-flex flex-column">
      <a className="overlay-link" href="./credentials.html"></a>
      <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
      <img src="./assets/images/sign.png" alt="Sign" />
      <div className="d-flex align-items-center justify-content-between">
        <div className="infos">
          <h4>more about me</h4>
          <h1>Credentials</h1>
        </div>
        <a href="./credentials.html" className="about-btn">
          <img src="./assets/images/icon.svg" alt="Button" />
        </a>
      </div>
    </div>
  );
};

export default MoreAboutMe;
