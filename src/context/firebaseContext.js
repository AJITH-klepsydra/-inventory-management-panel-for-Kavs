import { FieldValue } from "@firebase/firestore";
import { createContext } from "react";
import { firebase } from "../lib/firebase";
const firebaseContext = createContext(null);

export const FirebaseContextProvider = (props) => {
  return (
    <firebaseContext.Provider value={{ firebase, FieldValue }}>
      {props.children}
    </firebaseContext.Provider>
  );
};
export default firebaseContext;
