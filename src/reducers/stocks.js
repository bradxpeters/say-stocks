const initialState = {
  currentStockQuote: {},
  trackedStocks: [],
};

const stocks = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STOCK_QUOTE_SUCCESS":
      let newArray = state.trackedStocks.slice();
      newArray.splice(action.index, 0, action.data);

      return {
        ...state,
        currentStockQuote: action.data,
        trackedStocks: newArray,
      };

    case "REMOVE_TRACKED_STOCK":
      const removedArray = state.trackedStocks.filter(
        (stock) => stock.symbol !== action.data
      );

      return {
        ...state,
        trackedStocks: removedArray,
      };

    default:
      return state;
  }
};

export default stocks;
