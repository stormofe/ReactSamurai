import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User';
import Preloader from '../common/Preloader/Preloader';
import n from './User.module.css';


const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, ...props }) => {
	//debugger
	if (!props.users) {
		return <Preloader />
	}

	return (
		<div>
			<Pagination currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
			<div className={n.wrapper}>
				{
					props.users.map(u => <User
						user={u}
						key={u.id}
						followingInProgress={props.followingInProgress}
						unfollow={props.unfollow}
						follow={props.follow} />)
				}
			</div>

		</div >
	)

	//return <Preloader />


}


export default Users;