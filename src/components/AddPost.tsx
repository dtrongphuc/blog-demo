import React from 'react';
import moment from 'moment';

import { IPost } from './Types';

interface IProps {
	handleNewPost: (value: IPost) => void;
}

export default class AddPost extends React.Component<IProps> {
	private addForm: React.RefObject<HTMLFormElement>;
	// eslint-disable-next-line
	constructor(props: IProps) {
		super(props);
		this.addForm = React.createRef();
	}

	handleSubmit = (e: any): void => {
		e.preventDefault();
		const { handleNewPost } = this.props;
		const formValue = {
			title: e.target?.title?.value,
			author: e.target?.author?.value,
			body: e.target['post-body']?.value,
			url: e.target['image-url']?.value,
			time: moment().format('LL'),
		};
		handleNewPost(formValue);
		const form = this.addForm.current;
		form?.reset();
	};

	render() {
		return (
			<div className='add-post'>
				<h3 className='add-post__title'>
					add a post to the react blog
				</h3>
				<form
					onSubmit={this.handleSubmit}
					ref={this.addForm}
					className='add-post__form'
				>
					<div className='form-group'>
						<label htmlFor='title' className='form-label'>
							post title
						</label>
						<input
							required
							type='text'
							name='title'
							id='title'
							className='form-input'
							placeholder='Post Title'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='author' className='form-label'>
							author name
						</label>
						<input
							required
							type='text'
							name='author'
							id='author'
							className='form-input'
							placeholder='Author Name'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='post-body' className='form-label'>
							post body
						</label>
						<textarea
							required
							name='post-body'
							id='post-body'
							className='form-input'
							placeholder='Post Body'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='image-url' className='form-label'>
							image URL
						</label>
						<input
							required
							type='text'
							name='image-url'
							id='image-url'
							className='form-input'
							placeholder='The URL of the featured image for your post'
						/>
					</div>
					<div className='text-center'>
						<button className='btn submit'>Add Post</button>
					</div>
				</form>
			</div>
		);
	}
}
