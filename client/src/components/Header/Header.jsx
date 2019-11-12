import React, {Component} from 'react';
import styles from './Header.module.scss';
import logo from  './logo.svg';

class Header extends Component {
    handleClick(page) {
        this.props.selectPage(page);
    }
    render() {
        return (
            <div className={styles.header}>
                <img className={styles.logo} src={logo} alt="logo" />
                <div className={styles.nav}>
                    <button onClick={() => this.props.selectPage('calendar')}>Calendar</button>
                    <button onClick={() => this.props.selectPage('taskList')}>Task List</button>
                    <button onClick={() => this.props.selectPage('settings')}>Settings</button>
                    <button onClick={() => this.props.selectPage('login')}
                    >Login</button>
                </div>
            </div>
        )
    }
}

export default Header;