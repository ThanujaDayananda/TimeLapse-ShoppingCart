import allProducts from "../data/AllProducts";
import React, { useState } from "react";

function Shop(props) {
    const [currentProduct, setCurrentProduct] = useState({
        quantity: 1
    });

    const viewDetails = (product) => {

        setCurrentProduct({ ...product, quantity: 1 });

        document.querySelector('.product-overlay').style.transform = 'scale(1)';
    };

    const handleChange = (e) => {
        if (e.target.value < 1) return;
        setCurrentProduct({ ...currentProduct, quantity: e.target.value });
    };

    return (
        <section className="shop">
            <div className="side-bar">
                <h1>Watches</h1>
            </div>
            <div className="shop-display">
                {allProducts.map((product) => (
                    <div className="product-card" key={product.name} id={product.name} >
                        <h2>{product.name}</h2>
                        <img alt="product-card" src={product.img}></img>
                        <div className="overlay">
                            <button type="button" onClick={() => viewDetails(product)}>DETAILS</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="product-overlay">
                <button type="button" className="close-btn" onClick={() => document.querySelector('.product-overlay').style.transform = 'scale(0)'}>x</button>
                <span className="detail-card-name">{currentProduct.name}</span>
                <img src={currentProduct.img} alt="product"></img>
                <div className="detail-card">
                    <span className="detail-card-price">${currentProduct.price}</span>
                    <span className="detail-card-switch">{currentProduct.switch}</span>
                    <span className="detail-card-size">{currentProduct.dimensions}</span>
                    <input type="number" value={currentProduct.quantity} onChange={handleChange} />
                    <button type="button" onClick={() => props.addToCart(currentProduct)}>ADD TO CART</button>
                </div>
            </div>
        </section>
    )
}

export default Shop;