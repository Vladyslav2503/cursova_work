import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";
import { ListItem, ListItemText, Typography } from "@mui/material";

export const CartItemCheckout = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  return (
    <div className="description">
      <ListItem sx={{ py: 1, px: 0 }}>
        {console.log(cartItems[id])}
        <ListItemText primary={productName} />
        <Typography variant="body2">{price}</Typography>
      </ListItem>
      <button onClick={() => removeFromCart(id)}> - </button>
          {console.log(cartItems[id])}
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
    </div>
  );
};


/*
<div className="product">
  <img src={productImage} />
  <div className="description">
    <p>
      <b>{productName}</b>
    </p>
    <p> ${price}</p>
  </div>
  <button className="addToCartBttn" onClick={() => addToCart(id)}>
    Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
  </button>
</div>
*/
/*
<div className="cartItem">
  <img src={productImage} />
  <div className="description">
    <p>
      <b>{productName}</b>
    </p>
    <p> Price: ${price}</p>
    <div className="countHandler">
      <button onClick={() => removeFromCart(id)}> - </button>
      <input
        value={cartItems[id]}
        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
      />
      <button onClick={() => addToCart(id)}> + </button>
    </div>
  </div>
</div>*/