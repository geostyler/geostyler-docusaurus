"use strict";(self.webpackChunkgeostyler_site=self.webpackChunkgeostyler_site||[]).push([[587],{3570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=n(4848),r=n(8453);const s={},i="Import GeoStyler Component",c={id:"beginner-workshop/edit-ui/geostyler-component",title:"Import GeoStyler Component",description:"In order to use GeoStyler components, we have to import these via the import statement.",source:"@site/docs/beginner-workshop/edit-ui/geostyler-component.md",sourceDirName:"beginner-workshop/edit-ui",slug:"/beginner-workshop/edit-ui/geostyler-component",permalink:"/geostyler-docusaurus/docs/beginner-workshop/edit-ui/geostyler-component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using UI Components",permalink:"/geostyler-docusaurus/docs/beginner-workshop/edit-ui/"},next:{title:"PreviewMap Component",permalink:"/geostyler-docusaurus/docs/beginner-workshop/edit-ui/preview"}},a={},p=[];function l(e){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"import-geostyler-component",children:"Import GeoStyler Component"}),"\n",(0,o.jsxs)(t.p,{children:["In order to use GeoStyler components, we have to import these via the ",(0,o.jsx)(t.code,{children:"import"})," statement.\nAfterwards, we are able to use the respective component within our application."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { Component } from 'geostyler';\n\n...\n\nreturn (\n    <div>\n        <Component property1=... />\n    </div>\n)\n"})}),"\n",(0,o.jsxs)(t.p,{children:["It is very important to take a look at the ",(0,o.jsx)(t.a,{href:"https://geostyler.github.io/geostyler/latest/index.html",children:"documentation"})," of the used component and\nto set the properties accordingly."]}),"\n",(0,o.jsxs)(t.p,{children:["We will use the ",(0,o.jsx)(t.code,{children:"Style"})," component in this chapter. The documentation of the component can be\nfound ",(0,o.jsx)(t.a,{href:"https://geostyler.github.io/geostyler/latest/index.html#/Components/Style/Style",children:"here"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Style"})," component does not have any required properties, so we can directly use it in our application."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import React from 'react';\nimport { Style } from 'geostyler';\n\nimport 'antd/dist/antd.css';\n\nfunction App() {\n  return (\n    <div>\n        <Style />\n    </div>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Afterwards you should be able to see the ",(0,o.jsx)(t.code,{children:"Style"})," component and you should be able to edit styles."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(959).A+"",children:(0,o.jsx)(t.img,{alt:"Style Component",src:n(7503).A+"",width:"1912",height:"529"})})}),"\n",(0,o.jsxs)(t.p,{children:["Through the ",(0,o.jsx)(t.code,{children:"compact"})," property, we are able to use the tabular layout of the ",(0,o.jsx)(t.code,{children:"Style"})," component. To do so, we just have to\nset the property ",(0,o.jsx)(t.code,{children:"compact"})," to ",(0,o.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"<Style\n  compact={true}\n/>\n"})}),"\n",(0,o.jsx)(t.p,{children:"Your application should now look as follows:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(4066).A+"",children:(0,o.jsx)(t.img,{alt:"Compact Layout",src:n(8146).A+"",width:"1912",height:"236"})})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},959:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/files/basic-2a398f4aa2792f146f17dc508e5440be.png"},4066:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/files/compact-2483b2439a0ac1b5ae6d3b2d167a8f14.png"},7503:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/basic-2a398f4aa2792f146f17dc508e5440be.png"},8146:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/compact-2483b2439a0ac1b5ae6d3b2d167a8f14.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(6540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);