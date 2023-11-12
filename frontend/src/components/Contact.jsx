import React, { useState } from 'react'
import img1 from "../assets/images/contact-left.png"
import img2 from "../assets/images/contact-right.png"
import "../App.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import axios from 'axios';
import { Alert, Modal } from '@mui/material';
const Contact = () => {


    const ModalWindow = ({ isOpen, onClose }) => {
        return (
            <Modal open={isOpen} onClose={onClose} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '700px'
                }}>
                <Alert variant="filled" severity="success">
                Reply sent. Good luck
                </Alert>
            </Modal>
        );
    };

    const [name, setName] = useState('')
    const [id, setId] = useState(Date.now());
    const [number, setNumber] = useState('')
    const [feedback, setFeedback] = useState('')
    const [isModalVisible, setModalVisible] = useState(false);


    const handleAdd = () => {
        const userData = {
            id,
            name,
            number,
            feedback,
        };
      
        axios.post('http://localhost:3001/feedbacks', userData)
          .then(response => {
            setModalVisible(true);
            console.log(response.data); // Додайте відповідний код обробки відповіді
          })
          .catch(error => {
            console.error('Error adding user:', error);
          });

          setName('');
          setNumber('');
          setFeedback('');
      };
    




    return (
        <div style={{ display: "flex" }}>
            <img style={{}} src={img1} />
            <div style={{
                position: "absolute",
                left: "500px",
                width: "500px",
                height: "773px",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
            }} >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: 'center', marginTop: '14px' }}>
                        <p1 style={{ color: "white", fontSize: '44px' }} >Interesting?</p1>
                    </div>
                    <div style={{ display: "flex", justifyContent: 'center' }} >
                        <h3 style={{ color: "white",  fontSize: '44px' }}>Write to us</h3>
                    </div>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Your name?' className='inputForm' />
                    <input value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Your number?' className='inputForm' />
                    <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder='Your questions or suggestions?' className='inputForm' style={{ height: '80px' }}></textarea>
                    <button onClick={() => handleAdd()} className='btnForm' >Send!</button>
                    <ModalWindow isOpen={isModalVisible} onClose={() => setModalVisible(false)} />
                    <div>
                        <div className='listForm' >
                            <div className='iconForm'>
                                <LocationOnIcon />
                            </div>
                            <h4 className='listFormText'>St. Zamkova, 50</h4>
                        </div>
                        <div className='listForm'>
                            <div className='iconForm'>
                                <AlternateEmailIcon />
                            </div>
                            <a style={{ fontSize: '27px' }} className='listFormText'>flexflow@gmail.com</a>
                        </div>
                        <div className='listForm'>
                            <div className='iconForm'>
                                <CallIcon />
                            </div>
                            <h4 className='listFormText'>(098) 328 - 8880</h4>
                        </div>
                        {/*карта */}
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1286.3980922256856!2d24.034698738958397!3d49.84628705140191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473addf9b221ed85%3A0xed4414fc7088f8cb!2z0KHQv9C-0YDRgtC40LLQvdC-0LUg0L_QvtC70LU!5e0!3m2!1sen!2sca!4v1699459229051!5m2!1sen!2sca"
                                width="400"
                                height="150"
                                style={{ border: 0, marginTop: '10px' }}
                                allowfullscreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%" }} >


            </div>
            <img src={img2} />
        </div>
    )
}

export default Contact