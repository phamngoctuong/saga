import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import TaskBoard from './../TaskBoard';
class App extends Component {
  render() {
    return (
    	<Container maxWidth="lg">
    		<Button variant="contained" color="secondary"> <AddIcon></AddIcon>&nbsp;Hello Worlds</Button>
    		<TaskBoard></TaskBoard>
    	</Container>
    );
  }
}
export default App;