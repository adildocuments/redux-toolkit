import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import accountReducer from "./slices/accountSlice";
import { bonusReducers } from "./slices/bonusSlice.js";
import { rewardReducer } from "./components/reducers/reward.js";

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducers,
    reward: rewardReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
