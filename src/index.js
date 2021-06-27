
import './index.css';
import state, { subscribe } from './redux/state';
import reportWebVitals from './reportWebVitals';
import {addMessage, addPost, updateNewMessage, updateNewPostText} from './redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
		  <App state= {state} addPost={addPost} 
		  addMessage={addMessage}
		  updateNewPostText={updateNewPostText}
		  updateNewMessage={updateNewMessage}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
