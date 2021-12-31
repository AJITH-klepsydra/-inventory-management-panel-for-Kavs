import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FirebaseContextProvider } from "./context/firebaseContext";
import { LoaderContextProvider } from "./context/loaderContext";
import { MedicineContextProvider } from "./context/MedicineContext";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContextProvider>
      <LoaderContextProvider>
        <MedicineContextProvider>
          <App />
        </MedicineContextProvider>
      </LoaderContextProvider>
    </FirebaseContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
