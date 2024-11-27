const AboutClientBox = () => {
  return (
    <div className="about-client-box info-box shadow-box">
      <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
      <div className="clients d-flex align-items-start gap-24 justify-content-center">
        <div className="client-item">
          <h1>07</h1>
          <p>
            Years <br />
            Experience
          </p>
        </div>

        <div className="client-item">
          <h1>+125</h1>
          <p>
            CLIENTS <br />
            WORLDWIDE
          </p>
        </div>

        <div className="client-item">
          <h1>+210</h1>
          <p>
            Total <br />
            Projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutClientBox;
