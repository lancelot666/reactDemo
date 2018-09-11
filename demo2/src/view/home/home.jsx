import React, { Component } from 'react';
import {Link,Prompt} from 'react-router-dom';
import {connect} from 'react-redux';
import * as act from '../../redux/actions/homeAction';
import { DatePicker } from 'antd';
//import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
//import { Switch, Route } from 'react-router-dom'
//import User from '../user/user'
class Home extends Component{
    constructor(props){
        super(props); 
        console.log('home初始化',props)
        this.state = ({num:1})
    }
    componentDidMount(){
        console.log('home DidMount')
    }

    render(){
    	return(
    		<div> 	
                <Prompt message="确定要离开？" />
                <div>this is home</div>
                <div><Link to='/orderList'>home to orderList</Link></div>
                <DatePicker></DatePicker>
            </div>
    	)
    }
}
const mapState = (state)=>{
    return {
        mapData:state.homeData
    }
}
const mapDispatch = (dispatch)=>{
    return{
        changeName:(v)=>dispatch(act.CHANGENAME(v))
    }
}
export default connect(mapState,mapDispatch)(Home);