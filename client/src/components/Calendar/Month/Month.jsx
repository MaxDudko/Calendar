import React, {Component} from 'react';
import styles from './Month.module.scss';
import moment from 'moment';
import Task from '../../common/Task/Task';


class Month extends Component {

    componentDidMount() {
        const calendar = this.props.calendar;
        this.props.createCalendar(calendar);
    }

    renderThead() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurthday', 'Friday', 'Saturday'];
        const thead = daysOfWeek.map((day, index) => <td key={index}>{day}</td>);
        return <tr className={styles.thead}>{thead}</tr>;
    }
     
    renderTbody() {
        const data = this.props.data;
        const currentDate = this.props.currentDate;

        const decorateStyles = (td) => {
           const decorate = styles.decorate;
           const decorateDate = styles.decorateDate;
           let tdClass = null;
           if(td.Month === currentDate.split(" ")[1] && `${td.Date} ${td.Month} ${td.Year}` === moment().format('DD MMMM YYYY')) {
               tdClass = decorate + " " + decorateDate;
           } else if (td.Month === currentDate.split(" ")[1]) {
               tdClass = decorate;
           }
           return tdClass;
        };

        const tdDays = data.map((td, i) => (
            <td className={styles.td + ' ' + decorateStyles(td)} key={i}>
                <a href="/">{td.Date}</a>
                {
                    this.props.tasks.map((task, i) => (
                    td.yearMonthDay ===  task.date ?
                        <Task date={task.date}
                              time={task.time}
                              caption={task.caption}
                              key={i}
                        />
                        : null
                ))}
            </td>
        ));
        
        const week = 7;
        const tr = [];
        for (let i = 0; i < Math.ceil(tdDays.length/week); i++) {
            tr[i] = tdDays.slice((i*week), (i*week) + week);
        }
        const tbody = tr.map((tr, index) => <tr key={index}>{tr}</tr>);
        return tbody;
    }

   
    render() {
        return (
            <table className={styles.table}>
            <thead>
                {this.renderThead()}
            </thead>
            <tbody>
                {this.renderTbody(this.props.data)} 
            </tbody>
          </table>
        )
    }
}

export default Month;

/*
const data = this.props.data;
        const daysBefore = this.props.daysBefore;
        const daysAfter = this.props.daysAfter;
        const tdArray = [];
        const td = <td className={styles.td} />;
        for(let i = 0; i < daysBefore; i++) {
            tdArray.push(td);
        }
        const tdDays = data.map((td, i) => (
            <td className={styles.td} key={i}>
                <a href="/">{td.Date}</a>
            </td>
        ));
        tdArray.push(tdDays);
        for(let i = 0; i < daysAfter; i++) {
            tdArray.push(td);
        }
        const week = 7;
        const tr = [];
        for (let i = 0; i < Math.ceil(tdArray.length/week); i++) {
            tr[i] = tdArray.slice((i*week), (i*week) + week);
        }
        const tbody = tr.map((tr, index) => <tr key={index}>{tr}</tr>);
        console.log(tr);
        return tbody;
*/