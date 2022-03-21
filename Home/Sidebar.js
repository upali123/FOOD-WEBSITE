import React from "react";
import { slide as Menu } from "react-burger-menu";
import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div className={classes.side}>
      <Menu {...props} style={{ backgroundColor: "white" }}>
        <a className="menu-item" href="/">
          Home
        </a>

        <a className="menu-item" href="/contact">
          Contact
        </a>

        <a className="menu-item" href="/form">
          Feedback Form
        </a>

        <a className="menu-item" href="/desserts">
          Desserts
        </a>
      </Menu>
    </div>
  );
};

export default Sidebar;
