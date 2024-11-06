import express from "express";

const express = require("express");
const app = express();
const products = require("./data/products.json");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get('/api/products', (req,res) => {
    res.json(products);
});

app.get('api/products/:id', (req,res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    product ? res.json(product) : res.status(404).json({ msg : "Product not found" });
});

app.post('/api/checkout', (req,res) => {
    const success = Math.random() > 0.5;
    res.jason({ success });
});

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}.`));