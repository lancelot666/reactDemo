import React, { Component } from 'react';
class Notfound extends Component{
    constructor(props){
        super(props); 
        console.log('Notfound初始化')
        this.state = ({num:1})
    }
    componentDidMount(){
        console.log('Notfound DidMount')
    }
    render(){
    	return(
    		<div>this is Notfound</div>
    	)
    }
}
export default Notfound;