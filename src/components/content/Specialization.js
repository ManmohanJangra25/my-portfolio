const Specialization = () => {
  const jsColor = {
    color: "#F0DB4F"
  }
  const reactColor = {
    color: "#61DBFB"
  }
  const gitlabColor = {
    color: "#FC6D27"
  }
  const nodeColor = {
    color: "#6cc24a"
  }
  const dockerColor = {
    color: "#0db7ed"
  }
  return (
    <div className="about-services-box info-box shadow-box h-full">
      <a href="./service.html" className="overlay-link"></a>
      <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
      <div class="icon-boxes">
        <i class="fa-brands fa-js" style={jsColor}></i>
        <i class="fa-brands fa-react" style={reactColor}></i>
        <i class="fa-brands fa-gitlab" style={gitlabColor}></i>
        <i class="fa-brands fa-node" style={nodeColor}></i>
        <i class="fa-brands fa-docker" style={dockerColor}></i>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="infos">
          <h4>specialization</h4>
          <h1>Technology Stack</h1>
        </div>

        <a href="./service.html" className="about-btn">
          <img src="./assets/images/icon.svg" alt="Button" />
        </a>
      </div>
    </div>
  );
};

export default Specialization;
