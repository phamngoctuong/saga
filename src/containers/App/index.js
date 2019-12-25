import React, {Component} from 'react';
import './../../App.css';
import styles from './styles';
import { withStyles} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import TaskBoard from './../TaskBoard';
class App extends Component {
  render() {
    return (
      <ThemeProvider>
      <div className="App">
        <TaskBoard />
      </div>
    </ ThemeProvider>
    );
  }
}
export default withStyles(styles)(App);