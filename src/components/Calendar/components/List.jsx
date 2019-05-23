import React, {Component} from 'react';
import styles from "./List.modules.scss";

class List extends Component {





    render() {
        const form = false;
        return (
            <div className={styles.list}>
              <div className={styles.taskList}></div>
              <form className={styles.form}>
                <p>Enter Date: </p>
                <input type="date" id="date" />
                <p>Enter Caption : </p>
                <input type="text" id="caption" />
                <p>Enter Description: </p>
                <textarea rows="10" cols="45" id="description" />
                <button>Add Task to List</button>
              </form>
            </div>
        )
    }
}

export default List;