import React from "react";

import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";

const MapComponent = ({ cardsData, getPointOptions, getPointData }) => {
  return (
    <YMaps>
      <div>
        <Map
          defaultState={{ center: [59.939099, 30.315877], zoom: 5 }}
          className="ynmap__wrap"
          modules={["clusterer.addon.balloon"]}
        >
          <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
              clusterDisableClickZoom: true,
              clusterHideIconOnBalloonOpen: false,
              geoObjectHideIconOnBalloonOpen: false,
              showInAlphabeticalOrder: true
            }}
          >
            {cardsData.map((card) => (
              <Placemark
                key={card.id}
                geometry={JSON.parse(card.propertiesList.find((item) => item.propertyId === 9).data)[0].location.coordinates}
                properties={getPointData(card.name, JSON.parse(card.propertiesList.find((item) => item.propertyId === 5).data))}
                options={getPointOptions()}
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              />
            ))}
          </Clusterer>
        </Map>
      </div>
    </YMaps>
  );
};

export default MapComponent;
