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
    };

    return (
        <>
        <Navbar/>
            <div className='container'>
                <h2>REVIEWS ABOUT THE WORK OF THE FLEX-FLOW STORE</h2>
            </div>
            <div className='reviews'>
                <div className='response'>
                    <p>POSITIVE {response.filter(item => item.rating > 2.5).length}</p>
                    <p>ALL {response.length}</p>
                    <p>NEGATIVE {response.filter(item => item.rating < 2.5).length}</p>
                </div>
            </div>
            <button className='responseButton' onClick={handleModalOpen}>Give feedback</button>

            <Dialog open={isModalOpen} onClose={handleModalClose}>
                <DialogTitle>Give Feedback</DialogTitle>
                <DialogContent>
                    <TextField label="Name" name="name" value={feedback.name} onChange={handleInputChange} fullWidth />
                    <br />
                    <TextField label="Comment" name="comment" value={feedback.comment} onChange={handleInputChange} fullWidth />
                    <br />
                    <Rating name="half-rating" value={feedback.rating} precision={0.5} onChange={(event, newValue) => handleRatingChange(newValue)} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmFeedback}>Confirm</Button>
                    <Button onClick={handleModalClose}>Cancel</Button>
                </DialogActions>
            </Dialog>

            {response.map((responseItem, index) => (
                <ResponseItem response={responseItem} key={index} />
            ))}
        </>
    );
};

export default Response;
