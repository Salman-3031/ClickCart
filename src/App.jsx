import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import axios from "axios";
import Footer from "./components/Footer";
import SingleProduct from "./components/SingleProduct";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import CategoryProduct from "./pages/CategoryProduct";

const App = () => {
  // // const [location, setLocation] = useState()
  // // const getLocation = async () => {
  // //   navigator.geolocation.getCurrentPosition(async (pos) => {
  // //     const { latitude, longitude } = pos.coords;

  // //     const API_KEY = import.meta.env.VITE_LOCATION_KEY; 

  // //     if (!API_KEY) {
  // //       console.error("Missing LocationIQ API key in .env");
  // //       return;
  // //     }

  // //     const url = `https://us1.locationiq.com/v1/reverse?key=${API_KEY}&lat=${latitude}&lon=${longitude}&format=json`;

  // //     try {
  // //       const response = await axios.get(url);
  // //       const exactLocation = response.data.address
  // //       // console.log(exactLocation)
  // //       setLocation(exactLocation)
  // //     } catch (error) {
  // //       if (error.response) {
  // //         console.error("API Error:", error.response.data);
  // //       } else {
  // //         console.error("Error:", error.message);
  // //       }
  // //     }
  // //   });
  // // };

  // useEffect(() => {
  //   getLocation();
  // }, []);

  return (
    <BrowserRouter>
     <ToastContainer />
      <Navbar location={location}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/category/:category" element={<CategoryProduct />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
