const AboutClientBox = () => {
  return (
    <div className="about-client-box info-box shadow-box">
      <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
      <div className="clients d-flex align-items-start gap-24 justify-content-center">
        <div className="client-item">
          <h1>04+</h1>
          <p>
            Years <br />
            Experience
          </p>
        </div>

        <div className="client-item">
          <h1>50+</h1>
          <p>
            PROJECTS <br />
            COMPLETED
          </p>
        </div>

        <div className="client-item">
          <h1>10+</h1>
          <p>
            Total <br />
            Skills
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutClientBox;
