import React, {Component} from 'react';
import styles from './Toolbar.module.scss';

class Toolbar extends Component {
    renderTitle() {
        let period = this.props.period;
        if(period === 'month') {
            return this.props.currentDate;
        } else if(period === 'week') {
            return this.props.currentDate;
        } else if(period === 'day') {
            return this.props.currentDate;
        } else if(period === 'list') {
            return this.props.currentDate;
        }
    }
    click(period) {
        this.props.changeSelect(period);
        this.props.createCalendar(period);
    }

    render() {
        const select = this.props.isSelect;
        return (
            <div className={styles.Toolbar}>
                <div className={styles.Toolbar_left}>
                    <button onClick={() => this.props.createCalendar('prev')}> ◀ </button>
                    <button onClick={() => this.props.createCalendar('next')}> ▶ </button>
                    <button onClick={() => this.props.createCalendar('')}>today</button>
                </div>
                <h2>{this.renderTitle()}</h2>
                <div className={styles.Toolbar_right}>
                    <button onClick={() => this.click('month')}>month</button>
                    <button onClick={() => this.click('week')}>week</button>
                    <button onClick={() => this.click('day')}>day</button>
                    <button onClick={() => this.click('list')}>list</button>
                </div>
            </div>
        )
    }
}

export default Toolbar;