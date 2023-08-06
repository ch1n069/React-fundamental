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
import useApi from "./hooks/api-hook";

function App() {
  const httpData = useApi({ method: "POST" });
  const { loading, error, apiRequest } = httpData;

  // const onClickButtonHandler = () => {
  //   apiRequest();
  // };
  return (
    <>
      <div>
        <button onClick={apiRequest}>mock request</button>
      </div>
    </>
  );
}

export default App;
