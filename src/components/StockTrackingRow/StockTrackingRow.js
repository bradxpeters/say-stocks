import React, { useState } from "react";
import { Row, Col } from "react-flexbox-grid";
import StockDisplayBox from "../StockDisplayBox";

const style = {
  container: {
    height: 100,
  },
};

const StockTrackingRow = ({ trackedStocks }) => {
  return (
    <div id={"tracking_row"} style={style.container}>
      <Row>
        {trackedStocks.map((stock, i) => {
          return (
            <Col key={`${stock.symbol}-${i}`} xs={12} sm={6} md={3} lg={2}>
              <StockDisplayBox symbol={stock.symbol} price={stock.c} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default StockTrackingRow;
