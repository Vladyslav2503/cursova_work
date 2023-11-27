import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, Rating, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import "./Response.css";

const ResponseItem = (props) => {
  const { _id, name, date, description, rating, feedback } = props.response;
  const [open, setOpen] = useState(false);
  const [responseText, setResponseText] = useState(feedback || ''); // Встановлюємо значення feedback, якщо воно є
  const { userRole } = useSelector((state) => state.user);

  const handleResponseButtonClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleResponseSave = () => {
    // Відправляємо оновлене значення feedback на сервер
    axios.put(`http://localhost:3001/reviews/${_id}`, { feedback: responseText })
      .then(result => {
        console.log(result.data); // Логуємо відповідь сервера
        // Ваша логіка оновлення стану або перезавантаження списку відгуків
      })
      .catch(err => console.error('Error updating feedback:', err));

    handleClose();
  };

  return (
    <div>
      <div className='response-cart-all'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className='name' >{name}</div>
        </div>
        <div className='response-cart'>
          <div>
            <p style={{ marginBottom: "20px", color: "#fff" }} > {description}</p>
            <span style={{ color: "#fff" }} >{date}</span>
          </div>
          <button style={{width: '100px', margin: 0}} className='responseButton' onClick={handleResponseButtonClick}>Response</button>
        </div>
        <div className='rating'><Rating name="half-rating" defaultValue={rating} precision={0.5} /></div>
      </div>

      {userRole === "ADMIN" ?
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update Feedback</DialogTitle>
          <DialogContent>
            <TextField
              label="Введіть відповідь"
              multiline
              rows={4}
              fullWidth
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
            />
            <Button onClick={handleResponseSave} color="primary">
              Save
            </Button>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogContent>
        </Dialog>
        :
        <>
          {feedback ?
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>{feedback}</DialogTitle>
              <DialogContent>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogContent>
            </Dialog>
            :
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>The administrator has not yet responded to this review</DialogTitle>
              <DialogContent>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogContent>
            </Dialog>
          }
        </>
      }
    </div>
  );
};

export default ResponseItem;
