import React from 'react';
import n from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let post = props.posts.map(p => <Post message={p.message} like={p.like} />)

	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div>
			<h2>Posts</h2>
			<div>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
			</div>
			<div>
				<button onClick={addPost}>Add post</button>
			</div>
			{post}
		</div>
	)
}

export default MyPosts;