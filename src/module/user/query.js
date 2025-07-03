export default {
  getUserData: async (_, { role }, { dataSources: { userAPI } }) => {
    try {
      const respose = await userAPI.getUserData(role);
      return respose?.data;
    } catch (error) {
      console.log('CATCH BLOCK : Module : User : Query : getUserData =>', error);
      return error;
    }
  },
  getProfile: async (_, __, { dataSources: { userAPI } }) => {
    try {
      const respose = await userAPI.getProfile();
      return respose?.data;
    } catch (error) {
      console.log('CATCH BLOCK : Module : User : Query : getProfile =>', error);
      return error;
    }
  },
};
