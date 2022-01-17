import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import check from "../assets/attendance/check.png";
import delete_icon from "../assets/attendance/delete.png";
import UserContext from "../context/user";

import { getUserUIDS, isUserAttended } from "../service/firebase/user";
function getDate(today) {
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();

  return mm + "/" + dd + "/" + yyyy;
}
export const Attendance = (props) => {
  const [user_attendance_data, setuser_attendance_data] = useState([]);
  const [value, onChange] = useState(new Date());
  useEffect(() => {
    let is_sub = true;
    async function get_data() {
      let data = await getUserUIDS();
      let list = [];
      data = data.map((item) => item.data());
      data.forEach(async (user) => {
        let flag = await isUserAttended(getDate(value), user.uid);
        list.push({ name: user.name, is_attended: flag });
        setuser_attendance_data(list);
      });
    }
    if (is_sub) {
      get_data().then((resp) => {
        console.log(value);
        console.log(user_attendance_data);
      });
    }
    return () => {
      is_sub = false;
    };
  }, [value]);
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 h-screen">
      <div className="lg:ml-36 flex justify-center items-center ">
        <Calendar
          onChange={(item) => {
            console.log(item);
          }}
          value={value}
        />
      </div>
      <div>
        {user_attendance_data.map((item) => (
          <p>
            {item.name} : {item.is_attended}
          </p>
        ))}
      </div>
    </div>
  );
};
