// import React from "react";
import React, { useEffect, useState } from "react";
import bootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next/lib/src/bootstrap-table";
import Loader from "../utils/Loader";
import CircularProgress from "@material-ui/core/CircularProgress";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

const Datalist = () => {
  const [loading, setLoading] = useState([]);

  const [userList, setUserList] = useState([]);

  const columns = [
    { dataField: "id", text: "Id" },
    { dataField: "name", text: "Name", sort: true },

    { dataField: "username", text: "Username", sort: true },
    { dataField: "email", text: "Email", sort: true },
  ];
  console.log({ columns });

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizeperpage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizeperpage", sizePerPage);
    },
  });
  console.log({ pagination });
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setUserList(result));
    setLoading(false);
    // .catch((error) => console.log(error));
  }, []);
  // setLoading(false);
  console.log({ userList });
  return (
    <div>
      {/* {loading ? (
        <CircularProgress />
      ) : ( */}
      <BootstrapTable
        bootstrap4
        pagination={pagination}
        keyField="id"
        columns={columns}
        data={userList}
      />

      {/* <table striped bordered hover variant="light">
        <tr>
          <th style={{ color: "white", margin: "22px" }}>id</th>
          <th style={{ color: "white", margin: "22px" }}>name</th>
          <th style={{ color: "white", margin: "22px" }}>userName</th>
          <th style={{ color: "white" }}>email</th>
          <th style={{ color: "white" }}>street</th>
        </tr>
        {userList && userList.length > 0 ? (
          userList.map((usr) => (
            <tr>
              <td style={{ color: "white", margin: "22px" }}>{usr.id}</td>
              <td style={{ color: "white", margin: "22px" }}>{usr.name}</td>
              <td style={{ color: "white", margin: "22px" }}>
                {" "}
                {usr.username}
              </td>
              <td style={{ color: "white" }}>{usr.email}</td>
              <td style={{ color: "white" }}>{usr.address.street}</td>
            </tr>
          ))
        ) : (
          <div style={{ color: "whitesmoke", fontSize: "22PX" }}>"loading"</div>
        )}
      </table> */}
    </div>
  );
};

export default Datalist;
