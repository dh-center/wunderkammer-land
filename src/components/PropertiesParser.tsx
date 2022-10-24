import { CardProperty } from "../api/cards";
import { DATA_TYPES } from "../utils/constants";
import GeoPropertyParser from "./GeoPropertyParser";
import DatePropertyParser from "./DatePropertyParser";
import TextPropertyParser from "./TextPropertyParser";
import RichTextPropertyParser from "./RichTextPropertyParser";
import MeasurementPropertyParser from "./MeasurementPropertyParser";

export type PropertiesParserProps = {
  property: CardProperty;
};

const PropertiesParser = ({ property }: PropertiesParserProps) => {
  const dataType = property.propertyDataType;
  switch (dataType) {
    case DATA_TYPES.TEXT:
      return <TextPropertyParser property={property} />;
    case DATA_TYPES.RICH_TEXT:
      return <RichTextPropertyParser property={property} />;
    case DATA_TYPES.JULIAN_DATE:
      return <DatePropertyParser property={property} />;
    case DATA_TYPES.GEO_POINT:
      return <GeoPropertyParser property={property} />;
    case DATA_TYPES.MEASURMENT:
      return <MeasurementPropertyParser property={property} />;
    case DATA_TYPES.FILE:
      return <div>Свойства типа FILE в разработке</div>;
    default:
      return <span>Неизвестное свойство</span>;
  }
};

export default PropertiesParser;
