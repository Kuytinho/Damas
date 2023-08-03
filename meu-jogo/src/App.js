import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Damas from './pages/Damas';
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <Home /> }/>
        <Route exact path="/damas" element={ <Damas /> }/>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default App;
