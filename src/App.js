import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (details) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { ...details, id: uuidv4() }];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
