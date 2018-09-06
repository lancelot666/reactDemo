import React, { Component } from 'react';
import {Link,Switch,Route} from 'react-router-dom';
import './App.css';
import home from './view/home/home';
import user from './view/user/user';
import orderList from './view/orderList/orderList';

class App extends Component {
  constructor(props){
    super(props);  
    console.log('App初始化')
    console.log(this.props.match)
    let arr =[1,2,3];
    arr.splice(1,1,5,6,7);
    console.log(arr)
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
    //const match=this.props.match;
    return (
      <div className="App">
      	
      	<Switch>
          <Route exact path="/index" component={home} />
          <Route exact path="/index/orderList" component={orderList} />
      		<Route path="/index/user" component={user} />
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

export default App;
