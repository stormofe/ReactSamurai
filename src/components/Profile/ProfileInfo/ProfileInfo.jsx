import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';
import n from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from './../../../assets/images/user.png'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
	if (!profile) {
		return <Preloader />
	}
	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}

	}
	return (
		<div>
			{/*<div><img className={n.img} src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt=""></img></div>*/}
			<div className={n.flex}>
				<img className={n.photo} src={profile.photos.large || userPhoto}></img>
				{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
				<div className={n.descr}>
					<h1>{profile.fullName}</h1>
					<p>{profile.aboutMe}</p>
					<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
					<p>Ищу работу: {profile.lookingForAJobDescription}</p>

					<ul>
						<li><NavLink to=''>{profile.contacts.facebook}</NavLink></li>
						<li>{profile.contacts.vk}</li>
						<li>{profile.contacts.twitter}</li>
						<li>{profile.contacts.instagram}</li>
						<li>{profile.contacts.github}</li>
					</ul>
					<a href="">Link</a>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;
