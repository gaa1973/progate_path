import ReactDOM from "react-dom/client";
import {useState} from "react";

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(<App />);

export function App() {
  const [product, setProduct] = useState({name: "apple", count: 0});
  function handleButtonClick() {
    const newProduct = {name: product.name, count: product.count + 1};
    setProduct(newProduct);
  }
  return (
    <>
      <button onClick={handleButtonClick}>count up</button>
      <div>{product.name}</div>
      <span>{product.count}</span>
    </>
  );
}
