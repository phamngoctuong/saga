import React, {Component} from 'react';
import styles from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { withStyles} from '@material-ui/core';
import  {STATUSES } from '../../constants';
class TaskBoard extends Component {
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map(status => {
          return (
            <Grid key={status.value} md={4}>{status.label}</Grid>
          );
        })}
      </Grid>
    );
    return xhtml;
  }
  render() {
    var {classes} = this.props;
    return (
      <div>
        <Button variant="contained" color="primary" className={classes.button}>
          <AddIcon /> Thêm mới công việcc
        </Button>
        {this.renderBoard()}
      </div>
    );
  }
}
export default withStyles(styles)(TaskBoard);