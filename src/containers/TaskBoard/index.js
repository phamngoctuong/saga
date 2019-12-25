import React, {Component} from 'react';
import styles from './styles';
import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/core';
class TaskBoard extends Component {
  render() {
    var {classes} = this.props;
    return (
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <div className={classes.taskboard}>
          <div className={classes.shape}>ReactJs</div>
          <div className={classes.shape}>Redux</div>
          <div className={classes.shape}>Angular</div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(TaskBoard);