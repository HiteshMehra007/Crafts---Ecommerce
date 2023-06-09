import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { Navbar, Banner, Products, Footer, ProductDetails, Cart } from './components';
import productList from './util';


function App() {
  const [currentProduct, setCurrentProduct] = useState(productList[8]);
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
          <Route path='/' element={<div className='home'>
            <Banner />
            <Products setCurrentProduct={setCurrentProduct} cart={cart} setCart={setCart} />
            {/* <Cart cart={cart} setCart={setCart} /> */}
            </div>}
          />
          <Route path="/product/:id" element={<ProductDetails product={currentProduct} setCart={setCart} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
