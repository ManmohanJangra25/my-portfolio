import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <img src="/images/logo/mj-logo.png" alt="" width="85px" />
    </Link>
  );
};

export default Logo;
