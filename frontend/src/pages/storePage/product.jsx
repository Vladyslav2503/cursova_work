import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

export const Product = (props) => {
  const { id, task, price, imagePath } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
       {imagePath && (
         <img src={`http://localhost:3001/static/${imagePath}`} alt={`Image for ${task}`} style={{ marginTop: '20px', width: '400px', height: '400px', objectFit: 'contain' }} />

                            )}
      <div className="description">
        <p>
          <b>{task}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => { console.log(id); addToCart(id); }}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};