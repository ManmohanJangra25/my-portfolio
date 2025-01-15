import AboutContactBox from "./AboutContactBox";
import AboutProfile from "./AboutProfile";
import MoreAboutMe from "./MoreAboutMe";
import Specialization from "./Specialization";

const AboutPage = () => {
  return (
    <div className="about-area">
      <div className="container">
        <div className="d-flex about-me-wrap align-items-start gap-24">
          <div className="aos-init aos-animate">
            <div className="about-image-box shadow-box">
              <img src="./assets/images/profile-pic.png" alt="About Me" />
              <div className="image-inner">
                <img
                  src="./assets/images/bg1.png"
                  alt="BG"
                  className="bg-img"
                />
              </div>
            </div>
          </div>
          <div
            className="about-details aos-init aos-animate"
            data-aos="zoom-in"
          >
            <h1
              className="section-heading aos-init aos-animate"
              data-aos="fade-up"
            >
              <img src="./assets/images/star-2.png" alt="Star" /> Self-summary{" "}
              <img src="./assets/images/star-2.png" alt="Star" />
            </h1>
            <div className="about-details-inner shadow-box">
              <img src="./assets/images/icon2.png" alt="Star" />
              <h1>Manmohan Jangra</h1>
              <p>
                I am a Frontend Developer with 4+ years of experience building
                scalable, high-performance web applications. Proficient in
                React, Redux, and JavaScript, I specialize in creating
                pixel-perfect UIs and optimizing performance. With a strong
                foundation in Node.js and Express.js.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-24">
          <div className="col-md-6 aos-init aos-animate" data-aos="zoom-in">
            <div className="about-edc-exp about-experience shadow-box">
              <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
              <h3>EXPERIENCE</h3>

              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>
                      <p className="date">02/2023 – 11/2024</p>
                      <h2>Senior Frontend Associate</h2>
                      <p className="type">Siam Computing, Chennai</p>
                    </li>
                    <li>
                      <p className="date">02/2022 – 02/2023</p>
                      <h2>Front End Engineer</h2>
                      <p className="type">The Workfront, Delhi</p>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      <p className="date">07/2021 – 02/2022</p>
                      <h2>Web Developer</h2>
                      <p className="type">Trade Serve India, Delhi</p>
                    </li>
                    <li>
                      <p className="date">02/2020 – 02/2021</p>
                      <h2>Web Designer Intern</h2>
                      <p className="type">Team Info Tech, Delhi |</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 aos-init aos-animate" data-aos="zoom-in">
            <div className="about-edc-exp about-education shadow-box">
              <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
              <h3>EDUCATION</h3>

              <ul>
                <li>
                  <p className="date">2023 - 2025</p>
                  <h2>MCA - Master of Computer Applications</h2>
                  <p className="type">Mangalayatan University</p>
                </li>
                <li>
                  <p className="date">2018-2020</p>
                  <h2>BCA - Bachelor of Computer Applications</h2>
                  <p className="type">MDU, Haryana </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-24">
            <div className="col-md-12">
              <Specialization type="full_width" />
            </div>
          </div>
          <div className="row mt-24">
            <div className="col-md-12">
              <div className="d-flex profile-contact-credentials-wrap gap-24">
                <div
                  data-aos="zoom-in"
                  className="aos-init aos-animate col-lg-3"
                >
                  <AboutProfile />
                </div>

                <div
                  data-aos="zoom-in"
                  className="flex-1 aos-init aos-animate col-lg-5"
                >
                  <AboutContactBox />
                </div>

                <div
                  data-aos="zoom-in"
                  className="h-full aos-init aos-animate col-lg-4"
                >
                  <MoreAboutMe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
