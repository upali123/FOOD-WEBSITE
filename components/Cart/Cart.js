import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartProvider from "../../store/CartProvider";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem, { CartItems } from "../Cart/CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount}`;
  console.log({ totalAmount });

  const cartItemRemoverHandler = (id) => {
    cartCtx.removeItem(id);
    console.log({ cartItemRemoverHandler });
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
    cartCtx.addItem({ ...item, amount: 1 });
    console.log({ cartItemAddHandler });
    console.log(item);
  };
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={() => cartItemAddHandler(item)}
          onRemove={cartItemRemoverHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const hashItems = cartCtx.items.length > 0;
  return (
    <Modal onHideCart={props.onHideCart}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>{totalAmount}</span>
        <div className={classes.actions}>
          <button onClick={props.onHideCart} className={classes["button-alt"]}>
            Close
          </button>
          {hashItems && <button className={classes.button}>Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
