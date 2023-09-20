

const Click = ({incrementar, contador}) => {

  return (
    <div>
        <h3>Hiciste: {contador} de Clicks</h3>
        <button onClick={incrementar}>Aumentar clicks</button>
    </div>
  )
}

export default Click