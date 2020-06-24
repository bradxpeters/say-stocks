import AddNewStock from "./AddNewStock";
import { connect } from "react-redux";
import { fetchDemoStocks, fetchStockQuote } from "../../actions";

export default connect(
  ({ stocks }) => ({
    stocks: stocks,
  }),
  {
    fetchDemoStocks,
    fetchStockQuote,
  }
)(AddNewStock);
