import React from 'react';
import n from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


let Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div>
			<div className={n.pagination}>
				{pages.map(p => {
					return <span className={props.currentPage === p && n.selectedPage}
						onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
				})}
			</div>
			{
				props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<NavLink to={'/profile/' + u.id}>
								<img src={u.photos.small != null ? u.photos.small : userPhoto} className={n.userPhoto} />
							</NavLink>
						</div>
						<div>

							{u.followed
								? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
									debugger
									props.toggleFollowingProgress(true, u.id);
									axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
										withCredentials: true,
										headers: {
											"API-KEY": "81972224-b51b-44a0-aa4a-195f4de2878f"
										}
									})
										.then(response => {
											if (response.data.resultCode === 0) {
												props.unfollow(u.id);
											}
											props.toggleFollowingProgress(false, u.id);
										});

								}}>Unfollow</button>
								: <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
									props.toggleFollowingProgress(true, u.id);
									axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
										withCredentials: true,
										headers: {
											"API-KEY": "81972224-b51b-44a0-aa4a-195f4de2878f"
										}
									})
										.then(response => {
											if (response.data.resultCode === 0) {
												props.follow(u.id);
											}
											props.toggleFollowingProgress(false, u.id);
										});

								}}>Follow</button>}

						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{'u.location.country'}</div>
							<div>{'u.location.city'}</div>
						</span>
					</span>
				</div>)
			}
		</div>
	)
}

export default Users;