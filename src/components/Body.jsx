import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import BrowsePage from './BrowsePage';


const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/BrowsePage" element={<BrowsePage />} />
        
       
      </Routes>
    </div>
  );
};

export default Body;
