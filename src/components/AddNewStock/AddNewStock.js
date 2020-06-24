import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const style = {
  container: {
    color: "white",
    height: 175,
    width: 300,
    padding: 20,
    marginTop: 30,
  },
  outline: {
    borderWidth: "1px",
    borderColor: "yellow !important",
  },
};

const styles = (theme) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  cssLabel: {
    color: "white",
  },
  cssOutlinedInput: {
    "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline": {
      borderColor: "white",
    },
    "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
      borderColor: "#8bbbbf",
    },
    "&$cssFocused $notchedOutline": {
      borderColor: "#8bbbbf",
    },
  },
  notchedOutline: {},
  cssFocused: {},
  error: {},
  disabled: {},
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const AddNewStock = ({ classes, stocks, fetchStockQuote }) => {
  const [currentStock, setCurrentStock] = useState("");

  return (
    <ThemeProvider theme={darkTheme}>
      <div style={style.container}>
        <TextField
          id="standard-basic"
          label="Enter A Stock Symbol"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
            style: { color: "white" },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
          onChange={(e) => setCurrentStock(e.target.value)}
          variant="outlined"
        />
        <Button
          onClick={() => fetchStockQuote(currentStock)}
          disabled={currentStock.length === 0}
          style={{ marginLeft: 15, marginTop: 10 }}
          variant="contained"
        >
          Go
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default withStyles(styles)(AddNewStock);
