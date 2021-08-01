import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

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

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field name={"newPostText"} placeholder={"Add text"} component={Textarea} validate={[required, maxLength10]} />
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

const AddNewPostReduxForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;