import React from 'react';
import './App.css';
import { Route } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';



const App = (props) => {
  return (
	  <BrowserRouter>
			<div className='app-wrapper'> 
				<HeaderContainer/>
				<Navbar/>
				<div className="app-wrapper-content">

					<Route exact path="/dialogs" render={ () => <DialogsContainer/>}/>
					<Route exact path="/profile/:userId?" 
						render={() => <ProfileContainer />}/>
					<Route exact path ="/news" render={() => <News/>}/>
					<Route exact path="/music" render={() => <Music/>}/>
					<Route exact path="/settings" render={() => <Settings/>}/>
					<Route exact path="/users" render={() => <UsersContainer/>}/>
					<Route exact path="/login" render={() => <Login/>}/>

				</div>
				
			</div>
		</BrowserRouter>
  );
}

export default App;
