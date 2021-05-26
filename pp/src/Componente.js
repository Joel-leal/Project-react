import React, { useState } from "react";

const Componente = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}> Incremento </button>
      <button type="reset">Reset</button>
    </div>
  );
};

export default Componente;
