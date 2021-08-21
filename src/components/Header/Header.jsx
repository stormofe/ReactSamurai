import { NavLink } from 'react-router-dom';
import n from './Header.module.css';
import logo from './../../assets/images/logo.svg';

const Header = (props) => {
	return <header className={n.header}>
		<img className={n.logo} alt="dgvd" src={logo}></img>

		<div >
			{props.isAuth
				? <div className={n.loginBlock}>{props.login} <button onClick={props.logout}>Log out</button></div>
				: <NavLink to={'/login'}>Login</NavLink>}
		</div>
	</header>
}

export default Header;