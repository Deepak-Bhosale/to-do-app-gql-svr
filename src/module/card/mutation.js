export default {
  addCard: async (_, { listId, title, description }, { dataSources: { cardAPI } }) => {
    try {
      const response = await cardAPI.addCard({ listId, title, description });
      return response;
    } catch (error) {
      console.error('CATCH BLOCK : Mutation : addCard =>', error);
      return error;
    }
  },

  updateCard: async (_, { id, title, description, listId }, { dataSources: { cardAPI } }) => {
    console.log("🚀 ~ updateCard: ~ id:", id)
    try {
      const response = await cardAPI.updateCard({ id, title, description, listId });
      return response;
    } catch (error) {
      console.error('CATCH BLOCK : Mutation : updateCard =>', error);
      return error;
    }
  },

  deleteCard: async (_, { id }, { dataSources: { cardAPI } }) => {
    try {
      const response = await cardAPI.deleteCard({ id });
      return response;
    } catch (error) {
      console.error('CATCH BLOCK : Mutation : deleteCard =>', error);
      return error;
    }
  },
};
