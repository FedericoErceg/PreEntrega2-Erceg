import { useState } from 'react';

const UseContador = (valorInicial) => {
  const [contador, setContador] = useState(valorInicial);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };
  const resetear = () => {
    setContador(0);
  };

  return {
    contador,
    sumar,
    restar,
    resetear,
  };
};

export default UseContador;

