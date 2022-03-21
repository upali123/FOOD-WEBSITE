import React from "react";
import Sidebar from "./Sidebar";
import "./style.css";
const Home = () => {
  return (
    <div id="App">
      <input className="inputs" placeholder="Search here" />
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <div id="page-wrap" style={{ marginLeft: "42px" }}>
        <h1>Cool Restaurant 🍔🍕</h1>
        <h2>Check out our offerings in the sidebar!</h2>
      </div>
    </div>
  );
};

export default Home;
