import React, { useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./app/features/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import SearchResult from "./pages/SearchResult/SearchResult";
import Explore from "./pages/Explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
