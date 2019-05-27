import React, {Component} from 'react';
import styles from './AddTask.module.scss';
import Button from '../common/Button/Button'

class AddTask extends Component {

    render() {
        return (
            <div className={styles.show}>
                <div className={styles.addTask}>
                    <div className={styles.header}>
                        <h4 className={styles.title}>New Task</h4>
                        <button className={styles.close} onClick={(e) => this.props.showAddTask(e)}>X</button>
                     </div>
                     <div className={styles.dateBlock}>
                        <p>Enter Date: </p>
                        <input type="date" className={styles.date}
                               onChange={(e) => this.props.onchangeDate(e)}
                        />
                        <p>Enter Time</p>
                        <input type="time" className={styles.time}
                               onChange={(e) => this.props.onchangeTime(e)}
                        />
                    </div>
                    <p>Enter Caption : </p>
                    <input type="text" className={styles.caption}
                           onChange={(e) => this.props.onchangeCaption(e)}
                    />
                    <p>Enter Description: </p>
                    <textarea rows="10" className={styles.description}
                              onChange={(e) => this.props.onchangeDescription(e)}
                    />
                    <button className={styles.add} onClick={(e) => this.props.setValue(e)}>add task</button>
                </div>
            </div>
        )
    }
}

export default AddTask;