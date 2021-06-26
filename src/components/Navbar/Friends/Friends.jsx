import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import n from './Friends.module.css';


let Friends = (props) => {
	let friend = props.state.map(f => <Friend img={f.img} name={f.name} />)
	return (
		<div>
			<h2>Friends</h2>
			<div className={n.friends}>
				{friend}
			</div>

		</div>
	)
}

export default Friends;