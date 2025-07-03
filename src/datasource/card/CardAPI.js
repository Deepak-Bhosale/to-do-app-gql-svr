import { RESTDataSource } from '@apollo/datasource-rest';
import configurations from '../../config/configurations';

class CardAPI extends RESTDataSource {
  constructor({ Authorization }) {
    super();
    this.baseURL = `${configurations.serviceURl}`;
    this.Authorization = Authorization;
  }

  willSendRequest(_, request) {
    request.headers["Authorization"] = this.Authorization;
  }

  addCard = async ({ listId, title, description }) => {
    try {
      return await this.post(`${this.baseURL}/cards`, { body: { title, description, listId } });
    } catch (error) {
      console.log('CardAPI addCard error:', error);
      throw error;
    }
  };

  updateCard = async ({ id, title, description, listId }) => {
    console.log(`🚀 ~ CardAPI ~ updateCard= ~ { id, title, description, listId }:`, { id, title, description, listId })
    try {
      return await this.put(`${this.baseURL}/cards/${id}`, { body: { title, description, listId } });
    } catch (error) {
      console.log('CardAPI updateCard error:', error);
      throw error;
    }
  };

  deleteCard = async ({ id }) => {
    try {
      return await this.delete(`${this.baseURL}/cards/${id}`);
    } catch (error) {
      console.log('CardAPI deleteCard error:', error);
      throw error;
    }
  };
}

export default CardAPI;
