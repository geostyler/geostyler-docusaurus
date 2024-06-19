"use strict";(self.webpackChunkgeostyler_site=self.webpackChunkgeostyler_site||[]).push([[16],{2016:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(4848),o=t(8453);const s={},i="PreviewMap Component",a={id:"beginner-workshop/edit-ui/preview",title:"PreviewMap Component",description:"The PreviewMap component displays a created style in the map.",source:"@site/docs/beginner-workshop/edit-ui/preview.md",sourceDirName:"beginner-workshop/edit-ui",slug:"/beginner-workshop/edit-ui/preview",permalink:"/geostyler-site/docs/beginner-workshop/edit-ui/preview",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import GeoStyler Component",permalink:"/geostyler-site/docs/beginner-workshop/edit-ui/geostyler-component"},next:{title:"Connect Style Parsers with UI",permalink:"/geostyler-site/docs/beginner-workshop/edit-ui/parser-to-ui"}},p={},c=[];function l(e){const n={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"previewmap-component",children:"PreviewMap Component"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"PreviewMap"})," component displays a created style in the map."]}),"\n",(0,r.jsxs)(n.p,{children:["In order to do so, the component expects a ",(0,r.jsx)(n.code,{children:"style"})," property that contains the GeoStyler style to display."]}),"\n",(0,r.jsxs)(n.p,{children:["To get the style edited in the ",(0,r.jsx)(n.code,{children:"Style"})," component, we use the ",(0,r.jsx)(n.code,{children:"onStyleChange"})," method and store the style\nin a state-variable."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import React, { useState } from 'react';\nimport { Style } from 'geostyler';\n\nimport 'antd/dist/antd.css';\n\nfunction App() {\n\n  const [style, setStyle] = useState();\n\n  return (\n    <div>\n        <Style\n          compact={true}\n          onStyleChange={(newStyle) => {setStyle(newStyle)}}\n        />\n    </div>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Afterwards, we can import the ",(0,r.jsx)(n.code,{children:"PreviewMap"})," component"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { PreviewMap } from 'geostyler';\n"})}),"\n",(0,r.jsx)(n.p,{children:"and add it to the application"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import React, { useState } from 'react';\nimport { Style, PreviewMap } from 'geostyler';\n\nimport 'antd/dist/antd.css';\n\nfunction App() {\n\n  const [style, setStyle] = useState();\n\n  return (\n    <div>\n        <Style\n          compact={true}\n          onStyleChange={(newStyle) => {setStyle(newStyle)}}\n        />\n        {\n          style && (\n            <PreviewMap\n              style={style}\n            />\n          )\n        }\n    </div>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The application should now look like this:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(1647).A+"",children:(0,r.jsx)(n.img,{alt:"PreviewMap Component",src:t(8921).A+"",width:"1412",height:"494"})})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1647:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/previewMap-c73bd95b4bb9173d33e803e1d85fbf70.png"},8921:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/previewMap-c73bd95b4bb9173d33e803e1d85fbf70.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);