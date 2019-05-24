import React, {Component} from 'react';
import styles from './Header.module.scss';
import Button from '../common/Button/Button'

class Header extends Component {
    handleClick(page) {
        this.props.selectPage(page);
    }
    render() {
        return (
            <div className={styles.header}>
                <img className={styles.logo} src="/" alt="logo" />
                <div className={styles.nav}>
                    <Button name='CALENDAR'
                            onClick={() => this.props.selectPage('calendar')}
                    />
                    <Button name='TASK-LIST'
                            onClick={() => this.props.selectPage('taskList')}
                    />
                    <Button name='ABOUT'
                            onClick={() => this.props.selectPage('about')}
                    />
                </div>
            </div>
        )
    }
}

export default Header;