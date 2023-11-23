import React, { useEffect, useState } from 'react';
import "./Response.css";
import ResponseItem from './ResponseItem';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Rating } from '@mui/material';
import axios from 'axios';
import Navbar from 'components/Navbar';

const Response = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [response, setResponse] = useState([]); // Додав стан для тримання відгуків
    useEffect(() => {
        axios.get('http://localhost:3001/reviews')
            .then(result => setResponse(result.data))
            .catch(err => console.log(err))
    }, [])
    const [feedback, setFeedback] = useState({
        rating: 0,
        name: '',
        comment: '',
    });

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [name]: value,
        }));
    };

    const handleRatingChange = (newValue) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            rating: newValue,
        }));
    };

    const handleConfirmFeedback = () => {
        // Створюємо об'єкт для відгуку
        const newFeedback = {
            name: feedback.name,
            date: new Date().toLocaleDateString(), // Додаємо поточну дату
            description: feedback.comment,
            rating: feedback.rating,
        };

        // Додаємо новий відгук до стану response
        setResponse((prevResponse) => [...prevResponse, newFeedback]);

        // Створюємо об'єкт для відгуку, який відправляється на сервер
        const userData = {
            name: feedback.name,
            date: newFeedback.date,
            description: feedback.comment,
            rating: feedback.rating,
        };

        // Використовуємо axios для відправлення відгуку на сервер
        axios.post('http://localhost:3001/reviews', userData)
            .then(response => {
                console.log(response.data); // Логуємо відповідь сервера
            })
            .catch(error => {
                console.error('Error adding user:', error);
            });

        // Закриваємо модальне вікно
        handleModalClose();
        setFeedback({
            rating: 0,
            name: "",
            comment: ""
        })
    };

    return (
        <div style={{width: "100%", height: "100%", background: "#000"}} >
        <Navbar/>
            <div className='container'>
                <h2 style={{color: "#fff"}} >REVIEWS ABOUT THE WORK OF THE FLEX-FLOW GYM</h2>
            </div>
            <div className='reviews'>
                <div className='response'>
                    <p style={{color: "#fff"}} >POSITIVE {response.filter(item => item.rating > 2.5).length}</p>
                    <p style={{color: "#fff"}}>ALL {response.length}</p>
                    <p style={{color: "#fff"}}>NEGATIVE {response.filter(item => item.rating <= 2.5).length}</p>
                </div>
            </div>
            <button className='responseButton' onClick={handleModalOpen}>Give feedback</button>

            <Dialog open={isModalOpen} onClose={handleModalClose}>
                <DialogTitle>Give Feedback</DialogTitle>
                <DialogContent style={{width: "400px"}}>
                    <TextField style={{marginTop: "10px"}} label="Name" name="name" value={feedback.name} onChange={handleInputChange} fullWidth />
                    <br />
                    <TextField style={{marginTop: "20px", marginBottom: "10px"}} label="Comment" name="comment" value={feedback.comment} onChange={handleInputChange} fullWidth />
                    <br />
                    <p style={{marginLeft: 130}} >Your rating</p>
                    <Rating style={{marginLeft: 110, marginTop: 10 }} name="half-rating" value={feedback.rating} precision={0.5} onChange={(event, newValue) => handleRatingChange(newValue)} />
                </DialogContent>
                <DialogActions>
                    <Button style={{color: "black"}} onClick={handleConfirmFeedback}>Confirm</Button>
                    <Button style={{color: "black"}} onClick={handleModalClose}>Cancel</Button>
                </DialogActions>
            </Dialog>

            {response.map((responseItem, index) => (
                <ResponseItem response={responseItem} key={index} />
            ))}
        </div>
    );
};

export default Response;
