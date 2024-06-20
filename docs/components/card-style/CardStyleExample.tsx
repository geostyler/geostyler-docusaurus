import { useState } from "react";
import { CardStyle, GeoStylerContext } from "geostyler";
import { Style } from "geostyler-style";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

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

  const { siteConfig } = useDocusaurusContext();

  return (
    <GeoStylerContext.Provider value={myContext}>
      <CardStyle style={style} onStyleChange={setStyle} />
    </GeoStylerContext.Provider>
  );
};

export default CardStyleExample;
