import React, { Component } from 'react';
//import { Switch, Route } from 'react-router-dom'
//import User from '../user/user'
class User extends Component{
    constructor(props){
        super(props); 
        console.log('User初始化')
        this.state = ({num:1})
    }
    componentDidMount(){
        console.log('User DidMount')
    }
    render(){
    	return(
    		<div>this is User</div>
    	)
    }
}
export default User;