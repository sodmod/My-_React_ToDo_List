import React, { useState } from "react";

import Button from "../UI/Buttons/Button";
import Card from "../UI/Cards/Card";
import ErrorModule from "../UI/ErrorModule/ErrorModule";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [details, setDetails] = useState({
    name: "",
    age: "",
  });
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (details.name.trim().length === 0 || details.age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empy value).",
      });
      console.log(setError);
      return;
    }

    if (+details.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(details);
    setDetails({
      name: "",
      age: "",
    });
  };

  const textChangeHandler = (newKey) => {
    setDetails((preState) => {
      return {
        ...preState,
        ...newKey,
      };
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={details.name}
            onChange={(event) => {
              textChangeHandler({
                name: event.target.value,
              });
            }}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={details.age}
            onChange={(event) => {
              textChangeHandler({
                age: event.target.value,
              });
            }}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
