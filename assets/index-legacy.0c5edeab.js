var __vite_style__=document.createElement("style");__vite_style__.innerHTML='@charset "UTF-8";.container{--container-height:calc(100vh - var(--2a38980a));height:calc(100vh - var(--2a38980a));overflow:auto}',document.head.appendChild(__vite_style__),System.register(["./vendor-legacy.88809c7f.js","./index-legacy.e53d1ad1.js"],(function(e){"use strict";var t,n,a,r,i,u,c,o,f,l,v,s,_,d;return{setters:[function(e){t=e.d,n=e.b,a=e.n,r=e.o,i=e.c,u=e.q,c=e.w,o=e.F,f=e.G,l=e.r,v=e.H,s=e.z,_=e.I},function(e){d=e.m}],execute:function(){var h=t({setup:function(){var e=n("stickyRef"),t=n("tabbarRef"),r=n("");return a((function(){r.value=e.value.$el.offsetHeight+t.value.$el.offsetHeight+"px"})),{main:d,stickyRef:e,tabbarRef:t,containerHeight:r}}}),m=function(){f((function(e){var t;return(t={"2a38980a":e.containerHeight})["2a38980a"]=e.containerHeight,t}))},b=h.setup;h.setup=b?function(e,t){return m(),b(e,t)}:m;var g=e("default",h),y={class:"container"};g.render=function(e,t,n,a,f,d){var h=l("van-icon"),m=l("van-nav-bar"),b=l("van-sticky"),g=l("router-view"),p=l("van-tabbar-item"),H=l("van-tabbar");return r(),i(o,null,[u(b,{ref:"stickyRef"},{default:c((function(){var t;return[u(m,{title:null==(t=e.$route.meta)?void 0:t.title},{left:c((function(){return[u(h,{name:"wap-nav",size:"18"})]})),right:c((function(){return[u(h,{name:"search",size:"18"})]})),_:1},8,["title"])]})),_:1},512),u("div",y,[u(g)]),u(H,{ref:"tabbarRef",route:""},{default:c((function(){return[(r(!0),i(o,null,v(e.main,(function(e){return r(),i(p,{to:e.path,icon:e.meta.icon},{default:c((function(){return[s(_(e.meta.title),1)]})),_:2},1032,["to","icon"])})),256))]})),_:1},512)],64)}}}}));