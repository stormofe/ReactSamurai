import n from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

	return <div className={n.content}>

		<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
		<MyPostsContainer />
	</div>
}

export default Profile;