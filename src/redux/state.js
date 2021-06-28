const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT  = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you?', like: 5 },
				{ id: 2, message: 'My first post', like: 10 },
			
			],
			newPostText: 'gvhjokplkkn'
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Alex' },
				{ id: 2, name: 'Serg' },
				{ id: 3, name: 'Ann' },
				{ id: 4, name: 'Lena' },
				{ id: 5, name: 'Dima' }
			],
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, id.' },
				{ id: 3, message: 'Doloremque quas accusantium aperiam, nobis, alias nam similique porro ea, perspiciatis neque minus cupiditate mollitia odio! Mollitia, voluptate! Iusto eius consequuntur consectetur.' },
			], 
			newMessageText: 'New mess'
		},
		navbar: {
			friends: [
				{img: "https://images.unsplash.com/photo-1613005798967-632017e477c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", name: 'Alex'},
				{img: "https://images.unsplash.com/photo-1613250432977-ffdc9944c03e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", name: 'Lera'},
				{img: "https://images.unsplash.com/photo-1614595145313-c7e1765be457?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=359&q=80", name: 'Valera'}
			]
		}
	
	},	
	_callSubscriber () {
		console.log('dfg');
	},

	getState() {
		return this._state;
	},
	subscribe (observer) {
		this._callSubscriber = observer; //* observer - наблюдатель. ПАТТЕРН
	},

	dispatch(action) { // {type: 'ADD-POST'}

		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				like: 0
			};
		
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === ADD_MESSAGE) {
			let newMessage = {
				id: 4,
				message: this._state.dialogsPage.newMessageText,
			};
		
			this._state.dialogsPage.messages.push(newMessage);
			this._state.dialogsPage.newMessageText = '';
			this._callSubscriber(this._state);

		} else if (action.type === UPDATE_NEW_MESSAGE) {
			this._state.dialogsPage.newMessageText = action.newMess;
			this._callSubscriber(this._state);
		}
	}
}

export const addPostActionCreator = () => ({type: ADD_POST});
//export const updateNewPostTextActionCreator = (text) => {
//	return { type: UPDATE_NEW_POST_TEXT, newText: text };
//}
export const updateNewPostTextActionCreator = (text) => 
({type: UPDATE_NEW_POST_TEXT, newText: text});


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = (text) =>
	({ type: UPDATE_NEW_MESSAGE, newMess: text });


export default store;
window.store = store;
//STORE - OOP



