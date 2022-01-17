import { createContext } from "react";
import { useAuthListner } from "../hooks/use_auth_listner";
const UserContext = createContext(null);

export const UserContextProvider = (props) => {
  const user = useAuthListner();
  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContext;
