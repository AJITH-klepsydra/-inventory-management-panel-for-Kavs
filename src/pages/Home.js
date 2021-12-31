import React, { useContext, useEffect, useState } from "react";
import { SidePanel } from "../components/HomePage/Sidepanel/sidepanel";
import { Table } from "../components/HomePage/Table/Table";
import { SearchBar } from "../components/HomePage/TopBar/Search";
import { TopBar } from "../components/HomePage/TopBar/topBar";
import { ROUTES } from "../constants/routes";
import { LoaderContext } from "../context/loaderContext";
import MedicineContext from "../context/MedicineContext";
import { GetMedicinesList } from "../service/firebase/medicines";

export const HomePage = (props) => {
  const { setisLoading } = useContext(LoaderContext);
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
    <div className="">
      <div className="h-screen lg:w-screen lg:p-4 ">
        <div className="lg:ml-16 h-full shadow-lg">
          <TopBar title="Billing">
            <button className="p-3 bg-secondary text-primary border-primary border-2 rounded hover:bg-primary hover:text-secondary">
              Export to CSV
            </button>
            <button className="p-3 hover:bg-secondary hover:text-primary">
              Attendance
            </button>
          </TopBar>
          <hr className="mx-4" />
          <SearchBar />
          <Table />
          <div className="m-4 ">
            <div className="relative">
              <button className="p-3 bg-secondary text-primary border-green-800 border-2 rounded hover:bg-green-800 hover:text-secondary">
                ₹ 256
              </button>
              <div className="absolute flex justify-center items-center animate-ping -top-2 w-4 h-4 bg-red-500 p-1 text-xs text-white rounded-full">
                5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
