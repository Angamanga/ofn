import React from "react";
import { Link } from "react-router-dom";

function Header({cart}) {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-image" src="OFN_logo.svg" alt="OFN logo" />
                <p className="header__logo-text">Open Food Network</p>
            </div>
            <Link className="header__cart" to="/cart">
                <img
                    src="shopping-cart.svg"
                    alt="shopping cart icon"
                    className="header__cart-icon"
                    />
                <span className="header__cart-text">My cart({cart.length})</span>
            </Link>
        </header>
    );
}

export default Header;
