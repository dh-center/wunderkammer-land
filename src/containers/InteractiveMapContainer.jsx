import React, { useEffect, useState } from "react";
import InteractiveMap from "../components/InteractiveMap";
import { CardsAPI } from "../api/cards";

export const LOCATION_PROPERTY_ID = 9;

const InteractiveMapContainer = () => {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    CardsAPI.getCardsByFirstOrganization().then((res) =>
      setCardsData(res.filter((card) => card.propertiesList.find((item) => item.propertyId === LOCATION_PROPERTY_ID)))
    );
  }, []);

  return <InteractiveMap cardsData={cardsData} />;
};

export default InteractiveMapContainer;
