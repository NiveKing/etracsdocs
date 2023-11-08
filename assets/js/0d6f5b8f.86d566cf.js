"use strict";(self.webpackChunketracsdocs=self.webpackChunketracsdocs||[]).push([[744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},o="Entity Management",s={unversionedId:"Chapter-5/Entity Management Overview",id:"Chapter-5/Entity Management Overview",title:"Entity Management",description:"Overview",source:"@site/docs/Chapter-5/01-Entity Management Overview.md",sourceDirName:"Chapter-5",slug:"/Chapter-5/Entity Management Overview",permalink:"/etracsdocs/Chapter-5/Entity Management Overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Navigation",permalink:"/etracsdocs/Chapter-4/Navigation"},next:{title:"Managing Individual Entity",permalink:"/etracsdocs/Chapter-5/Managing Individual Entity"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Roles and Permissions",id:"roles-and-permissions",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"entity-management"},"Entity Management"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Entity refers to a person, group or organization that conducts business\nwith the local government. In previous versions of ETRACS, this was\ntermed as the payer or taxpayer. Entity can be an owner of properties or\nbusiness therefore it is widely used throughout the system. Because of\nthis, there is high probability of duplicate entries that is why careful\nconsideration has to be done to ensure that this will be minimized.\nThere are three types of entities as follows:"),(0,i.kt)("u",null,"**Individual**")," - refers to an individual person. This is the most common entity in the system.",(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("u",null,"Juridical"))," - refers to an organization or non-individual\nentity. This can be classified further as Corporation, Cooperative,\nAssociation, Religious, Foundation or Partnership."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("u",null,"Multiple"))," - refers to a group combination of individual or\nsometimes juridical entities. It is represented as a single unit entity.\nFor example in real property there are sometime multiple owners for a\nsingle property. Since there can only be one owner associated with a\nproperty, we create a multiple entity composing individual entities and\nuse this instead as the owner of the property."),(0,i.kt)("h2",{id:"roles-and-permissions"},"Roles and Permissions"),(0,i.kt)("p",null,"The following are the roles needed for this module."),(0,i.kt)("p",null,"DOMAIN: ENTITY"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ROLE"),(0,i.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MASTER"),(0,i.kt)("td",{parentName:"tr",align:null},"allows user to add, edit remove entities")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"APPROVER"),(0,i.kt)("td",{parentName:"tr",align:null},"allows user the capability to override adding duplicate entries")))),(0,i.kt)("p",null,"To configure this role further, check or uncheck the necessary\npermissions or customize it by adding security groups."))}d.isMDXComponent=!0}}]);