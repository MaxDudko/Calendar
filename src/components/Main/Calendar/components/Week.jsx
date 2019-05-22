import React, {Component} from 'react';
import styles from './Week.module.scss';

class Week extends Component {
    renderThead() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurthday', 'Friday', 'Saturday'];
        const thead = daysOfWeek.map((day, index) => <td key={index}>{day}</td>);
        return <tr className={styles.thead}>{thead}</tr>;
    }

    renderTable() {
        const data = this.props.data;
        const currentDate = this.props.currentDate;

        const decorateStyles = (td) => {
            const decorate = styles.decorate;
            if(td.monthYear === currentDate) return decorate;
        }

        const tdDays = data.map((td, i) => (
            <td className={styles.td + ' ' + decorateStyles(td)} key={i}>
                <a href="/">{td.Date}</a>
            </td>
        ));

        const week = 1;
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