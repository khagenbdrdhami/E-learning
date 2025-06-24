import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart": {
      const isExist = state.cart.find((item) => {
        return (item.id === action.payload.id);
      });

      if (isExist) {
        return state;
      } else {
        const newProduct = { ...action.payload, qty: 1 };
        
        return {
          cart: [...state.cart, newProduct],
        };
      }
    }
    
    case "DeleteCart": {

      const updateCart = state.cart.filter((item)=>{
        return item.id !== action.payload;
      })

      return{
        cart: updateCart,
      }

     

    }
     case "ClearCart":{
      return{
        cart:[],
      }

      }
    
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
