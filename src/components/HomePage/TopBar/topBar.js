import React from "react";

export const TopBar = (props) => {
  return (
    <div className="flex justify-between p-4">
      <h1 className="text-2xl p-2 font-bold hidden lg:block">{props.title}</h1>
      <div className="grid grid-cols-2 gap-4">
        {props.children.map((btn) => (
          <div className="bg-primary rounded text-white flex justify-center items-center ">
            {btn}
          </div>
        ))}
      </div>
    </div>
  );
};
