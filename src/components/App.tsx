import React from 'react';
import * as _ from 'lodash';

import Nav from './Nav';
import Banner from './Banner';
import Post from './Post';
import AddPost from './AddPost';

import { IPost, IPosts } from './Types';
import './App.scss';

interface IProps {}

// Functions
const handleScroll = (e: any): void => {
	let navbar = document.querySelector('.navbar');
	let y = window?.scrollY;
	if (y === 0) {
		navbar?.classList.remove('onScroll');
	} else {
		navbar?.classList.add('onScroll');
	}
};

const defaultPosts: Array<IPost> = [
	{
		title: 'Things Change',
		author: 'Winfield',
		body:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis id erat tempor dignissim. Ut vulputate, dui et feugiat gravida, risus ipsum euismod arcu, id mollis lorem lacus a leo. Sed convallis justo tellus, sit amet mattis ex facilisis at. Maecenas tincidunt urna laoreet euismod blandit. Vestibulum a arcu ut sem elementum auctor nec non lacus. Quisque efficitur sollicitudin libero eget sollicitudin. Integer pulvinar, dui lacinia ullamcorper ultricies, dolor sem scelerisque leo, id bibendum massa nibh nec libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis neque felis, lacinia sed libero non, malesuada interdum tortor. Pellentesque vel tortor leo. Duis convallis leo a purus ornare, eu vehicula leo dictum. Donec ut ante ut est condimentum lobortis. Nunc sollicitudin risus a risus interdum mollis.',
		url: 'https://picsum.photos/2500/1000',
		time: 'September 14, 2020',
	},
];

export default class App extends React.Component<IProps, IPosts> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			posts: defaultPosts,
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', _.throttle(handleScroll, 400), true);
	}

	UNSAFE_componentWillMount() {
		window.removeEventListener('scroll', () =>
			console.log('remove scroll event')
		);
	}

	handleNewPost = (value: IPost) => {
		const { posts } = this.state;
		this.setState({
			posts: posts?.concat(value),
		});
	};

	render() {
		const { posts } = this.state;
		return (
			<div className='app'>
				<Nav />
				<Banner />
				<div className='main'>
					<div className='container'>
						<div className='row'>
							<div className='col-12'>
								<AddPost handleNewPost={this.handleNewPost} />
							</div>
							{_.map(posts, (post, index) => {
								return (
									<div className='col-12' key={index}>
										<Post
											title={post.title}
											author={post.author}
											body={post.body}
											url={post.url}
											time={post.time}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
