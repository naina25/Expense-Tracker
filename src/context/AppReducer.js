// import { GlobalProvider } from "./GlobalState";

export default (state, action) => {
  switch (action.type) {
    case "Delete-trans":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "Add-trans":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
  console.log(state);
};
