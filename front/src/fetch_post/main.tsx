import {useState} from "react";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root")!;
const root = ReactDOM.createRoot(container);
root.render(<App />);

function App() {
  const [text, setText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({text: text}),
      });
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitted(true);
    }
  }
  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  // if (isSubmitted) {
  //   return <div>Form Submitted!</div>;
  // }

  return (
    <>
      {isSubmitted ? (
        <div>Form submitted</div>
      ) : (
        <>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="text"
              value={text}
              onChange={handleTextChange}
            />
            <button type="submit">submit</button>
          </form>
        </>
      )}
    </>
  );
}
