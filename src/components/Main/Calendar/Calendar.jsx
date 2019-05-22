import React, {Component} from 'react';
import styles from './Calendar.module.scss';
import Month from './components/Month';
import Week from './components/Week';
import Day from './components/Day';
import List from './components/List';

class Calendar extends Component {
    renderCalendar() {
        const calendar = this.props.isSelect;
        if(calendar === 'month') {
            return <Month data={this.props.data}
                          daysBefore={this.props.daysBefore}
                          daysAfter={this.props.daysAfter} />
        } else if(calendar === 'week') {
            return <Week data={this.props.data}
                         daysBefore={this.props.daysBefore}
                         daysAfter={this.props.daysAfter} />
        } else if(calendar === 'day') {
            return <Day data={this.props.data}
                        daysBefore={this.props.daysBefore}
                        daysAfter={this.props.daysAfter} />
        } else if(calendar === 'list') {
            return <List data={this.props.data}
                         daysBefore={this.props.daysBefore}
                         daysAfter={this.props.daysAfter} />
        }
    }
    render() {
        return (
            <div className={styles.Calendar}>
              {this.renderCalendar()}
            </div>
        )
    }
}

export default Calendar;