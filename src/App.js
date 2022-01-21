import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar';
import {Home} from './Components/Home';
import {Products} from './Components/Product'
import { Route, Routes } from 'react-router-dom';
import { ProductDetails } from './Components/ProductDetails';
import { Cart } from './Components/Cart';
import { Login } from './Components/login';

function App() {
  return (
 <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>

        <Route path="/cart/:id" element={<Cart />}></Route>

      </Routes>
    </>
  );
}

export default App;


