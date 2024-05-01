import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { UserProvider } from "./utils/contexts/UserContext";
import { InputProvider } from "./utils/contexts/InputContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <InputProvider>
          <App />
        </InputProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
