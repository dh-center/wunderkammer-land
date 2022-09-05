import { YMaps, Map, Clusterer, Placemark } from "@pbe/react-yandex-maps";

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
}) => {
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
