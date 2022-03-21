import CartContext from "./cart-context";
import { useReducer } from "react";
import { useState } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

console.log({ defaultCartState });

const cartReducer = (state, action) => {
  console.log("gsdjhsa", state, action);
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    console.log({ updatedTotalAmount });
    const existingCartItemIndex = (state.items.findIndex = (item) =>
      item.id === action.item.id);
    const updatedItems = state.items.concat(action.item);
    console.log(updatedItems);

    console.log({ existingCartItemIndex });

    const existingCartItem = state.items[existingCartItemIndex];
    let UpdatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      UpdatedItems = [...state.items];
      UpdatedItems[existingCartItemIndex] = updatedItem;
    } else {
      UpdatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
  }

  return defaultCartState;
};
const CartProvider = (props) => {
  const [CartState, dispatcherCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    debugger;
    dispatcherCartAction({ type: "ADD", item: item });
  };
  console.log({ addItemToCartHandler });
  const removeItemToCartHandler = (id) => {
    dispatcherCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: CartState.items,
    totalAmount: CartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  console.log({ cartContext });
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
