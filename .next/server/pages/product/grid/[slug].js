"use strict";(()=>{var e={};e.id=5274,e.ids=[5274,2888,660],e.modules={1068:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>h,default:()=>p,getServerSideProps:()=>g,getStaticPaths:()=>x,getStaticProps:()=>m,reportWebVitals:()=>b,routeModule:()=>N,unstable_getServerProps:()=>f,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>q,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>j});var a=t(1961),l=t(2667),i=t(9032),o=t(4484),c=t(7500),d=t(6979),u=e([c]);c=(u.then?(await u)():u)[0];let n=a.PagesRouteModule,p=(0,i.l)(d,"default"),m=(0,i.l)(d,"getStaticProps"),x=(0,i.l)(d,"getStaticPaths"),g=(0,i.l)(d,"getServerSideProps"),h=(0,i.l)(d,"config"),b=(0,i.l)(d,"reportWebVitals"),j=(0,i.l)(d,"unstable_getStaticProps"),v=(0,i.l)(d,"unstable_getStaticPaths"),q=(0,i.l)(d,"unstable_getStaticParams"),f=(0,i.l)(d,"unstable_getServerProps"),S=(0,i.l)(d,"unstable_getServerSideProps"),N=new n({definition:{kind:l.x.PAGES,page:"/product/grid/[slug]",pathname:"/product/grid/[slug]",bundlePath:"",filename:""},components:{App:c.default,Document:o.default},userland:d});s()}catch(e){s(e)}})},6979:(e,r,t)=>{t.r(r),t.d(r,{default:()=>q});var s=t(997),a=t(6689),l=t(5420),i=t(5487),o=t(2791),c=t.n(o),d=t(3563),u=t.n(d),n=t(432),p=t(7660),m=t(4496),x=t(2224),g=t(684);function MediaTwo(e){let{product:r}=e,[t,l]=(0,a.useState)(0),[i,o]=(0,a.useState)(!1),c=r.large_pictures?r.large_pictures:r.pictures;(0,a.useEffect)(()=>{l(0)},[window.location.pathname]);let openLightBox=e=>{e.preventDefault(),l(parseInt(e.currentTarget.getAttribute("index"))),o(!0)};return(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"product-gallery row cols-sm-2",children:c.slice(0,4).map((e,t)=>(0,s.jsxs)("figure",{className:"product-image mb-4",children:[s.jsx(x.Magnifier,{imageSrc:"https://d-themes.com/react_asset_api/riode"+e.url,imageAlt:"magnifier",largeImageSrc:"https://d-themes.com/react_asset_api/riode"+e.url,dragToMove:!1,mouseActivation:"hover",cursorStyleActive:"crosshair",className:"product-image large-image"}),0===t?(0,s.jsxs)("div",{className:"product-label-group",children:[0===r.stock?s.jsx("label",{className:"product-label label-out",children:"out"}):"",r.is_top?s.jsx("label",{className:"product-label label-top",children:"top"}):"",r.is_new?s.jsx("label",{className:"product-label label-new",children:"new"}):"",r.discount?s.jsx("label",{className:"product-label label-sale",children:"sale"}):""]}):"",s.jsx("a",{href:"#",className:"product-image-full",onClick:openLightBox,index:t,children:s.jsx("i",{className:"d-icon-zoom"})})]},"image"+t))}),s.jsx(g.Z,{images:c.slice(0,4),isOpen:i,changeOpenState:e=>{o(e)},index:t,product:r})]})}var h=t(8839),b=t(44),j=t(5316),v=t(5396);let q=(0,n.Z)({ssr:!0})(function(){let e=(0,l.useRouter)().query.slug;if(!e)return"";let{data:r,loading:t,error:o}=(0,i.useQuery)(p.N4,{variables:{slug:e}}),[d,n]=(0,a.useState)(!1),x=r&&r.product.data,g=r&&r.product.related;return(0,a.useEffect)(()=>{!t&&x&&u()("main").on("done",function(){n(!0)}).on("progress",function(){n(!1)}),t&&n(!1)},[t,x]),(0,s.jsxs)("main",{className:"main mt-6 single-product product-layout-grid",children:[s.jsx(c(),{children:s.jsx("title",{children:"Riode React eCommerce Template | Product Grid"})}),s.jsx("h1",{className:"d-none",children:"Riode React eCommerce Template - Product Grid"}),void 0!==x?s.jsx("div",{className:`page-content mb-10 pb-6 ${d?"":"d-none"}`,children:(0,s.jsxs)("div",{className:"container skeleton-body",children:[(0,s.jsxs)("div",{className:"product product-single row mb-8",children:[s.jsx("div",{className:"col-md-6",children:s.jsx(MediaTwo,{product:x})}),s.jsx("div",{className:"col-md-6",children:s.jsx(h.Z,{data:r,isSticky:!0,adClass:"pb-0 mb-10"})})]}),s.jsx(b.Z,{product:x}),s.jsx(j.Z,{products:g})]})}):"",d&&!t?"":(0,s.jsxs)("div",{className:"skeleton-body container mb-10",children:[(0,s.jsxs)("div",{className:"row mb-7",children:[s.jsx("div",{className:"col-md-6 sticky-sidebar-wrapper cols-sm-2",children:s.jsx("div",{className:"skel-pro-gallery"})}),s.jsx("div",{className:"col-md-6",children:s.jsx("div",{className:"skel-pro-summary mt-4 mt-md-0"})})]}),s.jsx("div",{className:"skel-pro-tabs"}),(0,s.jsxs)("section",{className:"pt-3 mt-4",children:[s.jsx("h2",{className:"title justify-content-center",children:"Related Products"}),s.jsx(m.Z,{adClass:"owl-carousel owl-theme owl-nav-full",options:v.F6,children:[1,2,3,4,5,6].map(e=>s.jsx("div",{className:"product-loading-overlay"},"popup-skel-"+e))})]})]})]})})},5487:e=>{e.exports=require("@apollo/react-hooks")},4414:e=>{e.exports=require("apollo-boost")},825:e=>{e.exports=require("graphql-tag")},3563:e=>{e.exports=require("imagesloaded")},9290:e=>{e.exports=require("next-apollo")},5648:e=>{e.exports=require("next-redux-wrapper")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},4601:e=>{e.exports=require("react-collapse")},4449:e=>{e.exports=require("react-countdown")},6405:e=>{e.exports=require("react-dom")},2791:e=>{e.exports=require("react-helmet")},4990:e=>{e.exports=require("react-image-lightbox")},2224:e=>{e.exports=require("react-image-magnifiers")},9252:e=>{e.exports=require("react-lazy-load-image-component")},9931:e=>{e.exports=require("react-modal")},9042:e=>{e.exports=require("react-owl-carousel2")},6022:e=>{e.exports=require("react-redux")},1635:e=>{e.exports=require("react-slide-toggle")},5973:e=>{e.exports=require("react-tabs")},1187:e=>{e.exports=require("react-toastify")},997:e=>{e.exports=require("react/jsx-runtime")},6695:e=>{e.exports=require("redux")},4161:e=>{e.exports=require("redux-persist")},1127:e=>{e.exports=require("redux-persist/integration/react")},8936:e=>{e.exports=require("redux-persist/lib/storage")},6477:e=>{e.exports=require("redux-saga/effects")},5998:e=>{e.exports=import("redux-saga")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[8376,4254,6114,9505,7500,4484,9950,2447,44,3488,8839],()=>__webpack_exec__(1068));module.exports=t})();