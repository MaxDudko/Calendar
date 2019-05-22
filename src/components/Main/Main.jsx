import React, {Component} from 'react';
import styles from './Main.module.scss';
import moment from 'moment';
import Toolbar from './Toolbar/Toolbar';
import Calendar from './Calendar/Calendar';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelect: 'month',
            data: [],
            next: 0,
            prev: 0
        }
    }

    componentDidMount() {
        this.createCalendar();
    }

    changeSelect(select) {
        this.setState({
            isSelect: select
        })
        this.createCalendar(null, select);
    }

    createCalendar(change, period) {
        const data = [];
        let prevDate;
        let nextDate;
        let currentDate;
        let select = this.state.isSelect;
        //let i = this.state.counter;
        let next = this.state.next;
        let prev = this.state.prev;
        if(change === 'prev') {
            prev++;
            next--;
            currentDate = moment().subtract(prev, select).format('MMMM YYYY');
            prevDate = moment().subtract(prev, select).startOf(select).startOf('week');
            nextDate = moment().subtract(prev, select).endOf(select).endOf('week');
        } else if(change === 'next') {
            prev--;
            next++;
            currentDate = moment().add(next, select).format('MMMM YYYY');
            prevDate = moment().add(next, select).startOf(select).startOf('week');
            nextDate = moment().add(next, select).endOf(select).endOf('week');
        } else {
            prev = 0;
            next = 0;
            currentDate = moment().format('MMMM YYYY');
            prevDate = moment().startOf(select  || period).startOf('week');
            nextDate = moment().endOf(select  || period).endOf('week');
        }

        while (prevDate.isBefore(nextDate)) {
            data.push({
                Day: prevDate.format('dddd'),
                DayNumber: +prevDate.format('e') + 1,
                Date: prevDate.format('DD'),
                Month: prevDate.format('MMMM'),
                MonthNumber: prevDate.format('MM'),
                Year: prevDate.format('YYYY'),
                monthYear: prevDate.format('MMMM YYYY')
            });
            prevDate.add(1, 'days');
        }

        this.setState({
            data: data,
            currentDate: currentDate,
            next: next,
            prev: prev
        })
    }


        
    render() {
        return (
            <div className={styles.Main}>
              <Toolbar isSelect={this.state.isSelect}
                       changeSelect={this.changeSelect.bind(this)}
                       createCalendar={this.createCalendar.bind(this)}
                       currentDate ={this.state.currentDate}
              />
              <Calendar isSelect={this.state.isSelect}
                        data={this.state.data}
                        daysBefore={this.state.daysBefore}
                        daysAfter={this.state.daysAfter}
                        currentDate ={this.state.currentDate}
              />
            </div>
        )
    }
}

export default Main;