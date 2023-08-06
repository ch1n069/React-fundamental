import { react, useState, useEffect } from "react";
import axios from "axios";

// this function will receive the following props
// we will pass custom requestConfig object to as props
// the request config object include the method , body , url etc
const useApi = (requestConfig) => {
  // logic errors and loading state
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const data = { car: "G-Class", YOM: "2007", make: "G-" };
  //   use effect to run the custom api
  // receives the type of request that it to be passed

  // api we will make requests to https://react-fundamentals-c4ee7-default-rtdb.firebaseio.com
  const apiRequest = async () => {
    const url = import.meta.env.VITE_API_URL;
    try {
      // passing the method dynamically to the endpoint
      const request = await axios.requestConfig
        .method(`${url}`, {
          body: data,
        })
        .then((response) => {
          console.log("response after calling the api", response);
        });
      const response = request.data;
      console.log("sxxdxdxdxd", response);
    } catch (error) {
      console.log("error after calling the api", error);
    }

    // must always subscribe to async functions
  };

  return { loading, error, apiRequest };
};

export default useApi;
