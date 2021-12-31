import { createContext, useState } from "react";
import { COLORS } from "../constants/theme";

export const LoaderContext = createContext(null);

export const LoaderContextProvider = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const params = {
    type1: {
      color: COLORS.secondary,
      type: "Grid",
    },
    type2: {
      color: COLORS.secondary,
      type: "Puff",
    },
  };
  return (
    <LoaderContext.Provider value={{ isLoading, setisLoading, params }}>
      {props.children}
    </LoaderContext.Provider>
  );
};
