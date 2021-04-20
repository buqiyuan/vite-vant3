import{d as e,c as t,o as a,r,w as i,K as n,a as l,b as o,e as s,u,i as c,f as d,g as v,h as f,p,j as g,k as m,n as h,l as b,m as y,q as x,T as w,s as S,t as k,v as C,x as z,y as B,z as T,A as P,B as N,C as L,D as E,E as A}from"./vendor.580d99d2.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const r=new URL(e,location),i=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,n)=>{const l=new URL(e,r);if(self[t].moduleMap[l])return a(self[t].moduleMap[l]);const o=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){n(new Error(`Failed to import: ${e}`)),i(s)},onload(){a(self[t].moduleMap[l]),i(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/vite-vant3/assets/");var O=e({name:"App"});function I(){}O.render=function(e,o,s,u,c,d){const v=r("router-view");return a(),t(v,null,{default:i((({Component:e})=>[(a(),t(n,null,[(a(),t(l(e)))],1024))])),_:1})};var _=Object.assign,j="undefined"!=typeof window,M=null,R={type:Boolean,default:!0};function D(e,t){var a=t.split("."),r=e;return a.forEach((e=>{var t;r=null!=(t=r[e])?t:""})),r}function q(e,t){return t?"string"==typeof t?" "+e+"--"+t:Array.isArray(t)?t.reduce(((t,a)=>t+q(e,a)),""):Object.keys(t).reduce(((a,r)=>a+(t[r]?q(e,r):"")),""):""}function $(e){return function(t,a){return t&&"string"!=typeof t&&(a=t,t=""),""+(t=t?e+"__"+t:e)+q(t,a)}}var V=/-(\w)/g;function Y(e){return e.replace(V,((e,t)=>t.toUpperCase()))}function X(e){return null!=e}function U(e){return"function"==typeof e}function F(e){return null!==e&&"object"==typeof e}function H(e){return"number"==typeof e||/^\d+(\.\d+)?$/.test(e)}var{hasOwnProperty:W}=Object.prototype;function Z(e,t){return Object.keys(t).forEach((a=>{!function(e,t,a){var r=t[a];X(r)&&(W.call(e,a)&&F(r)?e[a]=Z(Object(e[a]),t[a]):e[a]=r)}(e,t,a)})),e}var K,G=o("zh-CN"),J=s({"zh-CN":{name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loading:"加载中...",telEmpty:"请填写电话",nameEmpty:"请填写姓名",nameInvalid:"请输入正确的姓名",confirmDelete:"确定要删除吗",telInvalid:"请输入正确的手机号",vanCalendar:{end:"结束",start:"开始",title:"日期选择",confirm:"确定",startEnd:"开始/结束",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>e+"年"+t+"月",rangePrompt:e=>"选择天数不能超过 "+e+" 天"},vanCascader:{select:"请选择"},vanContactCard:{addText:"添加联系人"},vanContactList:{addText:"新建联系人"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计："},vanCoupon:{unlimited:"无使用门槛",discount:e=>e+"折",condition:e=>"满"+e+"元可用"},vanCouponCell:{title:"优惠券",tips:"暂无可用",count:e=>e+"张可用"},vanCouponList:{empty:"暂无优惠券",exchange:"兑换",close:"不使用优惠券",enable:"可用",disabled:"不可用",placeholder:"请输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码格式不正确",defaultAddress:"设为默认收货地址",telPlaceholder:"收货人手机号",namePlaceholder:"收货人姓名",areaPlaceholder:"选择省 / 市 / 区"},vanAddressEditDetail:{label:"详细地址",placeholder:"街道门牌、楼层房间号等信息"},vanAddressList:{add:"新增地址"}}}),Q={messages:()=>J[G.value],use(e,t){G.value=e,this.add({[e]:t})},add(e={}){Z(J,e)}};function ee(e){var t=Y(e)+".";return function(e,...a){var r=Q.messages(),i=D(r,t+e)||D(r,e);return U(i)?i(...a):i}}function te(e){var t="van-"+e;return[t,$(t),ee(t)]}function ae(e){return e.install=t=>{var{name:a}=e;t.component(a,e),t.component(Y("-"+a),e)},e}function re(e){if(X(e))return H(e)?e+"px":String(e)}function ie(e){var t={};return void 0!==e&&(t.zIndex=+e),t}function ne(e){return+(e=e.replace(/rem/g,""))*function(){if(!K){var e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;K=parseFloat(t)}return K}()}function le(e){if("number"==typeof e)return e;if(j){if(e.includes("rem"))return ne(e);if(e.includes("vw"))return function(e){return+(e=e.replace(/vw/g,""))*window.innerWidth/100}(e);if(e.includes("vh"))return function(e){return+(e=e.replace(/vh/g,""))*window.innerHeight/100}(e)}return parseFloat(e)}function oe(e,t,a){return Math.min(Math.max(e,t),a)}function se(e){var t=u(e);if(!t)return!1;var a=window.getComputedStyle(t),r="none"===a.display,i=null===t.offsetParent&&"fixed"!==a.position;return r||i}function ue(e,t){("boolean"!=typeof e.cancelable||e.cancelable)&&e.preventDefault(),t&&function(e){e.stopPropagation()}(e)}j&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());var ce="undefined"!=typeof window,de=ce?window:global,ve=Date.now();function fe(e){var t=Date.now(),a=Math.max(0,16-(t-ve)),r=setTimeout(e,a);return ve=t+a,r}function pe(e){return(de.requestAnimationFrame||fe).call(de,e)}function ge(e){pe((()=>pe(e)))}function me(e,t){return{top:0,left:0,right:e,bottom:t,width:e,height:t}}var he=e=>{var t=u(e);return t===window?me(t.innerWidth,t.innerHeight):t&&t.getBoundingClientRect?t.getBoundingClientRect():me(0,0)};function be(e){var t=c(e,null);if(t){var a=f(),{link:r,unlink:i,internalChildren:n}=t;return r(a),d((()=>i(a))),{parent:t,index:v((()=>n.indexOf(a)))}}return{parent:null,index:o(-1)}}function ye(e,t,a){var r,i,n,l=(r=e.subTree.children,i=[],(n=e=>{Array.isArray(e)&&e.forEach((e=>{var t;g(e)&&(i.push(e),null!=(t=e.component)&&t.subTree&&n(e.component.subTree.children),e.children&&n(e.children))}))})(r),i);a.sort(((e,t)=>l.indexOf(e.vnode)-l.indexOf(t.vnode)));var o=a.map((e=>e.proxy));t.sort(((e,t)=>o.indexOf(e)-o.indexOf(t)))}function xe(e){var t=s([]),a=s([]),r=f();return{children:t,linkChildren:i=>{p(e,Object.assign({link:e=>{e.proxy&&(a.push(e),t.push(e.proxy),ye(r,t,a))},unlink:e=>{var r=a.indexOf(e);t.splice(r,1),a.splice(r,1)},children:t,internalChildren:a},i))}}}function we(e){var t;m((()=>{e(),h((()=>{t=!0}))})),b((()=>{t&&e()}))}var Se=!1;if(ce)try{var ke={};Object.defineProperty(ke,"passive",{get(){Se=!0}}),window.addEventListener("test-passive",null,ke)}catch(oa){}function Ce(e,t,a={}){if(ce){var r,{target:i=window,passive:n=!1,capture:l=!1}=a,o=()=>{var a=u(i);a&&r&&(a.removeEventListener(e,t,l),r=!1)};d(o),y(o),we((()=>{var a=u(i);a&&!r&&(a.addEventListener(e,t,Se?{capture:l,passive:n}:l),r=!0)}))}}var ze=/scroll|auto/i;function Be(e){return"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType}function Te(e,t=window){for(var a=e;a&&a!==t&&Be(a);){var{overflowY:r}=window.getComputedStyle(a);if(ze.test(r))return a;a=a.parentNode}return t}function Pe(e,t=window){var a=o();return m((()=>{e.value&&(a.value=Te(e.value,t))})),a}function Ne(e){var t=f();t&&_(t.proxy,e)}var Le={to:[String,Object],url:String,replace:Boolean};function Ee(){var e=f().proxy;return()=>function(e){var t=e.$router,{to:a,url:r,replace:i}=e;a&&t?t[i?"replace":"push"](a):r&&(i?location.replace(r):location.href=r)}(e)}var Ae="van-hairline",[Oe,Ie]=te("badge"),_e=ae(e({name:Oe,props:{dot:Boolean,max:[Number,String],color:String,offset:Array,content:[Number,String],showZero:R,tag:{type:String,default:"div"}},setup(e,{slots:t}){var a=()=>{if(t.content)return!0;var{content:a,showZero:r}=e;return X(a)&&""!==a&&(r||0!==a)},r=()=>{var{dot:r,max:i,content:n}=e;if(!r&&a())return t.content?t.content():X(i)&&H(n)&&+n>i?i+"+":n},i=()=>{if(a()||e.dot){var i={background:e.color};if(e.offset){var[n,l]=e.offset;t.default?(i.top=re(l),i.right="-"+re(n)):(i.marginTop=re(l),i.marginLeft=re(n))}return x("div",{class:Ie({dot:e.dot,fixed:!!t.default}),style:i},[r()])}};return()=>{if(t.default){var{tag:a}=e;return x(a,{class:Ie("wrapper")},{default:()=>[t.default(),i()]})}return i()}}})),[je,Me]=te("icon");var Re=ae(e({name:je,props:{dot:Boolean,name:String,size:[Number,String],badge:[Number,String],color:String,tag:{type:String,default:"i"},classPrefix:{type:String,default:Me()}},setup:(e,{slots:t})=>()=>{var{tag:a,dot:r,name:i,size:n,badge:l,color:o,classPrefix:s}=e,u=function(e){return!!e&&e.includes("/")}(i);return x(_e,{dot:r,tag:a,content:l,class:[s,u?"":s+"-"+i],style:{color:o,fontSize:re(n)}},{default:()=>[null==t.default?void 0:t.default(),u&&x("img",{class:Me("image"),src:i},null)]})}})),[De,qe]=te("loading"),$e=Array(12).fill(x("i",null,null)),Ve=x("svg",{class:qe("circular"),viewBox:"25 25 50 50"},[x("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),Ye=ae(e({name:De,props:{size:[Number,String],color:String,vertical:Boolean,textSize:[Number,String],textColor:String,type:{type:String,default:"circular"}},setup(e,{slots:t}){var a=v((()=>_({color:e.color},function(e){if(X(e)){var t=re(e);return{width:t,height:t}}}(e.size)))),r=()=>{var a;if(t.default)return x("span",{class:qe("text"),style:{fontSize:re(e.textSize),color:null!=(a=e.textColor)?a:e.color}},[t.default()])};return()=>{var{type:t,vertical:i}=e;return x("div",{class:qe([t,{vertical:i}])},[x("span",{class:qe("spinner",t),style:a.value},["spinner"===t?$e:Ve]),r()])}}})),[Xe,Ue]=te("button"),Fe=ae(e({name:Xe,props:_({},Le,{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,loadingSize:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},nativeType:{type:String,default:"button"},iconPosition:{type:String,default:"left"}}),emits:["click"],setup(e,{emit:t,slots:a}){var r=Ee(),i=()=>e.loading?a.loading?a.loading():x(Ye,{size:e.loadingSize,type:e.loadingType,class:Ue("loading")},null):e.icon?x(Re,{name:e.icon,class:Ue("icon"),classPrefix:e.iconPrefix},null):void 0,n=()=>{var t;if(t=e.loading?e.loadingText:a.default?a.default():e.text)return x("span",{class:Ue("text")},[t])},l=()=>{var{color:t,plain:a}=e;if(t){var r={color:a?t:"white"};return a||(r.background=t),t.includes("gradient")?r.border=0:r.borderColor=t,r}},o=a=>{e.loading?a.preventDefault():e.disabled||(t("click",a),r())};return()=>{var{tag:t,type:a,size:r,block:s,round:u,plain:c,square:d,loading:v,disabled:f,hairline:p,nativeType:g,iconPosition:m}=e,h=[Ue([a,r,{plain:c,block:s,round:u,square:d,loading:v,disabled:f,hairline:p}]),{"van-hairline--surround":p}];return x(t,{type:g,class:h,style:l(),disabled:f,onClick:o},{default:()=>[x("div",{class:Ue("content")},["left"===m&&i(),n(),"right"===m&&i()])]})}}}));function He(){var e=o(0),t=o(0),a=o(0),r=o(0),i=o(0),n=o(0),l=o(""),s=()=>{a.value=0,r.value=0,i.value=0,n.value=0,l.value=""};return{move:o=>{var s,u,c=o.touches[0];a.value=c.clientX<0?0:c.clientX-e.value,r.value=c.clientY-t.value,i.value=Math.abs(a.value),n.value=Math.abs(r.value),l.value||(l.value=(s=i.value,u=n.value,s>u&&s>10?"horizontal":u>s&&u>10?"vertical":""))},start:a=>{s(),e.value=a.touches[0].clientX,t.value=a.touches[0].clientY},reset:s,startX:e,startY:t,deltaX:a,deltaY:r,offsetX:i,offsetY:n,direction:l,isVertical:()=>"vertical"===l.value,isHorizontal:()=>"horizontal"===l.value}}var[We,Ze]=te("cell"),Ke={icon:String,size:String,title:[Number,String],value:[Number,String],label:[Number,String],center:Boolean,isLink:Boolean,border:R,required:Boolean,iconPrefix:String,valueClass:null,labelClass:null,titleClass:null,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},Ge=ae(e({name:We,props:_({},Ke,Le),setup(e,{slots:t}){var a=Ee(),r=()=>{if(t.label||X(e.label))return x("div",{class:[Ze("label"),e.labelClass]},[t.label?t.label():e.label])},i=()=>{if(t.title||X(e.title))return x("div",{class:[Ze("title"),e.titleClass],style:e.titleStyle},[t.title?t.title():x("span",null,[e.title]),r()])},n=()=>{if(t.default||X(e.value)){var a=t.title||X(e.title);return x("div",{class:[Ze("value",{alone:!a}),e.valueClass]},[t.default?t.default():x("span",null,[e.value])])}},l=()=>{if(t["right-icon"])return t["right-icon"]();if(e.isLink){var a=e.arrowDirection?"arrow-"+e.arrowDirection:"arrow";return x(Re,{name:a,class:Ze("right-icon")},null)}};return()=>{var r,{size:o,center:s,border:u,isLink:c,required:d}=e,v=null!=(r=e.clickable)?r:c,f={center:s,required:d,clickable:v,borderless:!u};return o&&(f[o]=!!o),x("div",{class:Ze(f),role:v?"button":void 0,tabindex:v?0:void 0,onClick:a},[t.icon?t.icon():e.icon?x(Re,{name:e.icon,class:Ze("left-icon"),classPrefix:e.iconPrefix},null):void 0,i(),n(),l(),null==t.extra?void 0:t.extra()])}}}));function Je(e){var t,{interceptor:a,args:r,done:i,canceled:n}=e;if(a){var l=a.apply(null,r||[]);F(t=l)&&U(t.then)&&U(t.catch)?l.then((e=>{e?i():n&&n()})).catch(I):l?i():n&&n()}else i()}var[Qe,et]=te("tag"),tt=ae(e({name:Qe,props:{size:String,mark:Boolean,show:R,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},emits:["close"],setup(e,{slots:t,emit:a}){var r=e=>{e.stopPropagation(),a("close",e)},i=()=>{var{type:a,mark:i,plain:n,round:l,size:o,closeable:s}=e,u={mark:i,plain:n,round:l};o&&(u[o]=o);var c=s&&x(Re,{name:"cross",class:et("close"),onClick:r},null);return x("span",{style:e.plain?{color:e.textColor||e.color}:{color:e.textColor,background:e.color},class:et([u,a])},[null==t.default?void 0:t.default(),c])};return()=>x(w,{name:e.closeable?"van-fade":void 0},{default:()=>[e.show?i():null]})}})),[at,rt]=te("image"),it=ae(e({name:at,props:{src:String,alt:String,fit:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,iconSize:[Number,String],showError:R,iconPrefix:String,showLoading:R,errorIcon:{type:String,default:"photo-fail"},loadingIcon:{type:String,default:"photo"}},emits:["load","error"],setup(e,{emit:t,slots:a}){var r=o(!1),i=o(!0),n=o(),{$Lazyload:l}=f().proxy,s=v((()=>{var t={};return X(e.width)&&(t.width=re(e.width)),X(e.height)&&(t.height=re(e.height)),X(e.radius)&&(t.overflow="hidden",t.borderRadius=re(e.radius)),t}));S((()=>e.src),(()=>{r.value=!1,i.value=!0}));var u=e=>{i.value=!1,t("load",e)},c=e=>{r.value=!0,i.value=!1,t("error",e)},d=()=>{if(!r.value&&e.src){var t={alt:e.alt,class:rt("img"),style:{objectFit:e.fit}};return e.lazyLoad?C(x("img",B({ref:n},t),null),[[z("lazy"),e.src]]):x("img",B({src:e.src,onLoad:u,onError:c},t),null)}},p=({el:e})=>{e===n.value&&i.value&&u()},g=({el:e})=>{e!==n.value||r.value||c()};return l&&j&&(l.$on("loaded",p),l.$on("error",g),k((()=>{l.$off("loaded",p),l.$off("error",g)}))),()=>x("div",{class:rt({round:e.round}),style:s.value},[d(),i.value&&e.showLoading?x("div",{class:rt("loading")},[a.loading?a.loading():x(Re,{size:e.iconSize,name:e.loadingIcon,class:rt("loading-icon"),classPrefix:e.iconPrefix},null)]):r.value&&e.showError?x("div",{class:rt("error")},[a.error?a.error():x(Re,{size:e.iconSize,name:e.errorIcon,class:rt("error-icon"),classPrefix:e.iconPrefix},null)]):void 0,null==a.default?void 0:a.default()])}})),[nt,lt]=te("card"),ot=ae(e({name:nt,props:{tag:String,num:[Number,String],desc:String,thumb:String,title:String,price:[Number,String],centered:Boolean,lazyLoad:Boolean,thumbLink:String,originPrice:[Number,String],currency:{type:String,default:"¥"}},emits:["click-thumb"],setup(e,{slots:t,emit:a}){var r=()=>{if(t.tag||e.tag)return x("div",{class:lt("tag")},[t.tag?t.tag():x(tt,{mark:!0,type:"danger"},{default:()=>[e.tag]})])},i=()=>{if(t.thumb||e.thumb)return x("a",{href:e.thumbLink,class:lt("thumb"),onClick:e=>a("click-thumb",e)},[t.thumb?t.thumb():x(it,{src:e.thumb,fit:"cover",width:"100%",height:"100%",lazyLoad:e.lazyLoad},null),r()])};return()=>{var a,r,n=t.num||X(e.num),l=t.price||X(e.price),o=t["origin-price"]||X(e.originPrice),s=n||l||o||t.bottom,u=l&&x("div",{class:lt("price")},[t.price?t.price():(r=e.price.toString().split("."),x("div",null,[x("span",{class:lt("price-currency")},[e.currency]),x("span",{class:lt("price-integer")},[r[0]]),T("."),x("span",{class:lt("price-decimal")},[r[1]])]))]),c=o&&x("div",{class:lt("origin-price")},[t["origin-price"]?t["origin-price"]():e.currency+" "+e.originPrice]),d=n&&x("div",{class:lt("num")},[t.num?t.num():"x"+e.num]),v=t.footer&&x("div",{class:lt("footer")},[t.footer()]),f=s&&x("div",{class:lt("bottom")},[null==(a=t["price-top"])?void 0:a.call(t),u,c,d,null==t.bottom?void 0:t.bottom()]);return x("div",{class:lt()},[x("div",{class:lt("header")},[i(),x("div",{class:lt("content",{centered:e.centered})},[x("div",null,[t.title?t.title():e.title?x("div",{class:[lt("title"),"van-multi-ellipsis--l2"]},[e.title]):void 0,t.desc?t.desc():e.desc?x("div",{class:[lt("desc"),"van-ellipsis"]},[e.desc]):void 0,null==t.tags?void 0:t.tags()]),f])]),v])}}}));var[st,ut]=te("sticky"),ct=ae(e({name:st,props:{zIndex:[Number,String],container:Object,offsetTop:{type:[Number,String],default:0},offsetBottom:{type:[Number,String],default:0},position:{type:String,default:"top"}},emits:["scroll","change"],setup(e,{emit:t,slots:a}){var r=o(),i=Pe(r),n=s({fixed:!1,width:0,height:0,transform:0}),l=v((()=>le("top"===e.position?e.offsetTop:e.offsetBottom))),u=v((()=>{var{fixed:e,height:t,width:a}=n;if(e)return{width:a+"px",height:t+"px"}})),c=v((()=>{if(n.fixed){var t=_(ie(e.zIndex),{width:n.width+"px",height:n.height+"px",[e.position]:l.value+"px"});return n.transform&&(t.transform="translate3d(0, "+n.transform+"px, 0)"),t}})),d=()=>{if(r.value&&!se(r)){var a,i,{container:o,position:s}=e,u=he(r),c=(a=window,i="scrollTop"in a?a.scrollTop:a.pageYOffset,Math.max(i,0));if(n.width=u.width,n.height=u.height,"top"===s)if(o){var d=he(o),v=d.bottom-l.value-n.height;n.fixed=l.value>u.top&&d.bottom>0,n.transform=v<0?v:0}else n.fixed=l.value>u.top;else{var{clientHeight:f}=document.documentElement;if(o){var p=he(o),g=f-p.top-l.value-n.height;n.fixed=f-l.value<u.bottom&&f>p.top,n.transform=g<0?-g:0}else n.fixed=f-l.value<u.bottom}(e=>{t("scroll",{scrollTop:e,isFixed:n.fixed})})(c)}};return S((()=>n.fixed),(e=>t("change",e))),Ce("scroll",d,{target:i}),function(e,t){if(j&&window.IntersectionObserver){var a=new IntersectionObserver((e=>{t(e[0].intersectionRatio>0)}),{root:document.body}),r=()=>{e.value&&a.unobserve(e.value)};y(r),k(r),we((()=>{e.value&&a.observe(e.value)}))}}(r,d),()=>x("div",{ref:r,style:u.value},[x("div",{class:ut({fixed:n.fixed}),style:c.value},[null==a.default?void 0:a.default()])])}})),[dt,vt]=te("swipe"),ft=Symbol(dt),pt=ae(e({name:dt,props:{loop:R,width:[Number,String],height:[Number,String],vertical:Boolean,touchable:R,lazyRender:Boolean,indicatorColor:String,showIndicators:R,stopPropagation:R,autoplay:{type:[Number,String],default:0},duration:{type:[Number,String],default:500},initialSwipe:{type:[Number,String],default:0}},emits:["change"],setup(e,{emit:t,slots:a}){var r,i,n,l,u,c,d,f=o(),p=s({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),g=He(),h=(r=o(ce?window.innerWidth:0),i=o(ce?window.innerHeight:0),Ce("resize",n=()=>{r.value=window.innerWidth,i.value=window.innerHeight}),Ce("orientationchange",n),{width:r,height:i}),{children:w,linkChildren:C}=xe(ft),z=v((()=>w.length)),B=v((()=>p[e.vertical?"height":"width"])),T=v((()=>e.vertical?g.deltaY.value:g.deltaX.value)),P=v((()=>p.rect?(e.vertical?p.rect.height:p.rect.width)-B.value*z.value:0)),N=v((()=>Math.ceil(Math.abs(P.value)/B.value))),L=v((()=>z.value*B.value)),E=v((()=>(p.active+z.value)%z.value)),A=v((()=>{var t=e.vertical?"vertical":"horizontal";return g.direction.value===t})),O=v((()=>{var t={transitionDuration:(p.swiping?0:e.duration)+"ms",transform:"translate"+(e.vertical?"Y":"X")+"("+p.offset+"px)"};if(B.value){var a=e.vertical?"height":"width",r=e.vertical?"width":"height";t[a]=L.value+"px",t[r]=e[r]?e[r]+"px":""}return t})),I=(t,a=0)=>{var r=t*B.value;e.loop||(r=Math.min(r,-P.value));var i=a-r;return e.loop||(i=oe(i,P.value,0)),i},_=({pace:a=0,offset:r=0,emitChange:i})=>{if(!(z.value<=1)){var{active:n}=p,l=(t=>{var{active:a}=p;return t?e.loop?oe(a+t,-1,z.value):oe(a+t,0,N.value):a})(a),o=I(l,r);if(e.loop){if(w[0]&&o!==P.value){var s=o<P.value;w[0].setOffset(s?L.value:0)}if(w[z.value-1]&&0!==o){var u=o>0;w[z.value-1].setOffset(u?-L.value:0)}}p.active=l,p.offset=o,i&&l!==n&&t("change",E.value)}},j=()=>{p.swiping=!0,p.active<=-1?_({pace:z.value}):p.active>=z.value&&_({pace:-z.value})},M=()=>{j(),g.reset(),ge((()=>{p.swiping=!1,_({pace:1,emitChange:!0})}))},R=()=>{clearTimeout(l)},D=()=>{e.autoplay>0&&z.value>1&&(R(),l=setTimeout((()=>{M(),D()}),+e.autoplay))},q=(t=+e.initialSwipe)=>{var a,r;if(f.value&&!se(f)){R();var i={width:f.value.offsetWidth,height:f.value.offsetHeight};z.value&&(t=Math.min(z.value-1,t)),p.rect=i,p.swiping=!0,p.active=t,p.width=+(null!=(a=e.width)?a:i.width),p.height=+(null!=(r=e.height)?r:i.height),p.offset=I(t),w.forEach((e=>{e.setOffset(0)})),D()}},$=()=>q(p.active),V=t=>{e.touchable&&(g.start(t),u=Date.now(),R(),j())},Y=t=>{e.touchable&&p.swiping&&(g.move(t),A.value&&(ue(t,e.stopPropagation),_({offset:T.value})))},X=()=>{if(e.touchable&&p.swiping){var t=Date.now()-u,a=T.value/t;if((Math.abs(a)>.25||Math.abs(T.value)>B.value/2)&&A.value){var r=e.vertical?g.offsetY.value:g.offsetX.value,i=0;i=e.loop?r>0?T.value>0?-1:1:0:-Math[T.value>0?"ceil":"floor"](T.value/B.value),_({pace:i,emitChange:!0})}else T.value&&_({pace:0});p.swiping=!1,D()}},U=(t,a)=>{var r=a===E.value,i=r?{backgroundColor:e.indicatorColor}:void 0;return x("i",{style:i,class:vt("indicator",{active:r})},null)};return Ne({prev:()=>{j(),g.reset(),ge((()=>{p.swiping=!1,_({pace:-1,emitChange:!0})}))},next:M,state:p,resize:$,swipeTo:(t,a={})=>{j(),g.reset(),ge((()=>{var r;r=e.loop&&t===z.value?0===p.active?0:t:t%z.value,a.immediate?ge((()=>{p.swiping=!1})):p.swiping=!1,_({pace:r-p.active,emitChange:!0})}))}}),C({size:B,props:e,count:z,activeIndicator:E}),S((()=>e.initialSwipe),(e=>q(+e))),S(z,(()=>q(p.active))),S((()=>e.autoplay),(e=>{e>0?D():R()})),S([h.width,h.height],$),S((c=o("visible"),(d=()=>{ce&&(c.value=document.hidden?"hidden":"visible")})(),Ce("visibilitychange",d),c),(e=>{"visible"===e?D():R()})),m(q),b((()=>q(p.active))),y(R),k(R),()=>x("div",{ref:f,class:vt()},[x("div",{style:O.value,class:vt("track",{vertical:e.vertical}),onTouchstart:V,onTouchmove:Y,onTouchend:X,onTouchcancel:X},[null==a.default?void 0:a.default()]),a.indicator?a.indicator():e.showIndicators&&z.value>1?x("div",{class:vt("indicators",{vertical:e.vertical})},[Array(z.value).fill("").map(U)]):void 0])}})),[gt,mt]=te("swipe-item"),ht=ae(e({name:gt,setup(e,{slots:t}){var a,r=s({offset:0,inited:!1,mounted:!1}),{parent:i,index:n}=be(ft);if(i){var l=v((()=>{var e={},{vertical:t}=i.props;return i.size.value&&(e[t?"height":"width"]=i.size.value+"px"),r.offset&&(e.transform="translate"+(t?"Y":"X")+"("+r.offset+"px)"),e})),o=v((()=>{var{loop:e,lazyRender:t}=i.props;if(!t||a)return!0;if(!r.mounted)return!1;var l=i.activeIndicator.value,o=i.count.value-1,s=0===l&&e?o:l-1,u=l===o&&e?0:l+1;return a=n.value===l||n.value===s||n.value===u}));return m((()=>{h((()=>{r.mounted=!0}))})),Ne({setOffset:e=>{r.offset=e}}),()=>x("div",{class:mt(),style:l.value},[o.value?null==t.default?void 0:t.default():null])}}})),[bt,yt]=te("grid"),xt=Symbol(bt),wt=ae(e({name:bt,props:{square:Boolean,center:R,border:R,gutter:[Number,String],iconSize:[Number,String],direction:String,clickable:Boolean,columnNum:{type:[Number,String],default:4}},setup(e,{slots:t}){var{linkChildren:a}=xe(xt);return a({props:e}),()=>x("div",{style:{paddingLeft:re(e.gutter)},class:[yt(),{"van-hairline--top":e.border&&!e.gutter}]},[null==t.default?void 0:t.default()])}})),[St,kt]=te("grid-item"),Ct=ae(e({name:St,props:_({},Le,{dot:Boolean,text:String,icon:String,badge:[Number,String],iconPrefix:String}),setup(e,{slots:t}){var{parent:a,index:r}=be(xt),i=Ee();if(a){var n=v((()=>{var{square:e,gutter:t,columnNum:i}=a.props,n=100/+i+"%",l={flexBasis:n};if(e)l.paddingTop=n;else if(t){var o=re(t);l.paddingRight=o,r.value>=i&&(l.marginTop=o)}return l})),l=v((()=>{var{square:e,gutter:t}=a.props;if(e&&t){var r=re(t);return{right:r,bottom:r,height:"auto"}}}));return()=>{var{center:r,border:o,square:s,gutter:u,direction:c,clickable:d}=a.props,v=[kt("content",[c,{center:r,square:s,clickable:d,surround:o&&u}]),{[Ae]:o}];return x("div",{class:[kt({square:s})],style:n.value},[x("div",{role:d?"button":void 0,class:v,style:l.value,tabindex:d?0:void 0,onClick:i},[t.default?t.default():[t.icon?x(_e,{dot:e.dot,content:e.badge},{default:()=>[t.icon()]}):e.icon?x(Re,{dot:e.dot,name:e.icon,size:a.props.iconSize,badge:e.badge,class:kt("icon"),classPrefix:e.iconPrefix},null):void 0,t.text?t.text():e.text?x("span",{class:kt("text")},[e.text]):void 0]])])}}}})),[zt,Bt,Tt]=te("list"),Pt=ae(e({name:zt,props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:R,offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},emits:["load","update:error","update:loading"],setup(e,{emit:t,slots:a}){var r=o(!1),i=o(),n=o(),l=Pe(i),s=()=>{h((()=>{if(!(r.value||e.finished||e.error)){var{offset:a,direction:o}=e,s=he(l);if(!s.height||se(i))return!1;var u=he(n);("up"===o?s.top-u.top<=a:u.bottom-s.bottom<=a)&&(r.value=!0,t("update:loading",!0),t("load"))}}))},u=()=>{if(e.finished){var t=a.finished?a.finished():e.finishedText;if(t)return x("div",{class:Bt("finished-text")},[t])}},c=()=>{t("update:error",!1),s()},d=()=>{if(e.error){var t=a.error?a.error():e.errorText;if(t)return x("div",{class:Bt("error-text"),onClick:c},[t])}},v=()=>{if(r.value&&!e.finished)return x("div",{class:Bt("loading")},[a.loading?a.loading():x(Ye,{class:Bt("loading-icon")},{default:()=>[e.loadingText||Tt("loading")]})])};return S([()=>e.loading,()=>e.finished,()=>e.error],s),P((()=>{r.value=e.loading})),m((()=>{e.immediateCheck&&s()})),Ne({check:s}),Ce("scroll",s,{target:l}),()=>{var t=null==a.default?void 0:a.default(),l=x("div",{ref:n,class:Bt("placeholder")},null);return x("div",{ref:i,role:"feed",class:Bt(),"aria-busy":r.value},["down"===e.direction?t:l,v(),u(),d(),"up"===e.direction?t:l])}}}));function Nt(e,t){var a=(e=>{var t=o();return m((()=>{h((()=>{t.value=he(e).height}))})),t})(e);return e=>x("div",{class:t("placeholder"),style:{height:a.value?a.value+"px":void 0}},[e()])}var[Lt,Et]=te("nav-bar"),At=ae(e({name:Lt,props:{title:String,fixed:Boolean,zIndex:[Number,String],border:R,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean},emits:["click-left","click-right"],setup(e,{emit:t,slots:a}){var r=o(),i=Nt(r,Et),n=e=>t("click-left",e),l=e=>t("click-right",e),s=()=>{var{title:t,fixed:i,border:o,zIndex:s}=e,u=ie(s),c=e.leftArrow||e.leftText||a.left,d=e.rightText||a.right;return x("div",{ref:r,style:u,class:[Et({fixed:i,"safe-area-inset-top":e.safeAreaInsetTop}),{"van-hairline--bottom":o}]},[x("div",{class:Et("content")},[c&&x("div",{class:Et("left"),onClick:n},[a.left?a.left():[e.leftArrow&&x(Re,{class:Et("arrow"),name:"arrow-left"},null),e.leftText&&x("span",{class:Et("text")},[e.leftText])]]),x("div",{class:[Et("title"),"van-ellipsis"]},[a.title?a.title():t]),d&&x("div",{class:Et("right"),onClick:l},[a.right?a.right():x("span",{class:Et("text")},[e.rightText])])])])};return()=>e.fixed&&e.placeholder?i(s):s()}})),[Ot,It]=te("sidebar"),_t=Symbol(Ot),jt=ae(e({name:Ot,props:{modelValue:{type:[Number,String],default:0}},emits:["change","update:modelValue"],setup(e,{emit:t,slots:a}){var{linkChildren:r}=xe(_t),i=()=>+e.modelValue;return r({getActive:i,setActive:e=>{e!==i()&&(t("update:modelValue",e),t("change",e))}}),()=>x("div",{class:It()},[null==a.default?void 0:a.default()])}})),[Mt,Rt]=te("sidebar-item"),Dt=ae(e({name:Mt,props:_({},Le,{dot:Boolean,title:String,badge:[Number,String],disabled:Boolean}),emits:["click"],setup(e,{emit:t,slots:a}){var r=Ee(),{parent:i,index:n}=be(_t);if(i){var l=()=>{e.disabled||(t("click",n.value),i.setActive(n.value),r())};return()=>{var{dot:t,badge:r,title:o,disabled:s}=e,u=n.value===i.getActive();return x("a",{class:Rt({select:u,disabled:s}),onClick:l},[x(_e,{dot:t,content:r,class:Rt("text")},{default:()=>[a.title?a.title():o]})])}}}})),[qt,$t]=te("tabbar"),Vt=Symbol(qt),Yt=ae(e({name:qt,props:{route:Boolean,fixed:R,border:R,zIndex:[Number,String],placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:{type:[Number,String],default:0},safeAreaInsetBottom:{type:Boolean,default:null}},emits:["change","update:modelValue"],setup(e,{emit:t,slots:a}){var r=o(),{linkChildren:i}=xe(Vt),n=Nt(r,$t),l=()=>{var t,{fixed:i,zIndex:n,border:l}=e;return x("div",{ref:r,style:ie(n),class:[$t({unfit:!(null!=(t=e.safeAreaInsetBottom)?t:e.fixed),fixed:i}),{"van-hairline--top-bottom":l}]},[null==a.default?void 0:a.default()])};return i({props:e,setActive:a=>{a!==e.modelValue&&Je({interceptor:e.beforeChange,args:[a],done(){t("update:modelValue",a),t("change",a)}})}}),()=>e.fixed&&e.placeholder?n(l):l()}})),[Xt,Ut]=te("tabbar-item");const Ft=[Fe,Pt,Ge,Yt,ae(e({name:Xt,props:_({},Le,{dot:Boolean,icon:String,name:[Number,String],badge:[Number,String],iconPrefix:String}),emits:["click"],setup(e,{emit:t,slots:a}){var r=Ee(),i=f().proxy,{parent:n,index:l}=be(Vt);if(n){var o=v((()=>{var{route:t,modelValue:a}=n.props;if(t&&"$route"in i){var{$route:r}=i,{to:o}=e,s=F(o)?o:{path:o},u="path"in s&&s.path===r.path,c="name"in s&&s.name===r.name;return u||c}return(e.name||l.value)===a})),s=a=>{var i;n.setActive(null!=(i=e.name)?i:l.value),t("click",a),r()};return()=>{var{dot:t,badge:r}=e,{activeColor:i,inactiveColor:l}=n.props,u=o.value?i:l;return x("div",{class:Ut({active:o.value}),style:{color:u},onClick:s},[x(_e,{dot:t,content:r,class:Ut("icon")},{default:()=>[a.icon?a.icon({active:o.value}):e.icon?x(Re,{name:e.icon,classPrefix:e.iconPrefix},null):void 0]}),x("div",{class:Ut("text")},[null==a.default?void 0:a.default({active:o.value})])])}}}})),pt,ht,wt,Ct,At,Re,ct,ot,jt,Dt],Ht={install:function(e){Ft.forEach((t=>{e.component(t.name,t)}))}};var Wt={namespaced:!0,state:{token:sessionStorage.getItem("Access-Token")||"",name:"",welcome:"",avatar:"",roles:[],info:sessionStorage.getItem("Current-User")||{}},mutations:{setToken:(e,t)=>{e.token=t},setAvatar:(e,t)=>{e.avatar=t},setRoles:(e,t)=>{e.roles=t},setUserInfo:(e,t)=>{e.info=t}},actions:{async login({commit:e},t){},logout:async({commit:e})=>Promise.resolve()},getters:{token:e=>e.token,avatar:e=>e.avatar,nickname:e=>e.name,roles:e=>e.roles,userInfo:e=>e.info}};const Zt={"./user/index.ts":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Wt})},Kt={};Object.keys(Zt).forEach((e=>{const t=e.split("/")[1];Kt[t]=Zt[e][t]||Zt[e].default||Zt[e]}));var Gt={user:Wt};const Jt=Symbol(),Qt=N({plugins:[],modules:Gt});let ea;const ta={},aa=function(e,t){if(!t)return e();if(void 0===ea){const e=document.createElement("link").relList;ea=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in ta)return;ta[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":ea,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))};const ra=[{path:"/home",name:"home",component:()=>aa((()=>__import__("./index.afed5656.js")),["/vite-vant3/assets/index.afed5656.js","/vite-vant3/assets/index.fb1389b5.css","/vite-vant3/assets/vendor.580d99d2.js","/vite-vant3/assets/vendor.a6641463.css"]),meta:{title:"首页",icon:"home-o"}},{path:"/category",name:"category",component:()=>aa((()=>__import__("./index.f77cd79e.js")),["/vite-vant3/assets/index.f77cd79e.js","/vite-vant3/assets/index.f20d62d3.css"]),meta:{title:"分类",icon:"apps-o"}}],ia=[{path:"/",name:"Layout",redirect:"/home",component:()=>aa((()=>__import__("./index.8294a6bb.js")),["/vite-vant3/assets/index.8294a6bb.js","/vite-vant3/assets/index.c9c102ee.css"]),meta:{title:"首页"},children:[...ra]}],na=L({history:E(""),routes:ia});const la=A(O);la.use(Ht),function(e){e.use(Qt,Jt)}(la),function(e){e.use(na),na.beforeEach(((e,t,a)=>{var r;document.title=(null==(r=null==e?void 0:e.meta)?void 0:r.title)||document.title,a()}))}(la),la.mount("#app");export{Re as I,He as a,ie as b,te as c,Ne as d,_ as e,Ce as f,Te as g,j as h,X as i,F as j,ra as m,I as n,we as o,ue as p,Se as s,R as t,M as u,ae as w};