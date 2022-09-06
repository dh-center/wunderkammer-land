import { useMemo } from "react";
import { CardData } from "../api/cards";
import MapComponent from "./MapComponent";

const LOCATION_PROPERTY_ID = 9;
const ANNOTATION_PROPERTY_ID = 5;
const PETERSBURG_COORDINATES = [59.939099, 30.315877];
const DEFAULT_MAP_ZOOM = 5;

type CardProps = CardData["propertiesList"];

type SorokaGeometry = {
  location: {
    type: "Point";
    coordinates: [number, number];
  };
  name: string;
}[];

const hasLocationProperty = (cardProps: CardProps) => cardProps.some(({ propertyId }) => propertyId === LOCATION_PROPERTY_ID);

const getCoordinatesFromCardData = (cardProps: CardProps) => {
  const locationProperty = cardProps.find((item) => item.propertyId === LOCATION_PROPERTY_ID);
  const rawGeometry = JSON.parse(locationProperty!.data) as SorokaGeometry;
  return rawGeometry[0].location.coordinates;
};

const getAnnotationFromCardData = (props: CardProps) => {
  const annotationProperty = props.find((item) => item.propertyId === ANNOTATION_PROPERTY_ID);
  if (annotationProperty) {
    return JSON.parse(annotationProperty.data);
  }

  return "-";
};

const InteractiveMap = ({ cardsData }: { cardsData: CardData[] }) => {
  const geoPoints = useMemo(
    () =>
      cardsData
        .filter(({ propertiesList }) => !!propertiesList && hasLocationProperty(propertiesList))
        .map(({ id, propertiesList, name }) => {
          return {
            key: id,
            geometry: getCoordinatesFromCardData(propertiesList),
            properties: {
              balloonContentHeader: name,
              balloonContentBody: getAnnotationFromCardData(propertiesList),
              iconCaption: name
            }
          };
        }),
    [cardsData]
  );

  return (
    <MapComponent
      points={geoPoints}
      className="ynmap__wrap"
      defaultState={{ center: PETERSBURG_COORDINATES, zoom: DEFAULT_MAP_ZOOM }}
      mapModules={["clusterer.addon.balloon"]}
      clustererOptions={{
        preset: "islands#invertedVioletClusterIcons",
        groupByCoordinates: false,
        clusterDisableClickZoom: true,
        clusterHideIconOnBalloonOpen: true,
        showInAlphabeticalOrder: true
      }}
      placemarkOptions={{
        preset: "islands#violetIcon"
      }}
      placemarkModules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
      withClusterer={true}
    />
  );
};

export default InteractiveMap;
