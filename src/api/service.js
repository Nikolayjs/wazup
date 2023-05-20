import axiosClassic from './axios';
import axios from 'axios';

let id;
let api;
export const getData = () => {
  const authData = localStorage.getItem('authData');
  if (authData) {
    id = JSON.parse(authData).id;
    api = JSON.parse(authData).api;
  } else {
    console.log('Ошибка');
  }
};

export async function getContacts() {
  getData();
  try {
    const response = await axiosClassic.get(`/waInstance${id}/getChats/${api}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function getChat(userId, count) {
  getData();
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
  getData();
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
    getData();
    const { data } = await axios.get(
      `https://api.green-api.com/waInstance${id}/getStateInstance/${api}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function sendMessage(chatId, message) {
  getData();
  try {
    const data = await axiosClassic.post(`/waInstance${id}/sendMessage/${api}`, {
      chatId: `${chatId}@c.us`,
      message: message,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateChat() {
  getData();
  try {
  } catch (error) {
    console.log(error);
  }
}
