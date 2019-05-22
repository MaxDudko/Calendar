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
            daysBefore: null,
            daysAfter: null
        }
    }

    componentDidMount() {
        this.createCalendar();
    }

    changeSelect(select) {
        this.setState({
            isSelect: select
        })
    }
    
    createCalendar() {
        const data = [];
        let prevDate = moment().startOf('month');
        let nextDate = moment().endOf('month');

        while (prevDate.isBefore(nextDate)) {
            data.push({
                Day: prevDate.format('dddd'),
                DayNumber: +prevDate.format('e') + 1,
                Date: prevDate.format('DD'),
                Month: prevDate.format('MMMM'),
                Year: prevDate.format('YYYY'),
                select: true 
            });
            prevDate.add(1, 'days');
        }

        let daysBefore = data[0].DayNumber - 1;
        let daysAfter = 7 - data[data.length - 1].DayNumber;

        while (prevDate.isBefore(nextDate)) {
            data.push({
                Day: prevDate.format('dddd'),
                DayNumber: +prevDate.format('e') + 1,
                Date: prevDate.format('DD'),
                Month: prevDate.format('MMMM'),
                Year: prevDate.format('YYYY'),
            });
            prevDate.subtractd(1, 'days');
        }

        
        for(let i = 1; i <= daysAfter; i++) {
            data.push({
                Day: prevDate.add(i, 'days').format('dddd'),
                DayNumber: +prevDate.add(i, 'months').format('e') + 1,
                Date: prevDate.add(i, 'dates').format('DD'),
                Month: prevDate.add(1, 'months').format('MMMM'),
            });
        }

        this.setState({
            data: data,
            daysBefore: daysBefore,
            daysAfter: daysAfter
        })
    }

    changeDate(value) {
        const data = [];
        let prevDate = moment().startOf('month');
        let nextDate = moment().endOf('month');

        while (prevDate.isBefore(nextDate)) {
            data.push({
                Day: prevDate.format('dddd'),
                DayNumber: +prevDate.format('e') + 1,
                Date: prevDate.format('DD'),
                Month: prevDate.format('MMMM'),
                Year: prevDate.format('YYYY')
            });
            prevDate.add(1, 'days');
        }

        let daysBefore = data[0].DayNumber - 1;
        let daysAfter = 7 - data[data.length - 1].DayNumber;

        for(let i = 0; i < daysBefore; i++) {
            data.unshift({
                Day: prevDate.format('dddd').add(-1, 'days'),
                DayNumber: +prevDate.format('e') + 1,
                Date: prevDate.format('DD').add(-1, 'dates'),
                Month: prevDate.format('MMMM').add(-1, 'months'),
                Year: prevDate.format('YYYY') - i
            });
        }

        this.setState({
            data: data,
            daysBefore: daysBefore,
            daysAfter: daysAfter
        })

    }
        
    render() {
        return (
            <div className={styles.Main}>
              <Toolbar changeSelect={this.changeSelect.bind(this)}
                       changeDate={this.changeDate.bind(this)}
              />
              <Calendar isSelect={this.state.isSelect} 
                        data={this.state.data} 
                        daysBefore={this.state.daysBefore}
                        daysAfter={this.state.daysAfter}
              />
            </div>
        )
    }
}

export default Main;