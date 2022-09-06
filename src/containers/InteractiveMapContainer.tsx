import { useEffect, useState } from "react";
import InteractiveMap from "../components/InteractiveMap";
import { CardData, CardsAPI } from "../api/cards";

const InteractiveMapContainer = () => {
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  useEffect(() => {
    CardsAPI.getCardsByFirstOrganization().then((res) => setCardsData(res));
  }, []);

  return <InteractiveMap cardsData={cardsData} />;
};

export default InteractiveMapContainer;
