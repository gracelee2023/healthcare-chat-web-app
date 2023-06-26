import axios from "axios";

// connect to the server url: http://localhost:4000/
const USER_API = "http://localhost:4000/api/users";

// to turn on cookies to work with the axios
const request = axios.create({
  withCredentials: true,
});

export const getUsers = async () => {
  const response = await axios.get(USER_API);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(USER_API, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${USER_API}/${id}`);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await axios.put(`${USER_API}/${id}`, user);
  return response.data;
};
