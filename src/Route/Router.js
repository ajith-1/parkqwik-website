import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Parking from '../Pages/Parking/Parking';
import Fastag from '../Pages/Fastag/Fastag';
import Careers from '../Pages/Careers/Careers';
import Product1 from '../Pages/Product/Product1';
import Product2 from '../Pages/Product/Product2';
import Login from '../Pages/Login/Login';

function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/parking' element={<Parking />} />
                <Route path='/fastag' element={<Fastag />} />
                <Route path='/careers' element={<Careers />} />
                <Route path='/product1' element={<Product1 />} />
                <Route path='/product2' element={<Product2 />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;