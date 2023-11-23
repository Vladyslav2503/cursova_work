import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../pages/storePage/StorePage.css";
import Navbar from './Navbar';
import { Button, TextField } from '@mui/material';

const Todo = () => {
    const [id, setId] = useState(Date.now());
    const [task, setTask] = useState("")
    const [price, setPrice] = useState("")
    const [imagePath, setimagePath] = useState(null);
    const [image, setImage] = useState('');
    const handleAdd = () => {
        setId(Date.now());
        const formData = new FormData();
        formData.append('id', id);
        formData.append('task', task);
        formData.append('price', price);
        formData.append('image', imagePath);

        axios.post('http://localhost:3001/add', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(() => {
                // Оновлення списку після успішного додавання товару
                axios.get('http://localhost:3001/get')
                    .then(result => setTodos(result.data)
                    )
                    .catch(err => console.log(err))
                console.log("Before reset:", task, price, imagePath);
                setTask('');
                setPrice('');
                setimagePath(null);
                setImage('');
                console.log("After reset:", task, price, imagePath);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/delete/${id}`)
            .then(() => {
                // Після успішного видалення оновіть список
                axios.get('http://localhost:3001/get')
                    .then(result => setTodos(result.data))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])



    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setimagePath(selectedImage);
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result); // Оновлюємо стан іншим зображенням
        };

        if (selectedImage) {
            reader.readAsDataURL(selectedImage);
        }
    };



    return (
        <>
            <Navbar />
            <div style={{ marginTop: "70px", }} >
                <div className='formAddGoods'>
                    <div>
                        <TextField style={{ marginRight: "20px" }} type='text' placeholder='Enter description' value={task} onChange={(e) => setTask(e.target.value)} />
                        <TextField type='text' placeholder='Enter Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <TextField style={{ marginTop: "20px" }} type='file' onChange={handleImageChange} />
                    {image && <img src={image} alt='Preview' style={{ marginTop: '20px', maxWidth: '100%' }} />}
                    <button className='addButton' type='button' onClick={handleAdd}>Add</button>
                </div>
                {todos.length === 0
                    ?
                    <div><h2>No Record</h2></div>
                    :
                    <div className="products">
                        {todos.map((todo, index) => (
                            <div className="product">
                                <div key={index}>
                                    {todo.imagePath && (
                                        <img src={`http://localhost:3001/static/${todo.imagePath}`} alt={`Image for ${todo.task}`} style={{ marginTop: '20px', width: '400px', height: '400px', objectFit: 'contain' }} />
                                    )}
                                    <div className="description">
                                        <p>
                                            <b>{todo.task}</b>
                                        </p>
                                        <p> ${todo.price}</p>
                                        <button className='addButton' onClick={() => handleDelete(todo._id)}>Видалити</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    )
}

export default Todo