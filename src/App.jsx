import React, { useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";

const App = () => {
  useEffect(() => {
    apiTesing();
  }, []);
  const apiTesing = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  return <div className="App">App</div>;
};

export default App;
