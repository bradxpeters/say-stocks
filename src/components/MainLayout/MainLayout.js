import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import AddNewStock from '../AddNewStock';
import StockTrackingRow from '../StockTrackingRow';

const style = {
  container: {
    backgroundColor: '#393f45',
    height: '100%',
  },
};

const MainLayout = () => {
  return (
    <div style={style.container}>
      <Row>
        <Col xs={12}>
          <Row center='xs'>
            <AddNewStock />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StockTrackingRow />
        </Col>
      </Row>
    </div>
  );
};

export default MainLayout;
