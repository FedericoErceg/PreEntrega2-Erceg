import React from 'react'

const ItemListContainer = (prop) => {
  const titleStyle = {
    fontWeight: '200',
    textDecoration: 'underline 2px solid',
  }
  return (
    <div className='my-4'>
      <h1 className='text-center' style={titleStyle}>Bienvenido a la tienda de {prop.negocio}</h1>
    </div>
  )
}

export default ItemListContainer