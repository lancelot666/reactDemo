import React,{Component} from 'react';

class OrderList extends Component{
	constructor(props){
		super(props);
		console.log('orderList init')
	}
	componentDidMount(){
		console.log('orderList dom ready')
	}
	render(){
		return(
			<div> is orderList</div>
		)	
	}
}

export default OrderList;