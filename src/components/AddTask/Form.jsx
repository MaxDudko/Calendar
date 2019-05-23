import React, {Component} from 'react';
import styles from "./Form.modules.scss";

class Form extends Component {





    render() {
        return (
            <div className={styles.tasks}>
                <div className={styles.list}>
                    <ul>
                        <li>Task 1</li>
                        <li>Task 2</li>
                        <li>Task 3</li>
                        <li>Task 4</li>
                        <li>Task 5</li>
                    </ul>
                </div>
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

export default Form;