import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
// import useCounter from "./hooks/use-counter";
import useApi from "./hooks/api-hook";

function App() {
  const [loadedData, setLoadedData] = useState();
  const url = import.meta.env.VITE_API_URL;
  // function to handle the handoff of data
  const transformData = (taskObj) => {
    const loadedTask = [];
    for (const taskKey in taskObj) {
      loadedTask.push({ id: taskKey, text: taskObj[taskKey].body });
    }
    setLoadedData(loadedTask);
  };
  const httpData = useApi();
  const { loading, error, apiRequest, getRequest: getData } = httpData;

  // const onClickButtonHandler = () => {
  //   apiRequest();
  // };
  useEffect(() => {
    // function called when the component loads to het data
    getData({ url: `${url}` }, transformData);
  }, []);
  console.log("xxx is", loadedData);
  return (
    <>
      {/* {loadedData.map((item) => {
        return <p>{item.car}</p>;
      })} */}
      <div>
        <button onClick={getData}>mock request</button>
      </div>
    </>
  );
}

export default App;
