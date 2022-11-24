import React from "react";

import Card from "../UI/Cards/Card";

import style from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <>
      <Card className={style.users}>
        <ul>
          {props.users.map((user, i) => (
            <li key={i}>
              {user?.name} ({user?.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default UsersList;
