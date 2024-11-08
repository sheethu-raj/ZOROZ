import React from "react";
import { Link } from "react-router-dom";

function ProductCard() {
    return(
        <div className="product-card">
            <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <p>{product.description}</p>
            </Link>    
        </div> 
    );
}

export default ProductCard;