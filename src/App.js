import React from "react";
import Home from './pages/home/Home'
import Products from "./pages/product/Products";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Cart from './pages/cart/Cart'
import SingleProduct from "./pages/singleProduct/SingleProduct";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from "./components/header/Header";        
import Footer from "./components/footer/Footer";

const App = () => {


  return(
       <>
               <BrowserRouter>
               <ToastContainer/>
                <Header/>
                   <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                   </Routes>
                   <Footer/>
               </BrowserRouter>
               
       </>
       )
};

export default App;
