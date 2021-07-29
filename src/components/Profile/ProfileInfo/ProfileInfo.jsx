import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';
import n from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			{/*<div><img className={n.img} src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt=""></img></div>*/}
			<div className={n.flex}>
				<img className={n.photo} src={props.profile.photos.large}></img>

				<div className={n.descr}>
					<h1>{props.profile.fullName}</h1>
					<p>{props.profile.aboutMe}</p>
					<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
					<p>Ищу работу: {props.profile.lookingForAJobDescription}</p>

					<ul>
						<li><NavLink to=''>{props.profile.contacts.facebook}</NavLink></li>
						<li>{props.profile.contacts.vk}</li>
						<li>{props.profile.contacts.twitter}</li>
						<li>{props.profile.contacts.instagram}</li>
						<li>{props.profile.contacts.github}</li>
					</ul>
					<a href="">Link</a>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;
