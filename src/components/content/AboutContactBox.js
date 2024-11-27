const AboutContactBox = () => {
  return (
    <div className="about-contact-box info-box shadow-box">
      <a className="overlay-link" href="./contact.html"></a>
      <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
      <img src="./assets/images/icon2.png" alt="Icon" className="star-icon" />
      <h1>
        Let's <br />
        work <span>together.</span>
      </h1>
      <a href="#" className="about-btn">
        <img src="./assets/images/icon.svg" alt="Button" />
      </a>
    </div>
  );
};

export default AboutContactBox;
