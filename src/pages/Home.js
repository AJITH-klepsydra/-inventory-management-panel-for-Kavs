import React, { useContext, useEffect, useState } from "react";
import { Table } from "../components/HomePage/Table/Table";
import { SearchBar } from "../components/HomePage/TopBar/Search";
import { TopBar } from "../components/HomePage/TopBar/topBar";
import { ROUTES } from "../constants/routes";
import { LoaderContext } from "../context/loaderContext";
import MedicineContext from "../context/MedicineContext";
import { GetMedicinesList } from "../service/firebase/medicines";
import { useNavigate } from "react-router";
import { attendanceContext } from "../context/attendanceContext";
import firebaseContext from "../context/firebaseContext";
import { markAttendance } from "../service/firebase/user";
import UserContext from "../context/user";

export const HomePage = (props) => {
  const { firebase } = useContext(firebaseContext);
  const { setisLoading } = useContext(LoaderContext);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { isAttended, setisAttended } = useContext(attendanceContext);
  useEffect(() => {
    if (!user) {
      navigate(ROUTES.login);
    }
  }, [user]);

  const { MedList, setMedList } = useContext(MedicineContext);

  useEffect(async () => {
    let issubscribed = true;
    if (issubscribed) {
      setisLoading(true);
      await GetMedicinesList()
        .then((result) => {
          let data = [];
          result.forEach((doc) => {
            let medicine = { ...doc.data() };
            medicine.docId = doc.id;
            data.push(medicine);

            setisLoading(false);
          });
          setMedList(data);
        })
        .catch((error) => {
          setisLoading(false);
        });
    }
    return () => {
      issubscribed = false;
    };
  }, []);
  return (
    <div className="relative">
      <div className="min-h-screen lg:w-screen lg:p-4 ">
        <div className="lg:ml-16 h-full pb-16 shadow-lg">
          <TopBar title="Billing">
            <button className="p-3 bg-secondary text-primary border-primary border-2 rounded hover:bg-primary hover:text-secondary">
              Export to CSV
            </button>

            <button
              disabled={isAttended}
              onClick={(e) => {
                markAttendance(firebase, user.uid).then((response) => {
                  setisAttended(1);
                });
              }}
              className={`${
                isAttended
                  ? " bg-green-400 text-black "
                  : " border-red-500   text-red-500 hover:bg-red-500 hover:text-white "
              } p-3 m-2   rounded border-2 border-primary `}
            >
              {isAttended ? "Marked" : "Mark Attendance"}
            </button>
          </TopBar>
          <hr className="mx-4" />
          <SearchBar />
          <Table />
        </div>
      </div>
    </div>
  );
};
