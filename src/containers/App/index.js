import React, {Component} from 'react';
import './../../App.css';
import styles from './styles';
import { withStyles} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import TaskBoard from './../TaskBoard';
import theme from './../../commons/Theme';
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <TaskBoard />
      </div>
    </ ThemeProvider>
    );
  }
}
export default withStyles(styles)(App);