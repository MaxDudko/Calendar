import React, {Component} from 'react';
import styles from "./Button.module.scss";

const Button = (props) => (
    <button className={styles.btn} onClick={props.onClick}>{props.name}</button>
);


export default Button;