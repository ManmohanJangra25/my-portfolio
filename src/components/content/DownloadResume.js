const DownloadResume = () => {
  return (
    <div className="about-blog-box info-box shadow-box h-full">
      <a href="./blog.html" className="overlay-link"></a>
      <img src="./assets/images/bg1.png" alt="BG" className="bg-img" />
      <img src="./assets/images/gfonts.png" alt="GFonts" />
      <div className="d-flex align-items-center justify-content-between">
        <div className="infos">
          <h4>Blog</h4>
          <h1>GFonts</h1>
        </div>

        <a href="./blog.html" className="about-btn">
          <img src="./assets/images/icon.svg" alt="Button" />
        </a>
      </div>
    </div>
  );
};

export default DownloadResume;
