import { createContext, useEffect, useState } from "react";
import React from "react";
import useUser from "../hooks/use-user";
import { isUserAttended } from "../service/firebase/user";
export const attendanceContext = createContext(null);
export function getCurrentDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();

  return mm + "/" + dd + "/" + yyyy;
}

export const AttendanceContextProvider = (props) => {
  const [isAttended, setisAttended] = useState(0);

  const activeUser = useUser();
  useEffect(async () => {
    if (activeUser?.uid)
      setisAttended(await isUserAttended(getCurrentDate(), activeUser.uid));
  }, [activeUser]);

  return (
    <attendanceContext.Provider value={{ isAttended, setisAttended }}>
      {props.children}
    </attendanceContext.Provider>
  );
};
