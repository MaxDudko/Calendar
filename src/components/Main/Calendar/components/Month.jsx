import React, {Component} from 'react';
import styles from './Month.module.scss';
import moment from 'moment';


class Month extends Component {

    renderThead() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurthday', 'Friday', 'Saturday'];
        const thead = daysOfWeek.map((day, index) => <td key={index}>{day}</td>);
        return <tr className={styles.thead}>{thead}</tr>;
    }
     
    renderTbody() {
        const data = this.props.dataMonth;
        const currentDate = this.props.currentDate;
        const daysBefore = this.props.daysBefore;
        const daysAfter = this.props.daysAfter;

        const decorateStyles = (td) => {
           const decorate = styles.decorate;
           if(td.monthYear === currentDate) return decorate;
        }

        const tdDays = data.map((td, i) => (
            <td className={styles.td + ' ' + decorateStyles(td)} key={i}>
                <a href="/">{td.Date}</a>
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