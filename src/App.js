import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import SignIn from './Pages/SignIn';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Features/Products/Products';
import Footer from './Components/Footer';

function App() {

  return (
    <div className='app'>
      <Navbar />

      <div>
        <Routes>
          <Route path='/' element={<Navigate to="/home" replace />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/login" element={<SignIn />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </div>

      <Footer />
    </div>

  );
}

export default App;
