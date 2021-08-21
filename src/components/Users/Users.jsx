import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User';
import Preloader from '../common/Preloader/Preloader';


const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, ...props }) => {
	//debugger
	if (!props.users) {
		return <Preloader />
	}

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

	//return <Preloader />


}


export default Users;