import React, {Component} from 'react';
import styles from './AddTask.module.scss';

class AddTask extends Component {

    render() {
        return (
              <tr className={styles.add}>
                <td className={styles.date} colSpan={2}>
                    <input type="date"
                           onChange={(e) => this.props.onchangeDate(e)}
                    />
                    <input type="time"
                           onChange={(e) => this.props.onchangeTime(e)}
                    />
                </td>
                <td className={styles.description} colSpan={2}>
                    <input type="text"
                           onChange={(e) => this.props.onchangeCaption(e)}
                    />
                    <input type="text"
                           onChange={(e) => this.props.onchangeDescription(e)}
                    />
                </td>
                <td>
                    <button className={styles.btn}
                            onClick={this.props.setValue}>add
                    </button>
                </td>
              </tr>
        )
    }
}

export default AddTask;

