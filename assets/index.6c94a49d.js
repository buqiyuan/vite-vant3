import{d as a,p as t,q as e,o as n,c as s,s as i,w as r,F as o,u as l,r as u,t as c,v as f,x as v}from"./vendor.77a46594.js";import{m}from"./index.e6d55a6a.js";const b=a({setup(){const a=t("stickyRef"),n=t("tabbarRef"),s=t("");return e((()=>{s.value=a.value.$el.offsetHeight+n.value.$el.offsetHeight+"px"})),{main:m,stickyRef:a,tabbarRef:n,containerHeight:s}}}),d=()=>{l((a=>({"2a38980a":a.containerHeight,"2a38980a":a.containerHeight})))},p=b.setup;b.setup=p?(a,t)=>(d(),p(a,t)):d;const h=b,g={class:"container"};h.render=function(a,t,e,l,m,b){const d=u("van-icon"),p=u("van-nav-bar"),h=u("van-sticky"),R=u("router-view"),H=u("van-tabbar-item"),k=u("van-tabbar");return n(),s(o,null,[i(h,{ref:"stickyRef"},{default:r((()=>{var t;return[i(p,{title:null==(t=a.$route.meta)?void 0:t.title},{left:r((()=>[i(d,{name:"wap-nav",size:"18"})])),right:r((()=>[i(d,{name:"search",size:"18"})])),_:1},8,["title"])]})),_:1},512),i("div",g,[i(R)]),i(k,{ref:"tabbarRef",route:""},{default:r((()=>[(n(!0),s(o,null,c(a.main,(a=>(n(),s(H,{to:a.path,icon:a.meta.icon},{default:r((()=>[f(v(a.meta.title),1)])),_:2},1032,["to","icon"])))),256))])),_:1},512)],64)};export default h;