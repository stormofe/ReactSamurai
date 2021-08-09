import React from 'react';
import n from './Pagination.module.css'

let Pagination = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div className={n.pagination}>
			{pages.map(p => {
				return <span className={props.currentPage === p && n.selectedPage}
					onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
			})}
		</div>
	)
}

export default Pagination;