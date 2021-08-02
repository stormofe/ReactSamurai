import { NavLink } from 'react-router-dom';
import n from './Header.module.css';

const Header = (props) => {
	return <header className={n.header}>
		<img className={n.logo} src='https://image.freepik.com/free-psd/text-effect-e-sports_23-2148924022.jpg' alt="dgvd"></img>

		<div className={n.loginBlock}>
			{props.isAuth
				? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
				: <NavLink to={'/login'}>Login</NavLink>}
		</div>
	</header>
}

export default Header;