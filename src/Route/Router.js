import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Parking from '../Pages/Parking/Parking';
import Fastag from '../Pages/Fastag/Fastag';
import Careers from '../Pages/Careers/Careers';
import Product from '../Pages/Product/Product';
import Contact from '../Pages/Contact/Contact';
import Upcoming from '../Pages/Upcoming/Upcoming';

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
                <Route path='/product' element={<Product />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/upcoming' element={<Upcoming />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;