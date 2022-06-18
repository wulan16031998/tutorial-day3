import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AboutMe from './components/AboutMe';
import AboutUs from './components/AboutUs';
import NotFound from './pages/NotFound';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './components/ProductDetail';

function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="aboutme" element={<AboutMe/>} />
          <Route path='aboutus' element={<AboutUs/>} />
        </Route>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path='/products/:productId' element={<ProductDetail/>}/>
        <Route path="*" element={<NotFound/>}/>
        
 
      </Routes>
  
      );
    }


export default App;