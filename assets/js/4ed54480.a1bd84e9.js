"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[709],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,f=d["".concat(u,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6082:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={id:"auto-update",title:"Automatic App Updates"},u=void 0,l={unversionedId:"guides/auto-update",id:"guides/auto-update",title:"Automatic App Updates",description:"It is essential to regularly update the Certify The Web app as important changes may be included which affect continuity of the certificate renewals or other essential certificate maintenance. By default app updates will be offered (if available) when you open the UI and you should generally update at the earliest convenience. Users have commonly requested an Auto Update mechanism and so this has now been provided as a script which can be scheduled.",source:"@site/docs/guides/auto-update.md",sourceDirName:"guides",slug:"/guides/auto-update",permalink:"/docs/guides/auto-update",draft:!1,editUrl:"https://github.com/webprofusion/certify-docs/edit/master/docs/guides/auto-update.md",tags:[],version:"current",frontMatter:{id:"auto-update",title:"Automatic App Updates"}},p={},c=[],d={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is essential to regularly update the Certify The Web app as important changes may be included which affect continuity of the certificate renewals or other essential certificate maintenance. By default app updates will be offered (if available) when you open the UI and you should generally update at the earliest convenience. Users have commonly requested an Auto Update mechanism and so this has now been provided as a script which can be scheduled."),(0,i.kt)("p",null,"Alternative methods include performing app updates using windows management tools (such as WSUS), using the ",(0,i.kt)("a",{parentName:"p",href:"https://community.chocolatey.org/packages/certifytheweb"},"Chocolatey")," command line update tool or manually updating."),(0,i.kt)("h1",{id:"auto-updating-beta"},"Auto Updating (Beta)"),(0,i.kt)("p",null,"Certify The Web bundles a PowerShell script you can schedule using Windows Task Scheduler called ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\CertifyTheWeb\\Scripts\\AutoUpdate\\AutoUpdate.ps1"),". This script will attempt to download and install the latest stable version of the application, if a newer version is available."),(0,i.kt)("p",null,"You can scheduled this task to run (as an Administrator or user in the Administrators group) using:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows Task Scheduler > Create Basic Task.."),(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Certify The Web - Auto Update"),", Next.."),(0,i.kt)("li",{parentName:"ul"},"Daily (or weekly), Next, (optionally schedule for a regular maintenance window time)> Next.."),(0,i.kt)("li",{parentName:"ul"},"Start a program.., Next.."),(0,i.kt)("li",{parentName:"ul"},"Program,/script ",(0,i.kt)("inlineCode",{parentName:"li"},"powershell"),", Add arguments (modify as required) ",(0,i.kt)("inlineCode",{parentName:"li"},'-ExecutionPolicy Bypass -File "C:\\Program Files\\CertifyTheWeb\\Scripts\\AutoUpdate\\AutoUpdate.ps1" -Days 7'),". You may want to consider not bypassing execution policy and the Days parameter means how many days after an update do you consider it 'Stable', the default is 7 days."),(0,i.kt)("li",{parentName:"ul"},'Choose "Open Properties dialog for this task when I click Finish", then select ',(0,i.kt)("inlineCode",{parentName:"li"},"Run whether user is logged on or not"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Run with highest privileges"),".")),(0,i.kt)("h1",{id:"known-issues"},"Known Issues"),(0,i.kt)("p",null,"By default the ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoUpdate.ps1")," script itself will be in-use when the update runs, preventing the script itself from being updated. To workaround this, the ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoUpdate.ps1")," script will be distributed as ",(0,i.kt)("inlineCode",{parentName:"p"},"_AutoUpdate.ps1"),", and the Certify background service will then move this file when possible."),(0,i.kt)("h1",{id:"auto-update-risks"},"Auto Update Risks"),(0,i.kt)("p",null,"There are significant security risks associated with automatically running third party scripts, especially as an Administrator account. You should especially never install a version of Certify The Web which is not digitally signed by ",(0,i.kt)("inlineCode",{parentName:"p"},"Webprofusion Pty Ltd"),". You should not allow any other processes to modify the AutoUpdate.ps1 script as this is a vector for privilege escalation."),(0,i.kt)("p",null,"You should consider such risks before adopting this method for updating."))}h.isMDXComponent=!0}}]);