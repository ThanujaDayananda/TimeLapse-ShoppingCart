import React, { useState, useEffect } from "react";

function Cart(props) {

    const [subtotal, setSubTotal] = useState(0);

    const handleChange = (e, product) => {
        if (e.target.value < 1) return;
        let foo = props.cart.findIndex(item => item.name === product.name);
        props.setCart([...props.cart], props.cart[foo].quantity = e.target.value);
    };


    useEffect(() => {
        let temp = 0;
        props.cart.forEach(element => {
            temp = temp + (element.price * element.quantity);
        });
        setSubTotal(temp);
    }, [props]);

    return (
        <div className="cart-container">
            <div className="cart-bg" onClick={() => props.onClick()}>
            </div>
            <div className="cart">
                <h1>Your Cart</h1>
                <div className="cart-content">
                    {props.cart.map((product) =>
                    (
                        <div key={product.name} className="cart-content-product">
                            <img src={product.img} alt="product" />
                            <span>{product.name}</span>
                            <span>${product.price * product.quantity}</span>
                            <input type="number" value={product.quantity} onChange={(e) => handleChange(e, product)} />
                        </div>
                    ))}
                </div>
                <span className="cart-subtotal">Subtotal: ${subtotal}</span>
                <button type="button">CHECKOUT</button>
            </div>
        </div>

    )
}

export default Cart;