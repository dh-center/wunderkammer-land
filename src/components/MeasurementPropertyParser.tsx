import React from "react";
import { PROPERTIES_NAMES } from "../utils/constants";
import { PropertiesParserProps } from "./PropertiesParser";
const UNITS = ["mm", "cm", "m"] as const;

const FORMS = {
  line: "1D",
  plane: "2D",
  cube: "3D",
  cylinder: "Цилиндрические",
  sphere: "Сферические"
};

const MEASURES = {
  w: "Ш",
  h: "В",
  l: "Д",
  d: "D"
} as const;

type MeasurementsValue = {
  form: keyof typeof FORMS;
  unit: typeof UNITS[number];
  w?: number;
  h?: number;
  l?: number;
  d?: number;
  note?: string;
};

const MeasurementPropertyParser = ({ property }: PropertiesParserProps) => {
  const data = JSON.parse(property.data) as MeasurementsValue;

  const unit = { m: "метрах", cm: "сантиметрах", mm: "миллиметрах" }[data.unit];
  const form = FORMS[data.form];
  const note = data.note ? <>(Примечание: {data.note})</> : null;

  const measuresCombined = (Object.keys(MEASURES) as (keyof typeof MEASURES)[])
    .map((key) => {
      if (data[key]) {
        return (
          <React.Fragment key={key}>
            {MEASURES[key]}
            {data[key]}{" "}
          </React.Fragment>
        );
      }
      return null;
    })
    .filter(Boolean);

  return (
    <p>
      {PROPERTIES_NAMES[property.propertyName]}: {form} измерения в {unit}: {measuresCombined} {note}
    </p>
  );
};

export default MeasurementPropertyParser;
