import React from 'react';

const handleSubmit = (e: any): void => {};

export default function AddPost() {
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
					<input
						required
						type='text'
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
