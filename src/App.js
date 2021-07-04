import React from 'react';
import './App.css';
import { Route } from 'react-router';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  return (
	  <BrowserRouter>
			<div className='app-wrapper'> 
				<Header/>
				<Navbar/>
				<div className="app-wrapper-content">
					
					{/*<Route exact path="/dialogs" component={Dialogs}/>
					<Route exact path="/profile" component={Profile}/>
					<Route exact path ="/news" component={News}/>
					<Route exact path="/music" component={Music}/>
					<Route exact path="/settings" component={Settings}/>*/}

					<Route exact path="/dialogs" render={ () => <DialogsContainer store={props.store} />}/>
					<Route exact path="/profile" 
						render={() => <Profile 
							store={props.store}/>}/>
					<Route exact path ="/news" render={() => <News/>}/>
					<Route exact path="/music" render={() => <Music/>}/>
					<Route exact path="/settings" render={() => <Settings/>}/>
				</div>
				
			</div>
		</BrowserRouter>
  );
}

export default App;
