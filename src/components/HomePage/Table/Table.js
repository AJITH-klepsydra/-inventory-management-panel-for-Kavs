import React, { useContext } from "react";
import MedicineContext from "../../../context/MedicineContext";
import { Element } from "./Element";

export const Table = (props) => {
  const { MedList, setMedList } = useContext(MedicineContext);
  console.log("Data", MedList);

  return (
    <div className="overflow-x-auto m-4  max-h-[500px]">
      <table className="w-[1300px] mb-8">
        <tr className="text-xl border-t-2 border-gray-400 font-semibold text-left">
          <th className="  p-2 m-2 rounded">ID</th>
          <th className="  p-2 m-2 rounded">Name</th>
          <th className="  p-2 m-2 rounded">Price</th>
          <th className="  p-2 m-2 rounded">Add</th>
        </tr>
        {MedList.map((item, i) => (
          <Element
            title={item.name}
            id={item.docId}
            price={item.price}
            odd={i % 2 === 0}
          />
        ))}
      </table>
    </div>
  );
};
