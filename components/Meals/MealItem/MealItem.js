import classes from "./MealItem.module.css";
import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$ ${parseFloat(props.price).toFixed(2)}`;
  const addtoCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      price: props.price,
      amount: amount,
      name: props.name,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div>{props.price}</div>
        <div>
          <MealItemForm id={props.id} onAddToCart={addtoCartHandler} />
        </div>
      </div>
    </li>
  );
};
export default MealItem;
