import { PROPERTIES_NAMES } from "../utils/constants";
import { PropertiesParserProps } from "./PropertiesParser";

const GeoPropertyParser = ({ property }: PropertiesParserProps) => {
  return (
    <div>{`${PROPERTIES_NAMES[property.propertyName]}: ${JSON.parse(property.data)[0].location.coordinates[0]}, ${
      JSON.parse(property.data)[0].location.coordinates[1]
    }`}</div>
  );
};

export default GeoPropertyParser;
