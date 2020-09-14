import React from 'react';

export default function Post(props: {
	title: string;
	author: string;
	body: string;
	url: string;
	time: string | Date;
}) {
	const { title, author, body, url, time } = props;

	return (
		<div className='col-12'>
			<div className='post'>
				<div className='post-header'>
					<h1>{title}</h1>
					<span>{time}</span>
				</div>
				<div className='post-body'>
					<img
						className='post-body__img'
						src={url}
						alt='post-img'
					></img>
					<div className='post-body__text'>
						<p>{body}</p>
					</div>
				</div>
				<div className='post-description'>
					<ul className='d-flex align-items-center px-3 h-100'>
						<li className='mr-4'>
							<a href='/'>Author: {author}</a>
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
