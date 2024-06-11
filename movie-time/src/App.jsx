import React, { useEffect } from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataFromApi } from './utils/api'
import { getApiConfiguration } from './app/features/movieSlice'

const App = () => {
  const dispatch = useDispatch()
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }

      dispatch(getApiConfiguration(url))
    });
  };

  useEffect(() => {
    fetchApiConfig();
  }, []);

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App