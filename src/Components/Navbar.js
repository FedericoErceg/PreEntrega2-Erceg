import React from 'react';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'


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
        <Link className="navbar-brand" to="/">
        <img src={img} alt="" style={logoStyle} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/Filamentos">Filametos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Impresoras3D">Impresoras 3D</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Carrito">Ver carrito</Link> 
            </li>
          </ul>
        </div>
      </div>
      <div className='me-4'>
        <Link to='/Carrito'> <CartWidget /> </Link>
      </div>
    </nav>
  );
}

export default Navbar;
