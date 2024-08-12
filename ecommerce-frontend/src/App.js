

import './App.css';


// src/App.js
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
