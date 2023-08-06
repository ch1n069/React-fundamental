import { useState, useEffect } from "react";

const useCounter = (increase = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (increase) {
        setCount((prevCount) => prevCount + 1);
      } else {
        setCount((prevCount) => prevCount - 1);
      }
    }, 1000);
    () => {};
    return () => {
      clearInterval(interval);
    };
  }, []);
  return count;
};

export default useCounter;
