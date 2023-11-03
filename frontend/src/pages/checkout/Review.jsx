import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { PRODUCTS } from "../../products";
import { CartItemCheckout } from './CartItemCheckout';
import { ShopContext } from 'context/Shop-context';
import { CartItem } from 'pages/cartPage/Cart-item';
import { useContext } from 'react';



const products = [
    {
        name: 'Product 1',
        desc: 'A nice thing',
        price: '$9.99',
    },
    {
        name: 'Product 2',
        desc: 'Another thing',
        price: '$3.45',
    },
    {
        name: 'Product 3',
        desc: 'Something else',
        price: '$6.51',
    },
    {
        name: 'Product 4',
        desc: 'Best thing of all',
        price: '$14.11',
    },
    { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];



/*{PRODUCTS.map((product) => {
    if (cartItems[product.id] !== 0) {
        return <CartItem data={product} />;
    }
})}*/

export default function Review({oneName, twoName, cardNumber, cardDate, cardName, address, sity, region, zip, country}) {

    const addresses = [address, sity, region, zip, country];

    const payments = [
        { name: 'Card type', detail: cardName},
        { name: 'Card holder', detail: `Mr. ${twoName}`},
        { name: 'Card number', detail: cardNumber },
        { name: 'Expiry date', detail: cardDate },
    ];

    const { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount} =
        useContext(ShopContext);

        const totalAmount = getTotalCartAmount();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary

            </Typography>

            <List disablePadding>
                {PRODUCTS.map((product) => {
                      if (cartItems[product.id] !== 0) {
                    return (
                        
                        <div className="cartItem" style={{width: "450px"}}>
                            <img src={product.productImage} />
                            <div className="description">
                                <p>
                                    <b>{product.productName}</b>
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
                        )
                    }
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