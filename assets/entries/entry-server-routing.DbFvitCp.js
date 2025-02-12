const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/entries/pages_index.DFNUEU4S.js","assets/chunks/chunk-BbqctaEV.js","assets/static/app_generated_index-6937cd5a.CEPQPRHg.css","assets/entries/pages_open-props.BYvsB2wX.js","assets/entries/pages_sarah.BjIJEL5P.js","assets/chunks/chunk-CgmO4cGP.js","assets/entries/pages_sarah_the-digital-cup.8aCFdQA5.js","assets/entries/pages_style-guide.gWKHl83G.js"])))=>i.map(i=>d[i]);
function pe(e){return Array.from(new Set(e))}function j(e,t){const n=Le();return n[e]=n[e]||t}function Le(){const e="_vike";return globalThis[e]=globalThis[e]||{}}const ke="0.4.220",he={projectName:"Vike",projectVersion:ke},y=new Proxy({},{get:(e,t)=>n=>t==="code"?`\`${n}\``:t==="string"?`'${n}'`:n}),w=j("assertSingleInstance.ts",{instances:[],alreadyLogged:new Set}),Ae="Client runtime of both Server Routing and Client Routing loaded https://vike.dev/client-runtimes-conflict",me="Client runtime loaded twice https://vike.dev/client-runtime-duplicated";function ye(){{const e=pe(w.instances);Ve(e.length<=1,`vike@${y.bold(e[0])} and vike@${y.bold(e[1])} loaded but only one version should be loaded`)}w.checkSingleInstance&&w.instances.length>1&&H(!1,me,{onlyOnce:!0,showStackTrace:!0})}function We(e){H(w.isClientRouting!==!0,Ae,{onlyOnce:!0,showStackTrace:!0}),H(w.isClientRouting===void 0,me,{onlyOnce:!0,showStackTrace:!0}),w.isClientRouting=!1,w.checkSingleInstance=!0,ye()}function De(){w.instances.push(he.projectVersion),ye()}function Ve(e,t){if(e)return;const n=`[vike][Wrong Usage] ${t}`;throw new Error(n)}function H(e,t,{onlyOnce:n,showStackTrace:r}){if(e)return;const i=`[vike][Warning] ${t}`;if(n){const{alreadyLogged:s}=w,a=n===!0?i:n;if(s.has(a))return;s.add(a)}console.warn(r?new Error(i):i)}function Ue(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function k(e,t){const n=new Error(e);return Ue()&&(n.stack=Be(n.stack,t)),n}function Be(e,t){if(!e)return e;const n=Ne(e);let r=0;return n.filter(s=>s.includes(" (internal/")||s.includes(" (node:internal")?!1:r<t&&He(s)?(r++,!1):!0).join(`
`)}function He(e){return e.startsWith("    at ")}function Ne(e){return e.split(/\r?\n/)}function b(e){return typeof e=="object"&&e!==null}const E=j("utils/assert.ts",{alreadyLogged:new Set,logger(e,t){t==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet});De();const Ge="[vike]",Je=`[vike@${he.projectVersion}]`,Ye="Bug",A=2;function o(e,t){var a;if(e)return;const n=(()=>{if(!t)return null;const u=typeof t=="string"?t:JSON.stringify(t);return y.dim(`Debug info (for Vike maintainers; you can ignore this): ${u}`)})();let i=[`You stumbled upon a Vike bug. Go to ${y.blue("https://github.com/vikejs/vike/issues/new")} and copy-paste this error. A maintainer will fix the bug (usually within 24 hours).`,n].filter(Boolean).join(" ");i=D(i),i=W(i,Ye),i=V(i,!0);const s=k(i,A);throw(a=E.onBeforeLog)==null||a.call(E),s}function h(e,t,{showStackTrace:n}={}){var i;if(e)return;n=n||E.alwaysShowStackTrace,t=D(t),t=W(t,"Wrong Usage"),t=V(t);const r=k(t,A);throw n&&E.showStackTraceList.add(r),(i=E.onBeforeLog)==null||i.call(E),r}function Me(e){return e=D(e),e=W(e,"Error"),e=V(e),k(e,A)}function _(e,t,{onlyOnce:n,showStackTrace:r}){var i;if(!e){if(r=r||E.alwaysShowStackTrace,t=D(t),t=W(t,"Warning"),t=V(t),n){const{alreadyLogged:s}=E,a=n===!0?t:n;if(s.has(a))return;s.add(a)}if((i=E.onBeforeLog)==null||i.call(E),r){const s=k(t,A);E.showStackTraceList.add(s),E.logger(s,"warn")}else E.logger(t,"warn")}}function W(e,t){let n=`[${t}]`;const r=t==="Warning"?"yellow":"red";return n=y.bold(y[r](n)),`${n}${e}`}function D(e){return e.startsWith("[")?e:` ${e}`}function V(e,t=!1){return`${t?Je:Ge}${e}`}function q(){return typeof window<"u"&&typeof window.scrollY=="number"}const ee=j("utils/assertRouterType.ts",{});function qe(){Ke(ee.isClientRouting!==!0),ee.isClientRouting=!1}function Ke(e){h(q(),`${y.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,{showStackTrace:!0}),_(e,"You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",{showStackTrace:!0,onlyOnce:!0})}function Xe(){o(q())}function Qe(){Xe()}function te(e){const t=e/1e3;if(t<120){const n=ne(t);return`${n} second${re(n)}`}{const n=t/60,r=ne(n);return`${r} minute${re(r)}`}}function ne(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function re(e){return e==="1"?"":"s"}const N=j("utils/executeHook.ts",{userHookErrors:new WeakMap,pageContext:null});function Ze(e,t,n){const{hookName:r,hookFilePath:i,hookTimeout:{error:s,warning:a}}=t;let u,l;const c=new Promise((d,p)=>{u=v=>{g(),d(v)},l=v=>{g(),p(v)}}),g=()=>{f&&clearTimeout(f),S&&clearTimeout(S)},f=ie(a)&&setTimeout(()=>{_(!1,`The ${r}() hook defined by ${i} is slow: it's taking more than ${te(a)} (https://vike.dev/hooksTimeout)`,{onlyOnce:!1})},a),S=ie(s)&&setTimeout(()=>{const d=Me(`The ${r}() hook defined by ${i} timed out: it didn't finish after ${te(s)} (https://vike.dev/hooksTimeout)`);l(d)},s);return(async()=>{try{et(n);const d=await e();u(d)}catch(d){b(d)&&N.userHookErrors.set(d,{hookName:r,hookFilePath:i}),l(d)}})(),c}function ie(e){return!!e&&e!==1/0}function et(e){N.pageContext=e,Promise.resolve().then(()=>{N.pageContext=null})}function U(e){return e instanceof Function||typeof e=="function"}function T(e){return Array.isArray(e)}function tt(e){return T(e)&&e.every(t=>typeof t=="string")}function nt(e){return b(e)&&Object.values(e).every(t=>typeof t=="string")}function m(e,t,n){if(!b(e))return!1;if(!(t in e))return n==="undefined";if(n===void 0)return!0;const r=e[t];return n==="undefined"?r===void 0:n==="array"?T(r):n==="object"?b(r):n==="string[]"?tt(r):n==="string{}"?nt(r):n==="function"?U(r):T(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="true"?r===!0:n==="false"?r===!1:typeof r===n}function C(e,t){t&&(o(!("_isPageContextObject"in t)),Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)))}function ve(e,t,n){return typeof e=="string"?se(e.split(""),t,n).join(""):se(e,t,n)}function se(e,t,n){const r=[];let i=t;o(i>=0&&i<=e.length);let s=e.length+n;for(o(s>=0&&s<=e.length);!(i===s||(i===e.length&&(i=0),i===s));){const a=e[i];o(a!==void 0),r.push(a),i++}return r}function rt(e,t){o(gt(e),e),o(t.startsWith("/"));const{hashString:n,withoutHash:r}=it(e);o(n===null||n.startsWith("#"));const i=n===null?"":Ee(n.slice(1)),{searchString:s,withoutSearch:a}=oe(r);o(s===null||s.startsWith("?"));let u="";if(s!==null)u=s;else if(e.startsWith("#")){const $=Se();u=$&&oe($).searchString||""}const l={},c={};Array.from(new URLSearchParams(u)).forEach(([$,Z])=>{l[$]=Z,c[$]=[...c.hasOwnProperty($)?c[$]:[],Z]});let{protocol:g,origin:f,pathnameAbsoluteWithBase:S}=ot(a,t);const d=a.slice((f||"").length);dt(e,f,d,s,n);let{pathname:p,hasBaseServer:v}=ct(S,t);const P=we(f,p,s,n),F=f?f.slice(g.length):null,{hostname:B,port:ze}=at(F,e);return p=st(p),o(p.startsWith("/")),{href:P,protocol:g,hostname:B,port:ze,origin:f,pathname:p,pathnameOriginal:d,hasBaseServer:v,search:l,searchAll:c,searchOriginal:s,hash:i,hashOriginal:n}}function it(e){const[t,...n]=e.split("#");return{hashString:["",...n].join("#")||null,withoutHash:t}}function oe(e){const[t,...n]=e.split("?");return{searchString:["",...n].join("?")||null,withoutSearch:t}}function Ee(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function st(e){return e=e.replace(/\s+$/,""),e=e.split("/").map(t=>Ee(t).split("/").join("%2F")).join("/"),e}function ot(e,t){o(!e.includes("?")&&!e.includes("#"));{const{protocol:n,origin:r,pathname:i}=ae(e);if(r)return{protocol:n,origin:r,pathnameAbsoluteWithBase:i};o(i===e)}if(e.startsWith("/"))return{protocol:null,origin:null,pathnameAbsoluteWithBase:e};{const n=Se();let r;return n?r=ae(n.split("?")[0].split("#")[0]).pathname:r=t,{protocol:null,origin:null,pathnameAbsoluteWithBase:ut(e,r)}}}function Se(){var t;return typeof window<"u"?(t=window==null?void 0:window.document)==null?void 0:t.baseURI:void 0}function ae(e){if(Pe(e)){const{protocol:t,uriWithoutProtocol:n}=be(e);o(t);const[r,...i]=n.split("/"),s=t+r;return{pathname:"/"+i.join("/"),origin:s,protocol:t}}else return{pathname:e,origin:null,protocol:null}}function at(e,t){const n={hostname:null,port:null};if(!e)return n;const r=e.split(":");if(r.length>1){const i=parseInt(r.pop(),10);o(i||i===0,t),n.port=i}return n.hostname=r.join(":"),n}function be(e){const t=":",[n,...r]=e.split(t);if(r.length===0||!/^[a-z][a-z0-9\+\-]*$/i.test(n))return{protocol:null,uriWithoutProtocol:e};let i=n+t,s=r.join(t);const a="//";return s.startsWith(a)&&(i=i+a,s=s.slice(a.length)),{protocol:i,uriWithoutProtocol:s}}function lt(e){return["ipfs://","ipns://"].includes(e)?!1:e.endsWith("://")}function ut(e,t){const n=t.split("/"),r=e.split("/");let i=t.endsWith("/");e.startsWith(".")&&n.pop();for(const a in r){const u=r[a];u==""&&a==="0"||u!="."&&(u==".."?n.pop():(i=!1,n.push(u)))}let s=n.join("/");return i&&!s.endsWith("/")&&(s+="/"),s.startsWith("/")||(s="/"+s),s}function ct(e,t){return o(e.startsWith("/")),o(ft(t)),o(e.startsWith("/")),o(t.startsWith("/")),{pathname:e,hasBaseServer:!0}}function ft(e){return e.startsWith("/")}function dt(e,t,n,r,i){const s=we(t,n,r,i);o(e===s)}function we(e,t,n,r){return`${e||""}${t}${n||""}${r||""}`}function gt(e){return Pe(e)||e.startsWith("/")||pt(e)}function pt(e){return[".","?","#"].some(t=>e.startsWith(t))||e===""}function Pe(e){const{protocol:t}=be(e);return!!t&&lt(t)}function ht(e){return typeof e=="string"&&mt(e)?`.${e}`:`[${JSON.stringify(e)}]`}function mt(e){return/^[a-z0-9\$_]+$/i.test(e)}Qe();const yt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],r=t[2];return new RegExp(n,r)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function Ce(e){const t=JSON.parse(e);return K(t)}function K(e){return typeof e=="string"?vt(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=K(n)}),e)}function vt(e){for(const{match:t,deserialize:n}of yt)if(t(e))return n(e,Ce);return e}function Et(){const e="vike_pageContext",t=document.getElementById(e);h(t,`Couldn't find #${e} (which Vike automatically injects in the HTML): make sure it exists (i.e. don't remove it and make sure your HTML isn't malformed)`);const n=t.textContent;o(n);const r=Ce(n);return o(m(r,"pageId","string")),o(m(r,"routeParams","string{}")),r}function St(e){return(t,n)=>{const r=e(t),i=e(n);if(o([!0,!1,null].includes(r)),o([!0,!1,null].includes(i)),r===i)return 0;if(r===!0||i===!1)return-1;if(i===!0||r===!1)return 1;o(!1)}}function bt(e){return St(t=>{const n=e(t);return n===null?null:!n})}function wt(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const Pt=e=>e!=null;function _e(e){const t=n=>`Not a posix path: ${n}`;o(e!==null,t("null")),o(typeof e=="string",t(`typeof path === ${JSON.stringify(typeof e)}`)),o(e!=="",t("(empty string)")),o(e),o(!e.includes("\\"),t(e))}const $e=["js","ts","cjs","cts","mjs","mts"],Ct=["jsx","tsx","cjsx","ctsx","mjsx","mtsx"],je=["vue","svelte","marko","md","mdx"],_t=[...$e,...Ct,...je];function Re(e){const t=_t.some(n=>e.endsWith("."+n));return $t(e)&&o(t),t}function $t(e){const t=/\.(c|m)?(j|t)s$/.test(e),n=$e.some(r=>e.endsWith("."+r));return o(t===n),t}function jt(e){return je.some(t=>e.endsWith("."+t))}const Rt=["clientRouting"];function Tt(e){Rt.forEach(t=>{if(o(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;h(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),h(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const Te=["render","clientRouting","prerender","doNotPrerender"];function xt(e,t){h(!Te.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function Ot(e){const t=".page.",n=ve(e.split(t),0,-1).join(t);return o(!n.includes("\\")),n}function x(e){_e(e)}function X(e,t){return o(!e.includes("\\")),e.includes("/_error")}function Ft(e,t){if(t.length>0){const n=t.find(r=>r.pageId===e);return o(n),!!n.isErrorPage}else return X(e)}const It=[".page",".page.server",".page.route",".page.client",".css"];function zt(e){if(_e(e),e.endsWith(".css"))return".css";o(Re(e),e);const n=e.split("/").slice(-1)[0].split("."),r=n.slice(-3)[0],i=n.slice(-2)[0];if(i==="page")return".page";if(o(r==="page",e),i==="server")return".page.server";if(i==="client")return".page.client";if(i==="route")return".page.route";o(!1,e)}function xe(e){const t=s=>i.pageId===s||i.isDefaultPageFile&&(le(i.filePath)||Lt(s,i.filePath)),n=zt(e),i={filePath:e,fileType:n,isEnv:s=>{if(o(n!==".page.route"),s==="CLIENT_ONLY")return n===".page.client"||n===".css";if(s==="SERVER_ONLY")return n===".page.server";if(s==="CLIENT_AND_SERVER")return n===".page";o(!1)},isRelevant:t,isDefaultPageFile:G(e),isRendererPageFile:n!==".css"&&G(e)&&le(e),isErrorPageFile:X(e),pageId:Ot(e)};return i}function G(e){return x(e),X(e)?!1:e.includes("/_default")}function le(e){return x(e),e.includes("/renderer/")}function Lt(e,t){x(e),x(t),o(!e.endsWith("/")),o(!t.endsWith("/")),o(G(t));const n=ve(t.split("/"),0,-1).filter(r=>r!=="_default").join("/");return e.startsWith(n)}function kt(e,t){if(!e)return null;let[n,...r]=e;if(!n||r.length===0&&["*","default",t].includes(n))return null;o(n!=="*");let i="",s="";return n==="default"?i="export default":(i="export",r=[n,...r]),r.forEach(u=>{i=`${i} { ${u}`,s=` }${s}`}),i+s}function At(e,t,n){return`${J(e,t)} at ${L(n,t)}`}function Wt(e,t,n){return n?`${J(e,t)} at ${L(n,t)}`:`${J(e,t)} internally`}function J(e,t){return`${e} ${y.cyan(t)} defined`}function L(e,t){let n;return T(e)?n=e:n=[e],o(n.length>=1),n.map(i=>{const{filePathToShowToUser:s,fileExportPathToShowToUser:a}=i;let u=s;const l=kt(a,t);return l&&(u=`${u} > ${y.cyan(l)}`),u}).join(" / ")}const Dt=["$$registrations","_rerender_only"],Vt=[".md",".mdx"];function Ut(e,t,n){const r=Object.keys(e),i=c=>c==="default"||c===n,s=r.filter(i),a=y.code("export default"),u=y.code(`export { ${n} }`);s.length===0&&h(!1,`${t} should have ${u} or ${a}`),s.length===2&&h(!1,`${t} is ambiguous: remove ${a} or ${u}`),o(s.length===1);const l=r.filter(c=>!i(c)).filter(c=>!Dt.includes(c));Vt.some(c=>t.endsWith(c))||l.forEach(c=>{_(!1,`${t} unexpected ${y.cyan(`export { ${c} }`)}, see https://vike.dev/no-side-exports`,{onlyOnce:!0})})}function Y(e){return Nt(e)}function Bt(e,t){const n=e.map(i=>{const s=Y(i.configValuesSerialized),{pageId:a,isErrorPage:u,routeFilesystem:l,loadConfigValuesAll:c}=i;return Ht(s),{pageId:a,isErrorPage:u,routeFilesystem:l,configValues:s,loadConfigValuesAll:c}}),r={configValues:{}};{const i=Y(t.configValuesSerialized);Object.assign(r.configValues,i)}return{pageConfigs:n,pageConfigGlobal:r}}function Ht(e){const t="route",n=e[t];if(!n)return;const{value:r,definedAtData:i}=n,s=typeof r;o(i);const a=At("Config",t,i);h(s==="string"||U(r),`${a} has an invalid type '${s}': it should be a string or a function instead, see https://vike.dev/route`)}function Nt(e){const t={};return Object.entries(e).forEach(([r,i])=>{let s;if(i.type==="cumulative"){const{valueSerialized:a,...u}=i;s={value:a.map((c,g)=>{const{value:f,sideExports:S}=ue(c,r,()=>{const d=i.definedAtData[g];return o(d),d});return n(S),f}),...u}}else{const{valueSerialized:a,...u}=i,{value:l,sideExports:c}=ue(a,r,()=>(o(i.type!=="computed"),i.definedAtData));n(c),s={value:l,...u}}t[r]=s}),t;function n(r){r.forEach(i=>{const{configName:s,configValue:a}=i;t[s]||(t[s]=a)})}}function ue(e,t,n){if(e.type==="js-serialized"){let{value:r}=e;return r=K(r),{value:r,sideExports:[]}}if(e.type==="pointer-import"){const{value:r}=e;return{value:r,sideExports:[]}}if(e.type==="plus-file"){const r=n(),{exportValues:i}=e;Ut(i,r.filePathToShowToUser,t);let s,a=!1;const u=[];return Object.entries(i).forEach(([l,c])=>{l!=="default"&&l!==t?u.push({configName:l,configValue:{type:"standard",value:c,definedAtData:{filePathToShowToUser:r.filePathToShowToUser,fileExportPathToShowToUser:[l]}}}):(s=c,o(!a),a=!0)}),o(a),{value:s,sideExports:u}}o(!1)}function Gt(e){o(m(e,"pageFilesLazy","object")),o(m(e,"pageFilesEager","object")),o(m(e,"pageFilesExportNamesLazy","object")),o(m(e,"pageFilesExportNamesEager","object")),o(m(e.pageFilesLazy,".page")),o(m(e.pageFilesLazy,".page.client")||m(e.pageFilesLazy,".page.server")),o(m(e,"pageFilesList","string[]")),o(m(e,"pageConfigsSerialized")),o(m(e,"pageConfigGlobalSerialized"));const{pageConfigsSerialized:t,pageConfigGlobalSerialized:n}=e;Jt(t),Yt(n);const{pageConfigs:r,pageConfigGlobal:i}=Bt(t,n),s={};I(e.pageFilesLazy).forEach(({filePath:u,pageFile:l,globValue:c})=>{l=s[u]=s[u]??l;const g=c;ce(g),l.loadFile=async()=>{"fileExports"in l||(l.fileExports=await g(),Tt(l))}}),I(e.pageFilesExportNamesLazy).forEach(({filePath:u,pageFile:l,globValue:c})=>{l=s[u]=s[u]??l;const g=c;ce(g),l.loadExportNames=async()=>{if(!("exportNames"in l)){const f=await g();o(m(f,"exportNames","string[]"),l.filePath),l.exportNames=f.exportNames}}}),I(e.pageFilesEager).forEach(({filePath:u,pageFile:l,globValue:c})=>{l=s[u]=s[u]??l;const g=c;o(b(g)),l.fileExports=g}),I(e.pageFilesExportNamesEager).forEach(({filePath:u,pageFile:l,globValue:c})=>{l=s[u]=s[u]??l;const g=c;o(b(g)),o(m(g,"exportNames","string[]"),l.filePath),l.exportNames=g.exportNames}),e.pageFilesList.forEach(u=>{s[u]=s[u]??xe(u)});const a=Object.values(s);return a.forEach(({filePath:u})=>{o(!u.includes("\\"))}),{pageFiles:a,pageConfigs:r,pageConfigGlobal:i}}function I(e){const t=[];return Object.entries(e).forEach(([n,r])=>{o(It.includes(n)),o(b(r)),Object.entries(r).forEach(([i,s])=>{const a=xe(i);o(a.fileType===n),t.push({filePath:i,pageFile:a,globValue:s})})}),t}function ce(e){o(U(e))}function Jt(e){o(T(e)),e.forEach(t=>{o(b(t)),o(m(t,"pageId","string")),o(m(t,"routeFilesystem")),o(m(t,"configValuesSerialized"))})}function Yt(e){o(m(e,"configValuesSerialized"))}function Mt(e){if(!e||T(e))return null;const{filePathToShowToUser:t}=e;return o(t),t}function qt(e,t){const n={},r={},i={};e.forEach(f=>{Kt(f).forEach(({exportName:d,exportValue:p,isFromDefaultExport:v})=>{o(d!=="default"),i[d]=i[d]??[],i[d].push({exportValue:p,exportSource:`${f.filePath} > ${v?`\`export default { ${d} }\``:`\`export { ${d} }\``}`,filePath:f.filePath,_filePath:f.filePath,_fileType:f.fileType,_isFromDefaultExport:v})})});let s,a,u;if(t){const f=Oe(t);s=f.source,a=f.sources,u=f.from,Object.assign(n,f.config),Object.assign(r,f.configEntries),Object.assign(i,f.exportsAll)}else s={},a={},u={configsStandard:{},configsCumulative:{},configsComputed:{}};const l=Xt(),c={};return Object.entries(i).forEach(([f,S])=>{S.forEach(({exportValue:d,_fileType:p,_isFromDefaultExport:v})=>{c[f]=c[f]??d,p===".page"&&!v&&(f in l||(l[f]=d))})}),o(!("default"in c)),o(!("default"in i)),{from:u,source:s,sources:a,config:n,configEntries:r,exports:c,exportsAll:i,pageExports:l}}function Oe(e){const t={},n={},r={},i={},s={},a={configsStandard:{},configsCumulative:{},configsComputed:{}},u=(l,c)=>{i[c]=l,s[c]??(s[c]=[]),s[c].push(l)};return Object.entries(e.configValues).forEach(([l,c])=>{const{value:g}=c,f=Mt(c.definedAtData),S=Wt("Config",l,c.definedAtData);if(t[l]=t[l]??g,n[l]=n[l]??[],o(n[l].length===0),n[l].push({configValue:g,configDefinedAt:S,configDefinedByFile:f}),c.type==="standard"){const p={type:"configsStandard",value:c.value,definedAt:L(c.definedAtData,l)};u(p,l),a.configsStandard[l]=p}if(c.type==="cumulative"){const p={type:"configsCumulative",values:c.value.map((v,P)=>{const F=c.definedAtData[P];o(F);const B=L(F,l);return{value:v,definedAt:B}})};u(p,l),a.configsCumulative[l]=p}if(c.type==="computed"){const p={type:"configsComputed",value:c.value};u(p,l),a.configsComputed[l]=p}const d=l;r[d]=r[d]??[],r[d].push({exportValue:g,exportSource:S,filePath:f,_filePath:f,_fileType:null,_isFromDefaultExport:null})}),{config:t,configEntries:n,exportsAll:r,source:i,sources:s,from:a}}function Kt(e){const{filePath:t,fileExports:n}=e;o(n),o(Re(t));const r=[];return Object.entries(n).sort(bt(([i])=>i==="default")).forEach(([i,s])=>{let a=i==="default";if(a)if(jt(t))i="Page";else{h(b(s),`The ${y.cyan("export default")} of ${t} should be an object.`),Object.entries(s).forEach(([u,l])=>{xt(u,t),r.push({exportName:u,exportValue:l,isFromDefaultExport:a})});return}r.push({exportName:i,exportValue:s,isFromDefaultExport:a})}),r.forEach(({exportName:i,isFromDefaultExport:s})=>{o(!(s&&Te.includes(i)))}),r}function Xt(){return new Proxy({},{get(...e){return q()||_(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}const R=j("setPageFiles.ts",{});function Qt(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:r}=Gt(e);R.pageFilesAll=t,R.pageConfigs=n,R.pageConfigGlobal=r,R.globalConfig=Oe(r)}async function Zt(e,t){o(!R.pageFilesGetter),o(t===void 0);const{pageFilesAll:n,pageConfigs:r,pageConfigGlobal:i,globalConfig:s}=R;o(n&&r&&i&&s);const a=en(n,r);return{pageFilesAll:n,allPageIds:a,pageConfigs:r,pageConfigGlobal:i,globalConfig:s}}function en(e,t){const n=e.filter(({isDefaultPageFile:s})=>!s).map(({pageId:s})=>s),r=pe(n),i=t.map(s=>s.pageId);return[...r,...i]}function tn(e,t){return nn(e,t,!0)}function nn(e,t,n){const r="CLIENT_ONLY",i=e.filter(d=>d.isRelevant(t)&&d.fileType!==".page.route").sort(rn(n,t)),s=d=>{const p=i.filter(P=>P.pageId===t&&P.isEnv(d?"CLIENT_AND_SERVER":r));h(p.length<=1,`Merge the following files into a single file: ${p.map(P=>P.filePath).join(" ")}`);const v=p[0];return o(v===void 0||!v.isDefaultPageFile),v},a=s(!1),u=s(!0),l=d=>i.filter(p=>p.isRendererPageFile&&p.isEnv(d?"CLIENT_AND_SERVER":r))[0],c=l(!1),g=l(!0),f=i.filter(d=>d.isDefaultPageFile&&!d.isRendererPageFile&&(d.isEnv(r)||d.isEnv("CLIENT_AND_SERVER")));return[a,u,...f,c,g].filter(Pt)}function rn(e,t){const n="CLIENT_ONLY";return(a,u)=>{if(!a.isDefaultPageFile&&u.isDefaultPageFile)return-1;if(!u.isDefaultPageFile&&a.isDefaultPageFile)return 1;{const l=a.isRendererPageFile,c=u.isRendererPageFile;if(!l&&c)return-1;if(!c&&l)return 1;o(l===c)}{const l=fe(t,a.filePath),c=fe(t,u.filePath);if(l<c)return-1;if(c<l)return 1;o(l===c)}{if(a.isEnv(n)&&u.isEnv("CLIENT_AND_SERVER"))return-1;if(u.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return 1}return 0}}function fe(e,t){x(e),x(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const r=e.slice(n),i=t.slice(n),s=r.split("/").length,a=i.split("/").length;return s+a}function sn(e,t){const n=e.filter(i=>i.pageId===t);return o(n.length<=1),n[0]??null}async function on(e,t){if("isAllLoaded"in e&&!t)return e;const n=await e.loadConfigValuesAll(),r=Y(n.configValuesSerialized);return Object.assign(e.configValues,r),C(e,{isAllLoaded:!0}),e}const an="__whileFetchingAssets";async function ln(e,t,n){const r=tn(t,e),i=sn(n,e);let s;const a=!1;try{s=(await Promise.all([i&&on(i,a),...r.map(g=>{var f;return(f=g.loadFile)==null?void 0:f.call(g)})]))[0]}catch(c){throw un(c)&&Object.assign(c,{[an]:!0}),c}const u=qt(r,s),l={};return C(l,u),C(l,{_pageFilesLoaded:r}),l}function un(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}function cn(e,t){o(!e.startsWith("#"));const{searchOriginal:n,hashOriginal:r,pathname:i}=rt(e,"/");let s=`${i}${n||""}`;return t!=null&&t.withoutHash||(s+=r||""),o(s.startsWith("/")),s}function Fe(e){return cn(window.location.href,e)}const fn="modulepreload",dn=function(e){return"/"+e},de={},O=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=dn(l),l in de)return;de[l]=!0;const c=l.endsWith(".css"),g=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${g}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":fn,c||(f.as="script"),f.crossOrigin="",f.href=l,u&&f.setAttribute("nonce",u),document.head.appendChild(f),c)return new Promise((S,d)=>{f.addEventListener("load",S),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=a,window.dispatchEvent(u),!u.defaultPrevented)throw a}return i.then(a=>{for(const u of a||[])u.status==="rejected"&&s(u.reason);return t().catch(s)})},Q={},gn={},pn={},hn={},mn=[],Ie={},yn=[{pageId:"/pages/index",isErrorPage:void 0,routeFilesystem:{routeString:"/",definedBy:"/pages/index/"},loadConfigValuesAll:()=>O(()=>import("./pages_index.DFNUEU4S.js"),__vite__mapDeps([0,1,2])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/open-props",isErrorPage:void 0,routeFilesystem:{routeString:"/open-props",definedBy:"/pages/open-props/"},loadConfigValuesAll:()=>O(()=>import("./pages_open-props.BYvsB2wX.js"),__vite__mapDeps([3,1,2])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/sarah",isErrorPage:void 0,routeFilesystem:{routeString:"/sarah",definedBy:"/pages/sarah/"},loadConfigValuesAll:()=>O(()=>import("./pages_sarah.BjIJEL5P.js"),__vite__mapDeps([4,1,5,2])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/sarah/the-digital-cup",isErrorPage:void 0,routeFilesystem:{routeString:"/sarah/the-digital-cup",definedBy:"/pages/sarah/the-digital-cup/"},loadConfigValuesAll:()=>O(()=>import("./pages_sarah_the-digital-cup.8aCFdQA5.js"),__vite__mapDeps([6,1,5,2])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/style-guide",isErrorPage:void 0,routeFilesystem:{routeString:"/style-guide",definedBy:"/pages/style-guide/"},loadConfigValuesAll:()=>O(()=>import("./pages_style-guide.gWKHl83G.js"),__vite__mapDeps([7,1,5,2])),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}}],vn={configValuesSerialized:{}},En=Object.assign({}),Sn={...En};Q[".page"]=Sn;const bn=Object.assign({}),wn={...bn};Q[".page.client"]=wn;const Pn=Object.assign({}),Cn={...Pn};Ie[".page.server"]=Cn;const _n=Object.freeze(Object.defineProperty({__proto__:null,neverLoaded:Ie,pageConfigGlobalSerialized:vn,pageConfigsSerialized:yn,pageFilesEager:gn,pageFilesExportNamesEager:hn,pageFilesExportNamesLazy:pn,pageFilesLazy:Q,pageFilesList:mn},Symbol.toStringTag,{value:"Module"})),ge=Fe({withoutHash:!0});Qt(_n);async function $n(){const e=Et();return C(e,{isHydration:!0,isBackwardNavigation:null,_hasPageContextFromServer:!0,_hasPageContextFromClient:!1}),C(e,await Rn(e.pageId)),jn(),e}function jn(){const e=Fe({withoutHash:!0});h(ge===e,`The URL was manipulated before the hydration finished ('${ge}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function Rn(e){const t={},{pageFilesAll:n,pageConfigs:r}=await Zt();return C(t,{_pageFilesAll:n,_pageConfigs:r}),C(t,await ln(e,t._pageFilesAll,t._pageConfigs)),n.filter(i=>i.fileType!==".page.server").forEach(i=>{var s;_(!((s=i.fileExports)!=null&&s.onBeforeRender),`export { onBeforeRender } of ${i.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),t}const Tn=j("getHook.ts",{});function M(e,t){if(!(t in e.exports))return null;const{hooksTimeout:n}=e.config,r=Fn(n,t),i=e.exports[t],s=e.exportsAll[t][0];if(o(s.exportValue===i),i===null)return null;const a=s.filePath;return o(a),o(!a.endsWith(" ")),On(i,{hookName:t,hookFilePath:a}),{hookFn:i,hookName:t,hookFilePath:a,hookTimeout:r}}function xn(e,t){M(e,t)}function On(e,{hookName:t,hookFilePath:n}){o(t&&n),o(!t.endsWith(")")),h(U(e),`Hook ${t}() defined by ${n} should be a function`)}function Fn(e,t){const n=In(e);if(n===!1)return{error:!1,warning:!1};const r=n[t],i=zn(t);return(r==null?void 0:r.error)!==void 0&&(i.error=r.error),(r==null?void 0:r.warning)!==void 0&&(i.warning=r.warning),i}function In(e){if(e===void 0)return{};if(e===!1)return!1;h(b(e),`Setting ${y.cyan("hooksTimeout")} should be ${y.cyan("false")} or an object`);const t={};return Object.entries(e).forEach(([n,r])=>{if(r===!1){t[n]={error:!1,warning:!1};return}h(b(r),`Setting ${y.cyan(`hooksTimeout.${n}`)} should be ${y.cyan("false")} or an object`);const[i,s]=["error","warning"].map(a=>{const u=r[a];if(u===void 0||u===!1)return u;const l=`Setting ${y.cyan(`hooksTimeout.${n}.${a}`)} should be`;return h(typeof u=="number",`${l} ${y.cyan("false")} or a number`),h(u>0,`${l} a positive number`),u});t[n]={error:i,warning:s}}),t}function zn(e){return e==="onBeforeRoute"?{error:5*1e3,warning:1*1e3}:Tn.isPrerendering?{error:2*60*1e3,warning:30*1e3}:(o(!e.toLowerCase().includes("prerender")),{error:30*1e3,warning:4*1e3})}const Ln="not-serializable",z=j("getPageContextProxyForUser.ts",{});function kn(e){return o([!0,!1].includes(e._hasPageContextFromServer)),o([!0,!1].includes(e._hasPageContextFromClient)),new Proxy(e,{get(t,n){const r=e[n],i=ht(n);return h(r!==Ln,`Can't access pageContext${i} on the client side. Because it can't be serialized, see server logs.`),An(e,n,i),r}})}function An(e,t,n){if(Vn(t)||t in e||Dn(t)||!e._hasPageContextFromServer)return;const r=`pageContext${n} isn't defined on the client-side, see https://vike.dev/passToClient#error`;e._hasPageContextFromClient?_(!1,r,{onlyOnce:!1,showStackTrace:!0}):h(!1,r)}const Wn=["then","toJSON"];function Dn(e){return!!(Wn.includes(e)||typeof e=="symbol"||typeof e!="string"||e.startsWith("__v_"))}function Vn(e){return z.prev===e||z.prev==="__v_raw"?!0:(z.prev=e,window.setTimeout(()=>{z.prev=void 0},0),!1)}function Un(e){Bn(e),Hn(e)}function Bn(e){Ft(e.pageId,e._pageConfigs)&&o(m(e,"is404","boolean"))}function Hn(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!b(t)){_(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}function Nn(e){o(e.pageId),o("config"in e),o("configEntries"in e),Un(e),"_pageId"in e||Object.defineProperty(e,"_pageId",{get(){return _(!1,"pageContext._pageId has been renamed to pageContext.pageId",{showStackTrace:!0,onlyOnce:!0}),e.pageId},enumerable:!1}),Gn(e)}function Gn(e){let t=Object.getOwnPropertyDescriptors(e);for(const n of Object.keys(e))delete e[n];t=Object.fromEntries(Object.entries(t).sort(([n],[r])=>wt(n,r))),Object.defineProperties(e,t)}function Jn(e,t){{const i=e;o(i.isHydration===!0),o(i.isBackwardNavigation===null)}const n=e.config.Page||e.exports.Page;return C(e,{Page:n}),Yn(e),Nn(e),kn(e)}function Yn(e){Mn(e)}function Mn(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}async function qn(e,t){const n=Jn(e);let r=null,i;r=M(e,"render"),i="render";{const u=M(e,"onRenderClient");u&&(r=u,i="onRenderClient")}if(!r){const u=Kn(e);if(o(u),e._pageConfigs.length>0)h(!1,`No onRenderClient() hook defined for URL '${u}', but it's needed, see https://vike.dev/onRenderClient`);else{const l=e._pageFilesLoaded.filter(g=>g.fileType===".page.client");let c;l.length===0?c="No file `*.page.client.*` found for URL "+u:c="One of the following files should export a render() hook: "+l.map(g=>g.filePath).join(" "),h(!1,c)}}o(r);const s=r.hookFn;o(i);const a=await Ze(()=>s(n),r,e);h(a===void 0,`The ${i}() hook defined by ${r.hookFilePath} isn't allowed to return a value`)}function Kn(e){let t;try{t=e.urlPathname??e.urlOriginal}catch{}return t=t??window.location.href,t}qe();We();Xn();async function Xn(){var t,n;const e=await $n();await qn(e),xn(e,"onHydrationEnd"),await((n=(t=e.exports).onHydrationEnd)==null?void 0:n.call(t,e))}
