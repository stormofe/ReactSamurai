import profileReducer, { addPostActionCreator, deletePost } from "../profile-reducer";

let state = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', like: 5 },
		{ id: 2, message: 'My first post', like: 10 },
	
	]
};

test('new post should be added', () => {
	let action = addPostActionCreator("ibbbjnkll");
	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(3);

});

test('new post should be ibbbjnkll', () => {
	let action = addPostActionCreator("ibbbjnkll");
	let newState = profileReducer(state, action);

	expect(newState.posts[2].message).toBe("ibbbjnkll");

});

test('after deleting length of messages should be decrement', () => {
	let action = deletePost(1);
	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(1);

});