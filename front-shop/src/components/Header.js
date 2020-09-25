import React from "react";

function Header({cart}) {
    return (
        <header class="header">
            <div className="header__logo">
                <img className="header__logo-image" src="OFN_logo.svg" alt="OFN logo" />
                <p className="header__logo-text">Open Food Network</p>
            </div>
            <div className="header__cart">
                <img
                    src="shopping-cart.svg"
                    alt="shopping cart icon"
                    className="header__cart-icon"
                    />
                <span className="header__cart-text">My cart({cart.length})</span>
            </div>
        </header>
    );
}

export default Header;


