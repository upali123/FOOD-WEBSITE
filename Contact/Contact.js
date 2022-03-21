import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../footer/Footer";
import classes from "./Contact.module.css";

export const Contact = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <>
      <div>
        <button className="btn btn-primary btn-outline" onClick={handleClick}>
          BACK
        </button>
      </div>
      <div className={classes.contact}>
        <h2>CONTACT INFORMTION</h2>
        <p>YOU CAN CONTACT US THROUGH MAIL ID:</p>
        <li>upalikhanduri!@gmail.com</li>
        <li>yahoo.com</li>
        <li>rnf@gmail.com</li>
        <li>upalikhanduri!@gmail.com</li>
        <li>yahoo.com</li>
        <li>rnf@gmail.com</li>
        <li>upalikhanduri!@gmail.com</li>
        <li>yahoo.com</li>
        <li>rnf@gmail.com</li>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </>
  );
};
