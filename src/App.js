import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import {Products} from './components/Product'
import { Route, Routes } from 'react-router-dom';
import { ProductDetails } from './components/ProductDetails';
import { Cart } from './components/Cart';

function App() {
  return (
 <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
         <Route path="/cart/:id" element={<Cart/>}></Route>
      </Routes>
    </>
  );
}

export default App;
