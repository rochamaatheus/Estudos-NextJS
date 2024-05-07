'use client';

import React from 'react';

export default function Imc() {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [imc, setImc] = React.useState('');

  function handleClick() {
    const altura_metro = Number(altura) / 100;
    const total = (Number(peso) / (altura_metro * altura_metro)).toFixed(2);
    setImc(total);
  }

  return (
    <div>
      <label htmlFor="peso">Peso (em KG)</label>
      <input
        type="text"
        id="peso"
        name="peso"
        onChange={({ target }) => setPeso(target.value)}
      />
      <label htmlFor="altura">Altura (em CM)</label>
      <input
        type="text"
        id="altura"
        name="altura"
        onChange={({ target }) => setAltura(target.value)}
      />
      <button onClick={handleClick}>Calcular</button>
      <p>IMC: {imc}</p>
    </div>
  );
}
