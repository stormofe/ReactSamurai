let rerenderEntireTree = (state) => {

}


let state = {
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

}

export const addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		like: 0
	};

	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export const addMessage = () => {
	let newMessage = {
		id: 4,
		message: state.dialogsPage.newMessageText,
	};

	state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.newMessageText = '';
	rerenderEntireTree(state);
}

export const updateNewMessage = (newMess) => {
	state.dialogsPage.newMessageText = newMess;
	rerenderEntireTree(state);
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer; //* observer - наблюдатель. ПАТТЕРН
}


export default state;

//STORE - OOP



