import React, {Component} from 'react';
import styles from './List.module.scss';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            caption: null,
            description: null
        }
    }

    onchangeDate(event) {
        this.setState({
            date: event.target.value
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
        const caption = this.state.caption;
        const description = this.state.description;
        this.props.addTask(date, caption, description);
    }

    renderTask() {
        const tasks = this.props.tasks;
        const list = tasks.map((li, i) => (
           <div className={styles.task} key={i}>
               <p className={styles.title}>
                  <span className={styles.date}>{li.date}</span>
                  <span className={styles.caption}>{li.caption}</span>
               </p>
               <p className={styles.description}>{li.description}</p>
           </div>
        ));
        return list;
    }

    render() {
        console.log(styles);
        return (
            <div className={styles.tasks}>
                <div className={styles.list}>
                    <h4>Task List</h4>
                    {this.renderTask()}
                </div>
                <div className={styles.form}>
                    <h4>Add Task</h4>
                    <p>Enter Date: </p>
                    <input type="date"
                           onChange={this.onchangeDate.bind(this)}
                    />
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