import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { createContext, useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
import CartIcon_2 from "../Cart/CartIcon_2";

const HeaderCartButton = (props) => {
  const [cartHide, setCartHide] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const { items } = cartCtx;
  const hasItem = items.length > 0;

  const btnClasses = `${classes.HeaderCartButton} ${
    cartHide ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setCartHide(true);
    const timer = setTimeout(() => {
      setCartHide(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <div>
      {hasItem && (
        <button onClick={props.onClick} className={btnClasses}>
          <span className={classes.icon}>
            <CartIcon />
          </span>

          <span className={classes.cart}>Your Cart</span>
          <span className={classes.carts}>{numberOfCartItems}</span>
        </button>
      )}
    </div>
  );
};

export default HeaderCartButton;
