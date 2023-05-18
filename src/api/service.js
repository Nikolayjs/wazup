import axiosClassic from './axios';
import axios from 'axios';
export default class Service {
  static async getContacts() {
    try {
      const response = await axiosClassic.get(
        '/waInstance1101821273/getChats/08448a7597bd4ec58e15836c49e7575e9d8a53300508491aae'
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async getChat(userId, count) {
    try {
      const response = await axiosClassic.post(
        '/waInstance1101821273/getChatHistory/08448a7597bd4ec58e15836c49e7575e9d8a53300508491aae',
        { chatId: userId, count: count }
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  static async getContactInfo(userId) {
    try {
      const response = await axios.post(
        `https://api.green-api.com/waInstance1101821273/getContactInfo/08448a7597bd4ec58e15836c49e7575e9d8a53300508491aae`,
        { chatId: `${userId}@c.us` }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
