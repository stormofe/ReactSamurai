const FOLLOW = 'FOLLOW';
const UNFOLLOW  = 'UNFOLLOW';
const SET_USERS  = 'SET_USERS';



let initialState = {
	users: [
		//{ id: 1, photoUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', followed: true, fullName: 'Alex', status: 'I am a boss',
		// location: {city: 'Samara', country: 'Russia'}},
		// { id: 2, photoUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', followed: false, fullName: 'Max', status: 'I am a boss',
		// location: {city: 'Lviv', country: 'Ukraine'}},
		// { id: 3, photoUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', followed: true, fullName: 'Serg', status: 'I am a boss',
		// location: {city: 'London', country: 'UK'}},
	
	]
};

const usersReducer = (state = initialState, action) => {

	switch(action.type) {
		case FOLLOW: 
			return {
				...state, 
				users: state.users.map(u => {
					if(u.id === action.userId) {
						return {...u, followed: true}
					}
					return u;
				})
		}
		case UNFOLLOW: 
		return {
			...state, 
			users: state.users.map(u => {
				if(u.id === action.userId) {
					return {...u, followed: false}
				}
				return u;
			})
		}
		case SET_USERS: {
			return {...state, users: [...state.users, ...action.users]}
		}

		default: 
		return state;
	}
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;