import { PROPERTIES_NAMES } from "../utils/constants";
import { PropertiesParserProps } from "./PropertiesParser";

const RichTextPropertyParser = ({ property }: PropertiesParserProps) => {
  return (
    <p>
      {`${PROPERTIES_NAMES[property.propertyName]}: `}
      <span dangerouslySetInnerHTML={{ __html: property.data }}></span>
    </p>
  );
};

export default RichTextPropertyParser;
