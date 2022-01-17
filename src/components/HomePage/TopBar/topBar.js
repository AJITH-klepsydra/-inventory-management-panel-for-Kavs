import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TopBar = (props) => {
  return (
    <div className="flex justify-between ">
      <h1 className="text-2xl p-2 font-bold hidden lg:block">{props.title}</h1>
      <div className="grid grid-cols-2 gap-4">
        {props.children.map((btn) => (
          <div
            key={uuidv4()}
            className=" rounded text-white flex justify-center items-center "
          >
            {btn}
          </div>
        ))}
      </div>
    </div>
  );
};
