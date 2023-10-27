(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();/*!
 * OverlayScrollbars
 * Version: 2.4.4
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */const Ot=(t,e)=>{const{o:n,u:o,_:s}=t;let c=n,r;const i=(l,d)=>{const y=c,C=l,x=d||(o?!o(y,C):y!==C);return(x||s)&&(c=C,r=y),[c,x,r]};return[e?l=>i(e(c,r),l):i,l=>[c,!!l,r]]},Pn=typeof window<"u",yo=Pn&&Node.ELEMENT_NODE,{toString:ts,hasOwnProperty:rn}=Object.prototype,es=/^\[object (.+)\]$/,Nt=t=>t===void 0,Ve=t=>t===null,ns=t=>Nt(t)||Ve(t)?`${t}`:ts.call(t).replace(es,"$1").toLowerCase(),Ht=t=>typeof t=="number",xe=t=>typeof t=="string",vo=t=>typeof t=="boolean",At=t=>typeof t=="function",ht=t=>Array.isArray(t),ge=t=>typeof t=="object"&&!ht(t)&&!Ve(t),Ue=t=>{const e=!!t&&t.length,n=Ht(e)&&e>-1&&e%1==0;return ht(t)||!At(t)&&n?e>0&&ge(t)?e-1 in t:!0:!1},ze=t=>{if(!t||!ge(t)||ns(t)!=="object")return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,c=rn.call(t,n),r=s&&rn.call(s,"isPrototypeOf");if(o&&!c&&!r)return!1;for(e in t);return Nt(e)||rn.call(t,e)},fe=t=>{const e=HTMLElement;return t?e?t instanceof e:t.nodeType===yo:!1},We=t=>{const e=Element;return t?e?t instanceof e:t.nodeType===yo:!1};function Q(t,e){if(Ue(t))for(let n=0;n<t.length&&e(t[n],n,t)!==!1;n++);else t&&Q(Object.keys(t),n=>e(t[n],n,t));return t}const Xe=(t,e)=>t.indexOf(e)>=0,_t=(t,e)=>t.concat(e),Z=(t,e,n)=>(!n&&!xe(e)&&Ue(e)?Array.prototype.push.apply(t,e):t.push(e),t),ce=t=>{const e=Array.from,n=[];return e&&t?e(t):(t instanceof Set?t.forEach(o=>{Z(n,o)}):Q(t,o=>{Z(n,o)}),n)},Be=t=>!!t&&!t.length,qn=t=>ce(new Set(t)),St=(t,e,n)=>{Q(t,s=>s&&s.apply(void 0,e||[])),!n&&(t.length=0)},Ge=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),Lt=t=>t?Object.keys(t):[],Y=(t,e,n,o,s,c,r)=>{const i=[e,n,o,s,c,r];return(typeof t!="object"||Ve(t))&&!At(t)&&(t={}),Q(i,a=>{Q(a,(u,l)=>{const d=a[l];if(t===d)return!0;const y=ht(d);if(d&&ze(d)){const C=t[l];let x=C;y&&!ht(C)?x=[]:!y&&!ze(C)&&(x={}),t[l]=Y(x,d)}else t[l]=y?d.slice():d})}),t},mo=(t,e)=>Q(Y({},t),(n,o,s)=>{n===void 0?delete s[o]:e&&n&&ze(n)&&(s[o]=mo(n,e))}),Ln=t=>{for(const e in t)return!1;return!0},dt=(t,e,n)=>{if(Nt(n))return t?t.getAttribute(e):null;t&&t.setAttribute(e,n)},go=(t,e)=>new Set((dt(t,e)||"").split(" ")),ft=(t,e)=>{t&&t.removeAttribute(e)},Xt=(t,e,n,o)=>{if(n){const s=go(t,e);s[o?"add":"delete"](n);const c=ce(s).join(" ").trim();dt(t,e,c)}},os=(t,e,n)=>go(t,e).has(n),yn=Pn&&Element.prototype,bo=(t,e)=>{const n=[],o=e?We(e)&&e:document;return o?Z(n,o.querySelectorAll(t)):n},ss=(t,e)=>{const n=e?We(e)&&e:document;return n?n.querySelector(t):null},Me=(t,e)=>We(t)?(yn.matches||yn.msMatchesSelector).call(t,e):!1,vn=t=>t?ce(t.childNodes):[],Tt=t=>t&&t.parentElement,te=(t,e)=>{if(We(t)){const n=yn.closest;if(n)return n.call(t,e);do{if(Me(t,e))return t;t=Tt(t)}while(t)}},cs=(t,e,n)=>{const o=te(t,e),s=t&&ss(n,o),c=te(s,e)===o;return o&&s?o===t||s===t||c&&te(te(t,n),e)!==o:!1},bt=()=>{},Pt=t=>{if(Ue(t))Q(ce(t),e=>Pt(e));else if(t){const e=Tt(t);e&&e.removeChild(t)}},In=(t,e,n)=>{if(n&&t){let o=e,s;return Ue(n)?(s=document.createDocumentFragment(),Q(n,c=>{c===o&&(o=c.previousSibling),s.appendChild(c)})):s=n,e&&(o?o!==e&&(o=o.nextSibling):o=t.firstChild),t.insertBefore(s,o||null),()=>Pt(n)}return bt},gt=(t,e)=>In(t,null,e),rs=(t,e)=>In(Tt(t),t,e),Vn=(t,e)=>In(Tt(t),t&&t.nextSibling,e),Gt=t=>{const e=document.createElement("div");return dt(e,"class",t),e},ho=t=>{const e=Gt();return e.innerHTML=t.trim(),Q(vn(e),n=>Pt(n))},pt=Pn?window:{},pe=Math.max,ls=Math.min,be=Math.round,So=pt.cancelAnimationFrame,wo=pt.requestAnimationFrame,ke=pt.setTimeout,mn=pt.clearTimeout,gn=t=>t.charAt(0).toUpperCase()+t.slice(1),is=()=>Gt().style,as=["-webkit-","-moz-","-o-","-ms-"],us=["WebKit","Moz","O","MS","webkit","moz","o","ms"],ln={},an={},ds=t=>{let e=an[t];if(Ge(an,t))return e;const n=gn(t),o=is();return Q(as,s=>{const c=s.replace(/-/g,"");return!(e=[t,s+t,c+n,gn(c)+n].find(i=>o[i]!==void 0))}),an[t]=e||""},Ye=t=>{let e=ln[t]||pt[t];return Ge(ln,t)||(Q(us,n=>(e=e||pt[n+gn(t)],!e)),ln[t]=e),e},fs=Ye("MutationObserver"),Un=Ye("IntersectionObserver"),_e=Ye("ResizeObserver"),bn=Ye("ScrollTimeline"),B=(t,...e)=>t.bind(0,...e),Ut=t=>{let e;const n=t?ke:wo,o=t?mn:So;return[s=>{o(e),e=n(s,At(t)?t():t)},()=>o(e)]},xo=(t,e)=>{let n,o,s,c=bt;const{v:r,p:i,g:a}=e||{},u=function(x){c(),mn(n),n=o=void 0,c=bt,t.apply(this,x)},l=C=>a&&o?a(o,C):C,d=()=>{c!==bt&&u(l(s)||s)},y=function(){const x=ce(arguments),v=At(r)?r():r;if(Ht(v)&&v>=0){const z=At(i)?i():i,m=Ht(z)&&z>=0,E=v>0?ke:wo,$=v>0?mn:So,F=l(x)||x,M=u.bind(0,F);c();const V=E(M,v);c=()=>$(V),m&&!n&&(n=ke(d,z)),o=s=F}else u(x)};return y.m=d,y},ps=/[^\x20\t\r\n\f]+/g,Oo=(t,e,n)=>{const o=t&&t.classList;let s,c=0,r=!1;if(o&&e&&xe(e)){const i=e.match(ps)||[];for(r=i.length>0;s=i[c++];)r=!!n(o,s)&&r}return r},zn=(t,e)=>{Oo(t,e,(n,o)=>n.remove(o))},Rt=(t,e)=>(Oo(t,e,(n,o)=>n.add(o)),B(zn,t,e)),ys={opacity:1,zIndex:1},Ae=(t,e)=>{const n=t||"",o=e?parseFloat(n):parseInt(n,10);return o===o?o:0},vs=(t,e)=>!ys[t]&&Ht(e)?`${e}px`:e,Wn=(t,e,n)=>String((e!=null?e[n]||e.getPropertyValue(n):t.style[n])||""),ms=(t,e,n)=>{try{const{style:o}=t;Nt(o[e])?o.setProperty(e,n):o[e]=vs(e,n)}catch{}};function ut(t,e){const n=xe(e);if(ht(e)||n){let s=n?"":{};if(t){const c=pt.getComputedStyle(t,null);s=n?Wn(t,c,e):e.reduce((r,i)=>(r[i]=Wn(t,c,i),r),s)}return s}t&&Q(e,(s,c)=>ms(t,c,e[c]))}const he=t=>ut(t,"direction")==="rtl",Xn=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",c=`${o}top${s}`,r=`${o}right${s}`,i=`${o}bottom${s}`,a=`${o}left${s}`,u=ut(t,[c,r,i,a]);return{t:Ae(u[c],!0),r:Ae(u[r],!0),b:Ae(u[i],!0),l:Ae(u[a],!0)}},Qt=(t,e)=>`translate${ge(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`}`,Eo="paddingTop",Bn="paddingRight",Mn="paddingLeft",Re="paddingBottom",De="marginLeft",Ne="marginRight",ye="marginBottom",ue="overflowX",de="overflowY",It="width",zt="height",se="hidden",gs={w:0,h:0},Je=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:gs,bs=t=>Je("inner",t||pt),ve=B(Je,"offset"),Ie=B(Je,"client"),Fe=B(Je,"scroll"),je=t=>{const e=parseFloat(ut(t,It))||0,n=parseFloat(ut(t,zt))||0;return{w:e-be(e),h:n-be(n)}},$t=t=>t.getBoundingClientRect(),hn=t=>!!(t&&(t[zt]||t[It])),Co=(t,e)=>{const n=hn(t);return!hn(e)&&n},Ke=(t,e,n,o)=>{if(t&&e){let s=!0;return Q(n,c=>{const r=o?o(t[c]):t[c],i=o?o(e[c]):e[c];r!==i&&(s=!1)}),s}return!1},$o=(t,e)=>Ke(t,e,["w","h"]),Ho=(t,e)=>Ke(t,e,["x","y"]),hs=(t,e)=>Ke(t,e,["t","r","b","l"]),Gn=(t,e,n)=>Ke(t,e,[It,zt],n&&(o=>be(o)));let Te;const Yn="passive",Ss=()=>{if(Nt(Te)){Te=!1;try{pt.addEventListener(Yn,bt,Object.defineProperty({},Yn,{get(){Te=!0}}))}catch{}}return Te},Ao=t=>t.split(" "),Jn=(t,e,n,o)=>{Q(Ao(e),s=>{t.removeEventListener(s,n,o)})},rt=(t,e,n,o)=>{var s;const c=Ss(),r=(s=c&&o&&o.S)!=null?s:c,i=o&&o.$||!1,a=o&&o.O||!1,u=c?{passive:r,capture:i}:i;return B(St,Ao(e).map(l=>{const d=a?y=>{Jn(t,l,d,i),n(y)}:n;return t.addEventListener(l,d,u),B(Jn,t,l,d,i)}))},To=t=>t.stopPropagation(),Kn=t=>t.preventDefault(),ws={x:0,y:0},un=t=>{const e=t&&$t(t);return e?{x:e.left+pt.pageYOffset,y:e.top+pt.pageXOffset}:ws},Po=(t,e,n)=>n?n.n?-t:n.i?e-t:t:t,xs=(t,e)=>[e&&e.i?t:0,Po(t,t,e)],Yt=(t,e)=>{const{x:n,y:o}=Ht(e)?{x:e,y:e}:e||{};Ht(n)&&(t.scrollLeft=n),Ht(o)&&(t.scrollTop=o)},Ze=t=>({x:t.scrollLeft,y:t.scrollTop}),Zn=(t,e)=>{Q(ht(e)?e:[e],t)},Sn=t=>{const e=new Map,n=(c,r)=>{if(c){const i=e.get(c);Zn(a=>{i&&i[a?"delete":"clear"](a)},r)}else e.forEach(i=>{i.clear()}),e.clear()},o=(c,r)=>{if(xe(c)){const u=e.get(c)||new Set;return e.set(c,u),Zn(l=>{At(l)&&u.add(l)},r),B(n,c,r)}vo(r)&&r&&n();const i=Lt(c),a=[];return Q(i,u=>{const l=c[u];l&&Z(a,o(u,l))}),B(St,a)},s=(c,r)=>{Q(ce(e.get(c)),i=>{r&&!Be(r)?i.apply(0,r):i()})};return o(t||{}),[o,n,s]},Qn=t=>JSON.stringify(t,(e,n)=>{if(At(n))throw 0;return n}),to=(t,e)=>t?`${e}`.split(".").reduce((n,o)=>n&&Ge(n,o)?n[o]:void 0,t):void 0,Os={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},Lo=(t,e)=>{const n={},o=_t(Lt(e),Lt(t));return Q(o,s=>{const c=t[s],r=e[s];if(ge(c)&&ge(r))Y(n[s]={},Lo(c,r)),Ln(n[s])&&delete n[s];else if(Ge(e,s)&&r!==c){let i=!0;if(ht(c)||ht(r))try{Qn(c)===Qn(r)&&(i=!1)}catch{}i&&(n[s]=r)}}),n},Es=(t,e,n)=>o=>[to(t,o),n||to(e,o)!==void 0],Oe="data-overlayscrollbars",Io="os-environment",zo=`${Io}-flexbox-glue`,Cs=`${zo}-max`,Bo="os-scrollbar-hidden",dn=`${Oe}-initialize`,Et=Oe,Mo=`${Et}-overflow-x`,ko=`${Et}-overflow-y`,ne="overflowVisible",$s="scrollbarHidden",eo="scrollbarPressed",qe="updating",kt=`${Oe}-viewport`,fn="arrange",_o="scrollbarHidden",oe=ne,wn=`${Oe}-padding`,Hs=oe,no=`${Oe}-content`,kn="os-size-observer",As=`${kn}-appear`,Ts=`${kn}-listener`,Ps="os-trinsic-observer",Ls="os-no-css-vars",Is="os-theme-none",vt="os-scrollbar",zs=`${vt}-rtl`,Bs=`${vt}-horizontal`,Ms=`${vt}-vertical`,Ro=`${vt}-track`,_n=`${vt}-handle`,ks=`${vt}-visible`,_s=`${vt}-cornerless`,oo=`${vt}-transitionless`,so=`${vt}-interaction`,co=`${vt}-unusable`,xn=`${vt}-auto-hide`,ro=`${xn}-hidden`,lo=`${vt}-wheel`,Rs=`${Ro}-interactive`,Ds=`${_n}-interactive`,Do={},No={},Ns=t=>{Q(t,e=>Q(e,(n,o)=>{Do[o]=e[o]}))},Fo=(t,e,n)=>Lt(t).map(o=>{const{static:s,instance:c}=t[o],[r,i,a]=n||[],u=n?c:s;if(u){const l=n?u(r,i,e):u(e);return(a||No)[o]=l}}),re=t=>No[t],Fs="__osOptionsValidationPlugin",js="__osSizeObserverPlugin",Rn="__osScrollbarsHidingPlugin",qs="__osClickScrollPlugin";let pn;const io=(t,e,n,o)=>{gt(t,e);const s=Ie(e),c=ve(e),r=je(n);return o&&Pt(e),{x:c.h-s.h+r.h,y:c.w-s.w+r.w}},Vs=t=>{let e=!1;const n=Rt(t,Bo);try{e=ut(t,ds("scrollbar-width"))==="none"||pt.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return n(),e},Us=(t,e)=>{ut(t,{[ue]:se,[de]:se,direction:"rtl"}),Yt(t,{x:0});const n=un(t),o=un(e);Yt(t,{x:-999});const s=un(e);return{i:n.x===o.x,n:o.x!==s.x}},Ws=(t,e)=>{const n=Rt(t,zo),o=$t(t),s=$t(e),c=Gn(s,o,!0),r=Rt(t,Cs),i=$t(t),a=$t(e),u=Gn(a,i,!0);return n(),r(),c&&u},Xs=()=>{const{body:t}=document,n=ho(`<div class="${Io}"><div></div></div>`)[0],o=n.firstChild,[s,,c]=Sn(),[r,i]=Ot({o:io(t,n,o),u:Ho},B(io,t,n,o,!0)),[a]=i(),u=Vs(n),l={x:a.x===0,y:a.y===0},d={elements:{host:null,padding:!u,viewport:P=>u&&P===P.ownerDocument.body&&P,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},y=Y({},Os),C=B(Y,{},y),x=B(Y,{},d),v={L:a,I:l,H:u,A:ut(n,"zIndex")==="-1",P:!!bn,V:Us(n,o),U:Ws(n,o),B:B(s,"r"),j:x,N:P=>Y(d,P)&&x(),G:C,q:P=>Y(y,P)&&C(),F:Y({},d),W:Y({},y)};return ft(n,"style"),Pt(n),pt.addEventListener("resize",()=>{let P;if(!u&&(!l.x||!l.y)){const z=re(Rn);P=!!(z?z.R():bt)(v,r)}c("r",[P])}),v},yt=()=>(pn||(pn=Xs()),pn),Dn=(t,e)=>At(e)?e.apply(0,t):e,Gs=(t,e,n,o)=>{const s=Nt(o)?n:o;return Dn(t,s)||e.apply(0,t)},jo=(t,e,n,o)=>{const s=Nt(o)?n:o,c=Dn(t,s);return!!c&&(fe(c)?c:e.apply(0,t))},Ys=(t,e)=>{const{nativeScrollbarsOverlaid:n,body:o}=e||{},{I:s,H:c,j:r}=yt(),{nativeScrollbarsOverlaid:i,body:a}=r().cancel,u=n??i,l=Nt(o)?a:o,d=(s.x||s.y)&&u,y=t&&(Ve(l)?!c:l);return!!d||!!y},Nn=new WeakMap,Js=(t,e)=>{Nn.set(t,e)},Ks=t=>{Nn.delete(t)},qo=t=>Nn.get(t),Zs=(t,e,n)=>{let o=!1;const s=n?new WeakMap:!1,c=()=>{o=!0},r=i=>{if(s&&n){const a=n.map(u=>{const[l,d]=u||[];return[d&&l?(i||bo)(l,t):[],d]});Q(a,u=>Q(u[0],l=>{const d=u[1],y=s.get(l)||[];if(t.contains(l)&&d){const x=rt(l,d.trim(),v=>{o?(x(),s.delete(l)):e(v)});s.set(l,Z(y,x))}else St(y),s.delete(l)}))}};return r(),[c,r]},ao=(t,e,n,o)=>{let s=!1;const{X:c,Y:r,J:i,K:a,Z:u,tt:l}=o||{},d=xo(()=>s&&n(!0),{v:33,p:99}),[y,C]=Zs(t,d,i),x=c||[],v=r||[],P=_t(x,v),z=(E,$)=>{if(!Be($)){const W=u||bt,F=l||bt,M=[],V=[];let k=!1,H=!1;if(Q($,w=>{const{attributeName:R,target:j,type:_,oldValue:q,addedNodes:et,removedNodes:tt}=w,X=_==="attributes",G=_==="childList",J=t===j,L=X&&R,g=L?dt(j,R||""):null,h=L&&q!==g,A=Xe(v,R)&&h;if(e&&(G||!J)){const f=X&&h,D=f&&a&&Me(j,a),ot=(D?!W(j,R,q,g):!X||f)&&!F(w,!!D,t,o);Q(et,nt=>Z(M,nt)),Q(tt,nt=>Z(M,nt)),H=H||ot}!e&&J&&h&&!W(j,R,q,g)&&(Z(V,R),k=k||A)}),C(w=>qn(M).reduce((R,j)=>(Z(R,bo(w,j)),Me(j,w)?Z(R,j):R),[])),e)return!E&&H&&n(!1),[!1];if(!Be(V)||k){const w=[qn(V),k];return!E&&n.apply(0,w),w}}},m=new fs(B(z,!1));return[()=>(m.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:P,subtree:e,childList:e,characterData:e}),s=!0,()=>{s&&(y(),m.disconnect(),s=!1)}),()=>{if(s)return d.m(),z(!0,m.takeRecords())}]},Vo=(t,e,n)=>{const{nt:s,ot:c}=n||{},r=re(js),{V:i}=yt(),a=B(he,t),[u]=Ot({o:!1,_:!0});return()=>{const l=[],y=ho(`<div class="${kn}"><div class="${Ts}"></div></div>`)[0],C=y.firstChild,x=v=>{const P=v instanceof ResizeObserverEntry,z=!P&&ht(v);let m=!1,E=!1,$=!0;if(P){const[W,,F]=u(v.contentRect),M=hn(W),V=Co(W,F);E=!F||V,m=!E&&!M,$=!m}else z?[,$]=v:E=v===!0;if(s&&$){const W=z?v[0]:he(y);Yt(y,{x:Po(3333333,3333333,W&&i),y:3333333})}m||e({st:z?v:void 0,et:!z,ot:E})};if(_e){const v=new _e(P=>x(P.pop()));v.observe(C),Z(l,()=>{v.disconnect()})}else if(r){const[v,P]=r(C,x,c);Z(l,_t([Rt(y,As),rt(y,"animationstart",v)],P))}else return bt;if(s){const[v]=Ot({o:void 0},a);Z(l,rt(y,"scroll",P=>{const z=v(),[m,E,$]=z;E&&(zn(C,"ltr rtl"),Rt(C,m?"rtl":"ltr"),x([!!m,E,$])),To(P)}))}return B(St,Z(l,gt(t,y)))}},Qs=(t,e)=>{let n;const o=a=>a.h===0||a.isIntersecting||a.intersectionRatio>0,s=Gt(Ps),[c]=Ot({o:!1}),r=(a,u)=>{if(a){const l=c(o(a)),[,d]=l;return d&&!u&&e(l)&&[l]}},i=(a,u)=>r(u.pop(),a);return[()=>{const a=[];if(Un)n=new Un(B(i,!1),{root:t}),n.observe(s),Z(a,()=>{n.disconnect()});else{const u=()=>{const l=ve(s);r(l)};Z(a,Vo(s,u)()),u()}return B(St,Z(a,gt(t,s)))},()=>n&&i(!0,n.takeRecords())]},tc=(t,e)=>{let n,o,s,c,r;const{H:i}=yt(),a=`[${Et}]`,u=`[${kt}]`,l=["tabindex"],d=["wrap","cols","rows"],y=["id","class","style","open"],C={ct:!1,rt:he(t.lt)},{lt:x,it:v,ut:P,ft:z,_t:m,dt:E,vt:$}=t,{U:W,B:F}=yt(),[M]=Ot({u:$o,o:{w:0,h:0}},()=>{const L=E(oe,ne),g=E(fn,""),h=g&&Ze(v);$(oe,ne),$(fn,""),$("",qe,!0);const A=Fe(P),f=Fe(v),D=je(v);return $(oe,ne,L),$(fn,"",g),$("",qe),Yt(v,h),{w:f.w+A.w+D.w,h:f.h+A.h+D.h}}),V=z?d:_t(y,d),k=xo(e,{v:()=>n,p:()=>o,g(L,g){const[h]=L,[A]=g;return[_t(Lt(h),Lt(A)).reduce((f,D)=>(f[D]=h[D]||A[D],f),{})]}}),H=L=>{Q(L||l,g=>{if(Xe(l,g)){const h=dt(x,g);xe(h)?dt(v,g,h):ft(v,g)}})},w=(L,g)=>{const[h,A]=L,f={ht:A};return Y(C,{ct:h}),!g&&e(f),f},R=({et:L,st:g,ot:h})=>{const f=!(L&&!h&&!g)&&i?k:e,[D,N]=g||[];g&&Y(C,{rt:D}),f({et:L||h,ot:h,gt:N})},j=(L,g)=>{const[,h]=M(),A={bt:h};return h&&!g&&(L?e:k)(A),A},_=(L,g,h)=>{const A={wt:g};return g&&!h?k(A):m||H(L),A},[q,et]=P||!W?Qs(x,w):[],tt=!m&&Vo(x,R,{ot:!0,nt:!0}),[X,G]=ao(x,!1,_,{Y:y,X:_t(y,l)}),J=m&&_e&&new _e(L=>{const g=L[L.length-1].contentRect;R({et:!0,ot:Co(g,r)}),r=g});return[()=>{H(),J&&J.observe(x);const L=tt&&tt(),g=q&&q(),h=X(),A=F(f=>{const[,D]=M();k({yt:f,bt:D})});return()=>{J&&J.disconnect(),L&&L(),g&&g(),c&&c(),h(),A()}},({St:L,$t:g,xt:h})=>{const A={},[f]=L("update.ignoreMutation"),[D,N]=L("update.attributes"),[ot,nt]=L("update.elementEvents"),[p,b]=L("update.debounce"),S=nt||N,I=g||h,T=O=>At(f)&&f(O);if(S){s&&s(),c&&c();const[O,U]=ao(P||v,!0,j,{X:_t(V,D||[]),J:ot,K:a,tt:(K,st)=>{const{target:lt,attributeName:mt}=K;return(!st&&mt&&!m?cs(lt,a,u):!1)||!!te(lt,`.${vt}`)||!!T(K)}});c=O(),s=U}if(b)if(k.m(),ht(p)){const O=p[0],U=p[1];n=Ht(O)&&O,o=Ht(U)&&U}else Ht(p)?(n=p,o=!1):(n=!1,o=!1);if(I){const O=G(),U=et&&et(),K=s&&s();O&&Y(A,_(O[0],O[1],I)),U&&Y(A,w(U[0],I)),K&&Y(A,j(K[0],I))}return A},C]},On=(t,e,n)=>pe(t,ls(e,n)),ec=(t,e,n)=>{const o=be(e),[s,c]=xs(o,n),r=(c-t)/c,i=t/s,a=t/c,u=n?n.n?r:n.i?i:a:a;return On(0,1,u)},Uo=(t,e,n,o)=>{if(o){const i=n?"x":"y",{Ot:a,Ct:u}=o,l=u[i],d=a[i];return On(0,1,l/(l+d))}const s=n?It:zt,c=$t(t)[s],r=$t(e)[s];return On(0,1,c/r)},uo=(t,e,n,o)=>{const s=Uo(t,e,o);return 1/s*(1-s)*n},nc=(t,e,n)=>{const{j:o,A:s}=yt(),{scrollbars:c}=o(),{slot:r}=c,{Ht:i,lt:a,it:u,zt:l,It:d,At:y,_t:C}=e,{scrollbars:x}=l?{}:t,{slot:v}=x||{},P=new Map,z=p=>bn&&new bn({source:d,axis:p}),m=z("x"),E=z("y"),$=jo([i,a,u],()=>C&&y?i:a,r,v),W=p=>C&&!y&&Tt(p)===u,F=p=>{P.forEach((b,S)=>{(p?Xe(ht(p)?p:[p],S):!0)&&((b||[]).forEach(T=>{T&&T.cancel()}),P.delete(S))})},M=(p,b,S)=>{const I=S?Rt:zn;Q(p,T=>{I(T.Et,b)})},V=(p,b)=>{Q(p,S=>{const[I,T]=b(S);ut(I,T)})},k=p=>{const b=p||0;return isFinite(b)?b:0},H=p=>`${(k(p)*100).toFixed(3)}%`,w=p=>`${k(p)}px`,R=(p,b,S)=>{V(p,I=>{const{Tt:T,kt:O}=I;return[T,{[S?It:zt]:H(Uo(T,O,S,b))}]})},j=(p,b,S)=>{V(p,I=>{const{Tt:T,kt:O,Et:U}=I,{V:K}=yt(),st=S?"x":"y",lt=S?"Left":"Top",{Ot:mt}=b,wt=he(U),xt=uo(T,O,ec(d[`scroll${lt}`],mt[st],S&&wt&&K),S);return[T,{transform:Qt(H(xt),S)}]})},_=p=>{const{Et:b}=p,S=W(b)&&b,{x:I,y:T}=Ze(d);return[S,{transform:S?Qt({x:w(I),y:w(T)}):""}]},q=(p,b,S,I)=>b&&p.animate(S,{timeline:b,composite:I}),et=(p,b,S,I)=>q(p,b,{transform:[Qt(w(0),I),Qt(w(pe(0,S-.5)),I)]},"add"),tt=[],X=[],G=[],J=(p,b,S)=>{const I=vo(S),T=I?S:!0,O=I?!S:!0;T&&M(X,p,b),O&&M(G,p,b)},L=p=>{R(X,p,!0),R(G,p)},g=p=>{!m&&!E&&(j(X,p,!0),j(G,p))},h=()=>{const p=(b,{Et:S,kt:I,Tt:T})=>{const O=b&&he(S),U=B(uo,T,I),K=U(O?1:0,b),st=U(O?0:1,b);F(T),P.set(T,[q(T,b?m:E,Y({transform:[Qt(H(K),b),Qt(H(st),b)]},O?{clear:["left"]}:{}))])};X.forEach(B(p,!0)),G.forEach(B(p,!1))},A=()=>{!E&&!E&&(C&&V(X,_),C&&V(G,_))},f=({Ot:p})=>{_t(G,X).forEach(({Et:b})=>{F(b),W(b)&&P.set(b,[et(b,m,p.x,!0),et(b,E,p.y)])})},D=p=>{const b=p?Bs:Ms,S=p?X:G,I=Be(S)?oo:"",T=Gt(`${vt} ${b} ${I}`),O=Gt(Ro),U=Gt(_n),K={Et:T,kt:O,Tt:U};return s||Rt(T,Ls),Z(S,K),Z(tt,[gt(T,O),gt(O,U),B(Pt,T),F,n(K,J,p)]),K},N=B(D,!0),ot=B(D,!1),nt=()=>(gt($,X[0].Et),gt($,G[0].Et),ke(()=>{J(oo)},300),B(St,tt));return N(),ot(),[{Dt:L,Mt:g,Rt:h,Lt:f,Pt:A,Vt:J,Ut:{P:m,Bt:X,jt:N,Nt:B(V,X)},Gt:{P:E,Bt:G,jt:ot,Nt:B(V,G)}},nt]},oc=(t,e,n)=>{const{lt:o,It:s,qt:c}=e,r=(i,a)=>{const{Tt:u,kt:l}=i,d=`scroll${a?"Left":"Top"}`,y=`client${a?"X":"Y"}`,C=a?It:zt,x=a?"left":"top",v=a?"w":"h",P=a?"x":"y",z="pointerup pointerleave pointercancel lostpointercapture",m=(E,$)=>W=>{const{Ot:F}=n,M=ve(l)[v]-ve(u)[v],k=$*W/M*F[P];s[d]=E+k};return rt(l,"pointerdown",E=>{const $=te(E.target,`.${_n}`)===u,W=$?u:l,F=t.scrollbars,{button:M,isPrimary:V,pointerType:k}=E,{pointers:H}=F,w=M===0&&V&&F[$?"dragScroll":"clickScroll"]&&(H||[]).includes(k);if(Xt(o,Et,eo,!0),w){const R=!$&&E.shiftKey,j=B($t,u),_=B($t,l),q=(N,ot)=>(N||j())[x]-(ot||_())[x],et=be($t(s)[C])/ve(s)[v]||1,tt=m(s[d]||0,1/et),X=E[y],G=j(),J=_(),L=G[C],g=q(G,J)+L/2,h=X-J[x],A=$?0:h-g,f=N=>{St(D),W.releasePointerCapture(N.pointerId)},D=[B(Xt,o,Et,eo),rt(c,z,f),rt(c,"selectstart",N=>Kn(N),{S:!1}),rt(l,z,f),rt(l,"pointermove",N=>{const ot=N[y]-X;($||R)&&tt(A+ot)})];if(R)tt(A);else if(!$){const N=re(qs);N&&Z(D,N(tt,q,A,L,h))}W.setPointerCapture(E.pointerId)}})};return(i,a,u)=>{const{Et:l}=i,[d,y]=Ut(333),C=!!s.scrollBy;let x=!0;return B(St,[rt(l,"pointerenter",()=>{a(so,!0)}),rt(l,"pointerleave pointercancel",()=>{a(so,!1)}),rt(l,"wheel",v=>{const{deltaX:P,deltaY:z,deltaMode:m}=v;C&&x&&m===0&&Tt(l)===o&&s.scrollBy({left:P,top:z,behavior:"smooth"}),x=!1,a(lo,!0),d(()=>{x=!0,a(lo)}),Kn(v)},{S:!1,$:!0}),rt(l,"mousedown",B(rt,c,"click",To,{O:!0,$:!0}),{$:!0}),r(i,u),y])}},sc=(t,e,n,o,s,c)=>{let r,i,a,u,l,d=bt,y=0;const[C,x]=Ut(),[v,P]=Ut(),[z,m]=Ut(100),[E,$]=Ut(100),[W,F]=Ut(100),[M,V]=Ut(()=>y),[k,H]=nc(t,s,oc(e,s,o)),{lt:w,Ft:R,At:j}=s,{Vt:_,Dt:q,Mt:et,Rt:tt,Lt:X,Pt:G}=k,J=f=>{_(xn,f,!0),_(xn,f,!1)},L=(f,D)=>{if(V(),f)_(ro);else{const N=B(_,ro,!0);y>0&&!D?M(N):N()}},g=f=>f.pointerType==="mouse",h=f=>{g(f)&&(u=i,u&&L(!0))},A=[m,V,$,F,P,x,()=>d(),rt(w,"pointerover",h,{O:!0}),rt(w,"pointerenter",h),rt(w,"pointerleave",f=>{g(f)&&(u=!1,i&&L(!1))}),rt(w,"pointermove",f=>{g(f)&&r&&C(()=>{m(),L(!0),E(()=>{r&&L(!1)})})}),rt(R,"scroll",f=>{v(()=>{et(o),a&&L(!0),z(()=>{a&&!u&&L(!1)})}),c(f),G()})];return[()=>B(St,Z(A,H())),({St:f,xt:D,Wt:N,Xt:ot})=>{const{Yt:nt,Jt:p,Kt:b}=ot||{},{gt:S,ot:I}=N||{},{rt:T}=n,{I:O}=yt(),{Ot:U,Zt:K,Qt:st}=o,[lt,mt]=f("showNativeOverlaidScrollbars"),[wt,xt]=f("scrollbars.theme"),[Ft,it]=f("scrollbars.visibility"),[at,ct]=f("scrollbars.autoHide"),[Bt,jt]=f("scrollbars.autoHideSuspend"),[Mt]=f("scrollbars.autoHideDelay"),[Ee,Ce]=f("scrollbars.dragScroll"),[Jt,$e]=f("scrollbars.clickScroll"),Qe=I&&!D,tn=st.x||st.y,en=nt||p||S||D,nn=b||it,Ct=lt&&O.x&&O.y,le=(He,ie)=>{const ae=Ft==="visible"||Ft==="auto"&&He==="scroll";return _(ks,ae,ie),ae};if(y=Mt,Qe&&(Bt&&tn?(J(!1),d(),W(()=>{d=rt(R,"scroll",B(J,!0),{O:!0})})):J(!0)),mt&&_(Is,Ct),xt&&(_(l),_(wt,!0),l=wt),jt&&!Bt&&J(!0),ct&&(r=at==="move",i=at==="leave",a=at!=="never",L(!a,!0)),Ce&&_(Ds,Ee),$e&&_(Rs,Jt),nn){const He=le(K.x,!0),ie=le(K.y,!1);_(_s,!(He&&ie))}en&&(q(o),et(o),tt(o),G(),X(o),_(co,!U.x,!0),_(co,!U.y,!1),_(zs,T&&!j))},{},k]},cc=t=>{const e=yt(),{j:n,H:o}=e,s=re(Rn),c=s&&s.C,{elements:r}=n(),{host:i,padding:a,viewport:u,content:l}=r,d=fe(t),y=d?{}:t,{elements:C}=y,{host:x,padding:v,viewport:P,content:z}=C||{},m=d?t:y.target,E=Me(m,"textarea"),$=m.ownerDocument,W=$.documentElement,F=m===$.body,M=$.defaultView,V=B(Gs,[m]),k=B(jo,[m]),H=B(Dn,[m]),w=B(Gt,""),R=B(V,w,u),j=B(k,w,l),_=R(P),q=_===m,et=q&&F,tt=!q&&j(z),X=!q&&fe(_)&&_===tt,G=X&&!!H(l),J=G?R():_,L=G?tt:j(),h=et?W:X?J:_,A=E?V(w,i,x):m,f=et?h:A,D=X?L:tt,N=$.activeElement,ot=!q&&M.top===M&&N===m,nt={Ht:m,lt:f,it:h,tn:!q&&k(w,a,v),ut:D,nn:!q&&!o&&c&&c(e),It:et?W:h,Ft:et?$:h,sn:M,qt:$,ft:E,At:F,zt:d,_t:q,en:X,dt:(it,at)=>os(h,q?Et:kt,q?at:it),vt:(it,at,ct)=>Xt(h,q?Et:kt,q?at:it,ct)},p=Lt(nt).reduce((it,at)=>{const ct=nt[at];return Z(it,ct&&fe(ct)&&!Tt(ct)?ct:!1)},[]),b=it=>it?Xe(p,it):null,{Ht:S,lt:I,tn:T,it:O,ut:U,nn:K}=nt,st=[()=>{ft(I,Et),ft(I,dn),ft(S,dn),F&&(ft(W,Et),ft(W,dn))}],lt=E&&b(I);let mt=E?S:vn([U,O,T,I,S].find(it=>b(it)===!1));const wt=et?S:U||O,xt=B(St,st);return[nt,()=>{dt(I,Et,q?"viewport":"host"),dt(T,wn,""),dt(U,no,""),q||dt(O,kt,"");const it=F&&!q?Rt(Tt(m),Bo):bt,at=ct=>{gt(Tt(ct),vn(ct)),Pt(ct)};if(lt&&(Vn(S,I),Z(st,()=>{Vn(I,S),Pt(I)})),gt(wt,mt),gt(I,T),gt(T||I,!q&&O),gt(O,U),Z(st,()=>{it(),ft(T,wn),ft(U,no),ft(O,Mo),ft(O,ko),ft(O,kt),b(U)&&at(U),b(O)&&at(O),b(T)&&at(T)}),o&&!q&&(Xt(O,kt,_o,!0),Z(st,B(ft,O,kt))),K&&(rs(O,K),Z(st,B(Pt,K))),ot){const ct="tabindex",Bt=dt(O,ct);dt(O,ct,"-1"),O.focus();const jt=()=>Bt?dt(O,ct,Bt):ft(O,ct),Mt=rt($,"pointerdown keydown",()=>{jt(),Mt()});Z(st,[jt,Mt])}else N&&N.focus&&N.focus();return mt=0,xt},xt]},rc=({ut:t})=>({Wt:e,cn:n,xt:o})=>{const{U:s}=yt(),{ht:c}=e||{},{ct:r}=n;(t||!s)&&(c||o)&&ut(t,{[zt]:r?"":"100%"})},lc=({lt:t,tn:e,it:n,_t:o},s)=>{const[c,r]=Ot({u:hs,o:Xn()},B(Xn,t,"padding",""));return({St:i,Wt:a,cn:u,xt:l})=>{let[d,y]=r(l);const{H:C,U:x}=yt(),{et:v,bt:P,gt:z}=a||{},{rt:m}=u,[E,$]=i("paddingAbsolute");(v||y||(l||!x&&P))&&([d,y]=c(l));const F=!o&&($||z||y);if(F){const M=!E||!e&&!C,V=d.r+d.l,k=d.t+d.b,H={[Ne]:M&&!m?-V:0,[ye]:M?-k:0,[De]:M&&m?-V:0,top:M?-d.t:0,right:M?m?-d.r:"auto":0,left:M?m?"auto":-d.l:0,[It]:M?`calc(100% + ${V}px)`:""},w={[Eo]:M?d.t:0,[Bn]:M?d.r:0,[Re]:M?d.b:0,[Mn]:M?d.l:0};ut(e||n,H),ut(n,w),Y(s,{tn:d,rn:!M,k:e?w:Y({},H,w)})}return{ln:F}}},ic=({lt:t,tn:e,it:n,nn:o,_t:s,vt:c,At:r,sn:i},a)=>{const u=B(pe,0),l="visible",d=42,y={u:$o,o:{w:0,h:0}},C={u:Ho,o:{x:se,y:se}},x=(g,h)=>{const A=pt.devicePixelRatio%1!==0?1:0,f={w:u(g.w-h.w),h:u(g.h-h.h)};return{w:f.w>A?f.w:0,h:f.h>A?f.h:0}},v=g=>g.indexOf(l)===0,{L:P,U:z,H:m,I:E}=yt(),$=re(Rn),W=!s&&!m&&(E.x||E.y),F=r&&s,[M,V]=Ot(y,B(je,n)),[k,H]=Ot(y,B(Fe,n)),[w,R]=Ot(y),[j,_]=Ot(y),[q]=Ot(C),et=(g,h)=>{if(ut(n,{[zt]:""}),h){const{rn:A,tn:f}=a,{an:D,D:N}=g,ot=je(t),nt=Ie(t),p=ut(n,"boxSizing")==="content-box",b=A||p?f.b+f.t:0,S=!(E.x&&p);ut(n,{[zt]:nt.h+ot.h+(D.x&&S?N.x:0)-b})}},tt=(g,h)=>{const A=!m&&!g?d:0,f=(T,O,U)=>{const K=ut(n,T),lt=(h?h[T]:K)==="scroll";return[K,lt,lt&&!m?O?A:U:0,O&&!!A]},[D,N,ot,nt]=f(ue,E.x,P.x),[p,b,S,I]=f(de,E.y,P.y);return{Zt:{x:D,y:p},an:{x:N,y:b},D:{x:ot,y:S},M:{x:nt,y:I}}},X=(g,h,A,f)=>{const D=(b,S)=>{const I=v(b),T=S&&I&&b.replace(`${l}-`,"")||"";return[S&&!I?b:"",v(T)?"hidden":T]},[N,ot]=D(A.x,h.x),[nt,p]=D(A.y,h.y);return f[ue]=ot&&nt?ot:N,f[de]=p&&N?p:nt,tt(g,f)},G=(g,h,A,f)=>{const{D,M:N}=g,{x:ot,y:nt}=N,{x:p,y:b}=D,{k:S}=a,I=h?De:Ne,T=h?Mn:Bn,O=S[I],U=S[ye],K=S[T],st=S[Re];f[It]=`calc(100% + ${b+O*-1}px)`,f[I]=-b+O,f[ye]=-p+U,A&&(f[T]=K+(nt?b:0),f[Re]=st+(ot?p:0))},[J,L]=$?$.T(W,z,n,o,a,tt,G):[()=>W,()=>[bt]];return({St:g,Wt:h,cn:A,xt:f},{ln:D})=>{const{et:N,wt:ot,bt:nt,ht:p,gt:b,yt:S}=h||{},{ct:I,rt:T}=A,[O,U]=g("showNativeOverlaidScrollbars"),[K,st]=g("overflow"),lt=O&&E.x&&E.y,mt=!s&&!z&&(N||nt||ot||U||p),wt=N||D||nt||b||S||U,xt=v(K.x),Ft=v(K.y),it=xt||Ft;let at=V(f),ct=H(f),Bt=R(f),jt=_(f),Mt;if(U&&m&&c(_o,$s,!lt),mt&&(Mt=tt(lt),et(Mt,I)),wt){it&&c(oe,ne,!1);const[qt,Kt]=L(lt,T,Mt),[Vt,Ko]=at=M(f),[Zt,Zo]=ct=k(f),on=Ie(n);let sn=Zt,cn=on;qt(),(Zo||Ko||U)&&Kt&&!lt&&J(Kt,Zt,Vt,T)&&(cn=Ie(n),sn=Fe(n));const Fn=bs(i),Qo={w:u(pe(Zt.w,sn.w)+Vt.w),h:u(pe(Zt.h,sn.h)+Vt.h)},jn={w:u((F?Fn.w:cn.w+u(on.w-Zt.w))+Vt.w),h:u((F?Fn.h:cn.h+u(on.h-Zt.h))+Vt.h)};jt=j(jn),Bt=w(x(Qo,jn),f)}const[Ee,Ce]=jt,[Jt,$e]=Bt,[Qe,tn]=ct,[en,nn]=at,Ct={x:Jt.w>0,y:Jt.h>0},le=xt&&Ft&&(Ct.x||Ct.y)||xt&&Ct.x&&!Ct.y||Ft&&Ct.y&&!Ct.x;if(D||b||S||nn||tn||Ce||$e||st||U||mt||wt){const qt={[Ne]:0,[ye]:0,[De]:0,[It]:"",[ue]:"",[de]:""},Kt=X(lt,Ct,K,qt),Vt=J(Kt,Qe,en,T);s||G(Kt,T,Vt,qt),mt&&et(Kt,I),s?(dt(t,Mo,qt[ue]),dt(t,ko,qt[de])):ut(n,qt)}Xt(t,Et,ne,le),Xt(e,wn,Hs,le),s||Xt(n,kt,oe,it);const[ie,ae]=q(tt(lt).Zt);return Y(a,{Zt:ie,Ct:{x:Ee.w,y:Ee.h},Ot:{x:Jt.w,y:Jt.h},Qt:Ct}),{Kt:ae,Yt:Ce,Jt:$e}}},ac=t=>{const[e,n,o]=cc(t),s={tn:{t:0,r:0,b:0,l:0},rn:!1,k:{[Ne]:0,[ye]:0,[De]:0,[Eo]:0,[Bn]:0,[Re]:0,[Mn]:0},Ct:{x:0,y:0},Ot:{x:0,y:0},Zt:{x:se,y:se},Qt:{x:!1,y:!1}},{Ht:c,it:r,vt:i,_t:a}=e,{H:u,I:l,U:d}=yt(),y=!u&&(l.x||l.y),C=[rc(e),lc(e,s),ic(e,s)];return[n,x=>{const v={},z=(y||!d)&&Ze(r);return i("",qe,!0),Q(C,m=>{Y(v,m(x,v)||{})}),i("",qe),Yt(r,z),!a&&Yt(c,0),v},s,e,o]},uc=(t,e,n,o)=>{const[s,c,r,i,a]=ac(t),[u,l,d]=tc(i,z=>{P({},z)}),[y,C,,x]=sc(t,e,d,r,i,o),v=z=>Lt(z).some(m=>!!z[m]),P=(z,m)=>{const{un:E,xt:$,$t:W,fn:F}=z,M=E||{},V=!!$,k={St:Es(e,M,V),un:M,xt:V};if(F)return C(k),!1;const H=m||l(Y({},k,{$t:W})),w=c(Y({},k,{cn:d,Wt:H}));C(Y({},k,{Wt:H,Xt:w}));const R=v(H),j=v(w),_=R||j||!Ln(M)||V;return _&&n(z,{Wt:H,Xt:w}),_};return[()=>{const{Ht:z,it:m,qt:E,At:$}=i,W=$?E.documentElement:z,F=Ze(W),M=[u(),s(),y()];return Yt(m,F),B(St,M)},P,()=>({_n:d,dn:r}),{vn:i,hn:x},a]},Dt=(t,e,n)=>{const{G:o}=yt(),s=fe(t),c=s?t:t.target,r=qo(c);if(e&&!r){let i=!1;const a=[],u={},l=H=>{const w=mo(H,!0),R=re(Fs);return R?R(w,!0):w},d=Y({},o(),l(e)),[y,C,x]=Sn(),[v,P,z]=Sn(n),m=(H,w)=>{z(H,w),x(H,w)},[E,$,W,F,M]=uc(t,d,({un:H,xt:w},{Wt:R,Xt:j})=>{const{et:_,gt:q,ht:et,bt:tt,wt:X,ot:G}=R,{Yt:J,Jt:L,Kt:g}=j;m("updated",[k,{updateHints:{sizeChanged:!!_,directionChanged:!!q,heightIntrinsicChanged:!!et,overflowEdgeChanged:!!J,overflowAmountChanged:!!L,overflowStyleChanged:!!g,contentMutation:!!tt,hostMutation:!!X,appear:!!G},changedOptions:H||{},force:!!w}])},H=>m("scroll",[k,H])),V=H=>{Ks(c),St(a),i=!0,m("destroyed",[k,H]),C(),P()},k={options(H,w){if(H){const R=w?o():{},j=Lo(d,Y(R,l(H)));Ln(j)||(Y(d,j),$({un:j}))}return Y({},d)},on:v,off:(H,w)=>{H&&w&&P(H,w)},state(){const{_n:H,dn:w}=W(),{rt:R}=H,{Ct:j,Ot:_,Zt:q,Qt:et,tn:tt,rn:X}=w;return Y({},{overflowEdge:j,overflowAmount:_,overflowStyle:q,hasOverflow:et,padding:tt,paddingAbsolute:X,directionRTL:R,destroyed:i})},elements(){const{Ht:H,lt:w,tn:R,it:j,ut:_,It:q,Ft:et}=F.vn,{Ut:tt,Gt:X}=F.hn,G=L=>{const{Tt:g,kt:h,Et:A}=L;return{scrollbar:A,track:h,handle:g}},J=L=>{const{Bt:g,jt:h}=L,A=G(g[0]);return Y({},A,{clone:()=>{const f=G(h());return $({fn:!0}),f}})};return Y({},{target:H,host:w,padding:R||j,viewport:j,content:_||j,scrollOffsetElement:q,scrollEventElement:et,scrollbarHorizontal:J(tt),scrollbarVertical:J(X)})},update:H=>$({xt:H,$t:!0}),destroy:B(V,!1),plugin:H=>u[Lt(H)[0]]};return Z(a,[M]),Js(c,k),Fo(Do,Dt,[k,y,u]),Ys(F.vn.At,!s&&t.cancel)?(V(!0),k):(Z(a,E()),m("initialized",[k]),k.update(!0),k)}return r};Dt.plugin=t=>{const e=ht(t),n=e?t:[t],o=n.map(s=>Fo(s,Dt)[0]);return Ns(n),e?o:o[0]};Dt.valid=t=>{const e=t&&t.elements,n=At(e)&&e();return ze(n)&&!!qo(n.target)};Dt.env=()=>{const{L:t,I:e,H:n,V:o,U:s,A:c,P:r,F:i,W:a,j:u,N:l,G:d,q:y}=yt();return Y({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,rtlScrollBehavior:o,flexboxGlue:s,cssCustomProperties:c,scrollTimeline:r,staticDefaultInitialization:i,staticDefaultOptions:a,getDefaultInitialization:u,setDefaultInitialization:l,getDefaultOptions:d,setDefaultOptions:y})};const dc=document.querySelector("#eventsSection"),fo=document.querySelector("#events"),fc=t=>{dc.style.display="",fo.innerHTML="",Object.entries(t).forEach(([e,n])=>{const o=document.createElement("div");o.className=`event ${n.active?"active":""}`,o.textContent=`${e} (${n.count})`,fo.append(o)})},pc=()=>{let t=[];const e={},n={},o=r=>({active:t.includes(r),count:e[r]||0}),s=r=>{t=r,fc({initialized:o("initialized"),destroyed:o("destroyed"),updated:o("updated"),scroll:o("scroll")})};return r=>{const i=e[r];e[r]=typeof i=="number"?i+1:1,s(Array.from(new Set([...t,r]))),clearTimeout(n[r]),n[r]=setTimeout(()=>{const a=new Set(t);a.delete(r),s(Array.from(a))},500)}};let Wt,En=!1,Cn=!1,$n=!0;const Pe=pc(),ee=document.querySelector("#target"),po=document.querySelector("#targetContent"),Le=document.querySelector("#impostor"),Hn=document.querySelector("#scrollButton"),Se=document.querySelector("#toggleContentButton"),we=document.querySelector("#toggleElementButton"),An=document.querySelector("#toggleOverlayScrollbarsButton"),Wo=()=>{En?(po.style.display="none",Se.textContent="Show Content"):(po.style.display="",Se.textContent="Hide Content")},Xo=()=>{Cn?(ee.style.display="none",we.textContent="Show Element"):(ee.style.display="",we.textContent="Hide Element")},Go=()=>{var t,e;$n?((t=Le.parentElement)==null||t.append(ee),Le.remove(),Hn.style.display="",Se.style.display="",we.style.display="",An.textContent="Destroy OverlayScrollbars",Wt=Dt(ee,{},{initialized:()=>Pe("initialized"),destroyed:()=>Pe("destroyed"),updated:()=>Pe("updated"),scroll:()=>Pe("scroll")})):(Wt==null||Wt.destroy(),(e=ee.parentElement)==null||e.append(Le),ee.remove(),Le.style.display="",Hn.style.display="none",Se.style.display="none",we.style.display="none",An.textContent="Initialize OverlayScrollbars")};Hn.addEventListener("click",()=>{if(!Wt)return;const{overflowAmount:t}=Wt.state(),{scrollOffsetElement:e}=Wt.elements(),{scrollLeft:n,scrollTop:o}=e;e.scrollTo({behavior:"smooth",left:Math.round((t.x-n)/t.x)*t.x,top:Math.round((t.y-o)/t.y)*t.y})});Se.addEventListener("click",()=>{En=!En,Wo()});we.addEventListener("click",()=>{Cn=!Cn,Xo()});An.addEventListener("click",()=>{$n=!$n,Go()});Wo();Xo();Go();let me=null;const Yo=t=>Dt({target:document.body,cancel:{body:t?!1:null}},{}).state().destroyed,yc=document.querySelector("#toggleBodyOverlayScrollbarsSection"),Tn=document.querySelector("#toggleBodyOverlayScrollbarsButton"),Jo=()=>{me===null&&(me=!Yo()),yc.style.display="",Tn.style.display="",Tn.textContent=`${me?"Destroy":"Initialize"} Body OverlayScrollbars`};Tn.addEventListener("click",()=>{const t=Dt(document.body);t?(t.destroy(),me=!1):me=!Yo(!0),Jo()});Jo();