import { Fragment } from "react";
import classes from "./Header.module.css";
import image from "../../asstes/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

// const useStyles = makeStyles({
//   home: {
//     backgroundColor: "white",
//   },
// });
const Header = (props) => {
  //   const navigate = useNavigate();
  //   const classes = useStyles();
  return (
    <>
      <Fragment>
        <header className={classes.header}>
          <div>
            <div className="dropdown">
              <button
                className="btn btn-secondary-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Click for More
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h1 style={{ marginTop: "22px" }}>Delicious Meals</h1>

          <a
            style={{
              color: "white",
              textDecoration: "none",
              fontFamily: "Sansita Swashed",
              fontWeight: "bold",
              fontSize: "larger",
            }}
            href="/home"
            // onClick={() => navigate("/")}
          >
            Home
          </a>
          {/* <Link to="#">Home</Link> */}
          <a
            style={{
              color: "white",
              textDecoration: "none",
              fontFamily: "Sansita Swashed",

              fontWeight: "bold",
              fontSize: "larger",
            }}
            href="/contact"
          >
            Contact
          </a>
          <a
            style={{
              color: "white",
              textDecoration: "none",
              fontFamily: "Sansita Swashed",
              //   fontStyle: "cursive",
              fontWeight: "bold",
              fontSize: "larger",
            }}
            href="/form"
          >
            Feedback Form
          </a>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>

        <div className={classes["main-image"]}>
          <img src={image} alt="djkhfjf" />
        </div>
      </Fragment>
    </>
  );
};

export default Header;
