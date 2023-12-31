import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from 'context/Shop-context';
import axios from 'axios';

function getRandomNumber() {
  // Генеруємо випадкове число в діапазоні від 10000 до 100000
  return Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000;
}

// Приклад використання
let randomValue = getRandomNumber();


const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step,
  handleOneNameChange,
  oneName,
  handleTwoNameChange,
  twoName,
  handleCardNumberChange,
  cardNumber,
  handleCardDateChange,
  cardDate,
  handleCardNameChange,
  cardName,
  handleAddressChange,
  address,
  handleSityChange,
  sity,
  handleRegionChange,
  region,
  handleZipChange,
  zip,
  handleCountryChange,
  country
) {
  switch (step) {
    case 0:
      return <AddressForm onOneNameChange={handleOneNameChange} onTwoNameChange={handleTwoNameChange} onAddressChange={handleAddressChange} onSityChange={handleSityChange} onRegionChange={handleRegionChange} onZipChange={handleZipChange} onCountryChange={handleCountryChange} />;
    case 1:
      return <PaymentForm onCardNumberChange={handleCardNumberChange} onCardDateChange={handleCardDateChange} onCardNameChange={handleCardNameChange} />;
    case 2:
      return <Review oneName={oneName} twoName={twoName} cardNumber={cardNumber} cardDate={cardDate} cardName={cardName} address={address} sity={sity} region={region} zip={zip} country={country} />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [oneName, setOneName] = useState('');
  const [twoName, setTwoName] = useState('');
  const [cardNumber, setCardNumber] = useState('')
  const [cardDate, setCardDate] = useState('')
  const [cardName, setCardName] = useState('')
  const [address, SetAddress] = useState('')
  const [sity, SetSity] = useState('')
  const [region, SetRegion] = useState('')
  const [zip, SetZip] = useState('')
  const [country, SetCountry] = useState('')
  const [id, setId] = useState(Date.now());



  const handleAdd = () => {
    const userData = {
      id,
      firstName: oneName,
      lastName: twoName,
      addressLine: address,
      city: sity,
      state: region,
      zip,
      country,
      nameCard: cardName,
      cardNumber,
      expiryDate: cardDate,
    };
  
    axios.post('http://localhost:3001/users', userData)
      .then(response => {
        console.log(response.data); // Додайте відповідний код обробки відповіді
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };



  const {
    checkout,
  } = useContext(ShopContext);

  const handleOneNameChange = (newOneName) => {
    setOneName(newOneName);
  };

  const handleTwoNameChange = (newTwoName) => {
    setTwoName(newTwoName);
  };

  const handleCardNumberChange = (newCardNumber) => {
    setCardNumber(newCardNumber);
  };

  const handleCardDateChange = (newOneName) => {
    setCardDate(newOneName);
  };

  const handleCardNameChange = (newOneName) => {
    setCardName(newOneName);
  };

  const handleAddressChange = (newOneName) => {
    SetAddress(newOneName);
  };

  const handleSityChange = (newOneName) => {
    SetSity(newOneName);
  };

  const handleRegionChange = (newOneName) => {
    SetRegion(newOneName);
  };

  const handleZipChange = (newOneName) => {
    SetZip(newOneName);
  };

  const handleCountryChange = (newOneName) => {
    SetCountry(newOneName);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const navigate = useNavigate();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {/*Company name*/}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #{randomValue}. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
              <Button style={{marginLeft: "150px"}} onClick={() => { checkout(); navigate("/"); handleAdd()}}> Continue </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(
                activeStep,
                handleOneNameChange,
                oneName,
                handleTwoNameChange,
                twoName,
                handleCardNumberChange,
                cardNumber,
                handleCardDateChange,
                cardDate,
                handleCardNameChange,
                cardName,
                handleAddressChange,
                address,
                handleSityChange,
                sity,
                handleRegionChange,
                region,
                handleZipChange,
                zip,
                handleCountryChange,
                country
              )}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}