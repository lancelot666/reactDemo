import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import 'whatwg-fetch';
import 'es6-promise';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Notfound from './view/404/notfound';
import OrderList from './view/orderList/orderList';
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route match='match' path="/index" component={App} />
				<Route path="/orderList" component={OrderList} />
				<Redirect exact from='/' to='/index'/>
				<Route component={Notfound} />	 
			</Switch>
		</BrowserRouter>
	</Provider>, 
document.getElementById('root'));
registerServiceWorker();
