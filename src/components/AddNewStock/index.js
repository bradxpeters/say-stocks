import AddNewStock from "./AddNewStock";
import { connect } from "react-redux";
import { fetchStockQuote } from "../../actions";

export default connect(
  ({ stocks }) => ({
    stocks: stocks,
  }),
  {
    fetchStockQuote,
  }
)(AddNewStock);
