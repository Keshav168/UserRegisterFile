import React, { useState } from "react";
import AddUser from "../AddUser";
import UserList from "./UserList";
import UserCount from "./UserCount";
import "./styles.css";

function App() {
  const [tableData, setTableData] = useState([]);

  function handleFormSubmit(data) {
    setTableData((prevData) => [...prevData, data]);
  }

  function handleDelete(index) {
    setTableData((prevData) => prevData.filter((_, i) => i !== index));
  }

  return (
    <div className="bor">
      <div className="d-flex justify-content-around">
        <AddUser handleFormSubmit={handleFormSubmit} tableData={tableData} />
        <UserList tableData={tableData} handleDelete={handleDelete} />
        <UserCount count={tableData.length} />
      </div>
    </div>
  );
}

export default App;
