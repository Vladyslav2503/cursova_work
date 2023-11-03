import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../pages/storePage/StorePage.css";

const Todo = () => {
    const [id, setId] = useState(Date.now());
    const [task, setTask] = useState()
    const [price, setPrice] = useState()
    const [imagePath, setimagePath] = useState(null);
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
    };

    return (
        <>
            <div>
                <input type='text' placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
                <input type='text' placeholder='Enter Price' onChange={(e) => setPrice(e.target.value)} />
                <input type='file' onChange={handleImageChange} />
                <button type='button' onClick={handleAdd}>Add</button>
            </div>
            {todos.length === 0
                ?
                <div><h2>No Record</h2></div>
                :
                todos.map((todo, index) => (
                    <div className="products">
                        <div key={index}>
                            {todo.imagePath && (
                                <img src={`http://localhost:3001/static/${todo.imagePath}`} alt={`Image for ${todo.task}`} />
                            )}
                            <div className="description">
                                <p>
                                    <b>{todo.task}</b>
                                </p>
                                <p> ${todo.price}</p>
                            </div>
                            {console.log(todo.imagePath)}

                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Todo