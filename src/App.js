import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import DataMainProducts from './Components/DataMainProducts';
import logo from './img/piexelmdq.jpeg';
import RenderProps from './Components/Custom/RenderProps';

function App() {
  return (
    <div className="App">
      <Navbar img={logo}/>
      <ItemListContainer negocio={'PixelMDQ3D'}/>
      {/* <RenderProps render={(incrementar, contador) => <Click incrementar={incrementar} contador={contador}/>}/>
      <RenderProps render={(incrementar, contador) => <Mouse incrementar={incrementar} contador={contador}/>}/> */}
      <DataMainProducts/>
    </div>
  );
}

export default App;
