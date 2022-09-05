import { LOCATION_PROPERTY_ID } from "../containers/InteractiveMapContainer";

import MapComponent from "./MapComponent";

const ANNOTATION_PROPERTY_ID = 5;
const DEFAULT_MAP_STATE_COORDINATES = [59.939099, 30.315877]; // Coordinates of St. Petersburg
const DEFAULT_MAP_ZOOM = 5;

const InteractiveMap = ({ cardsData }) => {
  const getCoordinatesFromCardData = (card) => {
    if (card?.propertiesList) {
      return JSON.parse(card.propertiesList.find((item) => item.propertyId === LOCATION_PROPERTY_ID).data)[0].location
        .coordinates;
    }
  };

  const getAnnotationFromCardData = (card) => {
    if (card?.propertiesList) {
      return JSON.parse(card.propertiesList.find((item) => item.propertyId === ANNOTATION_PROPERTY_ID).data);
    }
  };

  const getPointData = (pointItem) => {
    return {
      balloonContentHeader: pointItem.name,
      balloonContentBody: getAnnotationFromCardData(pointItem),
      clusterCaption: pointItem.name,
      iconCaption: pointItem.name
    };
  };

  const getPointOptions = () => {
    return {
      preset: "islands#violetIcon"
    };
  };

  return (
    <MapComponent
      data={cardsData}
      className="ynmap__wrap"
      defaultState={{ center: DEFAULT_MAP_STATE_COORDINATES, zoom: DEFAULT_MAP_ZOOM }}
      mapModules={["clusterer.addon.balloon"]}
      clustererOptions={{
        preset: "islands#invertedVioletClusterIcons",
        groupByCoordinates: false,
        clusterDisableClickZoom: true,
        clusterHideIconOnBalloonOpen: false,
        geoObjectHideIconOnBalloonOpen: false,
        showInAlphabeticalOrder: true
      }}
      placemarkOptions={getPointOptions()}
      placemarkModules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
      placemarkGeometry={getCoordinatesFromCardData}
      placemarkProperties={getPointData}
    />
  );
};

export default InteractiveMap;
