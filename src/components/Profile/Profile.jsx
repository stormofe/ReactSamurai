import n from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

	return <div className={n.content}>

		<ProfileInfo
			profile={props.profile}
			status={props.status}
			updateStatus={props.updateStatus}
			isOwner={props.isOwner}
			savePhoto={props.savePhoto} />
		<MyPostsContainer />
	</div>
}

export default Profile;