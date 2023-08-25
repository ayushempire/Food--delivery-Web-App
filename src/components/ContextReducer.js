import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();

const CartDispacthContext = createContext();

const reducer = (state, action) => {
  // switch case
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ];

    default:
      console.log("error in rendering");
  }
};

export const CartProvider = ({ children }) => {
  // initial value is empty array to append and delete values
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispacthContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispacthContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispacthContext);
