import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import Post from './Post';
import './App.scss';

function App() {
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

export default App;
