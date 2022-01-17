import React, { useContext, useState } from "react";
import MedicineContext from "../../../context/MedicineContext";
import { Element } from "./Element";
import { v4 as uuidv4 } from "uuid";
import CartContext from "../../../context/CartContext";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../constants/routes";

export const Table = (props) => {
  const { MedList, setMedList } = useContext(MedicineContext);
  const { cart_list } = useContext(CartContext);
  const [cart, addtoCart, removeFromCart] = cart_list;
  const navigate = useNavigate();
  return (
    <div>
      <div className="overflow-x-auto m-4  max-h-[500px]">
        <table className="w-[1300px] mb-8">
          <thead className="text-xl border-t-2 border-gray-400 font-semibold text-left">
            <tr>
              <th className="  p-2 m-2 rounded">ID</th>
              <th className="  p-2 m-2 rounded">Name</th>
              <th className="  p-2 m-2 rounded">Price</th>
              <th className="  p-2 m-2 rounded">Add</th>
            </tr>
          </thead>
          {MedList.map((item, i) => (
            <Element
              key={uuidv4()}
              title={item.name}
              id={item.docId}
              price={item.price}
              odd={i % 2 === 0}
            />
          ))}
        </table>
      </div>
      <div className="m-4 ">
        <div className="relative">
          <button
            onClick={() => {
              navigate(ROUTES.checkout);
            }}
            className="p-3 bg-secondary text-primary border-green-800 border-2 rounded hover:bg-green-800 hover:text-secondary"
          >
            {"Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};
