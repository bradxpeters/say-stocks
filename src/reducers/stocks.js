const initialState = {
  currentStockQuote: {},
  trackedStocks: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STOCK_QUOTE_SUCCESS":
      let newArray = state.trackedStocks.slice();
      newArray.splice(action.index, 0, action.data);

      return {
        ...state,
        currentStockQuote: action.data,
        trackedStocks: newArray,
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
