import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={<Home />} />
          <Route path="/" component={<Cart />} />
        </div>
      </BrowserRouter>
      <p>app</p>
    </>
  );
}

export default App;
