import React, { useEffect, useState } from "react";
import Datalist from "./Datalist";

const Data = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setUserList(result))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Datalist />
    </div>
  );
};

export default Data;
