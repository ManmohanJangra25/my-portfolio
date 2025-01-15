import "./Header.css";
import Menu from "./Menu";
import Logo from "../Logo.js";
import ContactButton from "./ContactButton";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  function handleCLick() {
    openMenu === false ? setOpenMenu(true) : setOpenMenu(false);
  }

  return (
    <header className="header-area">
      <div className="container">
        <div className="gx-row d-flex align-items-center justify-content-between">
          <Logo />
          <Menu mobile={openMenu} />
          <ContactButton />
          <div
            className={`show-menu ${openMenu ? "active" : ""}`}
            onClick={handleCLick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
