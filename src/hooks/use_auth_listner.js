import { useContext, useEffect, useState } from "react";
import firebaseContext from "../context/firebaseContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export const useAuthListner = () => {
  const AUTH_KEY = "AuthUser";
  const { firebase } = useContext(firebaseContext);
  const authInstance = getAuth(firebase);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem(AUTH_KEY)));

  useEffect(() => {
    const listner = onAuthStateChanged(authInstance, (authuser) => {
      if (authuser) {
        localStorage.setItem(AUTH_KEY, JSON.stringify(authuser));
        setUser(authuser);
      } else {
        setUser(null);
        localStorage.removeItem(AUTH_KEY);
      }
    });

    return () => {
      listner();
    };
  }, [authInstance]);
  return user;
};
