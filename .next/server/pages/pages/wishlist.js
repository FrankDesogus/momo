"use strict";(()=>{var e={};e.id=6436,e.ids=[6436,2888,660],e.modules={2105:(e,s,t)=>{t.a(e,async(e,r)=>{try{t.r(s),t.d(s,{config:()=>j,default:()=>h,getServerSideProps:()=>x,getStaticPaths:()=>m,getStaticProps:()=>u,reportWebVitals:()=>b,routeModule:()=>w,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>N,unstable_getStaticPaths:()=>g,unstable_getStaticProps:()=>f});var a=t(1961),i=t(2667),c=t(9032),l=t(4484),o=t(7500),n=t(3373),d=e([o]);o=(d.then?(await d)():d)[0];let p=a.PagesRouteModule,h=(0,c.l)(n,"default"),u=(0,c.l)(n,"getStaticProps"),m=(0,c.l)(n,"getStaticPaths"),x=(0,c.l)(n,"getServerSideProps"),j=(0,c.l)(n,"config"),b=(0,c.l)(n,"reportWebVitals"),f=(0,c.l)(n,"unstable_getStaticProps"),g=(0,c.l)(n,"unstable_getStaticPaths"),N=(0,c.l)(n,"unstable_getStaticParams"),q=(0,c.l)(n,"unstable_getServerProps"),v=(0,c.l)(n,"unstable_getServerSideProps"),w=new p({definition:{kind:i.x.PAGES,page:"/pages/wishlist",pathname:"/pages/wishlist",bundlePath:"",filename:""},components:{App:o.default,Document:l.default},userland:n});r()}catch(e){r(e)}})},3373:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var r=t(997),a=t(6022),i=t(2791),c=t.n(i),l=t(7974),o=t(8803),n=t(3862),d=t(8225);let p=(0,a.connect)(function(e){return{wishlist:e.wishlist.data?e.wishlist.data:[]}},{addToCart:o.Uw.addToCart,removeFromWishlist:n.w.removeFromWishlist})(function(e){let{wishlist:s,addToCart:t,removeFromWishlist:a}=e,moveToCart=(e,s)=>{e.preventDefault(),t({...s,qty:1,price:s.price[0]}),a(s)};return(0,r.jsxs)("main",{className:"main",children:[r.jsx(c(),{children:r.jsx("title",{children:"Riode React eCommerce Template | Wishlist"})}),r.jsx("h1",{className:"d-none",children:"Riode React eCommerce Template - Wishlist"}),r.jsx("nav",{className:"breadcrumb-nav",children:r.jsx("div",{className:"container",children:(0,r.jsxs)("ul",{className:"breadcrumb",children:[r.jsx("li",{children:r.jsx(l.Z,{href:"/",children:r.jsx("i",{className:"d-icon-home"})})}),r.jsx("li",{children:"Wishlist"})]})})}),r.jsx("div",{className:"page-content pt-10 pb-10 mb-2",children:r.jsx("div",{className:"container",children:s.length>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("table",{className:"shop-table wishlist-table mt-2 mb-4",children:[r.jsx("thead",{children:(0,r.jsxs)("tr",{children:[r.jsx("th",{className:"product-name",children:r.jsx("span",{children:"Product"})}),r.jsx("th",{}),r.jsx("th",{className:"product-price",children:r.jsx("span",{children:"Price"})}),r.jsx("th",{className:"product-stock-status",children:r.jsx("span",{children:"Stock status"})}),r.jsx("th",{className:"product-add-to-cart"}),r.jsx("th",{className:"product-remove"})]})}),r.jsx("tbody",{className:"wishlist-items-wrapper",children:s.map(e=>(0,r.jsxs)("tr",{children:[r.jsx("td",{className:"product-thumbnail",children:r.jsx(l.Z,{href:"/product/default/"+e.slug,children:r.jsx("figure",{children:r.jsx("img",{src:"https://d-themes.com/react_asset_api/riode"+e.pictures[0].url,width:"100",height:"100",alt:"product"})})})}),r.jsx("td",{className:"product-name",children:r.jsx(l.Z,{href:"/product/default/"+e.slug,children:e.name})}),r.jsx("td",{className:"product-price",children:e.price[0]!==e.price[1]?(0,r.jsxs)("span",{className:"amount",children:["$",(0,d.YM)(e.price[0])," – $",(0,d.YM)(e.price[1])]}):e.discount>0&&e.variants.length>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("span",{className:"amount",children:["$",(0,d.YM)(e.salePrice)]}),(0,r.jsxs)("span",{className:"amount",children:["$",(0,d.YM)(e.price)]})]}):(0,r.jsxs)("span",{className:"amount",children:["$",(0,d.YM)(e.price[0])]})}),r.jsx("td",{className:"product-stock-status",children:r.jsx("span",{className:e.stock>0?"wishlist-in-stock":"wishlist-out-stock",children:e.stock>0?"In Stock":"Out of Stock"})}),r.jsx("td",{className:"product-add-to-cart",children:e.stock>0?e.variants.length>0?r.jsx(l.Z,{href:"/product/default/"+e.slug,className:"btn-product btn-primary",children:r.jsx("span",{children:"Select options"})}):r.jsx("a",{href:"#",className:"btn-product btn-primary",onClick:s=>moveToCart(s,e),children:r.jsx("span",{children:"Add to Cart"})}):""}),r.jsx("td",{className:"product-remove",children:r.jsx("div",{children:r.jsx(l.Z,{href:"#",className:"remove",title:"Remove this product",children:r.jsx("i",{className:"fas fa-times",onClick:()=>a(e)})})})})]},"wishlist-"+e.name))})]}),(0,r.jsxs)("div",{className:"social-links share-on",children:[r.jsx("h5",{className:"text-uppercase font-weight-bold mb-0 mr-4 ls-s",children:"Share on:"}),r.jsx(l.Z,{href:"#",className:"social-link social-icon social-facebook",title:"Facebook",children:r.jsx("i",{className:"fab fa-facebook-f"})}),r.jsx(l.Z,{href:"#",className:"social-link social-icon social-twitter",title:"Twitter",children:r.jsx("i",{className:"fab fa-twitter"})}),r.jsx(l.Z,{href:"#",className:"social-link social-icon social-pinterest",title:"Pinterest",children:r.jsx("i",{className:"fab fa-pinterest-p"})}),r.jsx(l.Z,{href:"#",className:"social-link social-icon social-email",title:"Email",children:r.jsx("i",{className:"far fa-envelope"})}),r.jsx(l.Z,{href:"#",className:"social-link social-icon social-whatsapp",title:"Whatsapp",children:r.jsx("i",{className:"fab fa-whatsapp"})})]})]}):(0,r.jsxs)("div",{className:"empty-cart text-center",children:[r.jsx("i",{className:"cart-empty d-icon-heart"}),r.jsx("p",{children:"No products added to the wishlist."}),r.jsx("p",{className:"return-to-shop mb-0",children:r.jsx(l.Z,{className:"button wc-backward btn btn-dark btn-md",href:"/shop",children:"Return to shop"})})]})})})]})})},5487:e=>{e.exports=require("@apollo/react-hooks")},4414:e=>{e.exports=require("apollo-boost")},825:e=>{e.exports=require("graphql-tag")},3563:e=>{e.exports=require("imagesloaded")},9290:e=>{e.exports=require("next-apollo")},5648:e=>{e.exports=require("next-redux-wrapper")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},4601:e=>{e.exports=require("react-collapse")},4449:e=>{e.exports=require("react-countdown")},6405:e=>{e.exports=require("react-dom")},2791:e=>{e.exports=require("react-helmet")},2224:e=>{e.exports=require("react-image-magnifiers")},9252:e=>{e.exports=require("react-lazy-load-image-component")},9931:e=>{e.exports=require("react-modal")},9042:e=>{e.exports=require("react-owl-carousel2")},6022:e=>{e.exports=require("react-redux")},1635:e=>{e.exports=require("react-slide-toggle")},5973:e=>{e.exports=require("react-tabs")},1187:e=>{e.exports=require("react-toastify")},997:e=>{e.exports=require("react/jsx-runtime")},6695:e=>{e.exports=require("redux")},4161:e=>{e.exports=require("redux-persist")},1127:e=>{e.exports=require("redux-persist/integration/react")},8936:e=>{e.exports=require("redux-persist/lib/storage")},6477:e=>{e.exports=require("redux-saga/effects")},5998:e=>{e.exports=import("redux-saga")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var s=require("../../webpack-runtime.js");s.C(e);var __webpack_exec__=e=>s(s.s=e),t=s.X(0,[8376,4254,6114,9505,7500,4484],()=>__webpack_exec__(2105));module.exports=t})();