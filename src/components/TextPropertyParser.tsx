import { PROPERTIES_NAMES } from "../utils/constants";
import { PropertiesParserProps } from "./PropertiesParser";

const TextPropertyParser = ({ property }: PropertiesParserProps) => {
  return <p>{`${PROPERTIES_NAMES[property.propertyName]}: ${property.data}`}</p>;
};

export default TextPropertyParser;
