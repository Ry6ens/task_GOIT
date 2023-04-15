import axios from "axios";

const instance = axios.create({
  baseURL: "https://643aab9c90cd4ba563fec65f.mockapi.io/",
});

export const getUsers = async () => {
  const { data } = await instance.get("api/users");
  return data;
};

export const addFollow = async (id, followers) => {
  const { data } = await instance.put(`api/users/${id}`, followers);
  return data;
};
