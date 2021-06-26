import React from 'react';
import { NavLink } from 'react-router-dom';
import n from './../Dialogs.module.css';

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className={n.dialog + ' ' + n.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}


export default DialogItem;