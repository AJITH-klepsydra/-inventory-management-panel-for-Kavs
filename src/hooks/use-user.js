import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import getUserWithUID from "../service/firebase/user";

export default function useUser() {
  const user = useContext(UserContext);

  const [ActiveUser, setActiveUser] = useState();
  useEffect(async () => {
    async function getActiveUser(uid) {
      const data = await getUserWithUID(uid);
      if (data?.length) {
        let user_data = data[0];
        let path = user_data.ref.path;
        user_data = user_data.data();
        user_data["ref_id"] = path;
        setActiveUser(user_data);
      }
    }
    if (user?.user.uid) {
      await getActiveUser(user.user.uid);
    }
  }, [user]);
  return ActiveUser;
}
