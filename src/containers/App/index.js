import React, {Component} from 'react';
import './../../App.css';
import Button from '@material-ui/core/Button';
import styles from './styles';
// import { WithStyles, createStyles } from '@material-ui/core';
import { withStyles} from '@material-ui/core';
class App extends Component {
  render() {
    var {classes} = this.props;
    console.log(classes);
    return (
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
    );
  }
}
export default withStyles(styles)(App);