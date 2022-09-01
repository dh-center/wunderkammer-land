import { useEffect, useState } from "react";
import { CardsAPI } from "../api/cards";
import CollectionViewer from "../components/CollectionViewer";

type Property = {
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

const CollectionViewerContainer = () => {
  const [cardsList, setCardsList] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    CardsAPI.getCardsProperties().then((propertiesList: Property[]) =>
      CardsAPI.getCardsByFirstOrganization().then((cardsList: CardData[]) => {
        // filling CardData properties names from all properties list array
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
