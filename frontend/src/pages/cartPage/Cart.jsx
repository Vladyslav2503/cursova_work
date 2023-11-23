import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/Shop-context";
import { CartItem } from "./Cart-item";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import Navbar from "components/Navbar";
import { Typography } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();


    const [todos, setTodos] = useState([])
    const { search } = useSelector((state) => state.user);
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])

    const filteredData = todos.filter((namee) =>
        namee.task.toLowerCase().includes(search.toLowerCase()))

        useEffect(() => {
            window.localStorage.setItem('search', search);
        }, [search]);

    return (
        <>
            <Navbar />
            <div style={{ marginTop: "100px" }} className="cart">
                <div>
                    <h1>Cart Items</h1>
                </div>
                <div className="cart">
                    {Object.keys(cartItems).map((itemId) => {
                        const product = filteredData.find((item) => item.id === Number(itemId));
                        if (product && cartItems[itemId] !== 0) {
                            return <CartItem data={product} key={itemId} />;
                        }
                        return null;
                    })}
                </div>
                {totalAmount > 0 ? (
                    
                    <div className="checkout">
                        <p> Subtotal: ${totalAmount} </p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <button onClick={() => navigate("/shop")}> Continue Shopping </button>
                            <Link
                                to={"/checkout"}
                                style={{
                                    padding: "14px",
                                    backgroundColor: "rgb(19, 19, 19)",
                                    borderRadius: "10%",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                className="checkout"
                            >
                                <Typography>Checkout</Typography>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="emptyCar" >
                        <h1 style={{marginBottom: "20px"}}>Cart is Empty</h1>
                        <Link className="startShop" to={"/shop"} >Start shopping</Link>
                    </div>
                )}
            </div>
        </>
    );
};