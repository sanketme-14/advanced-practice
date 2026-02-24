import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function calculateTotal(price, tax) {
    return price + tax;
  }

  return (
    <>
      <p>{count}</p>
    </>
  );
}

export default App;
