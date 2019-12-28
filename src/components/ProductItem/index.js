import React, { Component } from 'react';
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
import { withStyles } from '@material-ui/styles';
import styles from './styles';
class ProductItem extends Component {
  render() {
  	var {state, status} = this.props;
  	console.log(state);
    return (
    	<Grid item md={4}>
				<Card>
					<Box my={2} textAlign="center">
  					<Typography component="h2">
			        {status.state}
			      </Typography>
		      </Box>
					<CardContent>
						<Grid container>
							<Grid item md={6}>
  							<Typography component="h3">
					        {state.title}
					      </Typography>
				      </Grid>
				      <Grid item md={6}>
  							<Typography component="h4">
  								{status.state}
					      </Typography>
				      </Grid>
				      <Grid item md={12}>
  							<Typography component="p">
					        {state.description}
					      </Typography>
				      </Grid>
						</Grid>
  					<CardActions className={classes.CardActions}>
			        <Fab color="primary" aria-label="add">
				        <CreateIcon></CreateIcon>
				      </Fab>
				      <Fab color="secondary" aria-label="add">
				        <DeleteIcon></DeleteIcon>
				      </Fab>
			      </CardActions>
					</CardContent>
				</Card>
			</Grid>
    );
  }
}
export default withStyles(styles)(ProductItem);