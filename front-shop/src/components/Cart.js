import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ProductCard from './ProductCard';

function Cart({cart, handleCart}) {
    const [totalPrice, updatePrice] = useState(0);

    useEffect(() => {
        if(cart.length > 0) {
            const price = cart.map(i => {return parseFloat(i.price)}).reduce((a , b) => a + b);
            updatePrice(price.toFixed(2));
        }
    },[cart]);

    return (
        <main className="cart__page">
            <Link className="small" to="/"> &#60; back to Products</Link>
            <h1>My cart</h1>
            {cart.length === 0 ? <p className="cart__page-empty">Empty cart, no fun :(</p> :
                <div className="cart_page_listing">
                    {cart.map(cartItem =><ProductCard key={cartItem.id} product={cartItem} handleCart={handleCart} cart={cart} />)}
                    <div className="cart__page-box">
                        <h2 className="inline strong">Total:</h2><span> € {totalPrice}</span>
                        <button className="button button--green">Proceed to checkout</button>
                    </div>
                </div>
            }
        </main>
        );
}

export default Cart;