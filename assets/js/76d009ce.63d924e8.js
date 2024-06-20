"use strict";(self.webpackChunkgeostyler_site=self.webpackChunkgeostyler_site||[]).push([[697],{1149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(4848),r=n(8453);const s={},o="Connect Data Parsers With The UI",i={id:"beginner-workshop/data-parser/parser-to-ui",title:"Connect Data Parsers With The UI",description:"To enable attributive styling, we have to add the data format we already read in to the Style component. This can be done",source:"@site/docs/beginner-workshop/data-parser/parser-to-ui.md",sourceDirName:"beginner-workshop/data-parser",slug:"/beginner-workshop/data-parser/parser-to-ui",permalink:"/geostyler-docusaurus/docs/beginner-workshop/data-parser/parser-to-ui",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Parsing WFS",permalink:"/geostyler-docusaurus/docs/beginner-workshop/data-parser/parse-wfs"},next:{title:"Summary",permalink:"/geostyler-docusaurus/docs/beginner-workshop/summary/"}},l={},c=[];function d(e){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"connect-data-parsers-with-the-ui",children:"Connect Data Parsers With The UI"}),"\n",(0,a.jsxs)(t.p,{children:["To enable attributive styling, we have to add the data format we already read in to the ",(0,a.jsx)(t.code,{children:"Style"})," component. This can be done\nvia the ",(0,a.jsx)(t.code,{children:"data"})," property."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"//...\n<Style\n    data={data}\n/>\n//...\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We can do the same for the ",(0,a.jsx)(t.code,{children:"PreviewMap"})," component, so that the preview also displays the data."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"//...\n<PreviewMap\n    style={style}\n    data={data}\n/>\n//...\n"})}),"\n",(0,a.jsx)(t.p,{children:"In our application this looks as follows:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import React, { useState, useEffect } from 'react';\nimport { Stroke, Fill, Style as OlStyle, Circle } from 'ol/style';\nimport { Style, PreviewMap } from 'geostyler';\nimport OlParser from 'geostyler-openlayers-parser';\nimport WfsParser from 'geostyler-wfs-parser';\n\nimport 'antd/dist/antd.css';\n\nconst olParser = new OlParser();\nconst wfsParser = new WfsParser();\n\nfunction App() {\n\n  const wfsParams = {\n    url: 'https://ows-demo.terrestris.de/geoserver/terrestris/ows',\n    version: '1.1.0',\n    typeName: 'terrestris:bundeslaender',\n    srsName: 'EPSG:4326'\n  };\n\n  const olStyle = new OlStyle({\n      stroke: new Stroke({\n          color: 'rgba(255, 255, 255, 1.0)',\n          width: 1\n      }),\n      fill: new Fill({\n          color: 'rgba(0, 0, 0, 1)'\n      }),\n      image: new Circle({\n          fill: new Fill({\n              color: 'rgba(255, 0, 0, 1.0)'\n          }),\n          radius: 5\n      })\n  });\n\n  const [style, setStyle] = useState();\n  const [data, setData] = useState();\n\n  useEffect(() => {\n    olParser.readStyle(olStyle)\n      .then((geostylerStyle) => {\n        setStyle(geostylerStyle.output);\n      });\n\n    wfsParser.readData(wfsParams)\n      .then((gsData) => {\n        setData(gsData);\n      });\n  }, []);\n\n  return (\n    <div>\n        <Style\n          style={style}\n          data={data}\n          compact={true}\n          onStyleChange={(newStyle) => {setStyle(newStyle)}}\n        />\n      {\n        style && (\n          <PreviewMap\n            style={style}\n            data={data}\n          />\n        )\n      }\n    </div>\n  );\n}\n\nexport default App;\n\n"})}),"\n",(0,a.jsxs)(t.p,{children:["By that, we activated data dependent features, such as classifications. The application should now look as follows\n(notice the enabled ",(0,a.jsx)(t.code,{children:"Classification"})," button):"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(7421).A+"",children:(0,a.jsx)(t.img,{alt:"Attributive Styling. We already created a classification here.",src:n(5613).A+"",width:"1410",height:"526"})})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7421:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/files/attributive-97205cf1bfe9f69ae84ff9a9ebc0e230.png"},5613:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/attributive-97205cf1bfe9f69ae84ff9a9ebc0e230.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);