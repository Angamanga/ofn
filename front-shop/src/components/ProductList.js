import React from "react";
import ProductCard from './ProductCard';

function ProductList({products, ...props}) {
    return (
        <main>
            {products.map(product => <ProductCard key={product.id} product={product}  {...props} />)}
        </main>
    );
}


export default ProductList;