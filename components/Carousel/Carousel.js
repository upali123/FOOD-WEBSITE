import classes from "./Carousel.module.css";
import ShakeIcon from "./ShakeIcon";
const Carousel = () => {
  return (
    <div className={classes.car} style={{ marginTop: "560px", color: "white" }}>
      {/* <ShakeIcon /> */}
      <h3>SHAKES</h3>
      <ul>
        <li>Oreo Shake</li>
        <li>Vanilla Shake</li>
        <li>Choclate Shake</li>
        <li>Pinjabi Lassi</li>
        <li>Soft Drinks</li>
        <li>Jal Jira</li>
      </ul>
    </div>
  );
};
export default Carousel;
