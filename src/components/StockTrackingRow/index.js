import StockTrackingRow from "./StockTrackingRow";
import { connect } from "react-redux";

export default connect(({ stocks }) => ({
  trackedStocks: stocks.trackedStocks,
}))(StockTrackingRow);
