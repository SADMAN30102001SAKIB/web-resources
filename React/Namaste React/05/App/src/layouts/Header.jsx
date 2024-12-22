import logo from "../assets/logo.png";

const Header = () => (
    <header>
        <div>
            <img src={logo} alt="logo" />
            <span className="company-name">Foodie</span>
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
);

export default Header;