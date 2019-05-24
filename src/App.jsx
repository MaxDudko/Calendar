import React, {Component} from 'react';
import styles from './App.module.scss';
import moment from 'moment';
import Header from './components/Header/Header'
import Calendar from './components/Calendar/Calendar';
import Toolbar from './components/Calendar/Toolbar/Toolbar';
import TaskList from './components/TaskList/TaskList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            period: 'month',
            page: 'calendar',
            data: [],
            tasks: [],
            next: 0,
            prev: 0,
            moment: moment()
        }
    }

    selectPage(page) {
        this.setState({
            page: page
        })
    }
    renderContent() {
        const page = this.state.page;
        if (page === "calendar") {
            return(
                <div>
                  <Toolbar period={this.state.period}
                           changeSelect={this.changeSelect.bind(this)}
                           createCalendar={this.createCalendar.bind(this)}
                           currentDate ={this.state.currentDate}
                  />
                  <Calendar period={this.state.period}
                            data={this.state.data}
                            moment={this.state.moment}
                            currentDate ={this.state.currentDate}
                            createCalendar={this.createCalendar.bind(this)}
                            addTask={this.addTask.bind(this)}
                            tasks={this.state.tasks}
                  />
                </div>
            )
        } else if (page === 'taskList') {
            return(
                <TaskList data={this.props.data}
                          currentDate ={this.props.currentDate}
                          createCalendar={this.props.createCalendar}
                          calendar={this.props.period}
                          addTask={this.props.addTask}
                          tasks={this.props.tasks}
                />
                )

        }
    }

    componentDidMount() {
        this.createCalendar();
    }

    changeSelect(select) {
        this.setState({
            isSelect: select,
            data: [],
        });
        //this.createCalendar(null, select);
    }

    createCalendar(change) {
        const data = [];
        let prevDate;
        let nextDate;
        let currentDate;
        let select = this.state.period;
        let next = this.state.next;
        let prev = this.state.prev;

        if(change === 'prev') {
            prev++;
            next--;
            currentDate = moment().subtract(prev, select).format('DD dddd MMMM YYYY');
            prevDate = moment().subtract(prev, select).startOf(select).startOf('week');
            nextDate = moment().subtract(prev, select).endOf(select).endOf('week');
        } else if(change === 'next') {
            prev--;
            next++;
            currentDate = moment().add(next, select).format('DD dddd MMMM YYYY');
            prevDate = moment().add(next, select).startOf(select).startOf('week');
            nextDate = moment().add(next, select).endOf(select).endOf('week');
        } else {
            prev = 0;
            next = 0;
            currentDate = moment().format('DD dddd MMMM YYYY');
            prevDate = moment().startOf(select).startOf('week');
            nextDate = moment().endOf(select).endOf('week');
        }
        /*
                const hoursPerDay = 24;
                const time = [];
                let formattedTime;
                for(let i = 0; i <= hoursPerDay; i++) {
                    formattedTime = moment().subtract(i, "hours").format("hA");
                    time.unshift(formattedTime);
                }
        */


        while (prevDate.isBefore(nextDate)) {
            data.push({
                Day: prevDate.format('dddd'),
                DayNumber: +prevDate.format('e') + 1,
                Date: prevDate.format('DD'),
                Month: prevDate.format('MMMM'),
                MonthNumber: prevDate.format('MM'),
                Year: prevDate.format('YYYY'),
                monthYear: prevDate.format('MMMM YYYY'),
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

    addTask(date, time, caption, description) {
        console.log('test')
        const data = this.state.tasks;
        const newTask = {
            date: date,
            time: time,
            caption: caption,
            description: description
        };
        data.push(newTask);

        this.setState({
            tasks: data
        })
    }


    render() {
        console.log(this.state.moment);
        return (
            <div className={styles.app}>
                <Header selectPage={this.selectPage.bind(this)} />
                <div className={styles.container}>
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}

export default App;
/*
<div className={styles.container}>
                    <div className={styles.Sidebar}>
                        <img className={styles.logo} src={logo} alt="logo" />
                    </div>
                    <div className={styles.main}>
                        <Toolbar period={this.state.period}
                                 changeSelect={this.changeSelect.bind(this)}
                                 createCalendar={this.createCalendar.bind(this)}
                                 currentDate ={this.state.currentDate}
                        />
                        <Calendar period={this.state.period}
                                  data={this.state.data}
                                  moment={this.state.moment}
                                  currentDate ={this.state.currentDate}
                                  createCalendar={this.createCalendar.bind(this)}
                                  addTask={this.addTask.bind(this)}
                                  tasks={this.state.tasks}
                        />
                    </div>
                </div>
            </div>
*/