import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ACTIONS
  // const ACTIONS = {
  //   DELETE: "Delete-trans",
  // };

  function delTransaction(id) {
    dispatch({ type: "Delete-trans", payload: id });
  }

  function addTransaction(transaction) {
    dispatch({ type: "Add-trans", payload: transaction });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        delTransaction,
        addTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
