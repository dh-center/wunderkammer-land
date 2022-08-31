import React, { useEffect, useState } from "react";
import { CardsAPI } from "../api/cards";
import CollectionViewer from "../components/CollectionViewer";

const CollectionViewerContainer = () => {
  const [cardsList, setCardsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    CardsAPI.getCardsProperties().then((propertiesList) =>
      CardsAPI.getCardsByFirstOrganization().then((cardsList) => {
        const patched = cardsList.map((card) => ({
          ...card,
          propertiesList: card.propertiesList.map((cardProperty) => ({
            ...cardProperty,
            propertyName: propertiesList.find(
              ({ propertyId }) => propertyId === cardProperty.propertyId
            )?.name,
          })),
        }));

        setIsLoading(false);
        setCardsList(patched);
      })
    );
  }, []);

  return <CollectionViewer cards={cardsList} isLoading={isLoading} />;
};

export default CollectionViewerContainer;
