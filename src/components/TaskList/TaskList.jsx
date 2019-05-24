import React, {Component} from 'react';
import styles from './TaskList.module.scss';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            time: null,
            caption: null,
            description: null
        }
    }

    onchangeDate(event) {
        this.setState({
            date: event.target.value
        })
    }
    onchangeTime(event) {
        this.setState({
            time: event.target.value
        })
    }

    onchangeCaption(event) {
        this.setState({
            caption: event.target.value
        })
    }
    onchangeDescription(event) {
        this.setState({
            description: event.target.value
        })
    }

    setValue() {
        const date = this.state.date;
        const time = this.state.time;
        const caption = this.state.caption;
        const description = this.state.description;
        this.props.addTask(date, time, caption, description);
    }

    renderTask() {
        const tasks = this.props.tasks;
        const list = tasks.map((li, i) => ([
           <tr className={styles.task} key={i}>
               <td className={styles.date}>{li.date} {li.time}</td>
               <td className={styles.caption}>{li.caption}</td>
           </tr>
        ]));
        return list;
    }

    render() {
        return (
            <div className={styles.tasks}>
                <div className={styles.list}>
                    <h4>Task List</h4>
                    <table>
                        <thead>
                          <tr>
                              <td>Date</td>
                              <td>Task</td>
                          </tr>
                        </thead>
                        <tbody>
                          {this.renderTask()}
                        </tbody>
                    </table>
                </div>
                <div className={styles.form}>
                    <h4>Add Task</h4>
                    <div className={styles.formTop}>
                      <p>Enter Date: </p>
                      <input type="date"
                             onChange={this.onchangeDate.bind(this)}
                      />
                      <p>Enter Time</p>
                      <input type="time"
                             onChange={this.onchangeTime.bind(this)}
                      />
                    </div>
                    <p>Enter Caption : </p>
                    <input type="text"
                           onChange={this.onchangeCaption.bind(this)}
                    />
                    <p>Enter Description: </p>
                    <textarea rows="10" cols="45"
                              onChange={this.onchangeDescription.bind(this)}
                    />
                    <button onClick={() => this.setValue()}>add task</button>
                </div>
            </div>
        )
    }
}

export default List;