import React from 'react';
import n from './Users.module.css';
import Pagination from '../common/Pagination/Pagination';
import User from './User';
import Preloader from '../common/Preloader/Preloader';


let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, ...props }) => {

	return (
		<div>
			<Pagination currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />

			{
				props.users.map(u => <User
					user={u}
					key={u.id}
					followingInProgress={props.followingInProgress}
					unfollow={props.unfollow}
					follow={props.follow} />)
			}
		</div >
	)

}

export default Users;