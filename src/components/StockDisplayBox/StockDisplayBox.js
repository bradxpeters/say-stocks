import React from 'react';

const style = {
  container: {
    padding: 10,
    marginLeft: 55,
    color: 'white',
    height: 100,
    width: 100,
    border: '3px solid grey',
    boxShadow: '2px 2px grey',
  },
};

const StockDisplayBox = ({ symbol = 'Not Found', price = 0.0 }) => {
  return (
    <div style={style.container}>
      <h3> {symbol} </h3>
      <p>${price}</p>
    </div>
  );
};

export default StockDisplayBox;
