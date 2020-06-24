import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import StockDisplayBox from '../StockDisplayBox/StockDisplayBox';

const style = {
  container: {
    height: 100,
  },
};

const StockTrackingRow = ({ trackedStocks }) => {
  const uniqeStocks = [...new Set(trackedStocks)];

  return (
    <div id={'tracking_row'} style={style.container}>
      <Row>
        {uniqeStocks.map((stock, i) => {
          return (
            <Col key={`${stock.symbol}-${i}`} xs={1}>
              <StockDisplayBox symbol={stock.symbol} price={stock.c} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default StockTrackingRow;
