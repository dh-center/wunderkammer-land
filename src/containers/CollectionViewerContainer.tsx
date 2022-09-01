import React, { useEffect, useState } from "react";
import { CardsAPI } from "../api/cards";
import CollectionViewer from "../components/CollectionViewer";

type propertyTypeListItemType = {
  propertyId: number;
  name: string;
  isLink: boolean;
  dataType: {
    name: string;
  };
};

export type cardPropertyType = {
  id: number;
  data: string;
  propertyId: number;
  propertyName?: string;
};

export type cardType = {
  id: number;
  isFilled: true;
  name: string;
  organizationId: number;
  preventDefault: boolean;
  userId: number;
  propertiesList: cardPropertyType[];
  createdAt: string;
  updateAt: string;
};

const CollectionViewerContainer: React.FC = () => {
  const [cardsList, setCardsList] = useState<cardType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    CardsAPI.getCardsProperties().then((propertiesList: propertyTypeListItemType[]) =>
      CardsAPI.getCardsByFirstOrganization().then((cardsList: cardType[]) => {
        const patched = cardsList.map((card) => ({
          ...card,
          propertiesList: card.propertiesList.map((cardProperty) => ({
            ...cardProperty,
            propertyName: propertiesList.find(({ propertyId }) => propertyId === cardProperty.propertyId)?.name || ""
          }))
        }));
        setIsLoading(false);
        setCardsList(patched);
      })
    );
  }, []);

  return <CollectionViewer cards={cardsList} isLoading={isLoading} />;
};

export default CollectionViewerContainer;
