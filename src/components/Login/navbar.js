import React from "react";
import kottakkal_logo from "../../assets/kottakkal.png";
export const NavBar = (props) => {
  return (
    <div className="flex justify-end">
      <img
        className="w-36 mx-8"
        src={kottakkal_logo}
        alt="kottakkal official logo "
      />
    </div>
  );
};
