import React from 'react';
import styles from './Toolbar.module.scss';

const Toolbar = (props) => {
    return (
        <div className={styles.Toolbar}>
          <div className={styles.Toolbar_left}>
            <button onClick={() => props.changeDate('prev')}> ◀ </button>
            <button onClick={() => props.changeDate('next')}> ▶ </button>
            <button onClick={() => props.changeDate('today')}>today</button>
          </div>
          <div className={styles.Toolbar_right}>
            <button onClick={() => props.changeSelect('month')}>month</button>
            <button onClick={() => props.changeSelect('week')}>week</button>
            <button onClick={() => props.changeSelect('day')}>day</button>
            <button onClick={() => props.changeSelect('list')}>list</button>
          </div>
        </div>
    )
}

export default Toolbar;