

const Mouse = ({incrementar, contador}) => {
    
  return (
    <div>
        <button className='my-5' onMouseLeave={incrementar}>Pasaste el mouse: {contador} veces</button>
    </div>
  )
}

export default Mouse

