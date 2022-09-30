import { useEffect, useState } from "react";
import { CardsAPI, CardData, Property } from "../api/cards";
import CollectionViewer from "../components/CollectionViewer";

const getPatchedCards = (cardsList: CardData[], propertiesList: Property[]) => {
  // filling CardData properties names from all properties list array
  const patched = cardsList.map((card) => ({
    ...card,
    propertiesList: card.propertiesList.map((cardProperty) => ({
      ...cardProperty,
      propertyName: propertiesList.find(({ propertyId }) => propertyId === cardProperty.propertyId)?.name || ""
    }))
  }));
  return patched;
};

const CollectionViewerContainer = () => {
  const [filterValue, setFilterValue] = useState<number>(0);
  const [organizations, setOrganizations] = useState<{ id: number; name: string }[]>([]);
  const [cardsList, setCardsList] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    CardsAPI.getOrganizations().then((res) =>
      setOrganizations(
        res.map((item) => ({
          id: item.id,
          name: item.name
        }))
      )
    );
  }, []);

  useEffect(() => {
    CardsAPI.getCardsProperties().then((propertiesList) => {
      if (filterValue === 0) {
        CardsAPI.getCardsList().then((cardsList) => {
          setIsLoading(false);
          setCardsList(getPatchedCards(cardsList, propertiesList));
        });
      } else {
        CardsAPI.getCardsByOrganizationId(filterValue).then((cardsList) => {
          setIsLoading(false);
          setCardsList(getPatchedCards(cardsList, propertiesList));
        });
      }
    });
  }, [filterValue]);

  return (
    <CollectionViewer cards={cardsList} organizations={organizations} isLoading={isLoading} setFilterValue={setFilterValue} />
  );
};

export default CollectionViewerContainer;
