import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();
  //   const price = `$ ${parseFloat(props.price).toFixed(2)}`;
  // const click = () => {
  //   alert("hdjskhfjsf");
  // };
  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;

    //it provides value always as a string so we have to convert it on Number
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  const RemoveFunc = () => {
    // const amount = amountInputRef.current.value;
    // console.log("amount hun mai", amount.filter);
  };

  return (
    <div>
      {/* <button onClick={click}>nbfhsdbfh</button> Event handler */}
      <form className={classes.form} onSubmit={SubmitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount" + props.id,
            min: "1",
            max: "5",
            type: "Number",
            step: "1",
            defaultValue: "1",
          }}
        />

        <button className={classes.Add}>+ Add</button>

        {!setAmountIsValid && <p>please enter a valid number uptop{1 - 5}</p>}
      </form>
    </div>
  );
};
export default MealItemForm;
