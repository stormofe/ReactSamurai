import React from 'react';
import n from './User.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';


let User = ({ user, followingInProgress, unfollow, follow }) => {

	return (
		<div>
			<div className={n.user}>
				<div>
					<NavLink to={'/profile/' + user.id}>
						<img className={n.userPhotoSmall} src={user.photos.small != null ? user.photos.small : userPhoto} />
					</NavLink>
				</div>
				<div>

					{user.followed
						? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
							unfollow(user.id);

						}}>Unfollow</button>
						: <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
							follow(user.id);

						}}>Follow</button>}

				</div>
			</div>
			<div>
				<span>
					<div>{user.name}</div>
					<div>{user.status}</div>
				</span>
				<span>
					<div>{'u.location.country'}</div>
					<div>{'u.location.city'}</div>
				</span>
			</div>

		</div >
	)
}

export default User;