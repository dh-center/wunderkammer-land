import React from "react";
import { CardProperty } from "../api/cards";
import { PROPERTIES_NAMES, DATA_TYPES, CALENDAR_TYPE } from "../utils/constants";
// @ts-ignore
import GregorianDate from "ilib/lib/GregorianDate";
// @ts-ignore
import DateFmt from "ilib/lib/DateFmt";

type PropertiesParserProps = {
  property: CardProperty;
};

const PropertiesParser = ({ property }: PropertiesParserProps) => {
  const dateFormat = new DateFmt({ template: "dd.MM.yyyy", timezone: "GMT" });
  const dataType = property.propertyDataType;
  switch (dataType) {
    case DATA_TYPES.TEXT:
      return <p>{`${PROPERTIES_NAMES[property.propertyName]}: ${JSON.parse(property.data).value}`}</p>;
    case DATA_TYPES.RICH_TEXT:
      return (
        <p>
          {`${PROPERTIES_NAMES[property.propertyName]}: `}{" "}
          <span dangerouslySetInnerHTML={{ __html: property.data.slice(1, -1) }}></span>
        </p>
      );
    case DATA_TYPES.JULIAN_DATE:
      const data = JSON.parse(property.data)[0];
      if (data.calendar === CALENDAR_TYPE.STRING) {
        return (
          <p>
            {`${PROPERTIES_NAMES[property.propertyName]}: `}

            {data.startContext
              ? `${data.startContext} (${dateFormat.format(new GregorianDate({ julianday: data.startJD, timezone: "GMT" }))})`
              : dateFormat.format(new GregorianDate({ julianday: data.startJD, timezone: "GMT" }))}
            {data.endJD
              ? data.endContext
                ? `- ${data.endContext} (${dateFormat.format(new GregorianDate({ julianday: data.endJD, timezone: "GMT" }))})`
                : `- ${dateFormat.format(new GregorianDate({ julianday: data.endJD, timezone: "GMT" }))}`
              : ""}
          </p>
        );
      }
      return (
        <p>
          {`${PROPERTIES_NAMES[property.propertyName]}:`}{" "}
          {`${dateFormat.format(new GregorianDate({ julianday: data.startJD, timezone: "GMT" }))} ${
            data.endJD && "- " + dateFormat.format(new GregorianDate({ julianday: data.endJD, timezone: "GMT" }))
          }`}
        </p>
      );
    case DATA_TYPES.GEO_POINT:
      return (
        <div>{`${PROPERTIES_NAMES[property.propertyName]}: ${JSON.parse(property.data)[0].location.coordinates[0]}, ${
          JSON.parse(property.data)[0].location.coordinates[1]
        }`}</div>
      );
    case DATA_TYPES.MEDIA:
      return <div>в разработке</div>;
    default:
      return <div>Неизвестное свойство</div>;
  }
};

export default PropertiesParser;
