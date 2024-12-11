import React from 'react';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from './pages/UserDetails';
import PurchasePage from './pages/PurchasePage';
const App = () => {
  return (
    <>
         <Router>
        <Routes>
        <Route path="/" element={<Navbar/>} />
          <Route path="/user" element={<UserDetails/>} />
          <Route path="/purchase" element={<PurchasePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
