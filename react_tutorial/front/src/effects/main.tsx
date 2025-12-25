import {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root")!;
const root = ReactDOM.createRoot(container);
root.render(<App />);

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    console.log(`x: ${x}, y: ${y}`);
  }, []);
  function handleXUp() {
    setX(x + 1);
  }
  function handleYUp() {
    setY(y + 1);
  }

  return (
    <>
      <div>x: {x}</div>
      <button onClick={handleXUp}>xUp</button>
      <div>y: {y}</div>
      <button onClick={handleYUp}>yUp</button>
    </>
  );
}
