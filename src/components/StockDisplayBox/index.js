import StockDisplayBox from "./StockDisplayBox";
import { connect } from "react-redux";
import { removeTrackedStock } from "../../actions";

export default connect(
  ({ stocks }) => ({
    stocks: stocks,
  }),
  {
    removeTrackedStock,
  }
)(StockDisplayBox);
