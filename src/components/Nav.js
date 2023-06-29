import { Link } from "react-router-dom";
import logo from "./../styles/images/logo.png";
import cart from "./../styles/images/cart.png";

function Nav(props) {


    return (
        <nav>
            <Link to="shopping-cart/">
                <img src={logo} alt="logo" className="logo"></img>
            </Link>
            <div>
                <Link to="shopping-cart/">
                    <span>Home</span>
                </Link>
                <Link to="shopping-cart/shop">
                    <span>Shop</span>
                </Link>
                <img src={cart} alt="cart" onClick={() => props.onClick()}></img>
                <span>{props.user.name}</span>
            </div>
        </nav>
    )
}

export default Nav;