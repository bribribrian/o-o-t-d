import axios from "axios";

// sign up is defined in session util (users post)

export const fetchUser = (userId) => {
  return axios.get(`/api/users/${userId}`);
};

export const updateUser = (user) => {
  return axios.patch(`/api/users/${user.id}`, user);
};

export const deleteUser = (userId) => {
  return axios.delete(`/api/users/${userId}`);
};

