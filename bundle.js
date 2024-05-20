(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap);"]),i.push([t.id,':root {\n    font-family: "Rubik", sans-serif;\n    box-sizing: border-box;\n\n    --color-base: #1e1e2e;\n    --color-surface: #313244;\n    --color-text: #cdd6f4;\n    --color-subtext: #9399b2;\n    --color-accent: #a6e3a1;\n}\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100svh;\n    background-color: var(--color-base);\n    color: var(--color-text);\n}\n\nmain {\n    padding: 2rem;\n    flex: 1;\n    display: grid;\n    grid-template-columns: min(1100px, 100%);\n    place-content: center;\n}\n\n.container {\n    padding: 0 1.5rem;\n    margin: 1.25rem 0;\n}\n\nform {\n    display: flex;\n\n    --border-thickness: 0.15rem;\n    --border-radius: 0.75rem;\n    --font-size: 1.05rem;\n}\n\nform>input {\n    flex: 1;\n    height: 2rem;\n    font-size: var(--font-size);\n    padding: 0 0.75rem;\n    border: var(--border-thickness) solid var(--color-accent);\n    border-radius: var(--border-radius) 0 0 var(--border-radius);\n    background: transparent;\n    color: var(--color-text);\n}\n\nform>button {\n    flex: 1;\n    font-size: var(--font-size);\n    font-weight: 500;\n    max-width: 9rem;\n    cursor: pointer;\n    background: var(--color-accent);\n    color: var(--color-base);\n}\n\nform>button#unit-switcher {\n    max-width: 8rem;\n    margin-right: 1.5rem;\n    border: var(--border-thickness) solid var(--color-accent);\n    border-radius: var(--border-radius);\n}\n\nform>button[type="submit"] {\n    border: var(--border-thickness) solid var(--color-accent);\n    border-radius: 0 var(--border-radius) var(--border-radius) 0;\n}\n\n#title-container>h2 {\n    display: flex;\n    justify-content: space-between;\n    font-size: 1.5rem;\n    margin-bottom: 0.75rem;\n}\n\n#header-date {\n    font-size: 1.3rem;\n    font-weight: 400;\n    color: var(--color-subtext);\n}\n\n#title-container>p {\n    color: var(--color-subtext);\n}\n\n#data-container,\n#forecast-container {\n    padding: 1.5rem;\n    border: 3px solid var(--color-accent);\n    border-radius: 1.5rem;\n}\n\n#data-container>h3 {\n    margin-bottom: 2rem;\n}\n\n#data-container>#current-conditions {\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    text-align: center;\n}\n\n#current-conditions p {\n    font-size: 1.1rem;\n}\n\n#data-container img {\n    margin-bottom: 1rem;\n}\n\n#current-icon>img {\n    max-width: 6rem;\n    min-height: 6rem;\n}\n\n#current-data {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: flex-end;\n    border-left: 2px solid var(--color-accent);\n}\n\n#current-data>div {\n    width: 5rem;\n}\n\n#current-data img {\n    max-width: 3rem;\n    margin-bottom: 2rem;\n}\n\n#forecast-container>#days {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 8rem);\n    justify-content: space-between;\n    gap: 1rem;\n}\n\n#days {\n    margin-top: 1.5rem;\n}\n\n#days>.day {\n    text-align: center;\n    background: var(--color-surface);\n    padding: 1rem;\n    border-radius: 1rem;\n}\n\n.day p {\n    font-size: 1.1rem;\n}\n\n.day>.day-name {\n    font-weight: 600;\n    margin-bottom: 0.3rem;\n}\n\n.day>.day-date {\n    color: var(--color-subtext);\n}\n\n.day img {\n    max-width: 4rem;\n    min-height: 4rem;\n    margin: 0.6rem 0;\n}\n\n.day-data p {\n    margin: 0.4rem 0;\n}\n',""]);const s=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var m=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var f=a(h,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),u=0;u<o.length;u++){var d=n(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{const t=n.p+"0ae928911d7143fe5c97.svg",e=n.p+"10da86080cdf8ab805dc.svg",r=n.p+"b3bf211cc12293dba117.svg",a=n.p+"4367781d78de4b41c8ba.svg",o={"clear-day":t,"clear-night":e,"partly-cloudy-day":n.p+"1b7e30503cbfe9b1328f.svg","partly-cloudy-night":n.p+"f16ddc81302dd032a209.svg",cloudy:r,fog:a,rain:n.p+"6e4f357e69e53710441a.svg",snow:n.p+"a38ec89338af4551eb0e.svg",wind:n.p+"f9e79d493e2fd83a55bd.svg"},i=n.p+"06d65b91753116b0a29a.svg",s=n.p+"3f37d431be0823f7ac33.svg",c=n.p+"3e65331a51e0a1f8ad73.svg",u={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function d(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const l={date:d({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:d({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:d({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},m={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function h(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const f={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:h({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:h({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:h({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:h({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:h({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function g(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const p={ordinalNumber:(b={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(b.matchPattern);if(!n)return null;const r=n[0],a=t.match(b.parsePattern);if(!a)return null;let o=b.valueCallback?b.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:g({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:g({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:g({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:g({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var b;const w={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=u[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:l,formatRelative:(t,e,n,r)=>m[t],localize:f,match:p,options:{weekStartsOn:0,firstWeekContainsDate:1}};let y={};function v(){return y}Math.pow(10,8);const x=6048e5,M=864e5;function k(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function S(t){const e=k(t);return e.setHours(0,0,0,0),e}function P(t){const e=k(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function T(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function D(t){const e=k(t);return function(t,e){const n=S(t),r=S(e),a=+n-P(n),o=+r-P(r);return Math.round((a-o)/M)}(e,function(t){const e=k(t),n=T(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function C(t,e){const n=v(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=k(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function W(t){return C(t,{weekStartsOn:1})}function E(t){const e=k(t),n=e.getFullYear(),r=T(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=W(r),o=T(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=W(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function $(t){const e=k(t),n=+W(e)-+function(t){const e=E(t),n=T(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),W(n)}(e);return Math.round(n/x)+1}function Y(t,e){const n=k(t),r=n.getFullYear(),a=v(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=T(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=C(i,e),c=T(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=C(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function N(t,e){const n=k(t),r=+C(n,e)-+function(t,e){const n=v(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=Y(t,e),o=T(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),C(o,e)}(n,e);return Math.round(r/x)+1}function q(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const O={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return q("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):q(n+1,2)},d:(t,e)=>q(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>q(t.getHours()%12||12,e.length),H:(t,e)=>q(t.getHours(),e.length),m:(t,e)=>q(t.getMinutes(),e.length),s:(t,e)=>q(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return q(Math.trunc(r*Math.pow(10,n-3)),e.length)}},F={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return O.y(t,e)},Y:function(t,e,n,r){const a=Y(t,r),o=a>0?a:1-a;return"YY"===e?q(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):q(o,e.length)},R:function(t,e){return q(E(t),e.length)},u:function(t,e){return q(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return O.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=N(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):q(a,e.length)},I:function(t,e,n){const r=$(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):q(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):O.d(t,e)},D:function(t,e,n){const r=D(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):q(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return q(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return q(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return q(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return O.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):O.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):q(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):q(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):O.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):O.s(t,e)},S:function(t,e){return O.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return H(r);case"XXXX":case"XX":return z(r);default:return z(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return H(r);case"xxxx":case"xx":return z(r);default:return z(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+j(r,":");default:return"GMT"+z(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+j(r,":");default:return"GMT"+z(r,":")}},t:function(t,e,n){return q(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return q(t.getTime(),e.length)}};function j(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+q(o,2)}function H(t,e){return t%60==0?(t>0?"-":"+")+q(Math.abs(t)/60,2):z(t,e)}function z(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+q(Math.trunc(r/60),2)+e+q(r%60,2)}const L=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},A=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},B={p:A,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return L(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",L(r,e)).replace("{{time}}",A(a,e))}},Q=/^D+$/,G=/^Y+$/,X=["D","DD","YY","YYYY"];function R(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=k(t);return!isNaN(Number(n))}const I=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,J=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,U=/^'([^]*?)'?$/,V=/''/g,K=/[a-zA-Z]/;function Z(t,e,n){const r=v(),a=n?.locale??r.locale??w,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=k(t);if(!R(s))throw new RangeError("Invalid time value");let c=e.match(J).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,B[e])(t,a.formatLong):t})).join("").match(I).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:_(t)};if(F[e])return{isToken:!0,value:t};if(e.match(K))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return G.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return Q.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),X.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,F[o[0]])(s,o,a.localize,u)})).join("")}function _(t){const e=t.match(U);return e?e[1].replace(V,"'"):t}const tt={displayData:function(t,e){const{title:n,description:r,currentConditions:a,days:u}=t;!function(t,e){const n=document.querySelector("#title-container");null!==n&&(n.innerHTML=function(t,e){return`\n        <h2>\n            ${t}\n            <span id="header-date">\n                ${Z(Date.now(),"E, dd MMM yyyy")}\n            </span>\n        </h2>\n        <p>${e}</p>\n    `}(t,e))}(n,r),function(t,e){const n=document.querySelector("#current-conditions");null!==n&&(n.innerHTML=function(t,e){const n=o[t.icon];let r,a;return e?(r=`${t.metric.temp} °C`,a=`${t.metric.windspeed} km/h`):(r=`${t.us.temp} °F`,a=`${t.us.windspeed} mph`),`\n        <div id="current-icon">\n            <img src="${n}" alt="${t.icon}" />\n            <p>${t.conditions}</p>\n        </div>\n        <div id="current-data">\n            <div id="current-temp">\n                <img src="${i}" alt="temperature" />\n                <p>${r}</p>\n            </div>\n            <div id="current-hum">\n                <img src="${s}" alt="temperature" />\n                <p>${t.humidity}%</p>\n            </div>\n            <div id="current-wind">\n                <img src="${c}" alt="temperature" />\n                <p>${a}</p>\n            </div>\n        </div>\n    `}(t,e))}(a,e),function(t,e){const n=document.querySelector("#days");null!==n&&(n.innerHTML="",t.forEach((t=>{n.innerHTML+=function(t,e){const n=new Date(t.datetime),r=o[t.icon];let a,i;return e?(a=`${t.metric.tempmin} °C`,i=`${t.metric.tempmax} °C`):(a=`${t.us.tempmin} °F`,i=`${t.us.tempmax} °F`),`\n        <div class="day">\n            <p class="day-name">${Z(n,"EEEE")}</p>\n            <p class="day-date">${Z(n,"d.MM.yyyy")}</p>\n            <img src="${r}" alt="${t.icon}" />\n            <div class="day-data">\n                <p class="temp-min">${a}</p>\n                <p class="temp-max">${i}</p>\n                <p class="humidity">${t.humidity}%</p>\n            </div>\n        </div>\n    `}(t,e)})))}(u,e)}},et=tt;function nt(t){return Number((1.8*t+32).toFixed(1))}var rt=n(72),at=n.n(rt),ot=n(825),it=n.n(ot),st=n(659),ct=n.n(st),ut=n(56),dt=n.n(ut),lt=n(540),mt=n.n(lt),ht=n(113),ft=n.n(ht),gt=n(208),pt={};pt.styleTagTransform=ft(),pt.setAttributes=dt(),pt.insert=ct().bind(null,"head"),pt.domAPI=it(),pt.insertStyleElement=mt(),at()(gt.A,pt),gt.A&&gt.A.locals&&gt.A.locals;const bt=document.querySelector("#location-form"),wt=document.querySelector("#location"),yt=document.querySelector("#unit-switcher");let vt,xt=!0;async function Mt(t){const e=await async function(t){try{const e="9YBLYGXYQRMR26C25MP2BV8SB",n=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(t)}/next7days?unitGroup=metric&key=${e}`,r=await fetch(n,{mode:"cors"});if(!r.ok)throw new Error("Location not found. Please enter a valid location");return await r.json()}catch(t){alert(t.message)}}(t);e&&(vt=function(t){const e=t.currentConditions,n={conditions:e.conditions,icon:e.icon,humidity:e.humidity,metric:{temp:e.temp,windspeed:e.windspeed},us:{temp:nt(e.temp),windspeed:(r=e.windspeed,Number((.621371*r).toFixed(1)))}};var r;const a=[];return t.days.slice(1).forEach((t=>{a.push({icon:t.icon,datetime:t.datetime,humidity:t.humidity,metric:{tempmin:t.tempmin,tempmax:t.tempmax},us:{tempmin:nt(t.tempmin),tempmax:nt(t.tempmax)}})})),{title:t.resolvedAddress,description:t.description,currentConditions:n,days:a}}(e),et.displayData(vt,xt))}Mt("Rome"),null!==bt&&bt.addEventListener("submit",(t=>{t.preventDefault(),null!==wt&&(Mt(wt.value),wt.value="")})),null!==yt&&yt.addEventListener("click",(()=>{xt=!xt,console.log(xt),et.displayData(vt,xt)}))})()})();