import React, {Component} from 'react';
import styles from './Week.module.scss';
import Task from "../../common/Task/Task";

class Week extends Component {

    componentDidMount() {
        const calendar = this.props.calendar;
        this.props.createCalendar(calendar);
    }

    renderThead() {
        const data = this.props.data;
        // const currentDate = this.props.currentDate;

        const thead = data.map((day, i) => <td key={i}>{day.Day + ' ' + day.MonthNumber + '/' + day.Date}</td>);
        thead.unshift(<td />);
        return <tr className={styles.thead}>{thead}</tr>;
    }

    renderTable() {
        const data = this.props.data;
        // const currentDate = this.props.currentDate;
        const hours = [...Array(24).keys()].map((i) => i < 10 ? '0' + i + ':00' : i + ':00');

        // const decorateStyles = (td) => {
        //     const decorate = styles.decorate;
        //     if(td.monthYear === currentDate) return decorate;
        // };

        const tdDays = hours.map((hour, i) => (
            <tr key={i}>
                <td className={styles.td} key={i+'0'} >{hour}</td>
                {
                    data.map((day, i) => (
                        <td className={styles.td} key={i} >
                            {
                                this.props.tasks.map((task, i) => (
                                day.yearMonthDay ===  task.date && hour ===  task.time ?
                                    <Task date={task.date}
                                          time={task.time}
                                          caption={task.caption}
                                          key={i}
                                    />
                                    : null
                                ))
                            }
                        </td>
                    ))
                }
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

export default Week;

/*<table className={styles.table}>
                <thead>
                    {this.renderThead()}
                </thead>
                <tbody>
                  {this.renderTbody()} 
                </tbody>
              </table>*/

/*
<tr className={styles.thead}>{thead}</tr>;
*/