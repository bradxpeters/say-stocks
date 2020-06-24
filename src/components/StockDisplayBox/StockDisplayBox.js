import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { Card } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import CloseIcon from "@material-ui/icons/Close";

const style = {
  container: {
    backgroundColor: "grey",
    border: "3px solid grey",
    boxShadow: "2px 2px grey",
    color: "white",
    height: 150,
    marginBottom: 20,
    marginLeft: 40,
    padding: "0 18px 18px 18px",
    width: 120,
  },
};

const socket = new WebSocket("wss://ws.finnhub.io?token=brp9vlfrh5rdpcujk6ig");

const StockDisplayBox = ({ symbol, price = 0.0, removeTrackedStock }) => {
  const [newPrice, setNewPrice] = useState("");
  const [priceLastUpdated, setPriceLastUpdated] = useState(moment());

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const useCompare = (val) => {
    const prevVal = usePrevious(val);
    return prevVal !== val;
  };

  const hasPriceChanged = useCompare(newPrice);

  useEffect(() => {
    if (hasPriceChanged) {
      setPriceLastUpdated(moment());
    }
  }, [hasPriceChanged]);

  socket.addEventListener("open", function (event) {
    socket.send(JSON.stringify({ type: "subscribe", symbol }));
  });

  socket.addEventListener("message", function (event) {
    const data = JSON.parse(event.data);
    if (data && data.data) {
      setNewPrice(data.data[0].p);
    }
  });

  return (
    <Card id={`stock_box${symbol}`} style={style.container}>
      <CardHeader
        action={
          <IconButton onClick={() => removeTrackedStock(symbol)}>
            <CloseIcon />
          </IconButton>
        }
        title={symbol}
        subheader={priceLastUpdated.format("MM/DD/YYYY HH:mm:ss")}
      />
      <p>${newPrice || price}</p>
    </Card>
  );
};

export default StockDisplayBox;
