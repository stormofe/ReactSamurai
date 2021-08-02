import axios from "axios";

const instance = axios.create({
	withCredentials:true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "81972224-b51b-44a0-aa4a-195f4de2878f",
	}
})


export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		 return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			  .then(response => {
					return response.data;
			  });
	},
	follow(userId) {
		 return instance.post(`follow/${userId}`)
	},
	unfollow(userId) {
		 return instance.delete(`follow/${userId}`)
	},
	getProfile(userId) {
		console.warn('Old method. Use profileAPI')
		 return profileAPI.getProfile(userId);
	}
}

export const authAPI = {
	me() {
		 return instance.get(`auth/me`)
	}, 
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, {email, password, rememberMe});
	},
	logout() {
		return instance.delete(`auth/login`);
	},
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId);
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId);
	},
	updateStatus(status) {
		return instance.put(`profile/status/`, {status: status});
	}
}