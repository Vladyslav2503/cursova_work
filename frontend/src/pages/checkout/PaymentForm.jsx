import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

export default function PaymentForm({onCardNumberChange, onCardDateChange, onCardNameChange}) {

  const [cardNumber, setCardNumber] = useState('')
  const [cardDate, setCardDate] = useState('')
  const [cardName, setCardName] = useState('')

  const handleCardNumberChange = (e) => {
    const newValue = e.target.value;
    setCardNumber(newValue);
    onCardNumberChange(newValue);
  };

  const handleCardDateChange = (e) => {
    const newValue = e.target.value;
    setCardDate(newValue);
    onCardDateChange(newValue);
  };

  const handleCardNameChange = (e) => {
    const newValue = e.target.value;
    setCardName(newValue);
    onCardNameChange(newValue);
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={cardName}
            onChange={handleCardNameChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={cardDate}
            onChange={handleCardDateChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}