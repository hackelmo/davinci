import "./App.css";
import Router from "./share/Router";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import store from "./redux/store/store";

if (process.env.REACT_APP_NODE_ENV === "production") {
  disableReactDevTools();
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="App">
          <Router />
          <ReactQueryDevtools />
        </div>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
