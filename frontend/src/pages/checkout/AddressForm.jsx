import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

export default function AddressForm({onOneNameChange, onTwoNameChange, onAddressChange, onSityChange, onRegionChange, onZipChange, onCountryChange}) {
   const [OneName, SetOneName] = useState('')
   const [TwoName, SetTwoName] = useState('')
   const [address, SetAddress] = useState('')
   const [sity, SetSity] = useState('')
   const [region, SetRegion] = useState('')
   const [zip, SetZip] = useState('')
   const [country, SetCountry] = useState('')

   const handleOneNameChange = (e) => {
    const newValue = e.target.value;
    SetOneName(newValue);
    onOneNameChange(newValue);
  };

  const handleTwoNameChange = (e) => {
    const newValue = e.target.value;
    SetTwoName(newValue);
    onTwoNameChange(newValue);
  };

  const handleAddressChange = (e) => {
    const newValue = e.target.value;
    SetAddress(newValue);
    onAddressChange(newValue);
  };

  const handleSityChange = (e) => {
    const newValue = e.target.value;
    SetSity(newValue);
    onSityChange(newValue);
  };

  const handleRegionChange = (e) => {
    const newValue = e.target.value;
    SetRegion(newValue);
    onRegionChange(newValue);
  };

  const handleZipChange = (e) => {
    const newValue = e.target.value;
    SetZip(newValue);
    onZipChange(newValue);
  };

  const handleCountryChange = (e) => {
    const newValue = e.target.value;
    SetCountry(newValue);
    onCountryChange(newValue);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={OneName}
            onChange={handleOneNameChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={TwoName}
            onChange={handleTwoNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={address}
            onChange={handleAddressChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={sity}
            onChange={handleSityChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={region}
            onChange={handleRegionChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={zip}
            onChange={handleZipChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={country}
            onChange={handleCountryChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}