import React from 'react';

export default function Nav() {
	return (
		<div className='navbar'>
			<div className='navbar-top'>
				<div className='navbar-left'>
					<ul className='menu d-flex align-items-center'>
						<li className='mr-4 menu-title'>React Blog</li>
						<li className='mr-4'>
							<a href='/'>One</a>
						</li>
						<li className='mr-4'>
							<a href='/'>Two</a>
						</li>
						<li className='mr-4'>
							<a href='/'>Three</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
