import { react, useState, useEffect } from "react";
import axios from "axios";

// this function will receive the following props
const useApi = () => {
  // logic errors and loading state
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  //   use effect to run the custom api
  // receives the type of request that it to be passed
  useEffect(() => {
    // api we will make requests to https://react-fundamentals-c4ee7-default-rtdb.firebaseio.com
    const apiRequest = () => {};
  }, []);

  return { loading, error, apiRequest };
};

export default useApi;
