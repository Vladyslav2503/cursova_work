import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./Cart-item";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import Navbar from "components/Navbar";
import { Typography } from "@mui/material";
export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div style={{ marginTop: "100px" }} className="cart">
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
                        <div style={{display: "flex", alignItems: "center"}}>
                        <button onClick={() => navigate("/shop")}> Continue Shopping </button>
                        <Link
                            to={"/checkout"}
                            style={{padding: "14px", backgroundColor: "rgb(19, 19, 19)", borderRadius: "10%", color: "#fff", textDecoration: "none"}} 
                            className="checkout"
                        >
                            <Typography>
                                Checkout
                            </Typography>
                        </Link>
                        </div>
                    </div>
                ) : (
                    <h1>Cart is Empty</h1>
                )}
            </div >
        </>
    );
};