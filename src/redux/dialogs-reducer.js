const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
	newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_NEW_MESSAGE: 
			return {
				...state,
				newMessageText: action.newMess
			};
			
		case ADD_MESSAGE: 
			let newMessage = {
			id: 4,
			message: state.newMessageText,
			};
			return {
				...state,
				newMessageText: '',
				messages: [...state.messages, newMessage]
			};
	
		default:
			return state;
	}
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = (text) =>
	({ type: UPDATE_NEW_MESSAGE, newMess: text });

export default dialogsReducer;