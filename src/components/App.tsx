import React from 'react';
import * as _ from 'lodash';

import Nav from './Nav';
import Banner from './Banner';
import Post from './Post';
import './App.scss';

const handleScroll = (e: any): void => {
	let navbar = document.querySelector('.navbar');
	let y = window?.scrollY;
	if (y === 0) {
		navbar?.classList.remove('onScroll');
	} else {
		navbar?.classList.add('onScroll');
	}
};

export default class App extends React.Component {
	componentDidMount() {
		window.addEventListener('scroll', _.throttle(handleScroll, 1000), true);
	}

	render() {
		return (
			<div className='app'>
				<Nav />
				<Banner />
				<div className='main'>
					<Post />
				</div>
			</div>
		);
	}
}
