import axios from "axios";

export const fetchStockQuote = (symbol = "AAPL") => async (dispatch) => {
  dispatch({ type: "FETCH_STOCK_QUOTE" });

  try {
    const res = await axios.get("https://finnhub.io/api/v1/quote", {
      params: {
        symbol,
        token: "brp9vlfrh5rdpcujk6ig",
      },
    });

    dispatch({
      type: "FETCH_STOCK_QUOTE_SUCCESS",
      data: { ...res.data, symbol },
    });
  } catch (errors) {
    dispatch({ type: "FETCH_STOCK_QUOTE_FAIL", errors });
  }
};
