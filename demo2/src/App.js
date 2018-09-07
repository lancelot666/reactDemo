import React, { Component } from 'react';
import {Link,Switch,Route} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
import * as act from './redux/actions/homeAction';
import home from './view/home/home';
import user from './view/user/user';
import orderList from './view/orderList/orderList';
import Form from './component/form';

class App extends Component {
  constructor(props){
    super(props);  
    console.log('App初始化')
    //console.log(this.props.match)
    this.state = ({
      appName:this.props.appName?this.props.appName:'tc'
    })
  }
  render() {
  	const footBar ={
  		background:'#eee',
		  color: 'green',
		  position: 'fixed',
		  bottom: 0,
		  width: '100%',
		  display: 'flex',
		  justifyContent: 'space-around',
		  lineHeight: '40px',
		  height: '40px'
    }
    const match=this.props.match;
    console.log(this.props.mapData)
    return (
      <div className="App">
      	<div>appName:{this.props.mapData.homeName}</div>
      	<Form></Form>
        <Switch>
          <Route exact path={`${match.url}`} component={home} />
          <Route exact path={`${match.url}/orderList`} component={orderList} />
      		<Route path={`${match.url}/user`} component={user} />
      	</Switch>
      	<div style={footBar}>
      		<span><Link to='/index'>首页</Link></span>
          <span><Link to='/index/orderList'>列表</Link></span>
      		<span><Link to='/index/user'>用户</Link></span>
      	</div>
      </div>
    );
  }
}
const mapState = (state)=>{

  console.log('state:',state)
  return {
    mapData:state.homeData,//对应本组件props需要的属性products
    mapName:state.homeData.homeName
  }
}
const mapDispatch = (dispatch)=>{
  return {
    mapCHANGENAME: (v) => dispatch(act.CHANGENAME(v))
  }
}
export default connect(mapState,mapDispatch)(App);
