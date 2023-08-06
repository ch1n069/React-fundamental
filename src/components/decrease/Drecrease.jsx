import React from "react";
import useCounter from "../../hooks/use-counter";

const Drecrease = () => {
  const count = useCounter(false);
  return (
    <div>
      <p>decreasing count {count}</p>
    </div>
  );
};

export default Drecrease;
