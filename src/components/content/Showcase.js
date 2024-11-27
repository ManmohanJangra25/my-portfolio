const Showcase = () => {
  return (
    <div className="about-project-box info-box shadow-box h-full">
      <a className="overlay-link" href="./works.html"></a>
      <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
      <img src="./assets/images/my-works.png" alt="My Works" />
      <div className="d-flex align-items-center justify-content-between">
        <div className="infos">
          <h4>SHOWCASE</h4>
          <h1>Projects</h1>
        </div>

        <a href="#" className="about-btn">
          <img src="./assets/images/icon.svg" alt="Button" />
        </a>
      </div>
    </div>
  );
};

export default Showcase;
