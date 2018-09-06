import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import 'whatwg-fetch';
import 'es6-promise';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Notfound from './view/404/notfound';
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/:name" component={App} />
				<Route component={Notfound} />
			</Switch>
		</BrowserRouter>
	</Provider>, 
document.getElementById('root'));
registerServiceWorker();
