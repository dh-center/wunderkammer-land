import { YMaps, Map, Clusterer, Placemark } from "@pbe/react-yandex-maps";
import { CardData } from "../api/cards";

type MapProps = {
  data: any[];
  className: string;
  defaultState: {
    center: number[];
    zoom: number;
    controls?: string[];
  };
  mapModules: string[];
  clustererOptions: object;
  placemarkOptions: object;
  placemarkProperties: (data: CardData) => object;
  placemarkGeometry: (data: CardData) => number[];
  placemarkModules: string[];
};

const MapComponent = ({
  data,
  className,
  defaultState,
  mapModules,
  clustererOptions,
  placemarkOptions,
  placemarkProperties,
  placemarkGeometry,
  placemarkModules
}: MapProps) => {
  return (
    <YMaps>
      <div>
        <Map defaultState={defaultState} className={className} modules={mapModules}>
          <Clusterer options={clustererOptions}>
            {data.map((item) => (
              <Placemark
                key={item.id}
                geometry={placemarkGeometry(item)}
                properties={placemarkProperties(item)}
                options={placemarkOptions}
                modules={placemarkModules}
              />
            ))}
          </Clusterer>
        </Map>
      </div>
    </YMaps>
  );
};

export default MapComponent;
