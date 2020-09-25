import React from "react";
import ProductCard from './ProductCard';

function ProductList({products}) {
    return (
        <main>
            {products.map(product => <ProductCard key={product.id} product={product} />)}
        </main>
    );
}


export default ProductList;