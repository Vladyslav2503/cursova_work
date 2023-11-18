import React, { useEffect, useState } from 'react'
import { Product } from "./product";
import "./StorePage.css";
import Navbar from 'components/Navbar';
import axios from 'axios';

const StorePage = () => {

    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <Navbar />
            <div style={{ marginTop: "100px" }} className="shop">
                <div className="shopTitle">
                    <h1>FlexFlow Shop</h1>
                </div>
                <div className="products">
                    {todos.map((product) => (
                        <Product data={product} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default StorePage