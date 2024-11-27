import "./Header.css"
import Menu from "./Menu";
import Logo from "../Logo.js";
import ContactButton from "./ContactButton";

const Header = () => {
    return(
        <header className="header-area">
            <div className="container">
                <div className="gx-row d-flex align-items-center justify-content-between">
                    <Logo />
                    <Menu />
                    <ContactButton/>
                </div>
            </div>
        </header>
    );
}

export default Header;