import React, {Component} from 'react';
import styles from "./Form.modules.scss";

class Form extends Component {





    render() {
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

export default Form;