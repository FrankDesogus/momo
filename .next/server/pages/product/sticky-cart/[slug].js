"use strict";(()=>{var e={};e.id=7572,e.ids=[7572,2888,660],e.modules={4687:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>p,getServerSideProps:()=>y,getStaticPaths:()=>x,getStaticProps:()=>m,reportWebVitals:()=>q,routeModule:()=>k,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>h});var o=r(1961),a=r(2667),c=r(9032),i=r(4484),l=r(7500),d=r(4682),u=e([l]);l=(u.then?(await u)():u)[0];let n=o.PagesRouteModule,p=(0,c.l)(d,"default"),m=(0,c.l)(d,"getStaticProps"),x=(0,c.l)(d,"getStaticPaths"),y=(0,c.l)(d,"getServerSideProps"),g=(0,c.l)(d,"config"),q=(0,c.l)(d,"reportWebVitals"),h=(0,c.l)(d,"unstable_getStaticProps"),b=(0,c.l)(d,"unstable_getStaticPaths"),f=(0,c.l)(d,"unstable_getStaticParams"),v=(0,c.l)(d,"unstable_getServerProps"),S=(0,c.l)(d,"unstable_getServerSideProps"),k=new n({definition:{kind:a.x.PAGES,page:"/product/sticky-cart/[slug]",pathname:"/product/sticky-cart/[slug]",bundlePath:"",filename:""},components:{App:l.default,Document:i.default},userland:d});s()}catch(e){s(e)}})},4682:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var s=r(997),o=r(6689),a=r(5420),c=r(5487),i=r(2791),l=r.n(i),d=r(3563),u=r.n(d),n=r(432),p=r(7660),m=r(4496),x=r(1069),y=r(8216),g=r(44),q=r(5316),h=r(5396);let b=(0,n.Z)({ssr:!0})(function(){let e=(0,a.useRouter)().query.slug;if(!e)return"";let{data:t,loading:r,error:i}=(0,c.useQuery)(p.N4,{variables:{slug:e}}),[d,n]=(0,o.useState)(!1),b=t&&t.product.data,f=t&&t.product.related;(0,o.useEffect)(()=>{!r&&b&&u()("main").on("done",function(){n(!0)}).on("progress",function(){n(!1)}),r&&n(!1)},[r,b]),(0,o.useEffect)(()=>(window.addEventListener("scroll",stickyContentHandler,!0),()=>{window.removeEventListener("scroll",stickyContentHandler,!0)}),[]);let stickyContentHandler=()=>{let e=document.querySelector(".product-sticky-content"),t=0,r=0;if(e){if(t=e.offsetHeight,window.scrollY>600&&window.innerWidth>991){if(e.classList.add("fixed"),r=document.querySelector(".sticky-header.sticky-content")?document.querySelector(".sticky-header.sticky-content").offsetHeight:88,!document.querySelector(".sticky-product-wrapper")){let r=document.createElement("div");r.className="sticky-product-wrapper",e.parentNode.insertBefore(r,e),document.querySelector(".sticky-product-wrapper").insertAdjacentElement("beforeend",e),document.querySelector(".sticky-product-wrapper").setAttribute("style","height: "+t+"px")}document.querySelector(".sticky-product-wrapper").getAttribute("style")||document.querySelector(".sticky-product-wrapper").setAttribute("style","height: "+t+"px"),document.querySelector(".product-sticky-content").setAttribute("style",`top: ${r}px`)}else document.querySelector(".sticky-product-wrapper")&&document.querySelector(".sticky-product-wrapper").setAttribute("style",""),document.querySelector(".product-sticky-content").classList.remove("fixed")}};return(0,s.jsxs)("main",{className:"main mt-6 single-product",children:[s.jsx(l(),{children:s.jsx("title",{children:"Riode React eCommerce Template | Product Default"})}),s.jsx("h1",{className:"d-none",children:"Riode React eCommerce Template - Product Default"}),void 0!==b?s.jsx("div",{className:`page-content mb-10 pb-6 ${d?"":"d-none"}`,children:(0,s.jsxs)("div",{className:"container skeleton-body vertical",children:[(0,s.jsxs)("div",{className:"product product-single row mb-7",children:[s.jsx("div",{className:"col-md-6 sticky-sidebar-wrapper",children:s.jsx(x.Z,{product:b})}),s.jsx("div",{className:"col-md-6",children:s.jsx(y.Z,{data:t,isStickyCart:!0,adClass:"mt-4 mt-md-0"})})]}),s.jsx(g.Z,{product:b,isGuide:!1}),s.jsx(q.Z,{products:f})]})}):"",d&&!r?"":(0,s.jsxs)("div",{className:"skeleton-body container mb-10",children:[(0,s.jsxs)("div",{className:"row mb-7",children:[s.jsx("div",{className:"col-md-6 pg-vertical sticky-sidebar-wrapper",children:s.jsx("div",{className:"skel-pro-gallery"})}),s.jsx("div",{className:"col-md-6",children:s.jsx("div",{className:"skel-pro-summary mt-4 mt-md-0"})})]}),s.jsx("div",{className:"skel-pro-tabs"}),(0,s.jsxs)("section",{className:"pt-3 mt-4",children:[s.jsx("h2",{className:"title justify-content-center",children:"Related Products"}),s.jsx(m.Z,{adClass:"owl-carousel owl-theme owl-nav-full",options:h.F6,children:[1,2,3,4,5,6].map(e=>s.jsx("div",{className:"product-loading-overlay"},"popup-skel-"+e))})]})]})]})})},5487:e=>{e.exports=require("@apollo/react-hooks")},4414:e=>{e.exports=require("apollo-boost")},825:e=>{e.exports=require("graphql-tag")},3563:e=>{e.exports=require("imagesloaded")},9290:e=>{e.exports=require("next-apollo")},5648:e=>{e.exports=require("next-redux-wrapper")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},4601:e=>{e.exports=require("react-collapse")},4449:e=>{e.exports=require("react-countdown")},6405:e=>{e.exports=require("react-dom")},2791:e=>{e.exports=require("react-helmet")},4990:e=>{e.exports=require("react-image-lightbox")},2224:e=>{e.exports=require("react-image-magnifiers")},9252:e=>{e.exports=require("react-lazy-load-image-component")},9931:e=>{e.exports=require("react-modal")},9042:e=>{e.exports=require("react-owl-carousel2")},6022:e=>{e.exports=require("react-redux")},1635:e=>{e.exports=require("react-slide-toggle")},5973:e=>{e.exports=require("react-tabs")},1187:e=>{e.exports=require("react-toastify")},997:e=>{e.exports=require("react/jsx-runtime")},6695:e=>{e.exports=require("redux")},4161:e=>{e.exports=require("redux-persist")},1127:e=>{e.exports=require("redux-persist/integration/react")},8936:e=>{e.exports=require("redux-persist/lib/storage")},6477:e=>{e.exports=require("redux-saga/effects")},5998:e=>{e.exports=import("redux-saga")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[8376,4254,6114,9505,7500,4484,9950,2447,44,6814,1069],()=>__webpack_exec__(4687));module.exports=r})();