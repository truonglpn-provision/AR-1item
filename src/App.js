import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Dinosaur from './pages/Dinosaur';
import Goldfish from './pages/Goldfish';
import Tower from './pages/Tower';
import Phulong from './pages/canva/Phulong';
import Restaurant from './pages/Restaurant';
import Snow from './pages/Snow';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tower" element={<Tower/>} />
        <Route path="/dinosaur" element={<Dinosaur/>}/>
        <Route path="/goldfish" element={<Goldfish/>}/>
        <Route path="/restaurant" element={<Restaurant/>}/>
        <Route path="/phulong/sale-grand-opening" element={<Phulong/>}/>
        <Route path="/christmas/snow" element={<Snow/>}/>
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
