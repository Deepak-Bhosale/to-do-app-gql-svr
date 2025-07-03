import { RESTDataSource } from '@apollo/datasource-rest';
import configurations from '../../config/configurations';

class ListAPI extends RESTDataSource {
  constructor({ Authorization }) {
    super();
    this.baseURL = `${configurations.serviceURl}/lists`;
    this.Authorization = Authorization;
  }

  willSendRequest(_, request) {
    request.headers["Authorization"] = this.Authorization;
  }

  getLists = async () => {
    try {
      return await this.get(`${this.baseURL}`);
    } catch (error) {
      console.log('ListAPI getLists error:', error);
      throw error;
    }
  };

  addList = async ({ title }) => {
    try {
      return await this.post(`${this.baseURL}`, { body: { title } });
    } catch (error) {
      console.log('ListAPI addList error:', error);
      throw error;
    }
  };

  updateList = async ({ id, title }) => {
    console.log(`🚀 ~ ListAPI ~ updateList= ~ { id, title }:`, { id, title })
    try {
      return await this.put(`${this.baseURL}/${id}`, { body: { title } });
    } catch (error) {
      console.log('ListAPI updateList error:', error);
      throw error;
    }
  };

  deleteList = async ({ id }) => {
    try {
      return await this.delete(`${this.baseURL}/${id}`);
    } catch (error) {
      console.log('ListAPI deleteList error:', error);
      throw error;
    }
  };
}

export default ListAPI;
