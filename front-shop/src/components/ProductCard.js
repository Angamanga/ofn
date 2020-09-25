import React from "react";

function ProductCard({product}) {
     return (
     <div className="card" key={product.id}>
        <div>
            <img 
                src={product.images[0].small_url}
                alt={product.images[0].alt}
            />
        </div>
        <div className="card__main">
            <div className="card__main-heading">
                <h2 className="strong inline">{product.name}</h2>
                <p class="small inline">{product.unit_to_display}</p>
            </div>
            <p>{product.description}</p>
            <p><span className="strong">Price</span> € {product.price}</p>
        </div>
        <div className="card__buttons">
            <div className="tag">{product.taxon.name}</div>
            <button className="button button--orange">Add to cart</button>
        </div>
    </div>
      );        
}

export default ProductCard;
