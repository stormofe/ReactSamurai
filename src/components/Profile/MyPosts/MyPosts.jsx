import React from 'react';
import { Field, reduxForm } from 'redux-form';
import n from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

	let post = props.posts.map(p => <Post message={p.message} like={p.like} />)

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	}

	return (
		<div>
			<h2>Posts</h2>
			<AddNewPostReduxForm onSubmit={onAddPost} />

			{post}
		</div>
	)
}

let AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field name={"newPostText"} placeholder={"Add text"} component={"textarea"} />
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

const AddNewPostReduxForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;