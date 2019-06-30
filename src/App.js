import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

// SCSS
import './App.scss';

// basic
import Header from './Header/Header';

// pages
import Notice from './pages/Notice';
import Player from './pages/Player';
import Image from './pages/Image';
import Video from './pages/Video';
import League from './pages/League';


@inject('adminStore')
@observer
class App extends Component {
	render() {
		const { adminStore } = this.props;
		const {
			page,
			handlePage,
		} = adminStore;
		
		console.log(`현재 페이지 : ${page}`);
		
		return (
      		<div className="App">
				<Header page = {page} handlePage = {handlePage} />
				
				<Switch>
					<Route path = "/5" component = {League} />
					<Route path = "/4" component = {Video} />
					<Route path = "/3" component = {Image} />
					<Route path = "/2" component = {Player} />
					<Route path = "/1" component = {Notice}/>
					<Route path = "/" render = {()=><Redirect to = "/1"/>} />
				</Switch>
      		</div>
		);
	}
}

export default observer(App);
