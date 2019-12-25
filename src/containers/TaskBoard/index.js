import React, {Component} from 'react';
import styles from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { withStyles} from '@material-ui/core';
import  {STATUSES } from '../../constants';
const listTask = [
  {
    id: 1,
    title: 'Read book',
    description: 'Read material ui book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play football',
    description: 'With my friend',
    status: 2,
  },
  {
    id: 3,
    title: 'Play game',
    description: 'Alone 😊',
    status: 1,
  },
];
class TaskBoard extends Component {
  renderBoard() {
    let xhtml = null;
    var {classes} = this.props;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map(status => {
          const taskFiltered = listTask.filter(task => task.status === status.value);
          return (
            <Grid item key={status.value} md={4}>
              <div className={classes.status}>{classes.label}</div>
              <div className={classes.wrapperListTask}>
               {
                taskFiltered.map(task => {
                  return <h1 key={task.id}>{task.title}</h1>
                })
               }
              </div>
            </Grid>
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