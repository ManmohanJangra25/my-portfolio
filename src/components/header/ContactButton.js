import { Link } from "react-router-dom";
import "./ContactButton.css";

const ContactButton = () => {
  return (
    <Link to="/contact" className="theme-btn">
      Let's Talk
    </Link>
  );
};

export default ContactButton;
