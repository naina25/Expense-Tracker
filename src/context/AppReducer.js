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
    default:
      return state;
  }
};
