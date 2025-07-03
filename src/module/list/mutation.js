export default {
  addList: async (_, { title }, { dataSources: { listAPI } }) => {
    try {
      const response = await listAPI.addList({ title });
      return response;
    } catch (error) {
      console.error('CATCH BLOCK : Mutation : addList =>', error);
      return error;
    }
  },

  updateList: async (_, { id, title }, { dataSources: { listAPI } }) => {
    try {
      const response = await listAPI.updateList({ id, title });
      return response;
    } catch (error) {
      console.error('CATCH BLOCK : Mutation : updateList =>', error);
      return error;
    }
  },

  deleteList: async (_, { id }, { dataSources: { listAPI } }) => {
    console.log("🚀 ~ deleteList: ~ id:", id)
    try {
      const response = await listAPI.deleteList({ id });
      return response;
    } catch (error) {
      console.error('CATCH BLOCK : Mutation : deleteList =>', error);
      return error;
    }
  },
};
