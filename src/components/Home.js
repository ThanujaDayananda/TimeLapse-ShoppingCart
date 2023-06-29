import { Link } from "react-router-dom";

function Home(props) {


    return (
        <header>
            <h1>TimeLapse</h1>
            <h2><span>Capturing the Essence of Time</span></h2>
            <Link to="/shopping-cart/shop">
                <button type="button">
                    SHOP NOW
                </button>
            </Link>
        </header>
    )
}

export default Home;