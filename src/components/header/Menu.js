import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = (props) => {
  const closeNav = (e) => {
    props.closeNavMobile(e);
  };
  return (
    <nav className={`navbar ${props.mobile ? "active" : ""}`}>
      <ul className="menu">
        <li>
          <NavLink
            to="/"
            onClick={() => {
              closeNav(false);
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/about"
            onClick={() => {
              closeNav(false);
            }}
          >
            About
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/works"
            onClick={() => {
              closeNav(false);
            }}
          >
            Works
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/contact"
            onClick={() => {
              closeNav(false);
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
