"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[955],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5507:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={id:"scripting",title:"DNS Scripting"},c=void 0,p={unversionedId:"dns/providers/scripting",id:"dns/providers/scripting",title:"DNS Scripting",description:"To provide your own script to update DNS you need to create (or source) a Windows (CMD) batch file which expects the following sequence of arguments and update a corresponding TXT record in your DNS zone:",source:"@site/docs/dns/providers/scripting.md",sourceDirName:"dns/providers",slug:"/dns/providers/scripting",permalink:"/docs/dns/providers/scripting",draft:!1,editUrl:"https://github.com/webprofusion/certify-docs/edit/master/docs/dns/providers/scripting.md",tags:[],version:"current",frontMatter:{id:"scripting",title:"DNS Scripting"}},s={},u=[{value:"Calling a Python or node script",id:"calling-a-python-or-node-script",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To provide your own script to update DNS you need to create (or source) a Windows (CMD) batch file which expects the following sequence of arguments and update a corresponding TXT record in your DNS zone:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Target Domain (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"example.com"),")"),(0,a.kt)("li",{parentName:"ul"},"Record Name (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"_acme-challenge.example.com"),")"),(0,a.kt)("li",{parentName:"ul"},"Record Value (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"ABCBD123456789"),")"),(0,a.kt)("li",{parentName:"ul"},"Zone Id (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"OptionalZoneId"),", this is often useful to match the specific zone to update)")),(0,a.kt)("p",null,"e.g. given a script at ",(0,a.kt)("em",{parentName:"p"},"C:\\customscripts\\UpdateDNS.bat"),", this will be executed as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"C:\\customscripts\\UpdateDNS.bat example.com _acme-challenge.example.com ABCBD123456789 OptionalZoneId\n")),(0,a.kt)("p",null,"Important Notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your script will run as the background service user (local system), not as your account."),(0,a.kt)("li",{parentName:"ul"},"You should assume the working directory of the process will not be the same as the script."),(0,a.kt)("li",{parentName:"ul"},"When an 'apex domain' like ",(0,a.kt)("inlineCode",{parentName:"li"},"example.com")," is included in the certificate request for a wildcard (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"*.example.com"),") both TXT records will have the same name but different values, so updates need to add to the TXT record values. For this reason it's also a good idea to provide a (well tested!) delete script to clean up the TXT record once the request has completed, otherwise your TXT record values will grow with every validation attempt.")),(0,a.kt)("h2",{id:"calling-a-python-or-node-script"},"Calling a Python or node script"),(0,a.kt)("p",null,"To use a Python script (or similarly Node etc) start with a .bat file which can then forward all the arguments as required to your script using ",(0,a.kt)("inlineCode",{parentName:"p"},"%*")," (or you could pass specific arguments if you needed). Note also the fully qualified path to the python exe (or node) as your script will run as local system (using the apps background service) and the path environment variable settings may be different:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bat"},"REM This script would be called with the parameters <target domain> <record name> <record value> <zone id (optionally)>\n\nREM this example then calls a custom python script forwarding all the arguments\n\nc:\\python27\\python.exe create_dns_txt_example.py %*\n")),(0,a.kt)("p",null,"In the following Python example the args are available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"sys.argv")," list. This example passes that list to a function called ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," and logs some example stuff (",(0,a.kt)("inlineCode",{parentName:"p"},"create_dns_txt_example.py")," logging to ",(0,a.kt)("inlineCode",{parentName:"p"},"dns_create_test.log"),")."),(0,a.kt)("p",null,"Your real script would use your DNS providers API or a library such as Apache libcloud."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Example\n\nimport sys\nimport os\nimport getopt\nimport logging\n\n# TODO: added module for DNS updates (libcloud etc)\n\n\ndef main(argv):\n\n    # init logging etc\n    logging.basicConfig(filename=\'dns_create_test.log\',\n                        filemode=\'a\', level=logging.INFO)\n\n    logging.info("Example Python DNS helper.")\n\n   # TODO: setup your DNS provider (apache libcloud etc)\n\n   # TODO: add/append the txt record\n\n    logging.info("args: " + " ".join(sys.argv))\n\n    logging.info(\n        "If this script did anything it would create a TXT record called " + sys.argv[2]\n        + " with the value " + sys.argv[3]\n        + " you could optionally use the domain ("+sys.argv[1]+") "\n        + " or zoneId ("+sys.argv[4]+") in your python script")\n\n\n#########################################\nif __name__ == "__main__":\n    main(sys.argv)\n\n')),(0,a.kt)("p",null,"When the script runs that app will call the .bat file like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ExampleDNSCreatePython.bat mydomain.com _acme-challenge.mydomain.com ABCD1234 myoptionalZoneId\n")),(0,a.kt)("p",null,"Which in turn (based on the above example .bat) will call the python script as :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python create_dns_txt_basic.py.bat mydomain.com _acme-challenge.mydomain.com ABCD1234 myoptionalZoneId\n")))}m.isMDXComponent=!0}}]);