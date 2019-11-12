import React from 'react';
import styles from "./Task.module.scss";

const Task = (props) => (
        <option className={styles.task}
                title={props.time}
        >
            {props.caption}
        </option>
);


export default Task;
