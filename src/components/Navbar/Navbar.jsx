import n from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {

	return <nav className={n.nav}>
		<div className={n.item}>
			<NavLink to='/profile' activeClassName={n.active}>Profile</NavLink>
		</div>
		<div className={n.item}>
			<NavLink to='/dialogs' activeClassName={n.active}>Dialogs</NavLink>
		</div>
		<div className={n.item}>
			<NavLink to='/news' activeClassName={n.active}>News</NavLink>
		</div>
		<div className={n.item}>
			<NavLink to='/music' activeClassName={n.active}>Music</NavLink>
		</div>
		<div className={n.item}>
			<NavLink to='/settings' activeClassName={n.active}>Settings</NavLink>
		</div>
		<div className={n.item}>
			<NavLink to='/users' activeClassName={n.active}>Users</NavLink>
		</div>
		{/*<Friends state={props.state.friends} />*/}
	</nav>
}

export default Navbar;