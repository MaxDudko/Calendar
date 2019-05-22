import React, {Component} from 'react';
import styles from './Sidebar.module.scss';
import logo from '../../logo.png';


class Sidebar extends Component {
    render() {
        return (
            <div className={styles.Sidebar}>
                <img className={styles.logo} src={logo} alt="logo" />
            </div>
        )
    }
}

export default Sidebar;