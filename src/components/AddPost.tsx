import React from 'react';
import { IFormValue } from './Types';

export default function AddPost({
	handleNewPost,
}: {
	handleNewPost: (value: IFormValue) => void;
}) {
	const handleSubmit = (e: any): void => {
		e.preventDefault();
		const formValue = {
			title: e.target?.title?.value,
			author: e.target?.author?.value,
			body: e.target['post-body']?.value,
			url: e.target['image-url']?.value,
		};
		handleNewPost(formValue);
		console.log(formValue);
	};

	return (
		<div className='add-post'>
			<h3 className='add-post__title'>add a post to the react blog</h3>
			<form onSubmit={handleSubmit} className='add-post__form'>
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
