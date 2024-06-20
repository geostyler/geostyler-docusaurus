"use strict";(self.webpackChunkgeostyler_site=self.webpackChunkgeostyler_site||[]).push([[575],{1989:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=n(4848),t=n(8453);const a={},o="Parsing WFS",l={id:"beginner-workshop/data-parser/parse-wfs",title:"Parsing WFS",description:"In contrast to Style Parsers, Data Parsers can only read data formats, not write them. This means, we can only",source:"@site/docs/beginner-workshop/data-parser/parse-wfs.md",sourceDirName:"beginner-workshop/data-parser",slug:"/beginner-workshop/data-parser/parse-wfs",permalink:"/geostyler-docusaurus/docs/beginner-workshop/data-parser/parse-wfs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Parsers",permalink:"/geostyler-docusaurus/docs/beginner-workshop/data-parser/"},next:{title:"Connect Data Parsers With The UI",permalink:"/geostyler-docusaurus/docs/beginner-workshop/data-parser/parser-to-ui"}},i={},c=[];function d(e){const r={code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"parsing-wfs",children:"Parsing WFS"}),"\n",(0,s.jsx)(r.p,{children:"In contrast to Style Parsers, Data Parsers can only read data formats, not write them. This means, we can only\nconvert existing data formats into the GeoStyler data format, not the other way around."}),"\n",(0,s.jsxs)(r.p,{children:["Therefore, Data Parses only have one single method - ",(0,s.jsx)(r.code,{children:"readData"}),". This method is the same for all Data Parsers and\nalways returns a GeoStyler data object."]}),"\n",(0,s.jsx)(r.p,{children:"In this chapter, we will show how to parse WFS. The parsed WFS will then be used in the next chapter to enable\nattributive styling in the UI."}),"\n",(0,s.jsxs)(r.p,{children:["Since we already installed the ",(0,s.jsx)(r.code,{children:"geostyler-wfs-parser"})," via"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"npm i geostyler-wfs-parser\n"})}),"\n",(0,s.jsx)(r.p,{children:"in a previous chapter, we just have to import it via"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import WfsParser from 'geostyler-wfs-parser';\n"})}),"\n",(0,s.jsx)(r.p,{children:"and instantiate it."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const wfsParser = new WfsParser();\n"})}),"\n",(0,s.jsx)(r.p,{children:"Afterwards, a WFS can be read via"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"wfsParser.readData(wfsParams)\n    .then((geostylerData) => {\n        // Run your actions with the read WFS here, e.g.\n        console.log(JSON.stringify(geostylerData));\n    });\n"})}),"\n",(0,s.jsxs)(r.p,{children:["The variable ",(0,s.jsx)(r.code,{children:"wfsParams"})," expects at least the properties ",(0,s.jsx)(r.code,{children:"url"}),", ",(0,s.jsx)(r.code,{children:"version"}),", ",(0,s.jsx)(r.code,{children:"typeName"})," and ",(0,s.jsx)(r.code,{children:"srs"})," of a WFS."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const wfsParams = {\n    url: 'https://ows-demo.terrestris.de/geoserver/terrestris/ows',\n    version: '1.1.0',\n    typeName: 'terrestris:bundeslaender',\n    srsName: 'EPSG:4326'\n};\n"})}),"\n",(0,s.jsx)(r.p,{children:"In our application, we can use the WFS Data Parser as follows:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import React, { useState, useEffect } from 'react';\nimport { Stroke, Fill, Style as OlStyle, Circle } from 'ol/style';\nimport { Style, PreviewMap } from 'geostyler';\nimport OlParser from 'geostyler-openlayers-parser';\nimport WfsParser from 'geostyler-wfs-parser';\n\nimport 'antd/dist/antd.css';\n\nconst olParser = new OlParser();\nconst wfsParser = new WfsParser();\n\nfunction App() {\n\n  const wfsParams = {\n    url: 'https://ows-demo.terrestris.de/geoserver/terrestris/ows',\n    version: '1.1.0',\n    typeName: 'terrestris:bundeslaender',\n    srsName: 'EPSG:4326'\n  };\n\n  const olStyle = new OlStyle({\n      stroke: new Stroke({\n          color: 'rgba(255, 255, 255, 1.0)',\n          width: 1\n      }),\n      fill: new Fill({\n          color: 'rgba(0, 0, 0, 1)'\n      }),\n      image: new Circle({\n          fill: new Fill({\n              color: 'rgba(255, 0, 0, 1.0)'\n          }),\n          radius: 5\n      })\n  });\n\n  const [style, setStyle] = useState();\n  const [data, setData] = useState();\n\n  useEffect(() => {\n    olParser.readStyle(olStyle)\n      .then((geostylerStyle) => {\n        setStyle(geostylerStyle.output);\n      });\n\n    wfsParser.readData(wfsParams)\n      .then((gsData) => {\n        setData(gsData);\n      });\n  }, []);\n\n  return (\n    <div>\n        <Style\n          style={style}\n          compact={true}\n          onStyleChange={(newStyle) => {setStyle(newStyle)}}\n        />\n      {\n        style && (\n          <PreviewMap\n            style={style}\n          />\n        )\n      }\n    </div>\n  );\n}\n\nexport default App;\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var s=n(6540);const t={},a=s.createContext(t);function o(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);