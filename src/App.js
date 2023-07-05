import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './Components/Navbar';

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
    </ThemeProvider>
  );
}

export default App;
