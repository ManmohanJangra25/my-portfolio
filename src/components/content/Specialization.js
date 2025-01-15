import "./Specialization.css";

const Specialization = (props) => {
  const jsColor = {
    color: "#F0DB4F",
  };
  const cssColor = {
    color: "#2965f1",
  };
  const htmlColor = {
    color: "#f06529",
  };
  const reactColor = {
    color: "#61DBFB",
  };
  const gitlabColor = {
    color: "#FC6D27",
  };
  const nodeColor = {
    color: "#6cc24a",
  };
  const dockerColor = {
    color: "#0db7ed",
  };
  const figmaColor = {
    color: "#ff7262",
  };
  return (
    <div className="about-services-box info-box shadow-box h-full">
      <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
      {props.type === "box" ? (
        <div className="icon-boxes">
          <i className="fa-brands fa-js" style={jsColor}>
            <span>Javascript ES6 - 4 Years</span>
          </i>
          <i className="fa-brands fa-react" style={reactColor}>
            <span>React + Redux - 2 Years</span>
          </i>
          <i className="fa-brands fa-gitlab" style={gitlabColor}>
            <span>Gitlab CI/CD - 4 Years</span>
          </i>
          <i className="fa-brands fa-node" style={nodeColor}>
            <span>Node.js - Backend - 1 Years</span>
          </i>
          <i className="fa-brands fa-docker" style={dockerColor}>
            <span>Docker - Containerization - 1 Years</span>
          </i>
        </div>
      ) : (
        <div className="icon-boxes">
          <i class="fa-brands fa-html5" style={htmlColor}>
            <span>HTML5 - 4 Years</span>
          </i>
          <i class="fa-brands fa-css3" style={cssColor}>
            <span>CSS3 - 4 Years</span>
          </i>
          <i className="fa-brands fa-js" style={jsColor}>
            <span>Javascript ES6 - 4 Years</span>
          </i>
          <i className="fa-brands fa-react" style={reactColor}>
            <span>React + Redux - 2 Years</span>
          </i>
          <i className="fa-brands fa-gitlab" style={gitlabColor}>
            <span>Gitlab CI/CD - 4 Years</span>
          </i>
          <i className="fa-brands fa-node" style={nodeColor}>
            <span>Node.js - Backend - 1 Years</span>
          </i>
          <i className="fa-brands fa-docker" style={dockerColor}>
            <span>Docker - Containerization - 1 Years</span>
          </i>
          <i class="fa-brands fa-wordpress">
            <span>Wordpress - CMS - 4 Years</span>
          </i>
          <i class="fa-brands fa-figma" style={figmaColor}>
            <span>Figma - Prototyping - 4 Years</span>
          </i>
        </div>
      )}

      <div className="d-flex align-items-center justify-content-between">
        <div className="infos">
          <h4>specialization</h4>
          <h1>Technology Stack</h1>
        </div>

        <div className="about-btn">
          <img src="./assets/images/icon.svg" alt="Button" />
        </div>
      </div>
    </div>
  );
};

export default Specialization;
