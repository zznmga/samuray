import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '0e955090-a758-4ef0-ab2a-c4fec1b9c301',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((result) => result.data);
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`).then((result) => result.data);
  },

  follow(id) {
    return instance.post(`follow/${id}`).then((result) => result.data);
  },

  getProfileById(userId) {
    return profileAPI.getProfileById(userId);
  },
};

export const profileAPI = {
  getProfileById(userId) {
    return instance.get(`profile/${userId}`);
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },

  updateStatus(status) {
    return instance
      .put(`profile/status/`, { status })
      .then((result) => result.data);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((result) => result.data);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
