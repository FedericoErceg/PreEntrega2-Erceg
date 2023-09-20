import { useState } from "react";
import {Link} from 'react-router-dom'

const MainProducts = ({ imagen, nombre, descripcion, precio }) => {
    
  const [contador, setContador] = useState(0);
  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };
  const eliminar = () => {
    setContador(0);
  };
  return (
    <div className="col">
      <div className="card" style={{ width: "29rem" }}>
        <img src={imagen} />
        <div className="card-body">
          <h5>{nombre}</h5>
          <p>{descripcion}</p>
          <h5>Precio: ${precio}</h5>
          <div className="row my-3 g-2">
            <Link to='/' className="col">
              <button className="btn btn-primary" onClick={sumar}>
                Agregar al carrito
              </button>
            </Link>
            <Link to='/' className="col">
              <button className="btn btn-primary" onClick={restar}>
                Quitar del carrito
              </button>
            </Link>
            <Link to='/' className="col">
              <button className="btn btn-primary" onClick={eliminar}>
                Eliminar del carrito
              </button>
            </Link>
          </div>
          <h5>agregador al carrito: {contador}</h5>
        </div>
      </div>
    </div>
  );
};

export default MainProducts;
