import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {UserList} from "./user_list";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root") || document.body;
const root = ReactDOM.createRoot(container);
root.render(<App />); //

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <UserList />
    </QueryClientProvider>
  );
}
