import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("#root element missing in index.html");
const root = createRoot(rootEl);

root.render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </StrictMode>,
);
