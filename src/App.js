import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import {Home} from './components/Home';


function App() {
  return (
    <div className="App">
    {/* <Header /> */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
