import n from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div>
			<div><img className={n.img} src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt=""></img></div>
			<div className={n.flex}>
				<img className={n.photo} src="https://images.unsplash.com/photo-1551180452-45cc5da51c3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"></img>
				<div className={n.descr}>
					<h1>Name</h1>
					<p>lorem</p>
					<p>asdfg</p>
					<p>sdfg</p>
					<a href="">asdetgdhdh</a>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;
