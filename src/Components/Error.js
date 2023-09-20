import React from 'react'

const Error = () => {
    const fontStyle = {
        fontWeight: '500',
        color: 'black'
    }
  return (
    <div>
        <h1 style={fontStyle}><b>Error 404</b></h1>
        <h2 style={fontStyle}>Not found</h2>
    </div>
  )
}

export default Error