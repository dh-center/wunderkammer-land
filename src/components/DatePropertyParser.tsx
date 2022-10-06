import { CALENDAR_TYPE, PROPERTIES_NAMES } from "../utils/constants";
// @ts-ignore
import GregorianDate from "ilib/lib/GregorianDate";
// @ts-ignore
import JulianDate from "ilib/lib/JulianDate";
// @ts-ignore
import DateFmt from "ilib/lib/DateFmt";
import { PropertiesParserProps } from "./PropertiesParser";

const fromJDJulian = (julianday: number) => {
  const dateFormat = new DateFmt({ template: "dd.MM.yyyy", calendar: "julian", timezone: "GMT" });
  return dateFormat.format(new JulianDate({ julianday, timezone: "GMT" }));
};

const fromJDGregorian = (julianday: number) => {
  const dateFormat = new DateFmt({ template: "dd.MM.yyyy", timezone: "GMT" });
  return dateFormat.format(new GregorianDate({ julianday, timezone: "GMT" }));
};

const DatePropertyParser = ({ property }: PropertiesParserProps) => {
  const data = JSON.parse(property.data)[0];
  if (data.calendar === CALENDAR_TYPE.STRING) {
    return (
      <p>
        {`${PROPERTIES_NAMES[property.propertyName]}: `}

        {data.startContext ? `${data.startContext} (${fromJDGregorian(data.startJD)})` : fromJDGregorian(data.startJD)}
        {data.endJD
          ? data.endContext
            ? `- ${data.endContext} (${fromJDGregorian(data.endJD)})`
            : `- ${fromJDGregorian(data.endJD)}`
          : ""}
      </p>
    );
  } else if (data.calendar === CALENDAR_TYPE.JULIAN) {
    return (
      <p>
        {`${PROPERTIES_NAMES[property.propertyName]}:`}{" "}
        {`${fromJDJulian(data.startJD)} ${data.endJD && "- " + fromJDJulian(data.endJD)} (по старому стилю)`}
      </p>
    );
  }
  return (
    <p>
      {`${PROPERTIES_NAMES[property.propertyName]}:`}{" "}
      {`${fromJDGregorian(data.startJD)} ${data.endJD && "- " + fromJDGregorian(data.endJD)}`}
    </p>
  );
};

export default DatePropertyParser;
