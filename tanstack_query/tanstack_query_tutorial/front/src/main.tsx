import ReactDOM from "react-dom/client";

const container = document.getElementById("root") || document.body;
const root = ReactDOM.createRoot(container);
root.render(<App />);

function App() {
  return <h1>Sample</h1>;
}
