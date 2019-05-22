import React, {Component} from 'react';
import styles from './App.module.scss';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <div className={styles.container}>
          <Sidebar />
          <Main />
        </div>
      </div>
    )
  }
}

export default App;
