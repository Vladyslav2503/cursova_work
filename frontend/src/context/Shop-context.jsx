import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

const initialState = {
  todos: [],
  cartItems: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return { ...state, todos: action.payload };
    case 'ADD_TO_CART':
      const itemIdToAdd = action.payload;
      return {
        ...state,
        cartItems: { ...state.cartItems, [itemIdToAdd]: (state.cartItems[itemIdToAdd] || 0) + 1 },
      };
    case 'REMOVE_FROM_CART':
      const itemIdToRemove = action.payload;
      const updatedCart = { ...state.cartItems };
      if (updatedCart[itemIdToRemove] > 0) {
        updatedCart[itemIdToRemove] -= 1;
      }
      return { ...state, cartItems: updatedCart };
    case 'UPDATE_CART_ITEM_COUNT':
      const { itemId, newAmount } = action.payload;
      return {
        ...state,
        cartItems: { ...state.cartItems, [itemId]: newAmount },
      };
    case 'CHECKOUT':
      return { ...state, cartItems: {} };
    // Додайте обробку інших типів дій, якщо потрібно
    default:
      return state;
  }
};

export const ShopContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => {
        dispatch({ type: 'SET_TODOS', payload: result.data });
      })
      .catch(err => console.log(err));
  }, []);

  const contextValue = {
    todos: state.todos,
    cartItems: state.cartItems,
    addToCart: (itemId) => dispatch({ type: 'ADD_TO_CART', payload: itemId }),
    removeFromCart: (itemId) => dispatch({ type: 'REMOVE_FROM_CART', payload: itemId }),
    updateCartItemCount: (itemId, newAmount) => dispatch({ type: 'UPDATE_CART_ITEM_COUNT', payload: { itemId, newAmount } }),
    checkout: () => dispatch({ type: 'CHECKOUT' }),
    getTotalCartAmount: () => {
      let totalAmount = 0;
      for (const itemId in state.cartItems) {
        if (state.cartItems[itemId] > 0) {
          const itemInfo = state.todos.find((product) => product.id === Number(itemId));
          if (itemInfo) {
            const itemTotal = state.cartItems[itemId] * itemInfo.price;
            console.log(`Item ID: ${itemId}, Price: ${itemInfo.price}, Quantity: ${state.cartItems[itemId]}, Total: ${itemTotal}`);
            totalAmount += itemTotal;
          } else {
            console.log(`Item ID: ${itemId} not found in todos`);
          }
        }
      }
      return totalAmount;
    },
    // Додайте інші функції, які можуть бути потрібні у вашому контексті
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};




