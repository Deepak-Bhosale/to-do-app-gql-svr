import { RESTDataSource } from '@apollo/datasource-rest';
import configurations from '../../config/configurations';

class UserAPI extends RESTDataSource {
  constructor({ Authorization }) {
    super();
    this.baseURL = `${configurations.serviceURl}/user`;
    this.Authorization = Authorization;
  }

  willSendRequest(_, request) {
    request.headers["Authorization"] = this.Authorization;
  }

  getUserData = async (role) => {
    try {
      return await this.get(`${this.baseURL}/allUsersData`, { body: { role } });
    } catch (error) {
      console.log('CATCH BLOCK : DataSource : UserAPI : getUserData =>', error);
      throw error;
    }
  };

  getProfile = async () => {
    try {
      return await this.get(`${this.baseURL}/profile`);
    } catch (error) {
      console.log('CATCH BLOCK : DataSource : UserAPI : getProfile =>', error);
      throw error;
    }
  };

  registerUser = async (input) => {
    try {
      return await this.post(`${this.baseURL}/`,  { body: input });
    } catch (error) {
      console.log('CATCH BLOCK : DataSource : UserAPI : registeUser =>', error);
      throw error;
    }
  };

  loginUser = async (input) => {
    console.log("🚀 ~ UserAPI ~ loginUser= ~ input:", `${this.baseURL}/login`, input)
    try {
      return await this.post(`${this.baseURL}/login`, { body: input });
    } catch (error) {
      console.log('CATCH BLOCK : DataSource : UserAPI : loginUser =>', error);
      throw error;
    }
  };

  updateUser = async (input) => {
    try {
      const { originalId } = input;
      return await this.put(`${this.baseURL}/${originalId}`,  { body: input });
    } catch (error) {
      console.log('CATCH BLOCK : DataSource : UserAPI : updateUser =>', error);
      throw error;
    }
  };

  deleteUser = async (input) => {
    try {
      const { originalId } = input;
      return await this.delete(`${this.baseURL}/${originalId}`);
    } catch (error) {
      console.log('CATCH BLOCK : DataSource : UserAPI : deleteUser =>', error);
      throw error;
    }
  };
}

export default UserAPI;
