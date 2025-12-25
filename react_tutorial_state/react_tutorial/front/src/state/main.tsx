import ReactDOM from "react-dom/client";
import {JSX} from "react";
import {useState} from "react";

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(<Calculator />);

function Calculator(): JSX.Element {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  function handleXChange(input: number) {
    setX(input);
  }
  function handleYChange(input: number) {
    setY(input);
  }
  return (
    <>
      <Input input={x} onInputChange={handleXChange} />
      <Input input={y} onInputChange={handleYChange} />
      <Result x={x} y={y} />
    </>
  );
}

function Result({x, y}: {x: number; y: number}): JSX.Element {
  return (
    <>
      <div>x + y = {x + y}</div>
      <div>x - y = {x - y}</div>
      <div>x * y = {x * y}</div>
      <div>x / y = {x / y}</div>
    </>
  );
}

function Input({
  input,
  onInputChange,
}: {
  input: number;
  onInputChange: () => void;
}): JSX.Element {
  return (
    <>
      <input
        type="number"
        value={input}
        onChange={e => onInputChange(Number(e.target.value))}
      />
      {/* <button onClick={onButtonClick}>up</button>
      <div>{input}</div> */}
    </>
  );
}
