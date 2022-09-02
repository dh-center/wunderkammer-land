import React, { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent";
import { CardsAPI } from "../api/cards";

const MapComponentContainer = () => {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    CardsAPI.getCardsByFirstOrganization().then((res) =>
      setCardsData(res.filter((card) => card.propertiesList.find((item) => item.propertyId === 9)))
    );
  }, []);

  const getPointData = (name, description) => {
    return {
      balloonContentHeader: name,
      balloonContentBody: description,
      clusterCaption: name,
      iconCaption: name
    };
  };

  const getPointOptions = () => {
    return {
      preset: "islands#violetIcon"
    };
  };

  return <MapComponent cardsData={cardsData} getPointData={getPointData} getPointOptions={getPointOptions} />;
};

export default MapComponentContainer;
