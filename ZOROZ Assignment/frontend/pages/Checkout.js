import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

function Checkout() {
    const navigate = useNavigate();

    const handleClick = () => {
        fetch("/api/checkout", { method: "POST"})
        .then(res => res.json())
        .then(data => { navigate(`/result?success=${data.success}`);});
    }

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <button onClick={handleClick}>Proceed to Payment</button>
        </div>
    );
}

export default Checkout;