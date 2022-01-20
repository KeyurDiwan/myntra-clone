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
<<<<<<< HEAD
        <Route path="/cart/:id" element={<Cart />}></Route>
      
=======
         <Route path="/cart/:id" element={<Cart/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
>>>>>>> cb7a94a76e1d891a1a22b60ec3c50ea1eb109183
      </Routes>
    </>
  );
}

export default App;


