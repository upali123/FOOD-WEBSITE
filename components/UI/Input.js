import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label className={classes.Input} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input ref={ref} className={classes.Input} {...props.input} />
    </div>
  );
});

export default Input;
