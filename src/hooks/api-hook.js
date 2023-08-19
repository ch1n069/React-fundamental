import react, { useState, useEffect } from "react";
import axios from "axios";

// this function will receive the following props
// we will pass custom requestConfig object to as props
// the request config object include the method , body , url etc
const useApi = (requestConfig) => {
  // logic errors and loading state
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [apiData, setApiData] = useState();
  const data = { car: "G-Class", YOM: "2007", make: "G-" };
  //   use effect to run the custom api
  // receives the type of request that it to be passed

  // api we will make requests to https://react-fundamentals-c4ee7-default-rtdb.firebaseio.com
  const apiRequest = async () => {
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
  };

  // new function to handler the get request to fetch data from an api
  const getRequest = async () => {
    // fetching of the url from the env
    setLoading(true);
    // const url = import.meta.env.VITE_API_URL;
    try {
      const request = await axios
        .get(`${requestConfig.url}`)
        .then((response) => {
          console.log("get request response is", response);
        });
    } catch (error) {
      console.log("error after using the get request");
    }
  };

  return { loading, error, apiRequest, getRequest };
};

export default useApi;
