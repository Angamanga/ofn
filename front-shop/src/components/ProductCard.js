import React from "react";

function ProductCard({product, cart, handleCart}) {
    const price = parseFloat(product.price).toFixed(2);

    return (
    <div className="card">
        <div>
            <img 
                src={product.images[0].small_url}
                alt={product.images[0].alt}
            />
        </div>
        <div className="card__main">
            <div className="card__main-heading">
                <h2 className="strong inline">{product.name}</h2>
                <p className="small inline">{product.unit_to_display}</p>
            </div>
            <p>{product.description}</p>
            <p><span className="strong">Price</span> € {price}</p>
        </div>
        <div className="card__buttons">
            <div className="button--green tag">{product.taxon.name}</div>
            {cart.includes(product)? <button className="button button__red" onClick={(e)=>{handleCart(e, product)}}>Remove</button> : 
            <button className="button button__orange" onClick={(e)=>{handleCart(e, product)}}>Add to cart</button> }        </div>
    </div>
      );        
}

export default ProductCard;
