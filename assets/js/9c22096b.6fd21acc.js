"use strict";(self.webpackChunketracsdocs=self.webpackChunketracsdocs||[]).push([[2937],{3905:(A,e,t)=>{t.d(e,{Zo:()=>I,kt:()=>u});var n=t(7294);function g(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function s(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){g(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function a(A,e){if(null==A)return{};var t,n,g=function(A,e){if(null==A)return{};var t,n,g={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(g[t]=A[t]);return g}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(g[t]=A[t])}return g}var i=n.createContext({}),o=function(A){var e=n.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):s(s({},e),A)),t},I=function(A){var e=o(A.components);return n.createElement(i.Provider,{value:e},A.children)},l="mdxType",C={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(A,e){var t=A.components,g=A.mdxType,r=A.originalType,i=A.parentName,I=a(A,["components","mdxType","originalType","parentName"]),l=o(t),c=g,u=l["".concat(i,".").concat(c)]||l[c]||C[c]||r;return t?n.createElement(u,s(s({ref:e},I),{},{components:t})):n.createElement(u,s({ref:e},I))}));function u(A,e){var t=arguments,g=e&&e.mdxType;if("string"==typeof A||g){var r=t.length,s=new Array(r);s[0]=c;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=A,a[l]="string"==typeof A?A:g,s[1]=a;for(var o=2;o<r;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7202:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>C,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var n=t(7462),g=(t(7294),t(3905));const r={},s=void 0,a={unversionedId:"Administration/Managing Roles and Groups",id:"Administration/Managing Roles and Groups",title:"Managing Roles and Groups",description:"Managing Roles",source:"@site/docs/04-Administration/04-Managing Roles and Groups.md",sourceDirName:"04-Administration",slug:"/Administration/Managing Roles and Groups",permalink:"/etracsdocs/Administration/Managing Roles and Groups",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Managing Terminals",permalink:"/etracsdocs/Administration/Managing Terminals"},next:{title:"Entity Management",permalink:"/etracsdocs/Entity Management/Entity Management Overview"}},i={},o=[{value:"Managing Roles",id:"managing-roles",level:2},{value:"Managing Security Groups",id:"managing-security-groups",level:2},{value:"Managing Users",id:"managing-users",level:2},{value:"Creating User Accounts",id:"creating-user-accounts",level:3},{value:"Assigning Roles",id:"assigning-roles",level:3},{value:"lookup, type the domain in the User group textbox then press enter.",id:"lookup-type-the-domain-in-the-user-group-textbox-then-press-enter",level:2},{value:"Customizing Permissions",id:"customizing-permissions",level:3},{value:"Reset Passwords",id:"reset-passwords",level:3}],I={toc:o},l="wrapper";function C(A){let{components:e,...r}=A;return(0,g.kt)(l,(0,n.Z)({},I,r,{components:e,mdxType:"MDXLayout"}),(0,g.kt)("h2",{id:"managing-roles"},"Managing Roles"),(0,g.kt)("p",null,"Roles are already pre-defined in the system (as part of the developer\u2019s\ndesign) and there are already actions related to the role. To view these\nroles, click on User Groups from the main screen."),(0,g.kt)("p",null,(0,g.kt)("img",{alt:"image|512x397,100%",src:t(3358).Z,width:"744",height:"336"})),(0,g.kt)("p",null,"Figure 6 User Groups Management Screen"),(0,g.kt)("h2",{id:"managing-security-groups"},"Managing Security Groups"),(0,g.kt)("p",null,"Security group is new addition in version 2.5. This allows the user to\ncustomize permissions for a role. If the administrator is managing a\nhuge organization, this grouping is a time-saver for users having same\nroles but different access permissions. There are two ways to create\nsecurity groups. One is through User Groups and the other is by opening\nthe record of the user and adding security groups from there. To add\nsecurity groups, click the User Groups from the home screen. Select the\nDomain and select the appropriate role you want to create security\ngroups for. (See image above). On the right pane of the window, click\n",(0,g.kt)("strong",{parentName:"p"},"Manage Security Group"),". This should display the following screen:"),(0,g.kt)("p",null,(0,g.kt)("img",{alt:"image|512x397,100%",src:t(3987).Z,width:"516",height:"391"})),(0,g.kt)("p",null,"Figure 7 Security Group"),(0,g.kt)("p",null,"Click on Add and enter a name for your security group. Then on the\npermissions, check or uncheck which are applicable. Click on OK to save\nthis security group."),(0,g.kt)("h2",{id:"managing-users"},"Managing Users"),(0,g.kt)("p",null,"A ",(0,g.kt)("strong",{parentName:"p"},"user")," is someone who is registered in the system. A registered user\ncan then be referenced in any transactions and processes. To be able to\naccess the system a user must be authenticated and identified first by\nthe system. To achieve this, users must have a username and a password.\nThe username might be visible but the password must be private to the\nuser. Only the admin can create users. To create a user Click on the\nUsers in the home screen, then click New. This should display the screen\nbelow:"),(0,g.kt)("h3",{id:"creating-user-accounts"},"Creating User Accounts"),(0,g.kt)("p",null,(0,g.kt)("img",{alt:"image|512x397,100%",src:t(6733).Z,width:"423",height:"281"})),(0,g.kt)("p",null,"Figure 8 New User Screen"),(0,g.kt)("h2",{id:""}),(0,g.kt)("p",null,"The fields that are marked with ","*"," are required fields and must be\nfilled up. The user txn code is a special code that is used in some\nparts of the system. This is a short text, preferably a user\u2019s initial.\nIf specified, this will appear as prefix in some transactions so the\ntransaction will know it is prepared by that user. For example, in\ncollection remittance, a numbering system that includes the user name is\ngreat because they can imimagestely pinpoint that remittance is created\nby that user."),(0,g.kt)("p",null,"Username must be unique so duplicates cannot occur. Once completed, the\nuser info will be displayed."),(0,g.kt)("p",null,(0,g.kt)("img",{alt:"image|512x397,100%",src:t(565).Z,width:"595",height:"427"})),(0,g.kt)("p",null,"Figure 9 User Info screen"),(0,g.kt)("h3",{id:"assigning-roles"},"Assigning Roles"),(0,g.kt)("p",null,"To add a role for the user, open the user record as above and click on\nAdd button below."),(0,g.kt)("p",null,(0,g.kt)("img",{alt:"image|512x397,100%",src:t(1617).Z,width:"591",height:"311"})),(0,g.kt)("p",null,"Figure 10 Assign Roles Screen"),(0,g.kt)("p",null,"On clicking Add, the following screen will show prompting you to add a\nrole."),(0,g.kt)("p",null,(0,g.kt)("img",{alt:"image|512x397,100%",src:t(6441).Z,width:"504",height:"329"})),(0,g.kt)("p",null,"Figure 11 User group screen"),(0,g.kt)("p",null,(0,g.kt)("strong",{parentName:"p"},"User Name"),": refers to the name of the member."),(0,g.kt)("p",null,(0,g.kt)("strong",{parentName:"p"},"User Group"),": A combination of domain and role. "),(0,g.kt)("hr",null),(0,g.kt)("p",null,(0,g.kt)("strong",{parentName:"p"},"Tip:")," To speed up"),(0,g.kt)("h2",{id:"lookup-type-the-domain-in-the-user-group-textbox-then-press-enter"},"lookup, type the domain in the User group textbox then press enter."),(0,g.kt)("p",null,(0,g.kt)("strong",{parentName:"p"},"Security Group"),": If specified, only the allowed permissions will be\naccessible."),(0,g.kt)("p",null,(0,g.kt)("strong",{parentName:"p"},"Org Name:")," If specified, this authorization will only be applicable\nfor the organization specified."),(0,g.kt)("h3",{id:"customizing-permissions"},"Customizing Permissions"),(0,g.kt)("p",null,"ETRACS allows finer permission that is applicable on a per-user level.\nTo do this, open the assigned usergroup for the user, then on the\nsecurity group field, click the button to display the permissions for\nthe security group. See screen below"),(0,g.kt)("p",null,(0,g.kt)("img",{alt:"image|512x397,100%",src:t(7355).Z,width:"378",height:"129"})),(0,g.kt)("p",null,"Figure 12 Customizing permissions"),(0,g.kt)("h3",{id:"reset-passwords"},"Reset Passwords"),(0,g.kt)("p",null,"In case a user forgets their password, the admin is the only one who can\nreset it. ETRACS does not have a capability to recover passwords because\npassword encryption cannot be reversed. To do this, login as admin and\ngo to the Users Record, then click the Reset Password. Specify a\npassword and let the user know the password you specified. Ask the user\nto login using their username and password specified. If successful, the\nsystem will prompt the user to provide another password."))}C.isMDXComponent=!0},3358:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/image48-e07f6e6c9dac146d37466aec7dbaa0f5.png"},3987:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/image49-7bd814627219f5e7b056f80fccb0d41b.png"},6733:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"},565:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/image51-03b35ff0f978332ceade9e2c1d223d66.png"},1617:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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gADVjjmAAAIIICC/ANVO/hwTIQIIIIAA1Y45gAACCCAgvwDVTv4cEyECCCCAANWOOYAAAgggIL8A1U7+HBMhAggggADVjjmAAAIIICC/ANVO/hwTIQIIIIAA1Y45gAACCCAgvwDVTv4cEyECCCCAANWOOYAAAgggIL8A1U7+HBMhAggggADVjjmAAAIIICC/ANVO/hwTIQIIIIAA1Y45gAACCCAgvwDVTv4cEyECCCCAANWOOYAAAgggIL8A1U7+HBMhAggggADVjjmAAAIIICC/ANVO/hwTIQIIIIAA1Y45gAACCCAgvwDVTv4cEyECCCCAANWOOYAAAgggIL8A1U7+HBMhAggggADVjjmAAAIIICC/ANVO/hwTIQIIIIAA1Y45gAACCCAgvwDVTv4cEyECCCCAANWOOYAAAgggIL8A1U7+HBMhAggggADVjjmAAAIIICC/ANVO/hwTIQIIIIAA1Y45gAACCCAgvwDVTv4cEyECCCCAANWOOYAAAgggIL8A1U7+HBMhAggggADVjjmAAAIIICC/ANVO/hwTIQIIIIAA1Y45gAACCCAgvwDVTv4cEyECCCCAANWOOYAAAgggIL8A1U7+HBMhAggggADVjjmAAAIIICC/ANVO/hwTIQIIIIAA1Y45gAACCCAgvwDVTv4cEyECCCCAANWOOYAAAgggIL8A1U7+HBMhAggggADVjjmAAAIIICC/ANVO/hwTIQIIIIAA1Y45gAACCCAgvwDVTv4cEyECCCCAANWOOYAAAgggIL8A1U7+HBMhAggggADVjjmAAAIIICC/ANVO/hwTIQIIIIAA1Y45gAACCCAgvwDVTv4cEyECCCCAANWOOYAAAgggIL8A1U7+HBMhAggggADVjjmAAAIIICC/ANVO/hwTIQIIIIAA1Y45gAACCCAgvwDVTv4cEyECCCCAANWOOYAAAgggIL8A1U7+HBMhAggggADVjjmAAAIIICC/ANVO/hwTIQIIIIAA1Y45gAACCCAgvwDVTv4cEyECCCCAANWOOYAAAgggIL8A1U7+HBMhAggggADVjjmAAAIIICC/ANVO/hwTIQIIIIAA1Y45gAACCCAgvwDVTv4cEyECCCCAANWOOYAAAgggIL8A1U7+HBMhAggggADVjjmAAAIIICC/ANVO/hwTIQIIIIAA1Y45gAACCCAgvwDVTv4cEyEC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"},6441:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/image53-789633393681c143c5b0772c3979478a.png"},7355:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/image54-2f9031bc74c1c904eca6ac76ca9cf41e.png"}}]);