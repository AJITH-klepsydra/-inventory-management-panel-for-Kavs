import React, { useContext, useState } from "react";
import CartContext from "../../../context/CartContext";

export const Element = (props) => {
  const [item_count, setcount] = useState(false);

  const { cart_list } = useContext(CartContext);
  const [cart, addtoCart, removeFromCart] = cart_list;

  return (
    <tbody>
      <tr className={`my-2 ${props.odd && " bg-tertiary "}`}>
        <td className="p-2 m-2 text-xs  text-gray-600 w-[200px]  ">
          {props.id}
        </td>
        <td className="p-2 m-2  w-[200px]  "> {props.title}</td>
        <td className="p-2 m-2  w-[200px]  ">₹ {props.price}</td>
        <td className="p-2 m-2   w-[200px] ">
          <div className="flex">
            <button
              onClick={(e) => {
                setcount(true);
              }}
              className={`flex mx-2 justofy-center items-center text-sm font-bold  p-2 rounded hover:bg-secondary border border-primary  h-6 text-secondary hover:text-primary ${
                item_count ? "bg-red-500" : "bg-primary"
              }`}
            >
              {"+"}
            </button>
            {item_count ? (
              <div className="flex ">
                <input
                  defaultValue={item_count}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();

                      addtoCart({
                        name: props.title,
                        id: props.id,
                        price: props.price * parseInt(e.target.value),
                        count: parseInt(e.target.value),
                      });
                    }
                  }}
                  min="0"
                  type="number"
                  className="bg-secondary px-1 w-32 mx-2 outline-none border rounded"
                  aria-label="item count for this item"
                />
                <button
                  onClick={(e) => {
                    removeFromCart(props.id, props.price);
                    setcount(false);
                  }}
                  className={`flex justofy-center items-center text-sm font-bold bg-primary  p-2 rounded hover:bg-secondary border border-primary w-6 h-6 text-secondary hover:text-primary `}
                >
                  -
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </td>
      </tr>
    </tbody>
  );
};
