import React, { useEffect, useState } from 'react'
import { Product } from "./product";
import "./StorePage.css";
import Navbar from 'components/Navbar';
import axios from 'axios';
import { useSelector } from 'react-redux';

const StorePage = () => {



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
        <div>
            <Navbar />
            <div style={{ marginTop: "100px" }} className="shop">
                <div className="shopTitle">
                    <h1>FlexFlow Shop</h1>
                </div>
                <div className="products">
                    {filteredData.map((product) => (
                        <Product data={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StorePage