import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
    		<div>
                <div>this is home</div>
                <div><Link to='/orderList'>home to orderList</Link></div>
            </div>
    	)
    }
}
export default Home;