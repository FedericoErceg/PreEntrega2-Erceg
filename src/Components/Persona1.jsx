import Hoc from "./Custom/Hoc"

const Persona1 = ({oferta, incremetarOferta}) => {

  return (
    <div>
        <h2>Persona 1 esta ofertando: ${oferta}</h2>
        <button onClick={incremetarOferta}>Incrementar la oferta</button>
    </div>
  )
}

export default Hoc (Persona1);