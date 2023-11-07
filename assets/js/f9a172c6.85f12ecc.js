"use strict";(self.webpackChunketracsdocs=self.webpackChunketracsdocs||[]).push([[7863],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=u(n),c=l,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[d]="string"==typeof t?t:l,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8798:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={},i=void 0,s={unversionedId:"Chapter-8/Rule Management",id:"Chapter-8/Rule Management",title:"Rule Management",description:"Rule Management",source:"@site/docs/Chapter-8/03-Rule Management.md",sourceDirName:"Chapter-8",slug:"/Chapter-8/Rule Management",permalink:"/etracsdocs/Chapter-8/Rule Management",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Master Data Management",permalink:"/etracsdocs/Chapter-8/Master Data Management"},next:{title:"Real Property Assessment",permalink:"/etracsdocs/Chapter-9/Real Property Assesment Overview"}},o={},u=[{value:"Rule Management",id:"rule-management",level:2},{value:"Overview",id:"overview",level:3},{value:"Facts",id:"facts",level:3},{value:"Actions",id:"actions",level:3},{value:"Rules",id:"rules",level:3},{value:"BP Info",id:"bp-info",level:4},{value:"Authoring Rules",id:"authoring-rules",level:3},{value:"Billing Rules",id:"billing-rules",level:4},{value:"Transactions",id:"transactions",level:2},{value:"Application",id:"application",level:3},{value:"Assessment",id:"assessment",level:3},{value:"Collection",id:"collection",level:3},{value:"Issuance of Permit",id:"issuance-of-permit",level:3},{value:"Reports",id:"reports",level:3}],p={toc:u},d="wrapper";function m(t){let{components:e,...r}=t;return(0,l.kt)(d,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"rule-management"},"Rule Management"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"There are 3 rule sets in the Business Permits Module as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BP Info Rules"),(0,l.kt)("td",{parentName:"tr",align:null},"This set of rules are executed during the initial gathering of information performed by the Business Information (for some this is the Mayors Office). This usually asks for information required in the Unified Form like no. of employees by gender, business size, etc. This also includes determining the business requirements based on the information given. Information gathered here can also be used in the assessment.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Assessment Rules"),(0,l.kt)("td",{parentName:"tr",align:null},"This rule set is executed during assessment. This includes asking for additional information to be used in assessing taxes and fees, the calculation of taxes and fees and mapping to certain accounts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Billing Rules"),(0,l.kt)("td",{parentName:"tr",align:null},"This rule set is executed during preparation of bills to include or exclude surcharges and penalties. This also is executed during receiving of payments (during collection) as it will always compute based on the date.")))),(0,l.kt)("h3",{id:"facts"},"Facts"),(0,l.kt)("p",null,"The following are the common facts used in the system. Some facts are\nshared while others are only used for a certain ruleset."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"FACT"),(0,l.kt)("th",{parentName:"tr",align:null},"APPLICABLE RULESETS"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BPApplication"),(0,l.kt)("td",{parentName:"tr",align:null},"All"),(0,l.kt)("td",{parentName:"tr",align:null},"The application info. Contains type of assessment (NEW,RENEW,RETRE,AMEND). Only 1 application is normally evaluated at a time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Line of Business"),(0,l.kt)("td",{parentName:"tr",align:null},"All"),(0,l.kt)("td",{parentName:"tr",align:null},"Contains line of business including classification and its attributes. Could be 1 or many depending on the application. Also contains assessmenttype because sometimes new lines of business are applied during renewal as additional.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Business Info"),(0,l.kt)("td",{parentName:"tr",align:null},"All"),(0,l.kt)("td",{parentName:"tr",align:null},"Business Information that could be referenced for the application or for each line of business")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Business Location"),(0,l.kt)("td",{parentName:"tr",align:null},"All"),(0,l.kt)("td",{parentName:"tr",align:null},"References the address of the business. The address could be local or non-local, rented or within government property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Business Tax Account"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpassessment"),(0,l.kt)("td",{parentName:"tr",align:null},"Represents the business tax account and the amount computed. Derived fact from the compute business tax action")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Regulatory Fee Account"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpassessment"),(0,l.kt)("td",{parentName:"tr",align:null},"Represents the regulatory fee account and the amount computed. Derived fact from the compute regulatory fee action")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Other Charge Account"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpassessment"),(0,l.kt)("td",{parentName:"tr",align:null},"Represents the other charge account and the amount computed. Derived fact from the compute other charge action")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sys Variable"),(0,l.kt)("td",{parentName:"tr",align:null},"All"),(0,l.kt)("td",{parentName:"tr",align:null},"A derived variable used for creating dynamic variables that can be used by the system.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Qtr Date"),(0,l.kt)("td",{parentName:"tr",align:null},"bpblling"),(0,l.kt)("td",{parentName:"tr",align:null},"Created when split qtr rule action is run. It creates 4 QtrDate facts representing 4 quarters of the year and their deadlines.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Current Date"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpblling"),(0,l.kt)("td",{parentName:"tr",align:null},"Represents the current date. Used for comparing dates in billing")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Other Charge Bill Item"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpblling"),(0,l.kt)("td",{parentName:"tr",align:null},"Derived fact from the system generated during billing which represents other charges.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Regulatory Fee Bill Item"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpblling"),(0,l.kt)("td",{parentName:"tr",align:null},"Derived fact from the system generated during billing which represents regulatory fee transactions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Business Tax Bill Item"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpblling"),(0,l.kt)("td",{parentName:"tr",align:null},"Derived fact from the system generated during billing which represents business taxes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bill Date"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpblling"),(0,l.kt)("td",{parentName:"tr",align:null},"Represents the bill date. Used during billing to calculate interest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pay Option"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpblling"),(0,l.kt)("td",{parentName:"tr",align:null},"Used during billing and represents the type of payment requested by the user whether full payment, qtr payment, partial payment or overpayment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Payment"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpblling"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount paid. This is used internal ly by the system")))),(0,l.kt)("h3",{id:"actions"},"Actions"),(0,l.kt)("p",null,"The following actions are used in the business module:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ACTION"),(0,l.kt)("th",{parentName:"tr",align:null},"APPLICABLE RULESETS"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Schedule By Qtr"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpbilling"),(0,l.kt)("td",{parentName:"tr",align:null},"Action that splits a selected bill item facts into quarterly deadlines")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Compute Business Tax"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpassessment"),(0,l.kt)("td",{parentName:"tr",align:null},"Action that computes the business tax")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Select Tax Fee Account"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpassessment"),(0,l.kt)("td",{parentName:"tr",align:null},"If there are more than 1 tax fees computed, this action will choose 1 based on a criteria, either lowest or highest amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Remove Tax Fee"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpassessment"),(0,l.kt)("td",{parentName:"tr",align:null},"This action removes a tax fee entry based on a criteria")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ask Business Info"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpinfo, bpassessment"),(0,l.kt)("td",{parentName:"tr",align:null},"Action to ask for more business info from the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add Requirement"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpinfo"),(0,l.kt)("td",{parentName:"tr",align:null},"Action that adds requirements. Requirement selected from the Business Requirements dara")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Compute Regulatory Fee"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpassessment"),(0,l.kt)("td",{parentName:"tr",align:null},"Action to compute regulatory fee.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Calculate Discount"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpbilling"),(0,l.kt)("td",{parentName:"tr",align:null},"Action that calculates discount based on selected items")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Calculate Interest"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpbilling"),(0,l.kt)("td",{parentName:"tr",align:null},"Action that calculates interest.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add System Variable"),(0,l.kt)("td",{parentName:"tr",align:null},"All"),(0,l.kt)("td",{parentName:"tr",align:null},"Action that internally creates a system variable that is used within the system. The final result will not be visible by the user and will only say during execution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add Derived Business Info"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpinfo"),(0,l.kt)("td",{parentName:"tr",align:null},"Similar to system variable but the result can be seen by the user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Update Tax Fee Amount"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpassessment"),(0,l.kt)("td",{parentName:"tr",align:null},"For some taxes or fees, amount is updated prior to returning the result.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Change Business Account"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpassessment"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to change account mappings after all rule computations are done. This is generally used for reporting purposes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Compute Other Charge"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpassessment"),(0,l.kt)("td",{parentName:"tr",align:null},"Action that calculates other charges")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Calculate Surcharge"),(0,l.kt)("td",{parentName:"tr",align:null},"Bpbilling"),(0,l.kt)("td",{parentName:"tr",align:null},"Action that calculates surcharges")))),(0,l.kt)("h3",{id:"rules"},"Rules"),(0,l.kt)("p",null,"There are three rulesets executed for business permit and licensing \u2013\nthe bpinfo, bpassessment and bpbilling. This section describes each\nrule."),(0,l.kt)("h4",{id:"bp-info"},"BP Info"),(0,l.kt)("p",null,"The BPInfo rules are executed by the business information section. This\nrefers to the frontline for accepting new business applications,\nrenewing, retiring or amending applications. The basic information may\ninclude number of employees, how many male or female employees or\nsomething of that nature. To edit these rules go to ",(0,l.kt)("strong",{parentName:"p"},"Main Menu ",">","\nRule Management ",">"," BP Info Rules.")," To add or remove rules, please\nrefer to the ",(0,l.kt)("strong",{parentName:"p"},"Rule Management")," Section",(0,l.kt)("strong",{parentName:"p"},".")),(0,l.kt)("p",null,"The system accompanies the important rules. You need to deploy these\nrules if necessary."),(0,l.kt)("h3",{id:"authoring-rules"},"Authoring Rules"),(0,l.kt)("h4",{id:"billing-rules"},"Billing Rules"),(0,l.kt)("p",null,"The Billing Rules calculates surcharges and penalties. One of the common\nrules of the is the quarterly billing of business tax which is"),(0,l.kt)("p",null,"Split By Qtr:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image|512x397,100%",src:n(4658).Z,width:"282",height:"205"})),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Interest Computation:")),(0,l.kt)("p",null,"This rule"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image|512x397,100%",src:n(3009).Z,width:"581",height:"444"})),(0,l.kt)("h2",{id:"transactions"},"Transactions"),(0,l.kt)("h3",{id:"application"},"Application"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"New ")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Renew")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Retire")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Amend")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Late Renewal")),(0,l.kt)("h3",{id:"assessment"},"Assessment"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Viewing Pending Assessments")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Assess Application")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Approval of Application")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Printing Assessment")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Printing of Bill")),(0,l.kt)("h3",{id:"collection"},"Collection"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Collection Settings")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Processing Collection")),(0,l.kt)("h3",{id:"issuance-of-permit"},"Issuance of Permit"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Releasing Permit")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Issuance of Permit")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Changing Business Information")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Customizing Permit Report")),(0,l.kt)("h3",{id:"reports"},"Reports"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Line of Business Listing")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Business Master List")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of Employers")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Application Listing")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Business Permit Listing")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Business Comparative Assessment Listing")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Business Comparative Listing")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Line of Business Count Listing")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Top Business Listing")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Summary of Business Permit")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Quarterly Paid Business Listing")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Business Collection Report")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Business Delinquency ")),(0,l.kt)("h2",{id:""}))}m.isMDXComponent=!0},4658:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,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"},3009:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/image144-6ab39c6027aee8bff40725ddd346277d.png"}}]);