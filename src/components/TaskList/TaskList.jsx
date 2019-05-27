import React, {Component} from 'react';
import styles from './TaskList.module.scss';
import AddTask from "./AddTask";

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            time: null,
            caption: null,
            description: null,
            isShow: false
        }
    }

    showAddTask() {
        this.setState({
            isShow: !this.state.isShow
        })
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
        this.setState({
            isShow: !this.state.isShow
        })
    }

    renderTask() {
        const tasks = this.props.tasks;
        const list = tasks.map((li, i) => (
           <tr className={styles.task} key={i}>
               <td className={styles.date}>{li.date} {li.time}</td>
               <td className={styles.caption}>{li.caption}</td>
           </tr>
        ));
        return list;
    }

    render() {
        //{this.renderTask()}
        return (
            <div className={styles.wrapper}>
                <div className={styles.taskList}>
                    <h4>Task List</h4>
                    <table>
                        <thead>
                          <tr>
                              <td>Date</td>
                              <td>Task</td>
                          </tr>
                        </thead>
                        <tbody>
                        <tr className={styles.task}>
                            <td className={styles.date}>25.05.2019 16:20</td>
                            <td className={styles.caption}>Task N</td>
                        </tr>
                        <tr className={styles.task}>
                            <td className={styles.date}>25.05.2019 16:20</td>
                            <td className={styles.caption}>Task N</td>
                        </tr>
                        <tr className={styles.task}>
                            <td className={styles.date}>25.05.2019 16:20</td>
                            <td className={styles.caption}>Task N</td>
                        </tr>
                        <tr className={styles.task}>
                            <td className={styles.date}>25.05.2019 16:20</td>
                            <td className={styles.caption}>Task N</td>
                        </tr>
                        {this.renderTask()}
                        </tbody>
                    </table>
                    <button name='AddTask' onClick={() => this.showAddTask()}>AddTask</button>
                </div>
                {this.state.isShow ?
                    <AddTask onchangeDate={this.onchangeDate.bind(this)}
                             onchangeTime={this.onchangeTime.bind(this)}
                             onchangeCaption={this.onchangeCaption.bind(this)}
                             onchangeDescription={this.onchangeDescription.bind(this)}
                             setValue={this.setValue.bind(this)}
                             showAddTask={this.showAddTask.bind(this)}
                    />
                    : null}
            </div>
        )
    }
}

export default TaskList;