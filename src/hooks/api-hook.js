import { react, useState, useEffect } from "react";
import axios from "axios";

// this function will receive the following props
const useApi = () => {
  // logic errors and loading state
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const data = { car: "Mercedes Benz", YOM: "2007", make: "W203" };
  //   use effect to run the custom api
  // receives the type of request that it to be passed
  useEffect(() => {
    // api we will make requests to https://react-fundamentals-c4ee7-default-rtdb.firebaseio.com
    const apiRequest = () => {
      const request = axios.post(`${import.meta.env.VITE_API_}`, {
        body: data,
      });
    };
  }, []);

  return { loading, error, apiRequest };
};

export default useApi;
