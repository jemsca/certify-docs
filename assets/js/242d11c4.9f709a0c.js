"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[706],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7144:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(3117),i=r(102),a=(r(7294),r(3905)),o=["components"],s={id:"installation",title:"Installation & Upgrades"},l=void 0,u={unversionedId:"guides/installation",id:"guides/installation",title:"Installation & Upgrades",description:"System Requirements",source:"@site/docs/guides/installation.md",sourceDirName:"guides",slug:"/guides/installation",permalink:"/docs/guides/installation",draft:!1,editUrl:"https://github.com/webprofusion/certify-docs/edit/master/docs/guides/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation & Upgrades"},sidebar:"docSiderbar",previous:{title:"Getting Started",permalink:"/docs/intro"},next:{title:"Requesting a Certificate",permalink:"/docs/certificate-process"}},p={},c=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Installing",id:"installing",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Settings are preserved between installs/upgrades",id:"settings-are-preserved-between-installsupgrades",level:3},{value:"Common Issues",id:"common-issues",level:3}],d={toc:c};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Supported OS: Windows Server 2012 R2 (or higher, includes Windows 10) with .Net 4.6.2 (or higher).")),(0,a.kt)("p",null,"This app requires outgoing https for API calls, proxies are not officially supported."),(0,a.kt)("h2",{id:"installing"},"Installing"),(0,a.kt)("p",null,"To get started, download and run the latest version of the app from ",(0,a.kt)("a",{parentName:"p",href:"https://certifytheweb.com"},"https://certifytheweb.com")," "),(0,a.kt)("p",null,"You can install the Certify The Web - Certify SSL Manager app on any Windows machine or server. In general the app will be installed on the same server that requires the certificate and most commonly this will be web servers or mail/webmail servers. "),(0,a.kt)("p",null,"The app consists of a user interface (UI) and a background service for certificate management tasks."),(0,a.kt)("p",null,"The setup file is digitally signed as Publisher 'Webprofusion Pty Ltd'."),(0,a.kt)("p",null,"The app requires elevated privileges to run. This is primarily in order to update the machine certificate store and update webserver bindings and is also used to ensure only administrative users are controlling the certificate management features."),(0,a.kt)("p",null,"The app runs in Community Edition mode by default, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/licensing"},"Licensing")," for more information."),(0,a.kt)("h2",{id:"upgrading"},"Upgrading"),(0,a.kt)("p",null,"By default the app will check for updates when you open the UI. If you do not regularly open the UI it's worth checking for updates periodically as some updates are critical to ensure continuous operation and only the latest version is supported."),(0,a.kt)("p",null,"The latest release notes for the app can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://certifytheweb.com/home/changelog"},"https://certifytheweb.com/home/changelog")),(0,a.kt)("h3",{id:"settings-are-preserved-between-installsupgrades"},"Settings are preserved between installs/upgrades"),(0,a.kt)("p",null,"Your settings are preserved in ",(0,a.kt)("inlineCode",{parentName:"p"},"%PROGRAMDATA%\\certify")," so for most users this is ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\ProgramData\\certify"),". Uninstalling the app or installing a new version does not remove the files stored here. We recommend including this location in your regular backup procedure."),(0,a.kt)("h3",{id:"common-issues"},"Common Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are having problems with in-app upgrading, download the latest version from ",(0,a.kt)("a",{parentName:"li",href:"https://certifytheweb.com"},"https://certifytheweb.com")," and install normally."),(0,a.kt)("li",{parentName:"ul"},"If you are prompted to retry a file copy during upgrade, ",(0,a.kt)("em",{parentName:"li"},"do not cancel the setup or attempt rollback"),". Instead, wait a moment and try again. The installer will automatically stop the background service but this can take a few seconds."),(0,a.kt)("li",{parentName:"ul"},"If your setup/upgrade has been interrupted or exited abnormally, ensure no other users are using the Certify UI (especially via remote desktop access). Re-run setup."),(0,a.kt)("li",{parentName:"ul"},"If you receive a 'Service Not Started' error see troubleshooting guidance in ",(0,a.kt)("a",{parentName:"li",href:"/docs/backgroundservice"},"Background Service"))))}m.isMDXComponent=!0}}]);