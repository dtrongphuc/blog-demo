import React from 'react';

export default function Post() {
	return (
		<div className='col-12'>
			<div className='post'>
				<div className='post-header'>
					<h1>FLUX FLACK</h1>
					<span>NOV 2, 2015</span>
				</div>
				<div className='post-body'>
					<img
						className='post-body__img'
						src='https://picsum.photos/id/1073/2500/1000'
						alt='post-img'
					></img>
					<div className='post-body__text'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Cras lorem mi, aliquam luctus sapien et,
							ultrices finibus dui. Mauris viverra, diam ac
							tincidunt finibus, orci erat mollis leo, sed
							sagittis dolor diam nec enim. Nulla at arcu eget
							lacus auctor tempor. Nullam eleifend metus quis nisi
							imperdiet lacinia. Praesent vitae neque sit amet
							felis porta euismod. Vivamus tempus sem orci, eget
							vestibulum ipsum aliquam a. Donec at dapibus sapien,
							ac semper magna. Vivamus vitae odio non eros
							vehicula iaculis a non massa. Suspendisse eu rutrum
							sem. Curabitur pharetra tristique pretium. Proin
							molestie porta lacinia. Duis viverra vulputate erat.
							Ut sagittis tristique orci. Mauris maximus, lectus
							at convallis sagittis, mi lacus ornare neque, ac
							malesuada purus urna hendrerit enim. In lobortis,
							lectus vel sollicitudin interdum, augue est luctus
							nisl, in bibendum nunc nibh eu massa.
						</p>
					</div>
				</div>
				<div className='post-description'>
					<ul className='d-flex align-items-center px-3 h-100'>
						<li className='mr-4'>
							<a href='/'>Author: Fred Armisen</a>
						</li>
						<li className='mr-4'>
							<a href='/'>Comment: 2</a>
						</li>
						<li className='mr-4'>
							<a href='/'>Tags: lorems</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
