import { YMaps, Map, Clusterer, Placemark } from "@pbe/react-yandex-maps";
import { AnyObject, YMapsModules } from "@pbe/react-yandex-maps/typings/util/typing";

type MapProps = {
  points: {
    key: number;
    geometry: [number, number];
    properties:
      | {
          balloonContentHeader?: string;
          balloonContentBody?: string;
          iconCaption?: string;
        }
      | AnyObject;
  }[];
  className?: string;
  defaultState?: ymaps.IMapState;
  mapModules?: YMapsModules;
  placemarkOptions?: ymaps.IPlacemarkOptions;
  placemarkModules?: string[];
  withClusterer?: boolean;
  clustererOptions?: ymaps.IObjectManagerOptions;
};

const MapComponent = ({
  points,
  className,
  defaultState,
  mapModules,
  clustererOptions,
  placemarkOptions,
  placemarkModules,
  withClusterer = false
}: MapProps) => {
  
  const getPlacemarks = () =>
    points.map((point) => <Placemark {...point} options={placemarkOptions} modules={placemarkModules} />);

  return (
    <YMaps>
      <Map defaultState={defaultState} className={className} modules={mapModules}>
        {withClusterer ? <Clusterer options={clustererOptions}>{getPlacemarks()}</Clusterer> : getPlacemarks()}
      </Map>
    </YMaps>
  );
};

export default MapComponent;
