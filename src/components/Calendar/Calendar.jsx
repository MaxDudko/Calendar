import React, {Component} from 'react';
import styles from './Calendar.module.scss';
import Month from './Month/Month';
import Week from './Week/Week';
import Day from './Day/Day';
//import List from './components/List';

class Calendar extends Component {

    renderCalendar() {
        const calendar = this.props.period;
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
        } /*else if(calendar === 'list') {
            return <List data={this.props.data}
                         currentDate ={this.props.currentDate}
                         createCalendar={this.props.createCalendar}
                         calendar={calendar}
                         addTask={this.props.addTask}
                         tasks={this.props.tasks}
            />
        }*/
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