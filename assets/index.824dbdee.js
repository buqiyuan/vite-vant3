import{d as e,c as t,w as o,r as n,o as s,K as a,a as r,B as i,L as l,C as c,T as m,b as u,S as d,e as p,G as f,f as h,N as _,I as v,g,h as y,i as E,j as b,k as L,l as k,m as j,n as w}from"./vendor.aad91423.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const r=new URL(e,n);if(self[t].moduleMap[r])return o(self[t].moduleMap[r]);const i=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){a(new Error(`Failed to import: ${e}`)),s(l)},onload(){o(self[t].moduleMap[r]),s(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/vite-vant3/assets/");var R=e({name:"App"});R.render=function(e,i,l,c,m,u){const d=n("router-view");return s(),t(d,null,{default:o((({Component:e})=>[(s(),t(a,null,[(s(),t(r(e)))],1024))])),_:1})};const O=[i,l,c,m,u,d,p,f,h,_,v,g,y,E,b],I={install:function(e){O.forEach((t=>{e.component(t.name,t)}))}};var U={namespaced:!0,state:{token:sessionStorage.getItem("Access-Token")||"",name:"",welcome:"",avatar:"",roles:[],info:sessionStorage.getItem("Current-User")||{}},mutations:{setToken:(e,t)=>{e.token=t},setAvatar:(e,t)=>{e.avatar=t},setRoles:(e,t)=>{e.roles=t},setUserInfo:(e,t)=>{e.info=t}},actions:{async login({commit:e},t){},logout:async({commit:e})=>Promise.resolve()},getters:{token:e=>e.token,avatar:e=>e.avatar,nickname:e=>e.name,roles:e=>e.roles,userInfo:e=>e.info}};const P={"./user/index.ts":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U})},S={};Object.keys(P).forEach((e=>{const t=e.split("/")[1];S[t]=P[e][t]||P[e].default||P[e]}));var T={user:U};const x=Symbol(),A=L({plugins:[],modules:T});let M;const $={},C=function(e,t){if(!t)return e();if(void 0===M){const e=document.createElement("link").relList;M=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in $)return;$[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":M,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))};const D=[{path:"/home",name:"home",component:()=>C((()=>__import__("./index.8b6ab3fe.js")),["/vite-vant3/assets/index.8b6ab3fe.js","/vite-vant3/assets/index.fb1389b5.css","/vite-vant3/assets/vendor.aad91423.js","/vite-vant3/assets/vendor.7ecfb81a.css"]),meta:{title:"首页",icon:"home-o"}},{path:"/category",name:"category",component:()=>C((()=>__import__("./index.449873b8.js")),["/vite-vant3/assets/index.449873b8.js","/vite-vant3/assets/index.f20d62d3.css","/vite-vant3/assets/vendor.aad91423.js","/vite-vant3/assets/vendor.7ecfb81a.css"]),meta:{title:"分类",icon:"apps-o"}}],V=[{path:"/",name:"Layout",redirect:"/home",component:()=>C((()=>__import__("./index.7be620e1.js")),["/vite-vant3/assets/index.7be620e1.js","/vite-vant3/assets/index.c9c102ee.css","/vite-vant3/assets/vendor.aad91423.js","/vite-vant3/assets/vendor.7ecfb81a.css"]),meta:{title:"首页"},children:[...D]}],B=k({history:j(""),routes:V});const F=w(R);F.use(I),function(e){e.use(A,x)}(F),function(e){e.use(B),B.beforeEach(((e,t,o)=>{var n;document.title=(null==(n=null==e?void 0:e.meta)?void 0:n.title)||document.title,o()}))}(F),F.mount("#app");export{D as m};