import React, { useState, useRef } from "react";

import Button from "../UI/Buttons/Button";
import Card from "../UI/Cards/Card";
import ErrorModule from "../UI/ErrorModule/ErrorModule";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameRef = useRef();
  const ageRef = useRef();

  // const [details, setDetails] = useState({
  //   name: "",
  //   age: "",
  // });
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    // In this declared constants below, is use to get the input of an input
    const name = nameRef.current.value;
    const age = ageRef.current.value;

    const all = { name: name, age: age };
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empy value).",
      });
      console.log(setError);
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(all);
    nameRef.current.value = "";
    ageRef.current.value = "";
    // setDetails({
    //   name: "",
    //   age: "",
    // });
  };

  // const textChangeHandler = (newKey) => {
  //   setDetails((preState) => {
  //     return {
  //       ...preState,
  //       ...newKey,
  //     };
  //   });
  // };

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
            ref={nameRef}
            // value={details.name}
            // onChange={(event) => {
            //   textChangeHandler({
            //     name: event.target.value,
            //   });
            // }}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageRef}
            // value={details.age}
            // onChange={(event) => {
            //   textChangeHandler({
            //     age: event.target.value,
            //   });
            // }}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
