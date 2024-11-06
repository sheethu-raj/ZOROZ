import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ProductDetails.css";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`/api/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [id]);

    if(!product) {
        return (
            <p>Loading...</p>
        );
    }

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <Link to="/checkout">Buy Now!</Link>
            </div>
        </div>
    );
}

export default ProductDetails;