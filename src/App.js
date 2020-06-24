import React from "react";
import logo from "./logo.png";
import "./App.css";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" height={150} width={400} />
      </header>
      <MainLayout />
    </div>
  );
}

export default App;
