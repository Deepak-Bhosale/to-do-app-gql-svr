export default {
  lists: async (_, __, { dataSources: { listAPI } }) => {
    try {
      const response = await listAPI.getLists();
      return response;
    } catch (error) {
      console.error('CATCH BLOCK : Query : lists =>', error);
      return error;
    }
  },
};
