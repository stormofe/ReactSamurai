import React from 'react';
import n from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let post = props.posts.map(p => <Post message={p.message} like={p.like} />)

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
	}

	return (
		<div>
			<h2>Posts</h2>
			<div>
				<textarea ref={newPostElement}></textarea>
			</div>
			<div>
				<button onClick={addPost}>Add post</button>
			</div>
			{post}
		</div>
	)
}

export default MyPosts;