import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import logo from './img/piexelmdq.jpeg';

function App() {
  return (
    <div className="App">
      <Navbar img={logo}/>
      <ItemListContainer negocio={'PixelMDQ3D'}/>
    </div>
  );
}

export default App;
