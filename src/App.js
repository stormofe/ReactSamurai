import React from 'react';
import './App.css';
import { Route } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Switch, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Suspense } from 'react';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {

	catchAllUnhandledErrors = (promiseRejectionEvent) => {
		alert("some error");
		console.error(promiseRejectionEvent)
	}

	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
	}

	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
	}
	render() {  
		if(!this.props.initialized) {
			return <Preloader/>
		}

		return (
				
				<div className='app-wrapper'> 
					<HeaderContainer/>
					<Navbar/>
					<div className="app-wrapper-content">
						{/*<Switch>*/}
						
						<Suspense fallback={<Preloader/>}>
							<Route exact path="/dialogs" render={ () => <DialogsContainer/>}/>
							<Route exact path="/profile/:userId?" 
								render={() => <ProfileContainer />}/>
						</Suspense>

						<Route exact path ="/news" render={() => <News/>}/>
						<Route exact path="/music" render={() => <Music/>}/>
						<Route exact path="/settings" render={() => <Settings/>}/>
						<Route exact path="/users" render={() => <UsersContainer/>}/>
						<Route exact path="/login" render={() => <Login/>}/>
						{/*<Route path='*' render={() => <div>404 NOT FOUND</div>}/>*/}
						{/*</Switch>*/}

					</div>
					
				</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

let AppContainer = compose (
	withRouter,
	connect(mapStateToProps, {initializeApp})) (App);

let MainApp = (props) => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<AppContainer />
				</Provider>
			</BrowserRouter>
		</React.StrictMode>
	)
}

export default MainApp;