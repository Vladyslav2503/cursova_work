import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./Cart-item";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import Navbar from "components/Navbar";
export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div style={{marginTop: "100px"}} className="cart">
                <div>
                    <h1>Cart Items</h1>
                </div>
                <div className="cart">
                    {PRODUCTS.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem data={product} />;
                        }
                    })}
                </div>

                {totalAmount > 0 ? (
                    <div className="checkout">
                        <p> Subtotal: ${totalAmount} </p>
                        <button onClick={() => navigate("/shop")}> Continue Shopping </button>
                        <button
                            onClick={() => {
                                checkout();
                                navigate("/checkout");
                            }}
                        >
                            {" "}
                            Checkout{" "}
                        </button>
                    </div>
                ) : (
                    <h1>Cart is Empty</h1>
                )}
            </div>
        </>
    );
};