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

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>

    </ThemeProvider>
  );
}

export default App;
