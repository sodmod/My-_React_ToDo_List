import React from "react";
import ReactDOM from "react-dom";

import Card from "../Cards/Card";
import Button from "../Buttons/Button";

import styles from "./ErrorModule.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

export const Back = (props) => {
  return ReactDOM.createPortal(
    <Backdrop onConfirm={props.onConfirm} />,
    document.getElementById("backdrop-root")
  );
};

export const OverLayRoot = (props) => {
  return (
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
  );
};
export const OverLay = (props) => {
  return ReactDOM.createPortal(
    <OverLayRoot
      title={props.title}
      message={props.message}
      onConfirm={props.onConfirm}
    />,
    document.getElementById("overlay-root")
  );
};

const ErrorModule = (props) => {
  return (
    <>
      <Back onConfirm={props.onConfirm} />
      <OverLay
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm}
      />
    </>
  );
};

export default ErrorModule;
