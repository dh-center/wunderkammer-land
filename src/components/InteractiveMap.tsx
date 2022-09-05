import { CardData } from "../api/cards";
import { LOCATION_PROPERTY_ID } from "../containers/InteractiveMapContainer";

import MapComponent from "./MapComponent";

const ANNOTATION_PROPERTY_ID = 5;
const DEFAULT_MAP_STATE_COORDINATES = [59.939099, 30.315877]; // Coordinates of St. Petersburg
const DEFAULT_MAP_ZOOM = 5;

type InteractiveMapProps = {
  cardsData: CardData[];
};

const InteractiveMap = ({ cardsData }: InteractiveMapProps) => {
  const getCoordinatesFromCardData = (card: CardData) => {
    if (card?.propertiesList) {
      const locationProperty = card.propertiesList.find((item) => item.propertyId === LOCATION_PROPERTY_ID);
      if (locationProperty) {
        return JSON.parse(locationProperty.data)[0].location.coordinates;
      }
    }
  };

  const getAnnotationFromCardData = (card: CardData) => {
    if (card?.propertiesList) {
      const annotationProperty = card.propertiesList.find((item) => item.propertyId === ANNOTATION_PROPERTY_ID);
      if (annotationProperty) {
        return JSON.parse(annotationProperty.data);
      }
    }
  };

  const getPointData = (pointItem: CardData) => {
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
