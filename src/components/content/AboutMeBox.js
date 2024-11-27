const AboutMeBox = () => {
    return(
        <div className="about-me-box shadow-box">
            <a className="overlay-link" href="./about.html"></a>
                <img src="./assets/images/bg1.png" alt="BG" className="bg-img"/>
            <div className="img-box">
                <img src="./assets/images/profile-pic.png" alt="About Me"/>
            </div>
            <div className="infos">
                <h4>Frontend Engineer</h4>
                <h1>Manmohan Jangra.</h1>
                <p>React & JavaScript Expert | Building Scalable, High-Performance Web Apps</p>
                <a href="#" className="about-btn">
                    <img src="./assets/images/icon.svg" alt="Button"/>
                </a>
            </div>
        </div>
    );
}

export default AboutMeBox;