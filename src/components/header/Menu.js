import "./Menu.css"

const Menu = () => {
    return(
        <nav className="navbar">
            <ul className="menu">
                <li className="active"><a href="#">Home</a></li>
                <li className=""><a href="#">About</a></li>
                <li className=""><a href="#">Works</a></li>
                <li className=""><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Menu;