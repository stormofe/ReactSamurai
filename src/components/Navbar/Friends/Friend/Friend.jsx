import React from 'react';
import { NavLink } from 'react-router-dom';
import n from './Friend.module.css';

let Friend = (props) => {
	console.log(props);

	return (
		<div className={n.friend}>
			<img className={n.img} src={props.img}></img>
			<NavLink to="">{props.name}</NavLink>
		</div>
	)
}
export default Friend;