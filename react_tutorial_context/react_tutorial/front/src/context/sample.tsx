import ReactDOM from "react-dom/client";
import {createContext, useContext} from "react";

const container = document.getElementById("root") || document.body;
const root = ReactDOM.createRoot(container);
root.render(<RootComponent />);

const TextContext = createContext<string | null>(null);

function RootComponent() {
  return (
    <TextContext.Provider value="Hello, World!">
      <ParentComponent />
    </TextContext.Provider>
  );
}

function ParentComponent() {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent />
    </div>
  );
}

function ChildComponent() {
  const text = useContext(TextContext);
  return (
    <>
      <h2>Child Component</h2>
      <span>{text}</span>
    </>
  );
}
