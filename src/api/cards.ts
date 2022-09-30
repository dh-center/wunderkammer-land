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

type CardsResponse = {
  hasNextPage: boolean;
  results: CardData[];
  total: number;
};

export type Organization = {
  address: string;
  createdAt: string;
  id: number;
  name: string;
  updatedAt: string;
};

export const CardsAPI = {
  async getCardsByFirstOrganization() {
    const { data } = await API.get<CardsResponse>("/cards/by-first-organization");
    return data.results;
  },
  async getCardsList(params?: { offset: number; limit: number }) {
    const { data } = await API.get<CardsResponse>("cards/noAuth", { params });
    return data.results;
  },
  async getCardsByOrganizationId(orgId: number, params?: { offset: number; limit: number }) {
    const { data } = await API.get<CardsResponse>(`cards/by-org/${orgId}`, { params });
    return data.results;
  },

  async getCardsProperties() {
    const { data } = await API.get<Property[]>("/cards/properties");
    return data;
  },
  async getOrganizations() {
    const { data } = await API.get<Organization[]>("/organizations");
    return data;
  }
};
