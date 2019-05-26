import React, {Component} from 'react';
import styles from "./Day.module.scss";

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
        const currentDate = this.props.currentDate;
        const hours = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
            '12pm', '13pm', '14pm', '15pm', '16pm', '17pm', '18pm', '19m', '20pm', '21pm', '22pm', '23pm'];

        const decorateStyles = (td) => {
            const decorate = styles.decorate;
            if(td.monthYear === currentDate) return decorate;
        };

        const tdDays = hours.map((hour, i) => (
            <tr key={i}>
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