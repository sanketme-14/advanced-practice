import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);


function calculateTotal(price, tax) {


  const total = price + tax + 9 ;

  console.log("Total calculated");
  return total;
}

  return (
    <>
      <p>{count}</p>
    </>
  );
}

export default App;
