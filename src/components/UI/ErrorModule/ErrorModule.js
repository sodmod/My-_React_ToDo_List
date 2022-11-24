import React from "react";

import Card from "../Cards/Card";
import Button from "../Buttons/Button";

import styles from "./ErrorModule.module.css";

const ErrorModule = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModule;
