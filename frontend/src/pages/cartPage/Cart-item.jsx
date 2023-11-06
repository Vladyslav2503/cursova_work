import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

export const CartItem = (props) => {
  const { id, task, price, imagePath } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
   
  return (
    <div className="cartItem">
     {imagePath && (
         <img src={`http://localhost:3001/static/${imagePath}`} alt={`Image for ${task}`} />
                            )}
      <div className="description">
        <p>
          <b>{task}</b>
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
    </div>
  );
};