import React from 'react'
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./StorePage.css";
import Navbar from 'components/Navbar';

const StorePage = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginTop: "100px" }} className="shop">
                <div className="shopTitle">
                    <h1>FlexFlow Shop</h1>
                </div>
                <div className="products">
                    {PRODUCTS.map((product) => (
                        <Product data={product} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default StorePage