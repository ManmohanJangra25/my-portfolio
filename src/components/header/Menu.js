import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="">
          <NavLink to="/works">Works</NavLink>
        </li>
        <li className="">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
