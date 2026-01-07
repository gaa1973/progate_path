import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ErrorBoundary} from "react-error-boundary";
import {Suspense} from "react";
import {UserList} from "./user_list";
import {Form} from "./form";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root") || document.body;
const root = ReactDOM.createRoot(container);
root.render(<App />);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Form />
      <ErrorBoundary
        fallback={
          <div className="error" data-test="error">
            Something went wrong
          </div>
        }
      >
        <Suspense
          fallback={
            <div className="loading" data-test="suspense">
              Loading...
            </div>
          }
        >
          <UserList />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
