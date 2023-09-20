import React from 'react'
import UseContador from './UseContador'

const Contador = () => {

    const {contador, sumar, restar, resetear} = UseContador(0)




  return (
    <div>
        <h2>Contador esta en: {contador}</h2>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={resetear}>Resetear</button>
    </div>
  )
}

export default Contador