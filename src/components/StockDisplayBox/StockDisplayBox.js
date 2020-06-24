import React from 'react'

const style = {
    container: {
        color: 'white',
        height: 75,
        width: 75,
    }
};

const StockDisplayBox = ({ symbol = 'Not Found', price = 0.00 }) => {
    return (
        <div style={ style.container }>
            <h3> { symbol } </h3>
            <p>${ price }</p>
        </div>
    )
}

export default StockDisplayBox;
