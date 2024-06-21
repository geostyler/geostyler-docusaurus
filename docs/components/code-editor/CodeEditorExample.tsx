import React from 'react';
import { CodeEditor } from 'geostyler';
import SldStyleParser from 'geostyler-sld-parser';
import QgisStyleParser from "geostyler-qgis-parser";
import MapboxStyleParser from 'geostyler-mapbox-parser';
import { Style as GsStyle } from 'geostyler-style';

const CodeEditorExample = () => {
  const sldParser = new SldStyleParser({
    sldVersion: "1.1.0",
    builderOptions: {
      format: true,
    },
  });
  const qgisStyleParser = new QgisStyleParser();
  const mapboxStyleParser = new MapboxStyleParser({ pretty: true });
  const style: GsStyle = {
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
  };

  return (
    <div style={{ height: "300px" }}>
      <CodeEditor
        style={style}
        parsers={[sldParser, qgisStyleParser, mapboxStyleParser]}
        defaultParser={sldParser}
        showSaveButton={true}
        showCopyButton={true}
      />
    </div>
  );
}

export default CodeEditorExample;
