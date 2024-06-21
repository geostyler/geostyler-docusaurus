import { useState } from "react";
import { CardStyle, GeoStylerContext } from "geostyler";
import { Style } from "geostyler-style";

const CardStyleExample = () => {
  const myContext = {};

  const [style, setStyle] = useState<Style>({
    name: "Demo Style",
    rules: [
      {
        name: "Rule 1",
        symbolizers: [
          {
            kind: "Mark",
            wellKnownName: "circle",
          },
        ],
      },
    ],
  });

  return (
    <GeoStylerContext.Provider value={myContext}>
      <CardStyle style={style} onStyleChange={setStyle} />
    </GeoStylerContext.Provider>
  );
};

export default CardStyleExample;
