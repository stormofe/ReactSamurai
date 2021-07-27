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
		 return instance.get(`profile/` + userId);
	}
}

export const authAPI = {
	me() {
		 return instance.get(`auth/me`)
	}
}