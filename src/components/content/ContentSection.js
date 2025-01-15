import AboutMeBox from "./AboutMeBox";
import Marquee from "./Marquee";
import MoreAboutMe from "./MoreAboutMe";
import Showcase from "./Showcase";
import DownloadResume from "./DownloadResume";
import Specialization from "./Specialization";
import AboutProfile from "./AboutProfile";
import AboutClientBox from "./AboutClientBox";
import AboutContactBox from "./AboutContactBox";

const ContentSection = () => {
  return (
    <section className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6 aos-init aos-animate" data-aos="fade-right">
            <AboutMeBox />
          </div>
          <div className="col-md-6">
            <div className="about-credentials-wrap">
              <div data-aos="zoom-in" className="aos-init aos-animate">
                <Marquee />
              </div>
              <div className="gx-row d-flex gap-24">
                <div data-aos="zoom-in" className="aos-init aos-animate">
                  <MoreAboutMe />
                </div>
                <div data-aos="zoom-in" className="aos-init aos-animate">
                  <Showcase />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-24">
          <div className="col-md-12">
            <div className="blog-service-profile-wrap d-flex gap-24">
              <div data-aos="zoom-in" className="aos-init aos-animate">
                <DownloadResume />
              </div>
              <div data-aos="zoom-in" className="flex-1 aos-init aos-animate">
                <Specialization type="box" />
              </div>
              <div data-aos="zoom-in" className="aos-init aos-animate">
                <AboutProfile />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-24">
          <div data-aos="zoom-in" className="col-md-6 aos-init aos-animate">
            <AboutClientBox />
          </div>
          <div className="col-md-6 aos-init aos-animate" data-aos="zoom-in">
            <AboutContactBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
