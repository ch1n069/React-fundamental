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
  const url = import.meta.env.VITE_API_URL;
  const httpData = useApi({ url: `${url}` });
  const { loading, error, apiRequest, getRequest } = httpData;

  // const onClickButtonHandler = () => {
  //   apiRequest();
  // };
  return (
    <>
      <div>
        <button onClick={getRequest}>mock request</button>
      </div>
    </>
  );
}

export default App;
