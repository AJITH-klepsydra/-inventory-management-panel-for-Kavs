import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Timestamp } from "@firebase/firestore";
import { getCurrentDate } from "../../context/attendanceContext";
export default async function getUserWithUID(uid) {
  const constraints = [where("uid", "==", uid)];
  const q = query(collection(db, "users"), ...constraints);
  const docs = await getDocs(q);
  return docs.docs;
}

export async function getUserUIDS() {
  const constraints = [];
  const q = query(collection(db, "users"), ...constraints);
  const docs = await getDocs(q);
  return docs.docs;
}

export async function isUserAttended(date, uid) {
  const timestamp = Timestamp.fromDate(new Date(`${date} 00:00:00`));
  const constraints = [
    where("user", "==", uid),
    where("date", "==", timestamp),
  ];
  const q = query(collection(db, "attendance"), ...constraints);
  const docs = await getDocs(q);
  return docs.docs?.length;
}

export async function markAttendance(firebase, uid) {
  const timestamp = Timestamp.fromDate(
    new Date(`${getCurrentDate()} 00:00:00`)
  );
  // TODO: check if the object exists
  //Add a new object
  firebase.firestore().collection("attendance").add({
    date: timestamp,
    user: uid,
  });
}
