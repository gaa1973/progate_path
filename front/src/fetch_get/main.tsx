import {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root")!;
const root = ReactDOM.createRoot(container);
root.render(<App />);

type User = {
  name: string;
  email: string;
};

function App() {
  console.log("0");

  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data: User = await res.json();
        setUser(data);

        console.log("1");
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {user && (
        <div data-test="user">
          <div>name: {user.name}</div>
          <div>email: {user.email}</div>
        </div>
      )}
    </>
  );
}
