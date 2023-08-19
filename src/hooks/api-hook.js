import react, { useState, useEffect, useCallback } from "react";
import axios from "axios";

// this function will receive the following props
// we will pass custom requestConfig object to as props
// the request config object include the method , body , url etc
const useApi = () => {
  // logic errors and loading state
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [apiData, setApiData] = useState();

  const data = { car: "W205", YOM: "2016", make: "E-Class" };
  //   use effect to run the custom api
  // receives the type of request that it to be passed

  // api we will make requests to https://react-fundamentals-c4ee7-default-rtdb.firebaseio.com
  const apiRequest = useCallback(async (requestConfig) => {
    // const url = import.meta.env.VITE_API_URL;
    try {
      // passing the method dynamically to the endpoint
      const postRequest = await axios
        .post(`${requestConfig.url}`, {
          body: data,
        })
        .then((response) => {
          console.log("response after calling the api", response);
        });
      const response = postRequest.data;

      console.log("sxxdxdxdxd", response);
    } catch (error) {
      console.log("error after calling the api", error);
    }

    // must always subscribe to async functions
  }, []);

  // new function to handler the get request to fetch data from an api
  const getRequest = useCallback(async (requestConfig, applyData) => {
    // fetching of the url from the env
    setLoading(true);
    // const url = import.meta.env.VITE_API_URL;
    try {
      const request = await axios
        .get(`${requestConfig.url}`)
        .then((response) => {
          applyData(response.data);
          console.log("get request response is", response);
        });
    } catch (error) {
      console.log("error after using the get request");
    }
  }, []);

  return { loading, error, apiRequest, getRequest };
};
// implementation of the useCall back hoo this will prevent the recreation and avoidance of an infinite since
// where when this hook is called it has state in state state updates cause re-renders
// this will be called an infinite number of times
// useCall back takes in dependencies

export default useApi;
