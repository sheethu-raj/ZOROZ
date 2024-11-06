import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import "../styles/ProductListing.css";

function ProductListing() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    });

    return (
        <div className="product-listing">
            <h1>Product Listing</h1>
            <div className="product-card-container">
                {/* {products.map(product => {
                    <div key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                        </Link>
                    </div>
                })} */}
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductListing;