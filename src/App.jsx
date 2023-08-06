import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
// import useCounter from "./hooks/use-counter";
import { useEffect } from "react";
import useCounter from "./hooks/use-counter";

function App() {
  const count = useCounter();

  return (
    <>
      <div>
        <h2>This is a counter for a counter</h2>
        <p> count is{count}</p>
      </div>
    </>
  );
}

export default App;
