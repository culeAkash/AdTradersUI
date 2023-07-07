import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './Components/Navbar';
import SignIn from './Pages/SignIn';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products';

function App() {


  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/login" element={<SignIn />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
