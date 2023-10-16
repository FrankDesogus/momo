"use strict";(()=>{var e={};e.id=7870,e.ids=[7870,2888,660],e.modules={6873:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>h,default:()=>p,getServerSideProps:()=>g,getStaticPaths:()=>m,getStaticProps:()=>x,reportWebVitals:()=>b,routeModule:()=>y,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>q});var a=t(1961),i=t(2667),o=t(9032),l=t(4484),c=t(7500),n=t(396),d=e([c]);c=(d.then?(await d)():d)[0];let u=a.PagesRouteModule,p=(0,o.l)(n,"default"),x=(0,o.l)(n,"getStaticProps"),m=(0,o.l)(n,"getStaticPaths"),g=(0,o.l)(n,"getServerSideProps"),h=(0,o.l)(n,"config"),b=(0,o.l)(n,"reportWebVitals"),q=(0,o.l)(n,"unstable_getStaticProps"),f=(0,o.l)(n,"unstable_getStaticPaths"),j=(0,o.l)(n,"unstable_getStaticParams"),v=(0,o.l)(n,"unstable_getServerProps"),S=(0,o.l)(n,"unstable_getServerSideProps"),y=new u({definition:{kind:i.x.PAGES,page:"/blog/masonry/sidebar",pathname:"/blog/masonry/sidebar",bundlePath:"",filename:""},components:{App:c.default,Document:l.default},userland:n});s()}catch(e){s(e)}})},396:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var s=t(997),a=t(5420),i=t(6689),o=t.n(i),l=t(5487),c=t(2791),n=t.n(c),d=t(3563),u=t.n(d),p=t(432),x=t(7660),m=t(7974),g=t(5307),h=t(5923),b=t(5938),q=t(8225);let f=(0,p.Z)({ssr:!0})(function(){let e=(0,a.useRouter)(),[r,c]=(0,i.useState)(!0),d=e.query,[p,{data:f,loading:j,error:v}]=(0,l.useLazyQuery)(x.p$),[S,y]=(0,i.useState)(8),P=f&&f.posts.data,_=f?parseInt(f.posts.total/S)+(f.posts.total%S?1:0):1,N=d.page?d.page:1,w=S*(N-1),k=S*N;(0,i.useEffect)(()=>{p({variables:{category:d.category,from:w,to:k}}),r?c(!1):(0,q._M)()},[d]);let R=(0,i.useRef)(null);async function isotopeInit(){let e=(await Promise.resolve().then(t.t.bind(t,2349,23))).default;new e(R.current,{itemSelector:".grid-item"})}return(0,i.useEffect)(()=>{if(!j&&P){let e=document.querySelector(".posts.grid");e&&u()(e).on("done",function(){isotopeInit()})}},[j,P]),(0,s.jsxs)("main",{className:"main skeleton-body",children:[s.jsx(n(),{children:s.jsx("title",{children:"Riode React eCommerce Template | Blog Masonry With Sidebar"})}),s.jsx("h1",{className:"d-none",children:"Riode React eCommerce Template - Blog Masonry With Sidebar"}),s.jsx("nav",{className:"breadcrumb-nav",children:s.jsx("div",{className:"container",children:(0,s.jsxs)("ul",{className:"breadcrumb",children:[s.jsx("li",{children:s.jsx(m.Z,{href:"/",children:s.jsx("i",{className:"d-icon-home"})})}),s.jsx("li",{children:s.jsx(m.Z,{href:"/blog/classic",className:"active",children:"Blog"})}),s.jsx("li",{children:"Masonry With Sidebar"})]})})}),s.jsx("div",{className:"page-content with-sidebar",children:s.jsx("div",{className:"container",children:(0,s.jsxs)("div",{className:"row gutter-lg",children:[(0,s.jsxs)("div",{className:"col-lg-9",children:[j?s.jsx("div",{className:"posts grid row",style:{display:"flex"},children:Array(parseInt(S)).fill(1).map((e,r)=>s.jsx("div",{className:"col-sm-6",children:s.jsx("div",{className:"skel-post"})},"skel-post"+r))}):"",s.jsx("div",{className:"posts grid row masonry",ref:R,children:j?"":P?P.length?P.slice(0,P.length).map((e,r)=>s.jsx(o().Fragment,{children:s.jsx("div",{className:"grid-item col-sm-6",children:s.jsx(h.Z,{post:e,isOriginal:!0,type:"masonry"})})},"post-nine"+r)):s.jsx("div",{className:"info-box with-icon",children:s.jsx("p",{className:"mt-4",children:"No blogs were found matching your selection."})}):""}),s.jsx(g.Z,{totalPage:_})]}),s.jsx(b.Z,{})]})})})]})})},5487:e=>{e.exports=require("@apollo/react-hooks")},4414:e=>{e.exports=require("apollo-boost")},825:e=>{e.exports=require("graphql-tag")},3563:e=>{e.exports=require("imagesloaded")},2349:e=>{e.exports=require("isotope-layout")},9290:e=>{e.exports=require("next-apollo")},5648:e=>{e.exports=require("next-redux-wrapper")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},4601:e=>{e.exports=require("react-collapse")},4449:e=>{e.exports=require("react-countdown")},6405:e=>{e.exports=require("react-dom")},2791:e=>{e.exports=require("react-helmet")},2224:e=>{e.exports=require("react-image-magnifiers")},9252:e=>{e.exports=require("react-lazy-load-image-component")},9931:e=>{e.exports=require("react-modal")},9042:e=>{e.exports=require("react-owl-carousel2")},6022:e=>{e.exports=require("react-redux")},1635:e=>{e.exports=require("react-slide-toggle")},689:e=>{e.exports=require("react-sticky-box")},5973:e=>{e.exports=require("react-tabs")},1187:e=>{e.exports=require("react-toastify")},997:e=>{e.exports=require("react/jsx-runtime")},6695:e=>{e.exports=require("redux")},4161:e=>{e.exports=require("redux-persist")},1127:e=>{e.exports=require("redux-persist/integration/react")},8936:e=>{e.exports=require("redux-persist/lib/storage")},6477:e=>{e.exports=require("redux-saga/effects")},5998:e=>{e.exports=import("redux-saga")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[8376,4254,6114,9505,7500,4484,5307,5938,5923],()=>__webpack_exec__(6873));module.exports=t})();