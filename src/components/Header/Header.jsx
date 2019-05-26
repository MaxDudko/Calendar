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
                    <Button name='Calendar'
                            onClick={() => this.props.selectPage('calendar')}
                    />
                    <Button name='Task-List'
                            onClick={() => this.props.selectPage('taskList')}
                    />
                    <Button name='Settings'
                            onClick={() => this.props.selectPage('settings')}
                    />
                    <Button name='About'
                            onClick={() => this.props.selectPage('about')}
                    />
                    <Button name='Login'
                            onClick={() => this.props.selectPage('login')}
                    />
                </div>
            </div>
        )
    }
}

export default Header;