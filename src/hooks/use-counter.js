import { useState, useEffect } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    () => {};
    return () => {
      clearInterval(interval);
    };
  }, []);
  return count;
};

export default useCounter;
