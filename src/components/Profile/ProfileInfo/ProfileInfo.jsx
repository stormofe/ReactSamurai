import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import n from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from './../../../assets/images/user.png'
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

	let [editMode, setEditMode] = useState(false);

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
			<div>

				<img className={n.photo} src={profile.photos.large || userPhoto}></img>

				{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

				<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

				{editMode
					? <ProfileDataForm profile={profile} />
					: <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />}

			</div>

		</div>
	)
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	return (
		<div className={n.descr}>

			<h1>{profile.fullName}</h1>
			<p>{profile.aboutMe}</p>

			{isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}

			<p>Ищу работу: {profile.lookingForAJob ? "да" : "нет"}</p>
			<p>{profile.lookingForAJob ? profile.lookingForAJobDescription : " "}</p>

			<div>
				<b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
					return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
				})}
			</div>
		</div>
	)
}

const Contact = ({ contactTitle, contactValue }) => {
	return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
