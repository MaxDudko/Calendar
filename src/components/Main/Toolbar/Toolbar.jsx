import React, {Component} from 'react';
import styles from './Toolbar.module.scss';

class Toolbar extends Component {
    renderTitle() {
        let select = this.props.isSelect;
        if(select === 'month') {
            return this.props.currentDate;
        } else if(select === 'week') {
            return
        } else if(select === 'day') {

        } else if(select === 'list') {

        }
    }


    render() {
        const select = this.props.isSelect;
        return (
            <div className={styles.Toolbar}>
                <div className={styles.Toolbar_left}>
                    <button onClick={() => this.props.createCalendar('prev', select)}> ◀ </button>
                    <button onClick={() => this.props.createCalendar('next', select)}> ▶ </button>
                    <button onClick={() => this.props.createCalendar('', select)}>today</button>
                </div>
                <h2>{this.renderTitle()}</h2>
                <div className={styles.Toolbar_right}>
                    <button onClick={() => this.props.changeSelect('month')}>month</button>
                    <button onClick={() => this.props.changeSelect('week')}>week</button>
                    <button onClick={() => this.props.changeSelect('day')}>day</button>
                    <button onClick={() => this.props.changeSelect('list')}>list</button>
                </div>
            </div>
        )
    }
}

export default Toolbar;