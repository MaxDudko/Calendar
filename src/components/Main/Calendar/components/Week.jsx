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
        const newData = data.map((el, i) => {

        })

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