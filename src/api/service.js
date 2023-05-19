import axiosClassic from './axios';
import axios from 'axios';

let id;
let api;
const getData = () => {
  const data = localStorage.getItem('authData');
  console.log(data);
  id = JSON.parse(data).id;
  api = JSON.parse(data).api;
};
getData();
export async function getContacts() {
  try {
    const response = await axiosClassic.get(`/waInstance${id}/getChats/${api}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function getChat(userId, count) {
  try {
    const response = await axiosClassic.post(`/waInstance${id}/getChatHistory/${api}`, {
      chatId: userId,
      count: count,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getContactInfo(userId) {
  try {
    const response = await axios.post(
      `https://api.green-api.com/waInstance${id}/getContactInfo/${api}`,
      { chatId: `${userId}@c.us` }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getAuth(id, api) {
  try {
    const { data } = await axios.get(
      `https://api.green-api.com/waInstance${id}/getStateInstance/${api}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function sendMessage(chatId, message) {
  try {
    const data = await axiosClassic.post(`/waInstance${id}/sendMessage/${api}`, {
      chatId: `${chatId}@c.us`,
      message: message,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
