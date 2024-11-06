import React from "react";
import { Link} from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
    return (
        <div className="homepage">
            <h1>Welcome to Our Mock E-Commerce Website</h1>
            <p>Find the latest products at best prices!</p>
            <Link to="/products" className="shop-now-button">
                Shop Now!
            </Link>
        </div>
    );
}

export default HomePage;