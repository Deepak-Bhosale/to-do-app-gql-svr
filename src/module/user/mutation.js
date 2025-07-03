import pubsub from '../pubsub';
import { ADDUSER, DELETEUSER, UPDATEUSER } from '../../libs/constant';

export default {
  registerUser: async (_, { input }, { dataSources: { userAPI } }) => {
    try {
      const data = await userAPI.registerUser(input);
      pubsub.publish(ADDUSER, {
        userAdded: data?.data,
      });
      return data;
    } catch (error) {
      console.log('CATCH BLOCK : Module : User : Mutation : registerUser =>', error);
      return error;
    }
  },
  
  updateUser: async (_, { input }, { dataSources: { userAPI } }) => {
    try {
      const response = await userAPI.updateUser(input);
      pubsub.publish(UPDATEUSER, {
        userUpdated: response?.data,
      });
      return response;
    } catch (error) {
      console.log('CATCH BLOCK : Module : User : Mutation : updateUser =>', error);
    }
  },

  deleteUser: async (_, { input }, { dataSources: { userAPI } }) => {
    try {
      const response = await userAPI.deleteUser(input);
      pubsub.publish(DELETEUSER, {
        userDelete: response?.data,
      });
      return response;
    } catch (error) {
      console.log('CATCH BLOCK : Module : User : Mutation : deleteUser =>', error);
    }
  },

  login: async (_, { input }, { dataSources: { userAPI } }) => {
    try {
      const { email, password } = input;
      return await userAPI.loginUser({ email, password });
    } catch (error) {
      console.log('CATCH BLOCK : Module : User : Mutation : login =>', error);
      return error;
    }
  },
};
