import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
class ProductList extends Component {
  render() {
    return (
    	<Grid container  spacing={2}>
    		{this.props.children}
			</Grid>
    );
  }
}
export default ProductList;