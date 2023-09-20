import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import DataMainProducts from './Components/DataMainProducts';
import logo from './ImgComponets/piexelmdq.jpeg';

function App() {
  return (
    <div className="App">
      <Navbar img={logo}/>
      <ItemListContainer negocio={'PixelMDQ3D'}/>
      <DataMainProducts/>
    </div>
  );
}

export default App;
