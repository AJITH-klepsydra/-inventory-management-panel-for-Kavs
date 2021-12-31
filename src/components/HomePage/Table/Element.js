import React, { useState } from "react";

export const Element = (props) => {
  const [count, setcount] = useState(0);
  return (
    <tr className={`my-2 ${props.odd && " bg-tertiary "}`}>
      <td className="p-2 m-2 text-xs  text-gray-600 w-[200px]  ">{props.id}</td>
      <td className="p-2 m-2  w-[200px]  "> {props.title}</td>
      <td className="p-2 m-2  w-[200px]  ">₹ {props.price}</td>
      <td className="p-2 m-2   w-[200px] ">
        <div className="flex">
          <button
            onClick={(e) => {
              setcount(count + 1);
            }}
            className={`flex mx-2 justofy-center items-center text-sm font-bold  p-2 rounded hover:bg-secondary border border-primary w-6 h-6 text-secondary hover:text-primary ${
              count ? "bg-red-500" : "bg-primary"
            }`}
          >
            {count ? count : "+"}
          </button>
          {count ? (
            <button
              onClick={(e) => {
                setcount(count - 1);
              }}
              className={`flex justofy-center items-center text-sm font-bold bg-primary  p-2 rounded hover:bg-secondary border border-primary w-6 h-6 text-secondary hover:text-primary `}
            >
              -
            </button>
          ) : (
            <></>
          )}
        </div>
      </td>
    </tr>
  );
};
