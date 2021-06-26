import n from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let post = props.posts.map(p => <Post message={p.message} like={p.like} />)
	return (
		<div>
			<h2>Posts</h2>
			<form action="">
				<input type="textarea"></input>
				<button>Send</button>
			</form>
			{post}
		</div>
	)
}

export default MyPosts;