import React, {Component} from 'react';
import './../../App.css';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { withStyles} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
class App extends Component {
  render() {
    var {classes} = this.props;
    console.log(classes);
    return (
      <ThemeProvider>
      <div className="App">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <div className={classes.box}>
          <div className={classes.shape}>ReactJs</div>
          <div className={classes.shape}>Redux</div>
          <div className={classes.shape}>Angular</div>
        </div>
      </div>
    </ ThemeProvider>
    );
  }
}
export default withStyles(styles)(App);