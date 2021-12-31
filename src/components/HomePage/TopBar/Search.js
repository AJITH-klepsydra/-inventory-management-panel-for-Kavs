import React from "react";
import search from "../../../assets/Home/search.svg";
export const SearchBar = (props) => {
  return (
    <div className="flex justify-between p-4">
      <div className="p-4 rounded-md bg-tertiary flex border ">
        <img className="w-6" src={search} alt="search icon image" />
        <input
          className="bg-transparent outline-none px-2  "
          aria-label="search for medicines"
        />
      </div>
      <div className="rounded p-4 bg-tertiary">
        <select className=" bg-transparent">
          <option className="rounded px-2">All</option>
        </select>
      </div>
    </div>
  );
};
