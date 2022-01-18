import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar';
import {Home} from './Components/Home';
// import {Product} from './Components/Product'

function App() {
  return (
    <div className="App">
    {/* <Header /> */}
      <Navbar />
      <Home  />
      {/* <Product /> */}
    </div>
  );
}

export default App;
