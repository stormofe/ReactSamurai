import React, { useState } from 'react';
import n from './Pagination.module.css'
import cn from "classnames";

let Pagination = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

	let pagesCount = Math.ceil(totalItemsCount / pageSize);

	let pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div className={n.pagination}>
			{portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>prev</button>}

			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map((p) => {
					return <span className={cn({
						[n.selectedPage]: currentPage === p
					}, n.pageNumber)}
						key={p}
						onClick={(e) => {
							onPageChanged(p);
						}}>{p}</span>
				})}
			{portionCount > portionNumber &&
				<button onClick={() => { setPortionNumber(portionNumber + 1) }}>next</button>}
		</div>
	)
}

export default Pagination;