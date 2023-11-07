import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { CartItemCheckout } from './CartItemCheckout';
import { ShopContext } from 'context/Shop-context';
import { CartItem } from 'pages/cartPage/Cart-item';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';





/*{PRODUCTS.map((product) => {
    if (cartItems[product.id] !== 0) {
        return <CartItem data={product} />;
    }
})}*/

export default function Review({ oneName, twoName, cardNumber, cardDate, cardName, address, sity, region, zip, country }) {

    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))
    }, [])

    const addresses = [address, sity, region, zip, country];

    const payments = [
        { name: 'Card type', detail: cardName },
        { name: 'Card holder', detail: `Mr. ${twoName}` },
        { name: 'Card number', detail: cardNumber },
        { name: 'Expiry date', detail: cardDate },
    ];

    const { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount } =
        useContext(ShopContext);

    const totalAmount = getTotalCartAmount();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary

            </Typography>

            <List disablePadding>
                {Object.keys(cartItems).map((itemId) => {
                    const product = todos.find((item) => item.id === Number(itemId));
                    
                    if (product && cartItems[itemId] !== 0) {
                        return (
                            <div className="cartItem" style={{ width: "450px" }} key={itemId}>
                                {product.imagePath && (
                                    <img src={`http://localhost:3001/static/${product.imagePath}`} alt={`Image for ${product.task}`} />
                                )}
                                {console.log(JSON.stringify(product) + ' ffff')}
                                <div className="description">
                                    <p>
                                        <b>{product.task}</b>
                                    </p>
                                    <p> Price: ${product.price}</p>
                                    <div className="countHandler">
                                        <button onClick={() => removeFromCart(product.id)}> - </button>
                                        <input
                                            value={cartItems[product.id]}
                                            onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}
                                        />
                                        <button onClick={() => addToCart(product.id)}> + </button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {totalAmount} $
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>{oneName} {twoName}</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}