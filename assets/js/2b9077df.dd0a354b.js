"use strict";(self.webpackChunketracsdocs=self.webpackChunketracsdocs||[]).push([[7025],{3905:(A,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>d});var n=t(7294);function i(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function r(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function g(A,e){if(null==A)return{};var t,n,i=function(A,e){if(null==A)return{};var t,n,i={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(i[t]=A[t]);return i}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(i[t]=A[t])}return i}var s=n.createContext({}),p=function(A){var e=n.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):r(r({},e),A)),t},o=function(A){var e=p(A.components);return n.createElement(s.Provider,{value:e},A.children)},h="mdxType",l={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(A,e){var t=A.components,i=A.mdxType,a=A.originalType,s=A.parentName,o=g(A,["components","mdxType","originalType","parentName"]),h=p(t),c=i,d=h["".concat(s,".").concat(c)]||h[c]||l[c]||a;return t?n.createElement(d,r(r({ref:e},o),{},{components:t})):n.createElement(d,r({ref:e},o))}));function d(A,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof A||i){var a=t.length,r=new Array(a);r[0]=c;var g={};for(var s in e)hasOwnProperty.call(e,s)&&(g[s]=e[s]);g.originalType=A,g[h]="string"==typeof A?A:i,r[1]=g;for(var p=2;p<a;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8557:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>g,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const a={},r=void 0,g={unversionedId:"Chapter-5/Managing Individual Entity",id:"Chapter-5/Managing Individual Entity",title:"Managing Individual Entity",description:"Individual Entity",source:"@site/docs/Chapter-5/02-Managing Individual Entity.md",sourceDirName:"Chapter-5",slug:"/Chapter-5/Managing Individual Entity",permalink:"/etracsdocs/Chapter-5/Managing Individual Entity",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entity Management",permalink:"/etracsdocs/Chapter-5/Entity Management Overview"},next:{title:"Juridical Entity",permalink:"/etracsdocs/Chapter-5/Juridical Entity"}},s={},p=[{value:"Individual Entity",id:"individual-entity",level:2},{value:"Adding an Entity",id:"adding-an-entity",level:3},{value:"Checking for Duplicates",id:"checking-for-duplicates",level:3},{value:"Updating Records",id:"updating-records",level:3}],o={toc:p},h="wrapper";function l(A){let{components:e,...a}=A;return(0,i.kt)(h,(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"individual-entity"},"Individual Entity"),(0,i.kt)("h3",{id:"adding-an-entity"},"Adding an Entity"),(0,i.kt)("p",null,"To add an individual entity, click the Main Menu and select ",(0,i.kt)("strong",{parentName:"p"},"Master\nData")," ",">"," ",(0,i.kt)("strong",{parentName:"p"},"Entities ",">"," Individual")," ",(0,i.kt)("em",{parentName:"p"},"(See diagram below)"),". This\nwill display a listing of individual entities. Click on New button to\nadd a new record. A much quicker method to create an entity is to go to\nthe quick launcher and type in ",(0,i.kt)("strong",{parentName:"p"},"TP001.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image|512x397,100%",src:t(5122).Z,width:"195",height:"196"})),(0,i.kt)("p",null,"Figure 14 Entity Main Menu"),(0,i.kt)("p",null,"The new individual entity initial screen will be displayed. It asks\nfirst for basic information like lastname, firstname, middlename\nbirthdate and gender. Fields marked with ","*"," are required. Once\ncompleted, click on the Next button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image|512x397,100%",src:t(605).Z,width:"520",height:"296"})),(0,i.kt)("p",null,"Figure 15 New Individual Entity"),(0,i.kt)("p",null,"The system first attempts to check for duplicate matches if any. If\nthere are no matches the system imimagestely directs you to the screen to\ncomplete the information."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image|512x397,100%",src:t(4145).Z,width:"716",height:"425"})),(0,i.kt)("p",null,"Most fields are input boxes and filled by typing in text. The suggest\ncontrols like religion, citizenship and profession displays existing\ninformation which you can simply choose from. The address field is a\nspecial entry because address is not a simple plain text and there are\nseveral uses for it in the system. To edit the address, click on the\naddress editor"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image|512x397,100%",src:t(7153).Z,width:"33",height:"24"})),(0,i.kt)("p",null,"next to the address box to display a popup entry. Choose the type of\naddress you want to add"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image|512x397,100%",src:t(8825).Z,width:"355",height:"52"})),(0,i.kt)("p",null,"Local refers to local address (within the LGU) so barangay is specified.\nIf it is outside the LGU, use non-local."),(0,i.kt)("p",null,"To make the system more accurate, it is suggested to add photos of the\nperson so that in case there is a possible duplicate entry, it will be\nmuch easier to distinguish with the picture. There are two ways you can\nadd photos, by uploading file or by capturing using a webcam. If you\nhave a webcam available, try it first before implementing if it works.\nThis feature has not undergone thorough testing of different webcams at\nthis time."),(0,i.kt)("p",null,"Once completed, click on Save and the system will assign the entity no.\nThis is the unique identifier of the person."),(0,i.kt)("h3",{id:"checking-for-duplicates"},"Checking for Duplicates"),(0,i.kt)("p",null,"Having a unique single record of a person in the system is ideal because\nit helps in referencing transactions and improves the quality of the\nrecords. If this can be achieved, we will be able to know the\ntransactions for a particular person which can shared across domains for\nexample \u2013 real property information might be important in business\npermits and licensing if we are investigating if they reported the\ncorrect amount. Therefore, duplicate entries are not desirable because\nthere is no way a system will be able to reference it. However this is\nsimpler said than done because during day to day operations, especially\nduring peak times, misspellings or wrong entries could occur."),(0,i.kt)("p",null,"To reduce possibility of duplicates, it is highly recommended that an\nLGU provide a separate department or personnel who will ensure that\npossible duplicates are checked before adding it in the database.\nHowever, because most LGUs cannot provide this at the moment, there is a\nbuilt-in mechanism provided in the system to check for possible\nduplicate matches. It checks for possible matches by comparing the\nstrings and providing a score of exactness. The higher score means\nhigher probability being the same. A 100% will give an exact match for\nlastname and firstname. This gives a chance for review and alerts the\nperson entering the record."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image|512x397,100%",src:t(9631).Z,width:"825",height:"425"})),(0,i.kt)("p",null,"If the encoder is sure that this is another person, they can proceed by\nclicking on Add as new Entity to ignore the message. However, if it is\nan exact match, the system will not allow it to continue. In this case,\na higher authority is needed having ENTITY.APPROVER role to encode the\nrecord."),(0,i.kt)("h3",{id:"updating-records"},"Updating Records"),(0,i.kt)("p",null,"When updating records, we need to search first the record we want to\nupdate. Go to the Individual Entities list ",(0,i.kt)("strong",{parentName:"p"},"Master Data")," ",">","\n",(0,i.kt)("strong",{parentName:"p"},"Entities ",">"," Individual.")," This will display the list of individual\nentities shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image|512x397,100%",src:t(7474).Z,width:"982",height:"217"})),(0,i.kt)("p",null,"Figure 16 Individual Entity Listing"),(0,i.kt)("p",null,"Use the search box in the upper right to search for the records based on\nthe name. To open the record, highlight the record then click Open or\ndouble click the item. This will open the entity record."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image|512x397,100%",src:t(9701).Z,width:"869",height:"478"})),(0,i.kt)("p",null,"Figure 17 Entity Information"),(0,i.kt)("p",null,"To edit the record, click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit"),". This will display the editing screen.\nEdit the necessary entries and click on Save to commit the data. In case\nyou want to edit the name, click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit Name"),". This is done because when\nediting the name, we need to run the matching records again similar to\nadding a new entry to ensure that the new information does not have\nduplicate matches. Edit is allowed provided you have sufficient\npermission."),(0,i.kt)("p",null,"On the left side are transactions related to the person. It lists\nbusinesses owned, leased buildings, real properties owned or they are\npart owner and payments. Since ETRACS is a pluggable platform, other\ninformation might be coming from other plug-in modules. This will give a\ncomplete picture of the transactions for a taxpayer."))}l.isMDXComponent=!0},5122:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"},605:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"},4145:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/image61-c597967009a16e5d96209387312efe98.png"},7153:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAYCAIAAAD78wNdAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAZVJREFUSEu9lc+KglAUxichotkk0UZ6rgg3mmTQ0LpVhEgtegBjXES0cRE+gz5Gr9CmxtpUoszMR4I6ol69zsxZXPxzzve759xz761dLpeXP7ZanLHb7Y7Ho+u6FaGNRoPjuMFgEOhEjHddf202+/1+p9OpyDidTvv9/na/v43HkGJCuY/zmef5drt9q2wQgRQEA/GI4Xke/j0ej4pJIBwikIJgkoH3r1+1cK5RHsGn4hRRFHOc48WgZKBn0DwYszCZDAR8FjBJkgCACkY8p0ZAir5Ww+EwAAS22WxSU6GvlSzLcYCmaaVr5fs+tn2WjUajOGC5XOY4Q6p0rabTaRywWCzyO7D0mhuGsVqtwjBVVYmdkbfmqcGHw8GyLEVRgMFIBMChdB4Mw9i2vd1u5/N5EQB8Sucxm80wfUEQCgIIeRQ/S4ieKX1Vr9cdx+l2u8Unm+UJEUhBMMBEd5Su6+jOXq/XarUqHu/X69U0Tdyn4+cd9eOuXa/X2FbhuU9NQgYsy04mk2Qe1IrEwOTZTgygcPgPxjeggCo7AjRASgAAAABJRU5ErkJggg=="},8825:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWMAAAA0CAIAAADQXM5NAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOwwAADsMBx2+oZAAACnxJREFUeF7tXF9sE8kZX98T4gEIIg9UxIDtJDpXokTocq1EyB1x7PgatXlIyMNVXA4uasMpkhPpouIgVa3ASJxOFwnicOqRSx9ayYSHtKIkThyS3KkPZxoFEPJxG9uBcioPUBlUCfESb7+ZWa/3jxP/20V4+81DyM5+85vv++3Mb7+Z2WA56PqQw4IMIAPIwKYMWJ49e4YUIQPIADKwOQNvIEHIADKADORlAJUiL0VogAwgAxwqBQ4CZAAZyM8AKkV+jtACGUAGUClwDCADyEB+BlAp8nOEFsgAMoBKgWMAGUAG8jOASpGfI7RABpABVAocA8gAMpCfAVSK/ByhBTKADODX3GWNgbn5b8pqj42RAcMYaG1p0hEblaIsMkEp/v1Dsru7e9euXWUBYWNkQCcGnj59GgqFfrTHZh6lECK+qs4J4KfnWmrEZclLlJAIevq4sXCf3SIaa2vyguhrAErR3PT2jh07Xr58qS8yoiEDpTGwZcsW+LPPpW++1VcpcuxTBN0w8hXFHUyU5vQmrQQhMtAZCyynICq5TAgw+8EB6FIQdO/UCMCdO3eCTGzbtg3A8ScyoCMDDKrYAqMRxmSxrfLab7j6MPp1TfAP8UOpz12ZBIH5SvvlnVysbix8yq5INF7PnKLjF20vXrzISzQaIAOvjIGtW7dO/W3G8JxCGw97z/si5CUPuYBvh3t0YdTt9vky2Yd4i2YDtJCUQI7DEgVawBZKZOCQP8pNdFZVqdKHZHiK6+hvd0anwklJO1jbKtJEVBN5jRAPut3BoC8DrnFDWSHzRZm50Btqzwt5uhDP9u3bSVhYkAH9GCh5UBUyaIu1KeiU1GKx9w31TFyfJ+jz1yd6hk5ZLVwUXvtk7ZC61jPROTCXnhsgOQKtWe6Y6huTlg9MF5zXyK3lQKxzYN5icX2+HGhshMVH6tkspA6ZfQchQYTCY2tp7wGpAAR52xQ0oVIlobEaUqJ+vh3wR1q4eZUb8dXRPtI56f2ak0/Gg/LLtWIJy2UPXqZSqbwjJL0K8jq6mk7ntTTUQOvGa+KYoVFXInghgypnXHoMajVGQUpBGsHcnbgO6QARivYWUtMIM5rCwS0uxi/xMZYjsJd/lM9OwiQfawz000Y2T0cjxckdDM0oCCyTCsgqZG3FJoksWhYkg0/sVW7Y65ykZgA6dY2MuBz1ikvZ2sdiPzVLdasoouFRpdPpqqqq9fioG/6hxT0ah0p1AZWDwHPcUFcRKIBYXy/AtngTrRsFO1ZIZ8Y6X4gHZrGBgVRaKGSY6V0KVQrIAohUzGeFIocnLEcQC2xTFjflABCEIhr1HyJzDQ5FsguQ4qJWutH6RusIpDmp9utExXzzXIv8ckPNKqZLeDBPnoQG3/rrL6NP4IwKfn+TT+YSewJa2MutcMvC8BRWWnB9u9MXrYQATdIExlJpkRQzeAu1LVQpSOrQDysHOK7oV0sAqAfkF811zqj/Il2gqIste4toQU97ThGB3RByky5S2KKGLED210pbFqQtQEOOkNEQsUben6wvVg27D75ggqx3yFol9v2i4pIXN0NEy5L3KaqruznuTcc+mjVwRz/77CjJNRJjXvjQghTvWIIsOphQaOvT6cigaLnLNxe//PGZW7fONFZXQzNprGTBKBoB8Y6NZZoNRhSLGpWxvNPqxjO3lG6wmnTicgYQwCi+0nllheq+2Ds0k5xvCy4CBHOMBuglFd7BwQyueEvTUWnTw3ytgP7Sgip09hdjV8TZB8zkMfo9A+Tn9ORC3F+k30OQIwxFJbzYVR8+iPYy400/jiD7EVUX6gBlbYB9dtHYA6scOBLps80raoKjwqmPLdJ3Fio3/jlTe2lnF2kPCMSpDBy9hMWGRBdtONWxrD5z2YRP+J7i596Wx48fg82S334ixHHd44lAM80dloYdYU/8XDMwszbe9Ql34VNh6BPLhau2L2tnFfVX31085or3xwPNmf0aav/p5If7c+VlwpKfAPcmulzn6sZJK1Jz0RHJZS8an+OGHSc4ZsycIW6cVNSAe66ACJjTeVein4az5PcLvfZLskvuHKkXpVnmPOsdCJH5fOO9yOSJ/dTnE9yVVfesko2Noi5mVJvc1m7PDlop1EQi+ynD7t27/z49r+/ZRxHfaJIPpejMhQ1Io89QK+VRS0oBD489KjoBQqAXbCavZCPpvhKxXwKloBNSWy+fIWwyq+YMqZQAG4bnqO4wG619XmMmW/Lm6hqV82RKn6SBUe0jUsLizGpEDqXIKA4IFVFN61dSXBThon3CO92jYEMLWCmDQXc/pUGlRVaJhVwmwNgIpShi9UEPPbLfR+rOS+UCQqq+ugpnGqQITWd5/svuUHghneYa/HM8D7doOdvETpnTwgb1st0rtk6RVawnr3S5bnjnCBo/529gOJKN0r4wY21zZY3S+SPckbPQNd8adjjsdv9i+rD8ckG++SpzRhCaWoGLxcVwqLv1MDn1kcdF6dCyIY+7tB09k7SSBpU2HrglzRetmRFTqQilcI1kP6YkxwSy000jPKsgTBjutbW1x4YXxVXlgwTfYLNabbUrgT8uqfYSBUFbb32njdNYrsQfKBepXEPbO1ZS9eDm9ApMMUJQ1kK1Vao2Jp1O36SIYnNtjRzQul/lfHptfHgcjrOO/OH72dMNfPwfX8kvE0pfOZnzTSdP8x99xJ8+eYTpguTz0mwIIvpZDpZKW5ybrxUMqk2C4nkenhj81NoYMXeKUAojujcBJt2uS3/33YyH762jpd497Tl/fC/X9PuZ3/K99ayy7th4cp1t+x1W1a+la46fz1oOL6wL1g9+03W1t74eGompCtQ4zrvrCdpQ3HEQOqVombcN3SiVLjTGpNMvSHupubZGDgi5gNr5PfuE824SHQ3vg58qL63K3uXO1zR7Dh70NNewlEtYEaOo7xW++EtOlow5G67APOP+/fube72RAVVknUsR+xQ692wKONineK/t6MOHD51OZywWM0VMOgchfP27H1+23fjz8X2wu/HgT+/7uQD9XeduzAhX8qDau3fvjZmb+u5oYk5R7hBjL/N79+5V4EvrVbj8dWSy89e/gmUTSykUyc+r6L+C+yh5UGFOUe6s1r095BRez7vJZPLAgQN3797VHR8B/58ZKHlQ2Wy26fAC5hSv1+Bhr0m2uwiPFn8iA3oxcOfOnZK3aXWfJLhPURalkFO8/dZP4I98Hz16VBYQNkYGdGKgpqYG/huEb2/d0TenQKUo6/mAUvzwr3hXVxf8gXBZQNgYGdCJgefPn09OTu6xOgxXitu3b+vks/lhnvznv+YPEiOsTAYMV4rKpAW9RgaQAQMZwFNSA8lFaGTANAygUpjmUWIgyICBDKBSGEguQiMDpmEAlcI0jxIDQQYMZACVwkByERoZMA0DqBSmeZQYCDJgIAOoFAaSi9DIgGkYQKUwzaPEQJABAxlApTCQXIRGBkzDACqFaR4lBoIMGMgAKoWB5CI0MmAaBlApTPMoMRBkwEAGUCkMJBehkQHTMIBKYZpHiYEgAwYygEphILkIjQyYhgFUCtM8SgwEGTCQAVQKA8lFaGTANAz8DyHrWJSlnhepAAAAAElFTkSuQmCC"},9631:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/image64-18099a222bcc845169d94884858476e3.png"},7474:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/image65-f2317906845e47bc34655ce271a1a7cd.png"},9701:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/image66-bc99ea060c077c78d909a249ccca9ae2.png"}}]);