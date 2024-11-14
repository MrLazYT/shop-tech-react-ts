import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsList from './components/ProductsList';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductsList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
