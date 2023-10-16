"use strict";(()=>{var e={};e.id=614,e.ids=[614,2888,660],e.modules={2356:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>q,default:()=>n,getServerSideProps:()=>g,getStaticPaths:()=>m,getStaticProps:()=>x,reportWebVitals:()=>h,routeModule:()=>S,unstable_getServerProps:()=>f,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>v});var a=t(1961),o=t(2667),i=t(9032),l=t(4484),c=t(7500),u=t(5816),d=e([c]);c=(d.then?(await d)():d)[0];let p=a.PagesRouteModule,n=(0,i.l)(u,"default"),x=(0,i.l)(u,"getStaticProps"),m=(0,i.l)(u,"getStaticPaths"),g=(0,i.l)(u,"getServerSideProps"),q=(0,i.l)(u,"config"),h=(0,i.l)(u,"reportWebVitals"),v=(0,i.l)(u,"unstable_getStaticProps"),b=(0,i.l)(u,"unstable_getStaticPaths"),j=(0,i.l)(u,"unstable_getStaticParams"),f=(0,i.l)(u,"unstable_getServerProps"),P=(0,i.l)(u,"unstable_getServerSideProps"),S=new p({definition:{kind:o.x.PAGES,page:"/product/default/[slug]",pathname:"/product/default/[slug]",bundlePath:"",filename:""},components:{App:c.default,Document:l.default},userland:u});s()}catch(e){s(e)}})},5816:(e,r,t)=>{t.r(r),t.d(r,{default:()=>b});var s=t(997),a=t(6689),o=t(5420),i=t(5487),l=t(2791),c=t.n(l),u=t(3563),d=t.n(u),p=t(432),n=t(7660),x=t(4496),m=t(1069),g=t(8216),q=t(44),h=t(5316),v=t(5396);let b=(0,p.Z)({ssr:!0})(function(){let e=(0,o.useRouter)().query.slug,{data:r,loading:t,error:l}=(0,i.useQuery)(n.N4,{variables:{slug:e}}),[u,p]=(0,a.useState)(!1),b=r&&r.product.data,j=r&&r.product.related;return(0,a.useEffect)(()=>{!t&&b&&d()("main").on("done",function(){p(!0)}).on("progress",function(){p(!1)}),t&&p(!1)},[t,b]),(0,s.jsxs)("main",{className:"main mt-6 single-product",children:[s.jsx(c(),{children:s.jsx("title",{children:"Riode React eCommerce Template | Product Default"})}),s.jsx("h1",{className:"d-none",children:"Riode React eCommerce Template - Product Default"}),void 0!==b?s.jsx("div",{className:`page-content mb-10 pb-6 ${u?"":"d-none"}`,children:(0,s.jsxs)("div",{className:"container vertical",children:[(0,s.jsxs)("div",{className:"product product-single row mb-7",children:[s.jsx("div",{className:"col-md-6 sticky-sidebar-wrapper",children:s.jsx(m.Z,{product:b})}),s.jsx("div",{className:"col-md-6",children:s.jsx(g.Z,{data:r})})]}),s.jsx(q.Z,{product:b}),s.jsx(h.Z,{products:j})]})}):"",u&&!t?"":(0,s.jsxs)("div",{className:"skeleton-body container mb-10",children:[(0,s.jsxs)("div",{className:"row mb-7",children:[s.jsx("div",{className:"col-md-6 pg-vertical",children:s.jsx("div",{className:"skel-pro-gallery"})}),s.jsx("div",{className:"col-md-6",children:s.jsx("div",{className:"skel-pro-summary"})})]}),s.jsx("div",{className:"skel-pro-tabs"}),(0,s.jsxs)("section",{className:"pt-3 mt-4",children:[s.jsx("h2",{className:"title justify-content-center",children:"Related Products"}),s.jsx(x.Z,{adClass:"owl-carousel owl-theme owl-nav-full",options:v.F6,children:[1,2,3,4,5,6].map(e=>s.jsx("div",{className:"product-loading-overlay"},"popup-skel-"+e))})]})]})]})})},5487:e=>{e.exports=require("@apollo/react-hooks")},4414:e=>{e.exports=require("apollo-boost")},825:e=>{e.exports=require("graphql-tag")},3563:e=>{e.exports=require("imagesloaded")},9290:e=>{e.exports=require("next-apollo")},5648:e=>{e.exports=require("next-redux-wrapper")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},4601:e=>{e.exports=require("react-collapse")},4449:e=>{e.exports=require("react-countdown")},6405:e=>{e.exports=require("react-dom")},2791:e=>{e.exports=require("react-helmet")},4990:e=>{e.exports=require("react-image-lightbox")},2224:e=>{e.exports=require("react-image-magnifiers")},9252:e=>{e.exports=require("react-lazy-load-image-component")},9931:e=>{e.exports=require("react-modal")},9042:e=>{e.exports=require("react-owl-carousel2")},6022:e=>{e.exports=require("react-redux")},1635:e=>{e.exports=require("react-slide-toggle")},5973:e=>{e.exports=require("react-tabs")},1187:e=>{e.exports=require("react-toastify")},997:e=>{e.exports=require("react/jsx-runtime")},6695:e=>{e.exports=require("redux")},4161:e=>{e.exports=require("redux-persist")},1127:e=>{e.exports=require("redux-persist/integration/react")},8936:e=>{e.exports=require("redux-persist/lib/storage")},6477:e=>{e.exports=require("redux-saga/effects")},5998:e=>{e.exports=import("redux-saga")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[8376,4254,6114,9505,7500,4484,9950,2447,44,6814,1069],()=>__webpack_exec__(2356));module.exports=t})();