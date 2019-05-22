import React, {Component} from 'react';
import styles from './Week.module.scss';

class Week extends Component {
    renderThead() {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const thead = daysOfWeek.map((day, index) => <td key={index}>{day}</td>);
        return <tr className={styles.thead}>{thead}</tr>;
    }

    renderTbody() {
        const tdIndex = Array.from(Array(42).keys());
        const td = tdIndex.map((td, index) => (
            <td className={styles.td} key={index}>
                <a href="/">{td}</a>
            </td>
        ));
        const week = 7;
        const tr = [];
        for (let i = 0; i < Math.ceil(td.length/week); i++){
            tr[i] = td.slice((i*week), (i*week) + week);
        }
        const tbody = tr.map((tr, index) => <tr key={index}>{tr}</tr>);
        return tbody;
    }

    render() {
        return (
            <div>
              WEEK
            </div>
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