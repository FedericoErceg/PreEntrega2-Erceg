import React from 'react';
import CartWidget from './CartWidget';


const Navbar = ({ img }) => {
    const logoStyle = {
        borderRadius: '100px',
        height:'50px',
        width:'50px',
        transition: 'transform 0.3s',
    }
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#788199'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="./index.html">
        <img src={img} alt="" style={logoStyle} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Detalle</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ver carrito</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='me-4'>
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
