"use strict";(()=>{var e={};e.id=661,e.ids=[661,2888,660],e.modules={5299:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>h,default:()=>d,getServerSideProps:()=>g,getStaticPaths:()=>m,getStaticProps:()=>x,reportWebVitals:()=>b,routeModule:()=>S,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>_,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>q});var a=t(1961),o=t(2667),i=t(9032),l=t(4484),c=t(7500),p=t(3246),n=e([c]);c=(n.then?(await n)():n)[0];let u=a.PagesRouteModule,d=(0,i.l)(p,"default"),x=(0,i.l)(p,"getStaticProps"),m=(0,i.l)(p,"getStaticPaths"),g=(0,i.l)(p,"getServerSideProps"),h=(0,i.l)(p,"config"),b=(0,i.l)(p,"reportWebVitals"),q=(0,i.l)(p,"unstable_getStaticProps"),f=(0,i.l)(p,"unstable_getStaticPaths"),j=(0,i.l)(p,"unstable_getStaticParams"),v=(0,i.l)(p,"unstable_getServerProps"),_=(0,i.l)(p,"unstable_getServerSideProps"),S=new u({definition:{kind:o.x.PAGES,page:"/shop/infinite-scroll",pathname:"/shop/infinite-scroll",bundlePath:"",filename:""},components:{App:c.default,Document:l.default},userland:p});s()}catch(e){s(e)}})},3246:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var s=t(997),a=t(6689),o=t.n(a),i=t(2791),l=t(6269),c=t(8925),p=t(5420),n=t(5487);let u=require("react-infinite-scroll-component");var d=t.n(u),x=t(432),m=t(7660),g=t(1994),h=t(9950),b=t(8004);let q=(0,x.Z)({ssr:!0})(function(e){let r=(0,p.useRouter)(),t=r.query,[o,i]=(0,a.useState)([]),[l,{data:c,loading:u,error:x}]=(0,n.useLazyQuery)(m.tT),[q,{data:f}]=(0,n.useLazyQuery)(m.tT,{fetchPolicy:"no-cache"}),j=t.per_page?parseInt(t.per_page):12,[v,_]=(0,a.useState)(j),S=c&&c.products.total,y=t.type?t.type:"grid";return(0,a.useEffect)(()=>{_(j)},[t]),(0,a.useEffect)(()=>{l({variables:{search:t.search,colors:t.colors?t.colors.split(","):[],sizes:t.sizes?t.sizes.split(","):[],brands:t.brands?t.brands.split(","):[],min_price:parseInt(t.min_price),max_price:parseInt(t.max_price),category:t.category,tag:t.tag,sortBy:t.sortby,from:0,to:v}})},[t]),(0,a.useLayoutEffect)(()=>{c&&i(c.products.data)},[c]),(0,a.useEffect)(()=>{i([...o,...f?f.products.data:[]])},[f]),(0,s.jsxs)(s.Fragment,{children:[s.jsx(g.Z,{}),(0,s.jsxs)(d(),{dataLength:o?o.length:0,next:()=>{setTimeout(()=>{q({variables:{search:t.search,colors:t.colors?t.colors.split(","):[],sizes:t.sizes?t.sizes.split(","):[],brands:t.brands?t.brands.split(","):[],min_price:parseInt(t.min_price),max_price:parseInt(t.max_price),category:t.category,tag:t.tag,sortBy:t.sortby,from:o.length,to:o.length+3}})},1500)},style:{overflow:"visible"},hasMore:!(o.length>=S),loader:s.jsx("div",{className:"d-loading"}),children:[u?"grid"===y?s.jsx("div",{className:"row product-wrapper cols-2 cols-sm-3",children:[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>s.jsx("div",{className:"product-loading-overlay"},"popup-skel-"+e))}):s.jsx("div",{className:"row product-wrapper skeleton-body cols-1",children:[1,2,3,4,5,6,7,8,9,10,11,12].map(e=>s.jsx("div",{className:"skel-pro skel-pro-list mb-4"},"list-skel-"+e))}):"","grid"===y?s.jsx("div",{className:"row product-wrapper cols-2 cols-sm-3",children:o.length>0&&o.map(e=>s.jsx("div",{className:"product-wrap",children:s.jsx(h.Z,{product:e,adClass:""})},"shop-"+e.slug))}):s.jsx("div",{className:"product-lists product-wrapper",children:o.length>0&&o.map(e=>s.jsx(b.Z,{product:e},"shop-list-"+e.slug))}),o&&0===o.length?s.jsx("p",{className:"ml-1",children:"No products were found matching your selection."}):""]})]})}),f=o().memo(function(){return(0,s.jsxs)("main",{className:"main",children:[s.jsx(i.Helmet,{children:s.jsx("title",{children:"Riode React eCommerce Template - Shop Ajax Infinite Scroll"})}),s.jsx("h1",{className:"d-none",children:"Riode React eCommerce Template - Shop Ajax Infinite Scroll"}),s.jsx(l.Z,{}),s.jsx("div",{className:"page-content mb-10 pb-3",children:s.jsx("div",{className:"container",children:(0,s.jsxs)("div",{className:"row main-content-wrap gutter-lg",children:[s.jsx(c.Z,{}),s.jsx("div",{className:"col-lg-9 main-content",children:s.jsx(q,{})})]})})})]})})},5487:e=>{e.exports=require("@apollo/react-hooks")},4414:e=>{e.exports=require("apollo-boost")},825:e=>{e.exports=require("graphql-tag")},3563:e=>{e.exports=require("imagesloaded")},9290:e=>{e.exports=require("next-apollo")},5648:e=>{e.exports=require("next-redux-wrapper")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},4601:e=>{e.exports=require("react-collapse")},4449:e=>{e.exports=require("react-countdown")},6405:e=>{e.exports=require("react-dom")},2791:e=>{e.exports=require("react-helmet")},2224:e=>{e.exports=require("react-image-magnifiers")},3984:e=>{e.exports=require("react-input-range")},9252:e=>{e.exports=require("react-lazy-load-image-component")},9931:e=>{e.exports=require("react-modal")},9042:e=>{e.exports=require("react-owl-carousel2")},6022:e=>{e.exports=require("react-redux")},1635:e=>{e.exports=require("react-slide-toggle")},5973:e=>{e.exports=require("react-tabs")},1187:e=>{e.exports=require("react-toastify")},997:e=>{e.exports=require("react/jsx-runtime")},6695:e=>{e.exports=require("redux")},4161:e=>{e.exports=require("redux-persist")},1127:e=>{e.exports=require("redux-persist/integration/react")},8936:e=>{e.exports=require("redux-persist/lib/storage")},6477:e=>{e.exports=require("redux-saga/effects")},5998:e=>{e.exports=import("redux-saga")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var r=require("../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[8376,4254,6114,9505,7500,4484,9950,3038,8004,1994,8925,6269],()=>__webpack_exec__(5299));module.exports=t})();