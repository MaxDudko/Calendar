import React, {Component} from 'react';
import styles from './Calendar.module.scss';
import Month from './components/Month';
import Week from './components/Week';
import Day from './components/Day';
import List from './components/List';

class Calendar extends Component {

    renderCalendar() {
        const calendar = this.props.isSelect;
        //this.props.createCalendar(calendar);
        if(calendar === 'month') {
            return <Month data={this.props.data}
                          currentDate ={this.props.currentDate}
                          createCalendar={this.props.createCalendar}
                          calendar={calendar}
            />
        } else if(calendar === 'week') {
            return <Week data={this.props.data}
                         currentDate ={this.props.currentDate}
                         createCalendar={this.props.createCalendar}
                         calendar={calendar}
            />
        } else if(calendar === 'day') {
            return <Day data={this.props.data}
                        moment={this.props.moment}
                        currentDate ={this.props.currentDate}
                        createCalendar={this.props.createCalendar}
                        calendar={calendar}
            />
        } else if(calendar === 'list') {
            return <List data={this.props.data}
                         currentDate ={this.props.currentDate}
                         createCalendar={this.props.createCalendar}
                         calendar={calendar}
            />
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