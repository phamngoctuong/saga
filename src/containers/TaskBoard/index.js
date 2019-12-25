import React, {Component} from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core';
class TaskBoard extends Component {
  render() {
    return (
      <div>
        TaskBoard
      </div>
    );
  }
}
export default withStyles(styles)(TaskBoard);