import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Corregir "BrowserRoute" a "BrowserRouter"
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import Filamentos from './Components/Filamentos';
import Impresoras3D from './Components/Impresoras3D';
import Carrito from './Components/Carrito';
import Error from './Components/Error';
import logo from './ImgComponets/piexelmdq.jpeg';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar img={logo}/>
        <Routes>
          <Route path='/Filamentos' element={Filamentos} />
          <Route path='/Impresoras3D' element={Impresoras3D} />
          <Route path='/Carrito' element={Carrito} />
          <Route path='*' element={Error} />
        </Routes>
      </BrowserRouter>

      <ItemListContainer negocio={'PixelMDQ3D'}/>
    </div>
  );
}

export default App;
