import API from "./config";

export const CardsAPI = {
  async getCardsByFirstOrganization() {
    try {
      const result = await API.get("/cards/by-first-organization");
      return result.data.results;
    } catch (err) {
      console.error(err);
    }
  },

  async getCardsProperties() {
    try {
      const result = await API.get("/cards/properties");
      return result.data;
    } catch (err) {
      console.error(err);
    }
  }
};
