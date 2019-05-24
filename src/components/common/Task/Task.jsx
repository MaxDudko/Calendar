import React, {Component} from 'react';
import styles from "./Task.modules.scss";

class Task extends Component {




    render() {
        return (
            <div className={styles.modal}>
                <p>{time}</p>
                <p>{task}</p>
            </div>
        )
    }
}

export default Task;