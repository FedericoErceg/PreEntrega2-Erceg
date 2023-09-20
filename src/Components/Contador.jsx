import { useRef, useState } from "react";

const Contador = () => {
  const contador = useRef(0);

  const [valor, setValor] = useState(0);

  const handleClick = (operacion) => {
    if (operacion === true) {
      contador.current += 1;
      setValor(contador.current);
    } else {
      contador.current -= 1;
      setValor(contador.current);
    }
  };

  return (
    <div>
      <h2>Contador: {valor}</h2>
      <button onClick={() => handleClick(true)}>Sumar</button>
      <button onClick={() => handleClick(false)}>Restar</button>
    </div>
  );
};

export default Contador;

