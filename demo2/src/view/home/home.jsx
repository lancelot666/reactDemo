import React, { Component } from 'react';
//import { Switch, Route } from 'react-router-dom'
//import User from '../user/user'
class Home extends Component{
    constructor(props){
        super(props); 
        console.log('home初始化')
        this.state = ({num:1})
    }
    componentDidMount(){
        console.log('home DidMount')
    }
    render(){
    	return(
    		<div>this is home</div>
    	)
    }
}
export default Home;