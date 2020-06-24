const initialState = {
  currentStockQuote: {},
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STOCK_QUOTE_SUCCESS":
      return {
        ...state,
        currentStockQuote: action.data,
      };
    //     case "FETCH_STOCK_QUOTE":
    //       return state.map((stock) =>
    //         stock.id === action.id
    //           ? { ...stock, completed: !stock.completed }
    //           : stock
    //       );
    default:
      return state;
  }
};

export default todos;
