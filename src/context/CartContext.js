import { createContext, useState } from "react";

import React from "react";

const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [cart, setcart] = useState({ cart: [], amount: 0.0, count: 0 });

  function addtoCart(item) {
    let index = 0;
    let flag = false;

    cart.cart.forEach((element) => {
      if (element.id === item.id) {
        cart.amount -= element.price;
        cart.count -= element.count;
        cart.amount += item.price;
        element.count = item.count;
        cart.count += item.count;
        flag = true;
      }
      index += 1;
    });
    if (!flag) {
      cart.cart.push(item);
      cart.count += item.count;
      cart.amount += item.price;
    }

    setcart(cart);
  }
  const removeFromCart = (id) => {
    let index = 0;
    let count = 0;
    let price = 0;
    let flag = true;
    for (let i = 0; i < cart.cart.length; i++) {
      if (cart.cart[i].id === id) {
        index = i;
        count = cart.cart[i].count;
        price = cart.cart[i].price;
        flag = false;
        break;
      }
    }
    if (flag) {
      cart.cart.splice(index, 1);
      cart.amount -= price;
      cart.count -= count;
      setcart(cart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart_list: [cart, addtoCart, removeFromCart],
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
