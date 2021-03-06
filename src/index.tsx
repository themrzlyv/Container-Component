import { render } from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import App from "./App";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  rootElement
);
