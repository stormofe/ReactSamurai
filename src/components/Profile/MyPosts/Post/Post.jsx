import n from './Post.module.css';

let Post = (props) => {
	return (
		<div>
			<img src=""></img>
			<p>{props.message}</p>
			<div>
				<span> {props.like} like</span>
			</div>
		</div>
	)
}

export default Post;