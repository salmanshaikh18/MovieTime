import React, { useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./app/features/homeSlice";

const App = () => {

  const dispatch = useDispatch()
  const {url} = useSelector((state) => (
    state.home
  ))

  const apiTesing = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res))
    });
  };

  useEffect(() => {
    apiTesing();
  }, []);

  return (
    <div>
      App
      {/* {url?.total_pages} */}
    </div>
  );
};

export default App;
