import React, { useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import kottakkal from "../assets/kottakkal.png";
import { useNavigate } from "react-router";
import { ROUTES } from "../constants/routes";
export const CheckoutPage = (props) => {
  const { cart_list } = useContext(CartContext);
  const [cart] = cart_list;
  const navigate = useNavigate();
  useEffect(() => {
    if (!cart.cart.length) {
      navigate(ROUTES.home);
    }
  }, []);
  return (
    <div className=" font-mono min-h-screen w-screen flex items-center justify-center">
      <div className="my-8">
        <div className="text-center">
          <img src={kottakkal} alt="Kottakkal logo" />
        </div>
        <table className=" mb-8">
          <thead className="text-xl border-t-2 border-gray-400 font-semibold text-left">
            <tr>
              <th className="  p-4 m-2 rounded">Item</th>
              <th className="  p-4 m-2 rounded">Count</th>
              <th className="  p-4 m-2 rounded">price</th>
            </tr>
          </thead>
          <tbody>
            {cart.cart.map((item, i) => (
              <tr className={`p-4 my-2 ${i % 2 && " bg-tertiary "}`}>
                <td className="p-4 m-2  ">{item.name}</td>
                <td className="p-4 m-2  ">{item.count}</td>
                <td className="p-4 m-2  ">{Math.round(item.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <div className="flex  p-4 my-4  justify-between">
          <h1>TOTAL</h1>
          <h1 className="text-xl text-red-500 font-bold ">
            {Math.round(cart.amount)}
          </h1>
        </div>
        <button className="p-1 my-3 bg-secondary text-primary border-primary border-2 rounded hover:bg-primary hover:text-secondary">
          {"Checkout"}
        </button>
      </div>
    </div>
  );
};
