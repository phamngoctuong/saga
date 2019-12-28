import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProductList from './../../components/ProductList';
import ProductItem from './../../components/ProductItem';
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
	renderBoard(states) {
		let xhtml = null;
		xhtml = (states.map((state,index)=> {
			var taskFiltered = listTask.filter(
        task => task.status === state.value
      );
			return (
				<ProductItem key={index} state={taskFiltered[0]} index={index} status={state}></ProductItem>
			);
		}));
		return xhtml;
	}
 render() {
 	var {states} = this.props;
  return (
  	<ProductList>
  		{this.renderBoard(states)}
  	</ProductList>
  );
 }
}
var mapStateToProps = (state) => {
	return {
		states: state.states
	}
}
export default connect(mapStateToProps, null)(TaskBoard);