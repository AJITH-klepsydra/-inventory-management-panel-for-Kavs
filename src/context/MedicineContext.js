import { createContext, useState } from "react";

import React from "react";

const MedicineContext = createContext(null);
export const MedicineContextProvider = (props) => {
  const [MedList, setMedList] = useState([]);
  return (
    <MedicineContext.Provider value={{ MedList, setMedList }}>
      {props.children}
    </MedicineContext.Provider>
  );
};
export default MedicineContext;
