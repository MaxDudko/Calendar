import React, {Component} from 'react';
import styles from "./Day.module.scss";
import Task from "../../common/Task/Task";

class Day extends Component {
    componentDidMount() {
        const calendar = this.props.calendar;
        this.props.createCalendar(calendar);
    }

    renderThead() {
        const data = this.props.data;
        const currentDate = this.props.currentDate;

        const thead = data.map((day, i) => <td key={i}>{day.Day + ' ' + day.MonthNumber + '/' + day.Date}</td>);
        thead.unshift(<td />);
        const day = currentDate.split(' ').slice(1, 2)
        return <tr className={styles.thead}><td /><td>{day}</td></tr>;
    }

    renderTable() {
        const data = this.props.data;
        const hours = [...Array(24).keys()].map((i) => i < 10 ? '0' + i + ':00' : i + ':00');

        const tdDays = hours.map((hour, i) => (
            <tr key={i}>
                {
                    data.map((day, i) => (
                        <td className={styles.td} key={i} >
                            {this.props.tasks.map((task, i) => (
                                day.yearMonthDay ===  task.date ?
                                    <Task date={task.date}
                                          time={task.time}
                                          caption={task.caption}
                                          key={i}
                                    />
                                    : null
                            ))}
                        </td>
                    ))
                }
                <td className={styles.hour}>{hour}</td>
                <td className={styles.td} />
            </tr>
        ));

        return tdDays;

    }



    render() {
        return (
            <table className={styles.table}>
                <thead>
                {this.renderThead()}
                </thead>
                <tbody>
                {this.renderTable()}
                </tbody>
            </table>
        )
    }
}

export default Day;