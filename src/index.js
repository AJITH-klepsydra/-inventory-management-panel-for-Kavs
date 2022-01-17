import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FirebaseContextProvider } from "./context/firebaseContext";
import { LoaderContextProvider } from "./context/loaderContext";
import { MedicineContextProvider } from "./context/MedicineContext";
import { CartContextProvider } from "./context/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContextProvider>
      <LoaderContextProvider>
        <MedicineContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </MedicineContextProvider>
      </LoaderContextProvider>
    </FirebaseContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
