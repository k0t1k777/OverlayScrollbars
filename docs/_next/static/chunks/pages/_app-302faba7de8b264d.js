(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8936:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8475)}])},4732:function(t,e,r){"use strict";r.d(e,{a:function(){return rZ}});var n=r(1809),l=r(7378);/*!
 * OverlayScrollbars
 * Version: 2.0.0
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */ function i(t,e){if(x(t))for(let r=0;r<t.length&&!1!==e(t[r],r,t);r++);else t&&i(Object.keys(t),r=>e(t[r],r,t));return t}function o(t,e){let r=v(e),n=m(e)||r;if(n){let l=r?"":{};if(t){let o=window.getComputedStyle(t,null);l=r?tM(t,o,e):e.reduce((e,r)=>(e[r]=tM(t,o,r),e),l)}return l}t&&i(T(e),r=>tI(t,r,e[r]))}let a=(t,e)=>{let{o:r,u:n,_:l}=t,i=r,o,a=(t,e)=>{let r=i,a=e||(n?!n(r,t):r!==t);return(a||l)&&(i=t,o=r),[i,a,o]},u=t=>a(e(i,o),t),s=t=>[i,!!t,o];return[e?u:a,s]},u=()=>"undefined"!=typeof window,s=u()&&Node.ELEMENT_NODE,{toString:c,hasOwnProperty:d}=Object.prototype,f=t=>void 0===t,p=t=>null===t,b=t=>f(t)||p(t)?`${t}`:c.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),h=t=>"number"==typeof t,v=t=>"string"==typeof t,y=t=>"boolean"==typeof t,g=t=>"function"==typeof t,m=t=>Array.isArray(t),w=t=>"object"==typeof t&&!m(t)&&!p(t),x=t=>{let e=!!t&&t.length,r=h(e)&&e>-1&&e%1==0;return(!!m(t)||!g(t)&&!!r)&&(!(e>0&&w(t))||e-1 in t)},O=t=>{if(!t||!w(t)||"object"!==b(t))return!1;let e,r="constructor",n=t[r],l=n&&n.prototype,i=d.call(t,r),o=l&&d.call(l,"isPrototypeOf");if(n&&!i&&!o)return!1;for(e in t);return f(e)||d.call(t,e)},_=t=>{let e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===s)},S=t=>{let e=Element;return!!t&&(e?t instanceof e:t.nodeType===s)},j=(t,e,r)=>t.indexOf(e,r),$=(t,e,r)=>(!r&&!v(e)&&x(e)?Array.prototype.push.apply(t,e):t.push(e),t),E=t=>{let e=Array.from,r=[];return e&&t?e(t):(t instanceof Set?t.forEach(t=>{$(r,t)}):i(t,t=>{$(r,t)}),r)},P=t=>!!t&&0===t.length,C=(t,e,r)=>{let n=t=>t&&t.apply(void 0,e||[]);i(t,n),r||(t.length=0)},k=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),T=t=>t?Object.keys(t):[],A=(t,e,r,n,l,o,a)=>(("object"!=typeof t||p(t))&&!g(t)&&(t={}),i([e,r,n,l,o,a],e=>{i(T(e),r=>{let n=e[r];if(t===n)return!0;let l=m(n);if(n&&(O(n)||l)){let i=t[r],o=i;l&&!m(i)?o=[]:l||O(i)||(o={}),t[r]=A(o,n)}else t[r]=n})}),t),L=t=>{for(let e in t)return!1;return!0},M=(t,e,r,n)=>{if(f(n))return r?r[t]:e;r&&(v(n)||h(n))&&(r[t]=n)},I=(t,e,r)=>{if(f(r))return t?t.getAttribute(e):null;t&&t.setAttribute(e,r)},z=(t,e,r,n)=>{if(r){let l=I(t,e)||"",i=new Set(l.split(" "));i[n?"add":"delete"](r),I(t,e,E(i).join(" ").trim())}},N=(t,e,r)=>{let n=I(t,e)||"",l=new Set(n.split(" "));return l.has(r)},Z=(t,e)=>{t&&t.removeAttribute(e)},R=(t,e)=>M("scrollLeft",0,t,e),B=(t,e)=>M("scrollTop",0,t,e),H=u()&&Element.prototype,X=(t,e)=>{let r=[],n=e?S(e)?e:null:document;return n?$(r,n.querySelectorAll(t)):r},D=(t,e)=>{let r=e?S(e)?e:null:document;return r?r.querySelector(t):null},F=(t,e)=>{if(S(t)){let r=H.matches||H.msMatchesSelector;return r.call(t,e)}return!1},Y=t=>t?E(t.childNodes):[],K=t=>t?t.parentElement:null,q=(t,e)=>{if(S(t)){let r=H.closest;if(r)return r.call(t,e);do{if(F(t,e))return t;t=K(t)}while(t)}return null},J=(t,e,r)=>{let n=t&&q(t,e),l=t&&D(r,n),i=q(l,e)===n;return!!n&&!!l&&(n===t||l===t||i&&q(q(t,r),e)!==n)},V=(t,e,r)=>{if(r&&t){let n=e,l;x(r)?(l=document.createDocumentFragment(),i(r,t=>{t===n&&(n=t.previousSibling),l.appendChild(t)})):l=r,e&&(n?n!==e&&(n=n.nextSibling):n=t.firstChild),t.insertBefore(l,n||null)}},W=(t,e)=>{V(t,null,e)},G=(t,e)=>{V(K(t),t,e)},U=(t,e)=>{V(K(t),t&&t.nextSibling,e)},Q=t=>{if(x(t))i(E(t),t=>Q(t));else if(t){let e=K(t);e&&e.removeChild(t)}},tt=t=>{let e=document.createElement("div");return t&&I(e,"class",t),e},te=t=>{let e=tt();return e.innerHTML=t.trim(),i(Y(e),t=>Q(t))},tr=t=>t.charAt(0).toUpperCase()+t.slice(1),tn=()=>tt().style,tl=["-webkit-","-moz-","-o-","-ms-"],ti=["WebKit","Moz","O","MS","webkit","moz","o","ms"],to={},ta={},tu=t=>{let e=ta[t];if(k(ta,t))return e;let r=tr(t),n=tn();return i(tl,l=>{let i=l.replace(/-/g,""),o=[t,l+t,i+r,tr(i)+r];return!(e=o.find(t=>void 0!==n[t]))}),ta[t]=e||""},ts=t=>{if(u()){let e=to[t]||window[t];return k(to,t)||(i(ti,r=>!(e=e||window[r+tr(t)])),to[t]=e),e}},tc=ts("MutationObserver"),td=ts("IntersectionObserver"),tf=ts("ResizeObserver"),tp=ts("cancelAnimationFrame"),tb=ts("requestAnimationFrame"),th=u()&&window.setTimeout,tv=u()&&window.clearTimeout,ty=(t,e,r,n)=>{if(t&&e){let l=!0;return i(r,r=>{let i=n?n(t[r]):t[r],o=n?n(e[r]):e[r];i!==o&&(l=!1)}),l}return!1},tg=(t,e)=>ty(t,e,["w","h"]),tm=(t,e)=>ty(t,e,["x","y"]),tw=(t,e)=>ty(t,e,["t","r","b","l"]),tx=(t,e,r)=>ty(t,e,["width","height"],r&&(t=>Math.round(t))),tO=()=>{},t_=t=>{let e,r=t?th:tb,n=t?tv:tp;return[l=>{n(e),e=r(l,g(t)?t():t)},()=>n(e)]},tS=(t,e)=>{let r,n,l,i=tO,{g:o,v:a,p:u}=e||{},s=function(e){i(),tv(r),r=n=void 0,i=tO,t.apply(this,e)},c=t=>u&&n?u(n,t):t,d=()=>{i!==tO&&s(c(l)||l)},f=function(){let t=E(arguments),e=g(o)?o():o,u=h(e)&&e>=0;if(u){let f=g(a)?a():a,p=h(f)&&f>=0,b=e>0?tv:tp,v=c(t),y=v||t,m=s.bind(0,y);i();let w=(e>0?th:tb)(m,e);i=()=>b(w),p&&!r&&(r=th(d,f)),n=l=y}else s(t)};return f.m=d,f},{max:tj}=Math,t$=/[^\x20\t\r\n\f]+/g,tE=(t,e,r)=>{let n=t&&t.classList,l,i=0,o=!1;if(n&&e&&v(e)){let a=e.match(t$)||[];for(o=a.length>0;l=a[i++];)o=!!r(n,l)&&o}return o},tP=(t,e)=>tE(t,e,(t,e)=>t.contains(e)),tC=(t,e)=>{tE(t,e,(t,e)=>t.remove(e))},tk=(t,e)=>(tE(t,e,(t,e)=>t.add(e)),tC.bind(0,t,e)),tT={opacity:1,zindex:1},tA=(t,e)=>{let r=e?parseFloat(t):parseInt(t,10);return r==r?r:0},tL=(t,e)=>!tT[t.toLowerCase()]&&h(e)?`${e}px`:e,tM=(t,e,r)=>null!=e?e[r]||e.getPropertyValue(r):t.style[r],tI=(t,e,r)=>{try{let{style:n}=t;f(n[e])?n.setProperty(e,r):n[e]=tL(e,r)}catch(l){}},tz=t=>"rtl"===o(t,"direction"),tN=(t,e,r)=>{let n=e?`${e}-`:"",l=r?`-${r}`:"",i=`${n}top${l}`,a=`${n}right${l}`,u=`${n}bottom${l}`,s=`${n}left${l}`,c=o(t,[i,a,u,s]);return{t:tA(c[i],!0),r:tA(c[a],!0),b:tA(c[u],!0),l:tA(c[s],!0)}},{round:tZ}=Math,tR={w:0,h:0},tB=t=>t?{w:t.offsetWidth,h:t.offsetHeight}:tR,tH=t=>t?{w:t.clientWidth,h:t.clientHeight}:tR,tX=t=>t?{w:t.scrollWidth,h:t.scrollHeight}:tR,tD=t=>{let e=parseFloat(o(t,"height"))||0,r=parseFloat(o(t,"width"))||0;return{w:r-tZ(r),h:e-tZ(e)}},tF=t=>t.getBoundingClientRect(),tY,tK=()=>{if(f(tY)){tY=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){tY=!0}}))}catch(t){}}return tY},tq=t=>t.split(" "),tJ=(t,e,r,n)=>{i(tq(e),e=>{t.removeEventListener(e,r,n)})},tV=(t,e,r,n)=>{var l;let o=tK(),a=null!=(l=o&&n&&n.S)?l:o,u=n&&n.$||!1,s=n&&n.C||!1,c=[],d=o?{passive:a,capture:u}:u;return i(tq(e),e=>{let n=s?l=>{t.removeEventListener(e,n,u),r&&r(l)}:r;$(c,tJ.bind(null,t,e,n,u)),t.addEventListener(e,n,d)}),C.bind(0,c)},tW=t=>t.stopPropagation(),tG=t=>t.preventDefault(),tU={x:0,y:0},tQ=t=>{let e=t?tF(t):0;return e?{x:e.left+window.pageYOffset,y:e.top+window.pageXOffset}:tU},t0=(t,e)=>{i(m(e)?e:[e],t)},t1=t=>{let e=new Map,r=(t,r)=>{if(t){let n=e.get(t);t0(t=>{n&&n[t?"delete":"clear"](t)},r)}else e.forEach(t=>{t.clear()}),e.clear()},n=(t,l)=>{if(v(t)){let o=e.get(t)||new Set;return e.set(t,o),t0(t=>{g(t)&&o.add(t)},l),r.bind(0,t,l)}y(l)&&l&&r();let a=T(t),u=[];return i(a,e=>{let r=t[e];r&&$(u,n(e,r))}),C.bind(0,u)},l=(t,r)=>{let n=e.get(t);i(E(n),t=>{r&&!P(r)?t.apply(0,r):t()})};return n(t||{}),[n,r,l]},t3=t=>JSON.stringify(t,(t,e)=>{if(g(e))throw Error();return e}),t2={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},t8=(t,e)=>{let r={},n=T(e).concat(T(t));return i(n,n=>{let l=t[n],i=e[n];if(w(l)&&w(i))A(r[n]={},t8(l,i)),L(r[n])&&delete r[n];else if(k(e,n)&&i!==l){let o=!0;if(m(l)||m(i))try{t3(l)===t3(i)&&(o=!1)}catch(a){}o&&(r[n]=i)}}),r},t7="os-environment",t5=`${t7}-flexbox-glue`,t6=`${t5}-max`,t9="data-overlayscrollbars",t4=`${t9}-overflow-x`,et=`${t9}-overflow-y`,ee="overflowVisible",er="updating",en="os-viewport",el=`${en}-arrange`,ei=`${en}-scrollbar-hidden`,eo="os-overflow-visible",ea="os-size-observer",eu=`${ea}-appear`,es=`${ea}-listener`,ec="os-scrollbar",ed=`${ec}-rtl`,ef=`${ec}-horizontal`,ep=`${ec}-vertical`,eb=`${ec}-track`,eh=`${ec}-handle`,ev=`${ec}-visible`,ey=`${ec}-cornerless`,eg=`${ec}-transitionless`,em=`${ec}-interaction`,ew=`${ec}-unusable`,ex=`${ec}-auto-hidden`,eO=`${ec}-wheel`,e_=`${eb}-interactive`,eS=`${eh}-interactive`,ej={},e$=()=>ej,eE=t=>{let e=[];return i(m(t)?t:[t],t=>{let r=T(t);i(r,r=>{$(e,ej[r]=t[r])})}),e},eP={boolean:"__TPL_boolean_TYPE__",number:"__TPL_number_TYPE__",string:"__TPL_string_TYPE__",array:"__TPL_array_TYPE__",object:"__TPL_object_TYPE__",function:"__TPL_function_TYPE__",null:"__TPL_null_TYPE__"};eP.number,eP.boolean,eP.array,eP.null,eP.number,eP.array,eP.null,eP.function,eP.null,eP.string,eP.null,eP.array,eP.null;let{round:eC,abs:ek}=Math,eT="__osScrollbarsHidingPlugin",eA,eL=(t,e,r,n)=>{W(t,e);let l=tH(e),i=tB(e),o=tD(r);return n&&Q(e),{x:i.h-l.h+o.h,y:i.w-l.w+o.w}},eM=t=>{let e=!1,r=tk(t,ei);try{e="none"===o(t,tu("scrollbar-width"))||"none"===window.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")}catch(n){}return r(),e},eI=(t,e)=>{let r="hidden";o(t,{overflowX:r,overflowY:r,direction:"rtl"}),R(t,0);let n=tQ(t),l=tQ(e);R(t,-999);let i=tQ(e);return{i:n.x===l.x,n:l.x!==i.x}},ez=(t,e)=>{let r=tk(t,t5),n=tF(t),l=tF(e),i=tx(l,n,!0),o=tk(t,t6),a=tF(t),u=tF(e),s=tx(u,a,!0);return r(),o(),i&&s},eN=()=>{let{body:t}=document,e=te(`<div class="${t7}"><div></div></div>`),r=e[0],n=r.firstChild,[l,,i]=t1(),[u,s]=a({o:eL(t,r,n),u:tm},eL.bind(0,t,r,n,!0)),[c]=s(),d=eM(r),f={x:0===c.x,y:0===c.y},p={elements:{host:null,padding:!d,viewport:t=>d&&t===t.ownerDocument.body&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},b=A({},t2),h=A.bind(0,{},b),v=A.bind(0,{},p),y={k:c,I:f,A:d,L:"-1"===o(r,"zIndex"),V:eI(r,n),B:ez(r,n),Y:l.bind(0,"z"),j:l.bind(0,"r"),q:v,N:t=>A(p,t)&&v(),F:h,G:t=>A(b,t)&&h(),X:A({},p),U:A({},b)},g=window.addEventListener,m=tS(t=>i(t?"z":"r"),{g:33,v:99});if(Z(r,"style"),Q(r),g("resize",m.bind(0,!1)),!d&&(!f.x||!f.y)){let w;g("resize",()=>{let t=e$()[eT];(w=w||t&&t.R())&&w(y,u,m.bind(0,!0))})}return y},eZ=()=>(eA||(eA=eN()),eA),eR=(t,e)=>g(e)?e.apply(0,t):e,eB=(t,e,r,n)=>{let l=f(n)?r:n,i=eR(t,l);return i||e.apply(0,t)},eH=(t,e,r,n)=>{let l=f(n)?r:n,i=eR(t,l);return!!i&&(_(i)?i:e.apply(0,t))},eX=(t,e,r)=>{let{nativeScrollbarsOverlaid:n,body:l}=r||{},{I:i,A:o}=eZ(),{nativeScrollbarsOverlaid:a,body:u}=e,s=f(l)?u:l,c=(i.x||i.y)&&(null!=n?n:a),d=t&&(p(s)?!o:s);return!!c||!!d},eD=new WeakMap,eF=(t,e)=>{eD.set(t,e)},eY=t=>{eD.delete(t)},eK=t=>eD.get(t),eq=(t,e)=>t?e.split(".").reduce((t,e)=>t&&k(t,e)?t[e]:void 0,t):void 0,eJ=(t,e,r)=>n=>[eq(t,n),r||void 0!==eq(e,n)],eV=t=>{let e=t;return[()=>e,t=>{e=A({},e,t)}]},eW="tabindex",eG=tt.bind(0,""),eU=t=>{W(K(t),Y(t)),Q(t)},eQ=t=>{let e=eZ(),{q:r,A:n}=e,l=e$()[eT],i=l&&l.T,{elements:o}=r(),{host:a,padding:u,viewport:s,content:c}=o,d=_(t),f=d?{}:t,{elements:p}=f,{host:b,padding:h,viewport:v,content:y}=p||{},g=d?t:f.target,m=F(g,"textarea"),w=g.ownerDocument,x=w.documentElement,O=g===w.body,S=w.defaultView,E=eB.bind(0,[g]),P=eH.bind(0,[g]),k=eR.bind(0,[g]),A=E.bind(0,eG,s),L=P.bind(0,eG,c),M=A(v),R=M===g,B=R&&O,H=!R&&L(y),X=!R&&_(M)&&M===H,D=X&&!!k(c),q=D?A():M,J=D?H:L(),V=X?q:M,tt=w.activeElement,te=!R&&S.top===S&&tt===g,tr={W:g,Z:m?E(eG,a,b):g,J:V,K:!R&&P(eG,u,h),tt:X?J:H,nt:!R&&!n&&i&&i(e),ot:B?x:V,st:B?w:V,et:S,ct:w,rt:m,it:O,lt:d,ut:R,dt:X,ft:(t,e)=>R?N(V,t9,e):tP(V,t),_t:(t,e,r)=>R?z(V,t9,e,r):(r?tk:tC)(V,t)},tn=T(tr).reduce((t,e)=>{let r=tr[e];return $(t,!!r&&!K(r)&&r)},[]),tl=t=>t?j(tn,t)>-1:null,{W:ti,Z:to,K:ta,J:tu,tt:ts,nt:tc}=tr,td=[()=>{Z(to,t9),O&&Z(x,t9)}],tf=m&&tl(to),tp=m?ti:Y([ts,tu,ta,to,ti].find(t=>!1===tl(t))),tb=ts||tu,th=()=>{I(to,t9,R?"viewport":"host");let t=tk(ta,"os-padding"),e=tk(tu,!R&&en),r=tk(ts,"os-content"),l=O?tk(K(g),ei):tO;if(tf&&(U(ti,to),$(td,()=>{U(to,ti),Q(to)})),W(tb,tp),W(to,ta),W(ta||to,!R&&tu),W(tu,ts),$(td,()=>{l(),Z(tu,t4),Z(tu,et),tl(ts)&&eU(ts),tl(tu)&&eU(tu),tl(ta)&&eU(ta),t(),e(),r()}),n&&!R&&$(td,tC.bind(0,tu,ei)),tc&&(G(tu,tc),$(td,Q.bind(0,tc))),te){let i=I(tu,eW);I(tu,eW,"-1"),tu.focus();let o=()=>i?I(tu,eW,i):Z(tu,eW),a=tV(w,"pointerdown keydown",()=>{o(),a()});$(td,[o,a])}else tt&&tt.focus&&tt.focus();tp=0};return[tr,th,C.bind(0,td)]},e0=(t,e)=>{let{tt:r}=t,[n]=e;return t=>{let{B:e}=eZ(),{ht:l}=n(),{gt:i}=t,a=(r||!e)&&i;return a&&o(r,{height:l?"":"100%"}),{vt:a,wt:a}}},e1=(t,e)=>{let[r,n]=e,{Z:l,K:i,J:u,ut:s}=t,[c,d]=a({u:tw,o:tN()},tN.bind(0,l,"padding",""));return(t,e,l)=>{let[a,f]=d(l),{A:p,B:b}=eZ(),{bt:h}=r(),{vt:v,wt:y,yt:g}=t,[m,w]=e("paddingAbsolute");(v||f||!b&&y)&&([a,f]=c(l));let x=!s&&(w||g||f);if(x){let O=!m||!i&&!p,_=a.r+a.l,S=a.t+a.b,j={marginRight:O&&!h?-_:0,marginBottom:O?-S:0,marginLeft:O&&h?-_:0,top:O?-a.t:0,right:O?h?-a.r:"auto":0,left:O?h?"auto":-a.l:0,width:O?`calc(100% + ${_}px)`:""},$={paddingTop:O?a.t:0,paddingRight:O?a.r:0,paddingBottom:O?a.b:0,paddingLeft:O?a.l:0};o(i||u,j),o(u,$),n({K:a,St:!O,M:i?$:A({},j,$)})}return{xt:x}}},{max:e3}=Math,e2=e3.bind(0,0),e8="visible",e7="hidden",e5={u:tg,o:{w:0,h:0}},e6={u:tm,o:{x:e7,y:e7}},e9=(t,e)=>{let r=window.devicePixelRatio%1!=0?1:0,n={w:e2(t.w-e.w),h:e2(t.h-e.h)};return{w:n.w>r?n.w:0,h:n.h>r?n.h:0}},e4=(t,e,r)=>r?tk(t,e):tC(t,e),rt=t=>0===t.indexOf(e8),re=(t,e)=>{let[r,n]=e,{Z:l,K:i,J:u,nt:s,ut:c,_t:d,it:f,et:p}=t,{k:b,B:h,A:v,I:y}=eZ(),g=e$()[eT],m=!c&&!v&&(y.x||y.y),w=f&&c,[x,O]=a(e5,tD.bind(0,u)),[_,S]=a(e5,tX.bind(0,u)),[j,$]=a(e5),[E,P]=a(e5),[C]=a(e6),k=(t,e)=>{if(o(u,{height:""}),e){let{St:n,K:i}=r(),{$t:a,P:s}=t,c=tD(l),d=tH(l),f="content-box"===o(u,"boxSizing"),p=n||f?i.b+i.t:0,b=!(y.x&&f);o(u,{height:d.h+c.h+(a.x&&b?s.x:0)-p})}},T=(t,e)=>{let r=v||t?0:42,n=(t,n,l)=>{let i=o(u,t),a=e?e[t]:i,s="scroll"===a;return[i,s,s&&!v?n?r:l:0,n&&!!r]},[l,i,a,s]=n("overflowX",y.x,b.x),[c,d,f,p]=n("overflowY",y.y,b.y);return{Ct:{x:l,y:c},$t:{x:i,y:d},P:{x:a,y:f},D:{x:s,y:p}}},A=(t,e,r,n)=>{let l=(t,e)=>{let r=rt(t),n=e&&r&&t.replace(`${e8}-`,"")||"";return[e&&!r?t:"",rt(n)?"hidden":n]},[i,o]=l(r.x,e.x),[a,u]=l(r.y,e.y);return n.overflowX=o&&a?o:i,n.overflowY=u&&i?u:a,T(t,n)},L=(t,e,n,l)=>{let{P:i,D:o}=t,{x:a,y:u}=o,{x:s,y:c}=i,{M:d}=r(),f=e?"marginLeft":"marginRight",p=e?"paddingLeft":"paddingRight",b=d[f],h=d.marginBottom,v=d[p],y=d.paddingBottom;l.width=`calc(100% + ${c+-1*b}px)`,l[f]=-c+b,l.marginBottom=-s+h,n&&(l[p]=v+(u?c:0),l.paddingBottom=y+(a?s:0))},[M,N]=g?g.H(m,h,u,s,r,T,L):[()=>m,()=>[tO]];return(t,e,a)=>{let{vt:s,Ot:f,wt:b,xt:g,gt:m,yt:Z}=t,{ht:R,bt:B}=r(),[H,X]=e("showNativeOverlaidScrollbars"),[D,F]=e("overflow"),Y=H&&y.x&&y.y,K=!c&&!h&&(s||b||f||X||m),q=rt(D.x),J=rt(D.y),V=q||J,W=O(a),G=S(a),U=$(a),Q=P(a),tt;if(X&&v&&d(ei,"scrollbarHidden",!Y),K&&(tt=T(Y),k(tt,R)),s||g||b||Z||X){V&&d(eo,ee,!1);let[te,tr]=N(Y,B,tt),[tn,tl]=W=x(a),[ti,to]=G=_(a),ta=tH(u),tu=ti,ts=ta;te(),(to||tl||X)&&tr&&!Y&&M(tr,ti,tn,B)&&(ts=tH(u),tu=tX(u));let tc={w:e2(e3(ti.w,tu.w)+tn.w),h:e2(e3(ti.h,tu.h)+tn.h)},td={w:e2((w?p.innerWidth:ts.w+e2(ta.w-ti.w))+tn.w),h:e2((w?p.innerHeight+tn.h:ts.h+e2(ta.h-ti.h))+tn.h)};Q=E(td),U=j(e9(tc,td),a)}let[tf,tp]=Q,[tb,th]=U,[tv,ty]=G,[tg,tm]=W,tw={x:tb.w>0,y:tb.h>0},tx=q&&J&&(tw.x||tw.y)||q&&tw.x&&!tw.y||J&&tw.y&&!tw.x;if(g||Z||tm||ty||tp||th||F||X||K){let tO={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},t_=A(Y,tw,D,tO),tS=M(t_,tv,tg,B);c||L(t_,B,tS,tO),K&&k(t_,R),c?(I(l,t4,tO.overflowX),I(l,et,tO.overflowY)):o(u,tO)}z(l,t9,ee,tx),e4(i,eo,tx),c||e4(u,eo,V);let[tj,t$]=C(T(Y).Ct);return n({Ct:tj,zt:{x:tf.w,y:tf.h},Tt:{x:tb.w,y:tb.h},Et:tw}),{At:t$,It:tp,Lt:th}}},rr=(t,e,r)=>{let n={},l=e||{},o=T(t).concat(T(l));return i(o,e=>{let i=t[e],o=l[e];n[e]=!!(r||i||o)}),n},rn=(t,e)=>{let{W:r,J:n,_t:l,ut:o}=t,{A:a,I:u,B:s}=eZ(),c=!a&&(u.x||u.y),d=[e0(t,e),e1(t,e),re(t,e)];return(t,e,a)=>{let u=rr(A({vt:!1,xt:!1,yt:!1,gt:!1,It:!1,Lt:!1,At:!1,Ot:!1,wt:!1},e),{},a),f=c||!s,p=f&&R(n),b=f&&B(n);l("",er,!0);let h=u;return i(d,e=>{h=rr(h,e(h,t,!!a)||{},a)}),R(n,p),B(n,b),l("",er),o||(R(r,0),B(r,0)),h}},rl=(t,e,r)=>{let n,l=!1,o=()=>{l=!0},a=o=>{if(r){let a=r.reduce((e,r)=>{if(r){let[n,l]=r,i=l&&n&&(o?o(n):X(n,t));i&&i.length&&l&&v(l)&&$(e,[i,l.trim()],!0)}return e},[]);i(a,r=>i(r[0],i=>{let o=r[1],a=n.get(i)||[],u=t.contains(i);if(u){let s=tV(i,o,t=>{l?(s(),n.delete(i)):e(t)});n.set(i,$(a,s))}else C(a),n.delete(i)}))}};return r&&(n=new WeakMap,a()),[o,a]},ri=(t,e,r,n)=>{let l=!1,{Ht:o,Mt:a,Pt:u,Dt:s,Rt:c,kt:d}=n||{},f=tS(()=>{l&&r(!0)},{g:33,v:99}),[p,b]=rl(t,f,u),h=a||[],y=(o||[]).concat(h),g=(l,o)=>{let a=c||tO,u=d||tO,f=new Set,p=new Set,y=!1,g=!1;if(i(l,r=>{let{attributeName:l,target:o,type:c,oldValue:d,addedNodes:b,removedNodes:m}=r,w="attributes"===c,x=t===o,O=w&&v(l)?I(o,l):0,_=0!==O&&d!==O,S=j(h,l)>-1&&_;if(e&&("childList"===c||!x)){let $=w&&_,E=$&&s&&F(o,s),P=E?!a(o,l,d,O):!w||$,C=P&&!u(r,!!E,t,n);i(b,t=>f.add(t)),i(m,t=>f.add(t)),g=g||C}!e&&x&&_&&!a(o,l,d,O)&&(p.add(l),y=y||S)}),f.size>0&&b(t=>E(f).reduce((e,r)=>($(e,X(t,r)),F(r,t)?$(e,r):e),[])),e)return!o&&g&&r(!1),[!1];if(p.size>0||y){let m=[E(p),y];return o||r.apply(0,m),m}},m=new tc(t=>g(t));return m.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:y,subtree:e,childList:e,characterData:e}),l=!0,[()=>{l&&(p(),m.disconnect(),l=!1)},()=>{if(l){f.m();let t=m.takeRecords();return!P(t)&&g(t,!0)}}]},ro=t=>t&&(t.height||t.width),ra=(t,e,r)=>{let{Vt:n=!1,Bt:l=!1}=r||{},i=e$().__osSizeObserverPlugin,{V:o}=eZ(),u=te(`<div class="${ea}"><div class="${es}"></div></div>`),s=u[0],c=s.firstChild,d=tz.bind(0,t),[f]=a({o:void 0,_:!0,u:(t,e)=>!(!t||!ro(t)&&ro(e))}),p=t=>{let r=m(t)&&t.length>0&&w(t[0]),l=!r&&y(t[0]),i=!1,a=!1,u=!0;if(r){let[c,,d]=f(t.pop().contentRect),p=ro(c),b=ro(d);i=!d||!p,a=!b&&p,u=!i}else l?[,u]=t:a=!0===t;if(n&&u){let h=l?t[0]:tz(s);R(s,h?o.n?-3333333:o.i?0:3333333:3333333),B(s,3333333)}i||e({vt:!l,Yt:l?t:void 0,Bt:!!a})},b=[],h=!!l&&p;return[()=>{C(b),Q(s)},()=>{if(tf){let e=new tf(p);e.observe(c),$(b,()=>{e.disconnect()})}else if(i){let[r,o]=i.O(c,p,l);h=r,$(b,o)}if(n){let[u]=a({o:!d()},d);$(b,tV(s,"scroll",t=>{let e=u(),[r,n]=e;n&&(tC(c,"ltr rtl"),r?tk(c,"rtl"):tk(c,"ltr"),p(e)),tW(t)}))}h&&(tk(s,eu),$(b,tV(s,"animationstart",h,{C:!!tf}))),(tf||i)&&W(t,s)}]},ru=t=>0===t.h||t.isIntersecting||t.intersectionRatio>0,rs=(t,e)=>{let r,n=tt("os-trinsic-observer"),l=[],[i]=a({o:!1}),o=(t,r)=>{if(t){let n=i(ru(t)),[,l]=n;if(l)return r||e(n),[n]}},u=(t,e)=>{if(t&&t.length>0)return o(t.pop(),e)};return[()=>{C(l),Q(n)},()=>{if(td)(r=new td(t=>u(t),{root:t})).observe(n),$(l,()=>{r.disconnect()});else{let e=()=>{let t=tB(n);o(t)},[i,a]=ra(n,e);$(l,i),a(),e()}W(t,n)},()=>{if(r)return u(r.takeRecords(),!0)}]},rc=`[${t9}]`,rd=`.${en}`,rf=["tabindex"],rp=["wrap","cols","rows"],rb=["id","class","style","open"],rh=(t,e,r)=>{let n,l,o,{Z:u,J:s,tt:c,rt:d,ut:f,ft:p,_t:b}=t,{B:y}=eZ(),[w]=a({u:tg,o:{w:0,h:0}},()=>{let t=p(eo,ee),e=p(el,""),r=e&&R(s),n=e&&B(s);b(eo,ee),b(el,""),b("",er,!0);let l=tX(c),i=tX(s),o=tD(s);return b(eo,ee,t),b(el,"",e),b("",er),R(s,r),B(s,n),{w:i.w+l.w+o.w,h:i.h+l.h+o.h}}),x=d?rp:rb.concat(rp),O=tS(r,{g:()=>n,v:()=>l,p(t,e){let[r]=t,[n]=e;return[T(r).concat(T(n)).reduce((t,e)=>(t[e]=r[e]||n[e],t),{})]}}),_=t=>{i(t||rf,t=>{if(j(rf,t)>-1){let e=I(u,t);v(e)?I(s,t,e):Z(s,t)}})},S=(t,n)=>{let[l,i]=t,o={gt:i};return e({ht:l}),n||r(o),o},E=({vt:t,Yt:n,Bt:l})=>{let i=!1;if(n){let[o,a]=n;i=a,e({bt:o})}(!t||l?r:O)({vt:t,yt:i})},P=(t,e)=>{let[,n]=w(),l={wt:n};return n&&(e||(t?r:O)(l)),l},C=(t,e,r)=>{let n={Ot:e};return e?r||O(n):f||_(t),n},[k,L,M]=c||!y?rs(u,S):[tO,tO,tO],[z,N]=f?[tO,tO]:ra(u,E,{Bt:!0,Vt:!0}),[H,X]=ri(u,!1,C,{Mt:rb,Ht:rb.concat(rf)}),D=f&&tf&&new tf(E.bind(0,{vt:!0}));return D&&D.observe(u),_(),[()=>{k(),z(),o&&o[0](),D&&D.disconnect(),H()},()=>{N(),L()},()=>{let t={},e=X(),r=M(),n=o&&o[1]();return e&&A(t,C.apply(0,$(e,!0))),r&&A(t,S.apply(0,$(r,!0))),n&&A(t,P.apply(0,$(n,!0))),t},t=>{let[e]=t("update.ignoreMutation"),[r,i]=t("update.attributes"),[a,u]=t("update.elementEvents"),[d,p]=t("update.debounce"),b=t=>g(e)&&e(t);if((u||i)&&(o&&(o[1](),o[0]()),o=ri(c||s,!0,P,{Ht:x.concat(r||[]),Pt:a,Dt:rc,kt(t,e){let{target:r,attributeName:n}=t,l=!e&&!!n&&!f&&J(r,rc,rd);return l||!!q(r,`.${ec}`)||!!b(t)}})),p){if(O.m(),m(d)){let v=d[0],y=d[1];n=h(v)&&v,l=h(y)&&y}else h(d)?(n=d,l=!1):(n=!1,l=!1)}}]},rv={x:0,y:0},ry={K:{t:0,r:0,b:0,l:0},St:!1,M:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:rv,Tt:rv,Ct:{x:"hidden",y:"hidden"},Et:{x:!1,y:!1},ht:!1,bt:!1},rg=(t,e)=>{let r=eJ(e,{}),n=eV(ry),[l,i,o]=t1(),[a,u]=n,[s,c,d]=eQ(t),f=rn(s,n),p=(t,e,r)=>{let n=T(t).some(e=>t[e]),l=n||!L(e)||r;return l&&o("u",[t,e,r]),l},[b,h,v,y]=rh(s,u,t=>p(f(r,t),{},!1)),g=a.bind(0);return g.jt=t=>l("u",t),g.qt=()=>{let{W:t,J:e}=s,r=R(t),n=B(t);h(),c(),R(e,r),B(e,n)},g.Nt=s,[(t,r)=>{let n=eJ(e,t,r);return y(n),p(f(n,v(),r),t,!!r)},g,()=>{i(),b(),d()}]},{round:rm}=Math,rw=t=>{let{width:e,height:r}=tF(t),{w:n,h:l}=tB(t);return{x:rm(e)/n||1,y:rm(r)/l||1}},rx=(t,e,r)=>{let n=e.scrollbars,{button:l,isPrimary:i,pointerType:o}=t,{pointers:a}=n;return 0===l&&i&&n[r?"dragScroll":"clickScroll"]&&(a||[]).includes(o)},rO=(t,e)=>tV(t,"mousedown",tV.bind(0,e,"click",tW,{C:!0,$:!0}),{$:!0}),r_=(t,e,r,n,l,i)=>{let{V:o}=eZ(),{Ft:a,Gt:u,Xt:s}=r,c=`scroll${i?"Left":"Top"}`,d=`client${i?"X":"Y"}`,f=i?"width":"height",p=i?"left":"top",b=i?"w":"h",h=i?"x":"y",v=(t,e)=>r=>{let{Tt:d}=l(),f=tB(u)[b]-tB(a)[b],p=e*r/f*d[h],v=tz(s),y=v&&i?o.n||o.i?1:-1:1;n[c]=t+p*y};return tV(u,"pointerdown",r=>{let l=q(r.target,`.${eh}`)===a;if(rx(r,t,l)){let i=!l&&r.shiftKey,o=()=>tF(a),s=()=>tF(u),b=(t,e)=>(t||o())[p]-(e||s())[p],y=v(n[c]||0,1/rw(n)[h]),g=r[d],m=o(),w=s(),x=m[f],O=b(m,w)+x/2,_=g-w[p],S=l?0:_-O,j=[tV(e,"selectstart",t=>tG(t),{S:!1}),tV(u,"pointermove",t=>{let e=t[d]-g;(l||i)&&y(S+e)})];if(i)y(S);else if(!l){let E=e$().__osClickScrollPlugin;E&&$(j,E.O(y,b,S,x,_))}tV(u,"pointerup",t=>{C(j),u.releasePointerCapture(t.pointerId)},{C:!0}),u.setPointerCapture(r.pointerId)}})},rS=(t,e)=>(r,n,l,i,o,a)=>{let{Xt:u}=r,[s,c]=t_(333),d=!!o.scrollBy,f=!0;return C.bind(0,[tV(u,"pointerenter",()=>{n(em,!0)}),tV(u,"pointerleave pointercancel",()=>{n(em)}),tV(u,"wheel",t=>{let{deltaX:e,deltaY:r,deltaMode:l}=t;d&&f&&0===l&&K(u)===i&&o.scrollBy({left:e,top:r,behavior:"smooth"}),f=!1,n(eO,!0),s(()=>{f=!0,n(eO)}),tG(t)},{S:!1,$:!0}),rO(u,l),r_(t,l,r,o,e,a),c])},{min:rj,max:r$,abs:rE,round:rP}=Math,rC=(t,e,r,n)=>{if(n){let l=r?"x":"y",{Tt:i,zt:o}=n,a=o[l],u=i[l];return r$(0,rj(1,a/(a+u)))}let s=r?"w":"h",c=tB(t)[s],d=tB(e)[s];return r$(0,rj(1,c/d))},rk=(t,e,r,n,l,i)=>{let{V:o}=eZ(),{Tt:a}=n,u=rP(a[i?"x":"y"]),s=rE(r[`scroll${i?"Left":"Top"}`]),c=o.i?s:u-s,d=rj(1,(i&&l?c:s)/u),f=rC(t,e,i);return 1/f*(1-f)*d},rT=(t,e,r)=>{let{q:n}=eZ(),{scrollbars:l}=n(),{slot:a}=l,{ct:u,W:s,Z:c,J:d,lt:f,ot:p}=e,{scrollbars:b}=f?{}:t,{slot:h}=b||{},v=eH([s,c,d],()=>c,a,h),g=(t,e,r)=>{let n=r?tk:tC;i(t,t=>{n(t.Xt,e)})},m=(t,e)=>{i(t,t=>{let[r,n]=e(t);o(r,n)})},w=(t,e,r)=>{m(t,t=>{let{Ft:n,Gt:l}=t;return[n,{[r?"width":"height"]:`${(100*rC(n,l,r,e)).toFixed(3)}%`}]})},x=(t,e,r)=>{let n=r?"X":"Y";m(t,t=>{let{Ft:l,Gt:i,Xt:o}=t,a=rk(l,i,p,e,tz(o),r);return[l,{transform:a==a?`translate${n}(${(100*a).toFixed(3)}%)`:""}]})},O=[],_=[],S=[],j=(t,e,r)=>{let n=y(r);(!n||r)&&g(_,t,e),n&&r||g(S,t,e)},E=t=>{w(_,t,!0),w(S,t)},k=t=>{x(_,t,!0),x(S,t)},T=t=>{let e=t?_:S,n=P(e)?eg:"",l=tt(`${ec} ${t?ef:ep} ${n}`),i=tt(eb),o=tt(eh),a={Xt:l,Gt:i,Ft:o};return W(l,i),W(i,o),$(e,a),$(O,[Q.bind(0,l),r(a,j,u,c,p,t)]),a},A=T.bind(0,!0),L=T.bind(0,!1),M=()=>{W(v,_[0].Xt),W(v,S[0].Xt),th(()=>{j(eg)},300)};return A(),L(),[{Ut:E,Wt:k,Zt:j,Jt:{Kt:_,Qt:A,tn:m.bind(0,_)},nn:{Kt:S,Qt:L,tn:m.bind(0,S)}},M,C.bind(0,O)]},rA=(t,e,r,n)=>{let l,i,o,a,u,s=0,c=eV({}),[d]=c,[f,p]=t_(),[b,h]=t_(),[v,y]=t_(100),[g,m]=t_(100),[w,x]=t_(()=>s),[O,_,S]=rT(t,r.Nt,rS(e,r)),{Z:j,J:$,ot:E,st:P,ut:k,it:T}=r.Nt,{Jt:A,nn:L,Zt:M,Ut:I,Wt:z}=O,{tn:N}=A,{tn:Z}=L,H=t=>{let{Xt:e}=t,r=k&&!T&&K(e)===$&&e;return[r,{transform:r?`translate(${R(E)}px, ${B(E)}px)`:""}]},X=(t,e)=>{if(x(),t)M(ex);else{let r=()=>M(ex,!0);s>0&&!e?w(r):r()}},D=()=>{(a=i)&&X(!0)},F=[y,x,m,h,p,S,tV(j,"pointerover",D,{C:!0}),tV(j,"pointerenter",D),tV(j,"pointerleave",()=>{a=!1,i&&X(!1)}),tV(j,"pointermove",()=>{l&&f(()=>{y(),X(!0),g(()=>{l&&X(!1)})})}),tV(P,"scroll",t=>{b(()=>{z(r()),o&&X(!0),v(()=>{o&&!a&&X(!1)})}),n(t),k&&N(H),k&&Z(H)})],Y=d.bind(0);return Y.Nt=O,Y.qt=_,[(t,n,a)=>{let{It:c,Lt:d,At:f,yt:p}=a,b=eJ(e,t,n),h=r(),{Tt:v,Ct:y,bt:g}=h,[m,w]=b("scrollbars.theme"),[x,O]=b("scrollbars.visibility"),[_,S]=b("scrollbars.autoHide"),[j]=b("scrollbars.autoHideDelay"),[$,E]=b("scrollbars.dragScroll"),[P,C]=b("scrollbars.clickScroll"),k=(t,e)=>{let r="visible"===x||"auto"===x&&"scroll"===t;return M(ev,r,e),r};if(s=j,w&&(M(u),M(m,!0),u=m),S&&(l="move"===_,i="leave"===_,X(!(o="never"!==_),!0)),E&&M(eS,$),C&&M(e_,P),f||O||n){let A=k(y.x,!0),L=k(y.y,!1);M(ey,!(A&&L))}(c||d||p||n)&&(I(h),z(h),M(ew,!v.x,!0),M(ew,!v.y,!1),M(ed,g&&!T))},Y,C.bind(0,F)]},rL=(t,e,r)=>{g(t)&&t(e||void 0,r||void 0)},rM=(t,e,r)=>{let{F:n,q:l,Y:o,j:a}=eZ(),u=e$(),s=_(t),c=s?t:t.target,d=eK(c);if(e&&!d){let f=!1,p=t=>{let e=e$().__osOptionsValidationPlugin,r=e&&e.O;return r?r(t,!0):t},b=A({},n(),p(e)),[h,v,y]=t1(r),[g,m,w]=rg(t,b),[x,O,S]=rA(t,b,m,t=>y("scroll",[k,t])),j=(t,e)=>g(t,!!e),$=j.bind(0,{},!0),E=o($),P=a($),C=t=>{eY(c),E(),P(),S(),w(),f=!0,y("destroyed",[k,!!t]),v()},k={options(t,e){if(t){let r=e?n():{},l=t8(b,A(r,p(t)));L(l)||(A(b,l),j(l))}return A({},b)},on:h,off(t,e){t&&e&&v(t,e)},state(){let{zt:t,Tt:e,Ct:r,Et:n,K:l,St:i,bt:o}=m();return A({},{overflowEdge:t,overflowAmount:e,overflowStyle:r,hasOverflow:n,padding:l,paddingAbsolute:i,directionRTL:o,destroyed:f})},elements(){let{W:t,Z:e,K:r,J:n,tt:l,ot:i,st:o}=m.Nt,{Jt:a,nn:u}=O.Nt,s=t=>{let{Ft:e,Gt:r,Xt:n}=t;return{scrollbar:n,track:r,handle:e}},c=t=>{let{Kt:e,Qt:r}=t,n=s(e[0]);return A({},n,{clone(){let t=s(r());return x({},!0,{}),t}})};return A({},{target:t,host:e,padding:r||n,viewport:n,content:l||n,scrollOffsetElement:i,scrollEventElement:o,scrollbarHorizontal:c(a),scrollbarVertical:c(u)})},update:t=>j({},t),destroy:C.bind(0)};return(m.jt((t,e,r)=>{x(e,r,t)}),eF(c,k),i(T(u),t=>rL(u[t],0,k)),eX(m.Nt.it,l().cancel,!s&&t.cancel))?(C(!0),k):(m.qt(),O.qt(),y("initialized",[k]),m.jt((t,e,r)=>{let{vt:n,yt:l,gt:i,It:o,Lt:a,At:u,wt:s,Ot:c}=t;y("updated",[k,{updateHints:{sizeChanged:n,directionChanged:l,heightIntrinsicChanged:i,overflowEdgeChanged:o,overflowAmountChanged:a,overflowStyleChanged:u,contentMutation:s,hostMutation:c},changedOptions:e,force:r}])}),k.update(!0),k)}return d};rM.plugin=t=>{i(eE(t),t=>rL(t,rM))},rM.valid=t=>{let e=t&&t.elements,r=g(e)&&e();return O(r)&&!!eK(r.target)},rM.env=()=>{let{k:t,I:e,A:r,V:n,B:l,L:i,X:o,U:a,q:u,N:s,F:c,G:d}=eZ();return A({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:r,rtlScrollBehavior:n,flexboxGlue:l,cssCustomProperties:i,staticDefaultInitialization:o,staticDefaultOptions:a,getDefaultInitialization:u,setDefaultInitialization:s,getDefaultOptions:c,setDefaultOptions:d})};let rI=t=>{let{options:e,events:r}=t||{},n=(0,l.useRef)(null),i=(0,l.useRef)(e),o=(0,l.useRef)(r);return(0,l.useEffect)(()=>{let{current:t}=n;i.current=e,rM.valid(t)&&t.options(e||{},!0)},[e]),(0,l.useEffect)(()=>{let{current:t}=n;o.current=r,rM.valid(t)&&t.on(r||{},!0)},[r]),(0,l.useMemo)(()=>[t=>{let e=n.current;if(rM.valid(e))return e;let r=i.current||{},l=o.current||{};return n.current=rM(t,r,l)},()=>n.current],[])},rz=(t,e)=>{let{element:r="div",options:n,events:i,children:o,...a}=t,u=(0,l.useRef)(null),s=(0,l.useRef)(null),[c,d]=rI({options:n,events:i});return(0,l.useEffect)(()=>{let{current:t}=u,{current:e}=s;if(t&&e){let r=c({target:t,elements:{viewport:e,content:e}});return()=>r.destroy()}},[c,r]),(0,l.useImperativeHandle)(e,()=>({osInstance:d,getElement:()=>u.current}),[]),l.createElement(r,{"data-overlayscrollbars-initialize":"",ref:u,...a},l.createElement("div",{ref:s},o))};(0,l.forwardRef)(rz);var rN=function(t){var e;if(window.requestIdleCallback){var r=t?window.requestIdleCallback:window.requestAnimationFrame,n=t?window.cancelIdleCallback:window.cancelAnimationFrame;return[function(t,l){n(e),e=r(t,l)},function(){return n(e)}]}return[function(t){return t()},function(){}]},rZ=function(t){var e=(0,n.Z)((0,l.useMemo)(function(){return rN(!0)},[]),2),r=e[0],i=e[1],o=(0,n.Z)((0,l.useMemo)(function(){return rN()},[]),2),a=o[0],u=o[1],s=(0,n.Z)(rI(t),2),c=s[0],d=s[1];return(0,l.useEffect)(function(){return function(){var t;u(),i(),null===(t=d())||void 0===t||t.destroy()}},[]),(0,l.useMemo)(function(){return[function(t){r(function(){a(function(){c(t)})},{timeout:2e3})},d]},[c,d])}},8475:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return y}});var n=r(9722),l=r(169),i=r(1809),o=r(4732),a=r(7378),u=r(4246),s=function(t){var e=t.children,r=(0,a.useRef)(null),n=(0,i.Z)((0,o.a)({options:{paddingAbsolute:!0,scrollbars:{autoHide:"leave"}}}),2),l=n[0],s=n[1];return(0,a.useEffect)(function(){if(r.current)return l(r.current),function(){var t;return null===(t=s())||void 0===t?void 0:t.destroy()}},[]),(0,u.jsx)("pre",{ref:r,"data-overlayscrollbars-initialize":!0,children:e})},c=r(1373),d=function(t){var e=t.id,r=t.tag,l=(0,c.Z)(t,["id","tag"]);return e?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(r,(0,n.Z)({},l))}):(0,u.jsx)(r,(0,n.Z)({},l))};r(2586),r(2431),r(5532);var f=r(8038),p=r.n(f),b=r(1670),h={src:"/OverlayScrollbars/_next/static/media/favicon.7b344e85.ico",height:256,width:256},v=function(t,e){return(0,u.jsx)(d,(0,l.Z)((0,n.Z)({},t),{tag:e}))},y=function(t){var e=t.Component,r=t.pageProps,l=(0,i.Z)((0,o.a)(),2),c=l[0],d=l[1];return(0,a.useEffect)(function(){return c(document.body),function(){var t;return null===(t=d())||void 0===t?void 0:t.destroy()}},[]),(0,u.jsx)(b.Zo,{components:{h1:function(t){return v(t,"h1")},h2:function(t){return v(t,"h2")},h3:function(t){return v(t,"h3")},h4:function(t){return v(t,"h4")},h5:function(t){return v(t,"h5")},h6:function(t){return v(t,"h6")},pre:s},children:(0,u.jsxs)("div",{className:"font-sans font-normal text-primary-dark",children:[(0,u.jsxs)(p(),{children:[(0,u.jsx)("title",{children:"OverlayScrollbars"},"title"),(0,u.jsx)("meta",{name:"description",content:"A javascript scrollbar plugin that hides native scrollbars, provides custom styleable overlay scrollbars and keeps the native functionality and feeling."},"description"),(0,u.jsx)("link",{rel:"icon",href:h.src}),(0,u.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:h.src}),(0,u.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,u.jsx)("meta",{name:"theme-color",content:"#36befd"}),(0,u.jsx)("meta",{name:"msapplication-TileColor",content:"#36befd"}),(0,u.jsx)("meta",{name:"msapplication-navbutton-color",content:"#36befd"}),(0,u.jsx)("meta",{name:"application-name",content:"OverlayScrollbars"}),(0,u.jsx)("meta",{name:"msapplication-tooltip",content:"OverlayScrollbars"}),(0,u.jsx)("meta",{name:"apple-mobile-web-app-title",content:"OverlayScrollbars"}),(0,u.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":"SoftwareSourceCode",url:"https://kingsora.github.io/OverlayScrollbars",name:"OverlayScrollbars",description:"A javascript scrollbar plugin that hides native scrollbars, provides custom styleable overlay scrollbars and keeps the native functionality and feeling.",license:"https://en.wikipedia.org/wiki/MIT_License",keywords:"js,javascript,typescript,overlayscrollbars,overlay,scrollbars,custom,scrollbar,plugin,react,vue,angular,treeshaking",isAccessibleForFree:!0,image:"https://raw.githubusercontent.com/KingSora/OverlayScrollbars/master/logo/logo.png",codeRepository:"https://github.com/KingSora/OverlayScrollbars",runtimePlatform:"browser",maintainer:{"@type":"Person",name:"Rene Haas",additionalName:"KingSora",url:"https://github.com/KingSora"},programmingLanguage:{"@type":"ComputerLanguage",name:"javascript",alternateName:"js"}})}})]}),(0,u.jsx)(e,(0,n.Z)({},r))]})})}},5532:function(){},2431:function(){},2586:function(){},8038:function(t,e,r){t.exports=r(555)},1670:function(t,e,r){"use strict";r.d(e,{Zo:function(){return a},ah:function(){return i}});var n=r(7378);let l=n.createContext({});function i(t){let e=n.useContext(l);return n.useMemo(()=>"function"==typeof t?t(e):{...e,...t},[e,t])}let o={};function a({components:t,children:e,disableParentContext:r}){let a=i(t);return r&&(a=t||o),n.createElement(l.Provider,{value:a},e)}},9722:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},l=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),l.forEach(function(e){n(t,e,r[e])})}return t}r.d(e,{Z:function(){return l}})},169:function(t,e,r){"use strict";function n(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):(function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r.push.apply(r,n)}return r})(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}),t}r.d(e,{Z:function(){return n}})},1373:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}r.d(e,{Z:function(){return n}})},1809:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t,e)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}}(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,{Z:function(){return l}})}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],function(){return e(8936),e(5817)}),_N_E=t.O()}]);