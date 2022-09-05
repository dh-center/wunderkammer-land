import API from "./config";

export type Property = {
  propertyId: number;
  name: string;
  isLink: boolean;
  dataType: {
    name: string;
  };
};

type CardProperty = {
  id: number;
  data: string;
  propertyId: number;
  propertyName?: string;
};

export type CardData = {
  id: number;
  isFilled: true;
  name: string;
  organizationId: number;
  preventDefault: boolean;
  userId: number;
  propertiesList: CardProperty[];
  createdAt: string;
  updateAt: string;
};

type CardsByFirstOrganizationResponse = {
  hasNextPage: boolean;
  results: CardData[];
  total: number;
};

export const CardsAPI = {
  async getCardsByFirstOrganization() {
    const { data } = await API.get<CardsByFirstOrganizationResponse>("/cards/by-first-organization");
    return data.results;
  },

  async getCardsProperties() {
    const { data } = await API.get<Property[]>("/cards/properties");
    return data;
  }
};
