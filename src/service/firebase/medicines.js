import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

export async function GetMedicinesList() {
  const q = query(collection(db, "products"));

  const querySnapshot = await getDocs(q);

  return querySnapshot;
}
