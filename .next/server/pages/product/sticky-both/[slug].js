"use strict";(()=>{var e={};e.id=3211,e.ids=[3211,2888,660],e.modules={4283:(e,a,s)=>{s.a(e,async(e,r)=>{try{s.r(a),s.d(a,{config:()=>v,default:()=>p,getServerSideProps:()=>h,getStaticPaths:()=>x,getStaticProps:()=>m,reportWebVitals:()=>j,routeModule:()=>k,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>N,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>g});var t=s(1961),l=s(2667),i=s(9032),c=s(4484),n=s(7500),d=s(5402),o=e([n]);n=(o.then?(await o)():o)[0];let u=t.PagesRouteModule,p=(0,i.l)(d,"default"),m=(0,i.l)(d,"getStaticProps"),x=(0,i.l)(d,"getStaticPaths"),h=(0,i.l)(d,"getServerSideProps"),v=(0,i.l)(d,"config"),j=(0,i.l)(d,"reportWebVitals"),g=(0,i.l)(d,"unstable_getStaticProps"),f=(0,i.l)(d,"unstable_getStaticPaths"),N=(0,i.l)(d,"unstable_getStaticParams"),b=(0,i.l)(d,"unstable_getServerProps"),w=(0,i.l)(d,"unstable_getServerSideProps"),k=new u({definition:{kind:l.x.PAGES,page:"/product/sticky-both/[slug]",pathname:"/product/sticky-both/[slug]",bundlePath:"",filename:""},components:{App:n.default,Document:c.default},userland:d});r()}catch(e){r(e)}})},5402:(e,a,s)=>{s.r(a),s.d(a,{default:()=>C});var r=s(997),t=s(6689),l=s.n(t),i=s(5420),c=s(5487),n=s(2791),d=s.n(n),o=s(3563),u=s.n(o),p=s(432),m=s(7660),x=s(7974),h=s(4496),v=s(6208),j=s(2441),g=s(8225);let detail_left=function(e){let{data:a,isSticky:s=!1,adClass:t="mb-4"}=e,i=a&&a.product;return(0,r.jsxs)("div",{className:`product-details p-0 ${s?"p-sticky":""} ${t}`,children:[r.jsx("h2",{className:"product-name mt-3",children:i.data.name}),(0,r.jsxs)("div",{className:"product-meta",children:["SKU: ",r.jsx("span",{className:"product-sku",children:i.data.sku}),"CATEGORIES: ",r.jsx("span",{className:"product-brand",children:i.data.categories.map((e,a)=>(0,r.jsxs)(l().Fragment,{children:[r.jsx(x.Z,{href:{pathname:"/shop",query:{category:e.slug}},children:e.name}),a<i.data.categories.length-1?", ":""]},e.name+"-"+a))})]}),r.jsx("div",{className:"product-price",children:i.data.price[0]!==i.data.price[1]?0===i.data.variants.length||i.data.variants.length>0&&!i.data.variants[0].price?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("ins",{className:"new-price",children:["$",(0,g.YM)(i.data.price[0])]}),(0,r.jsxs)("del",{className:"old-price",children:["$",(0,g.YM)(i.data.price[1])]})]}):(0,r.jsxs)("del",{className:"new-price",children:["$",(0,g.YM)(i.data.price[0])," – $",(0,g.YM)(i.data.price[1])]}):(0,r.jsxs)("ins",{className:"new-price",children:["$",(0,g.YM)(i.data.price[0])]})}),i.data.price[0]!==i.data.price[1]&&0===i.data.variants.length?r.jsx(j.Z,{type:2}):"",(0,r.jsxs)("div",{className:"ratings-container",children:[(0,r.jsxs)("div",{className:"ratings-full",children:[r.jsx("span",{className:"ratings",style:{width:20*i.data.ratings+"%"}}),r.jsx("span",{className:"tooltiptext tooltip-top",children:(0,g.YM)(i.data.ratings)})]}),(0,r.jsxs)(x.Z,{href:"#",className:"rating-reviews",children:["( ",i.data.reviews," reviews )"]})]}),r.jsx("p",{className:"product-short-desc",children:i.data.short_description})]})};var f=s(6022),N=s(4601),b=s.n(N),w=s(3862),k=s(8803),q=s(2381);let y=(0,f.connect)(function(e){return{wishlist:e.wishlist.data?e.wishlist.data:[]}},{toggleWishlist:w.w.toggleWishlist,addToCart:k.Uw.addToCart})(function(e){let a=(0,i.useRouter)(),{data:s}=e,{toggleWishlist:l,addToCart:c,wishlist:n,isSticky:d=!1,adClass:o=""}=e,[u,p]=(0,t.useState)("null"),[m,h]=(0,t.useState)("null"),[v,j]=(0,t.useState)(0),[f,N]=(0,t.useState)(!1),[w,k]=(0,t.useState)(1),y=s&&s.product,S,_=[],P=[];S=n.findIndex(e=>e.slug===y.data.slug)>-1,y.data&&y.data.variants.length>0&&(y.data.variants[0].size&&y.data.variants.forEach(e=>{-1===P.findIndex(a=>a.name===e.size.name)&&P.push({name:e.size.name,value:e.size.size})}),y.data.variants[0].color&&y.data.variants.forEach(e=>{-1===_.findIndex(a=>a.name===e.color.name)&&_.push({name:e.color.name,value:e.color.color})})),(0,t.useEffect)(()=>{j(-1),resetValueHandler()},[y]),(0,t.useEffect)(()=>{y.data.variants.length>0?"null"!==m&&"null"!==u||"null"===m&&null===y.data.variants[0].size&&"null"!==u||"null"===u&&null===y.data.variants[0].color&&"null"!==m?(N(!0),j(y.data.variants.findIndex(e=>null!==e.size&&null!==e.color&&e.color.name===u&&e.size.name===m||null===e.size&&e.color.name===u||null===e.color&&e.size.name===m))):N(!1):N(!0),0===y.stock&&N(!1)},[u,m,y]);let resetValueHandler=e=>{p("null"),h("null")};function isDisabled(e,a){return"null"!==e&&"null"!==a&&(0===P.length?-1===y.data.variants.findIndex(e=>e.color.name===u):0===_.length?-1===y.data.variants.findIndex(e=>e.size.name===m):-1===y.data.variants.findIndex(s=>s.color.name===e&&s.size.name===a))}return(0,r.jsxs)("div",{className:`product-details mb-4 ${d?"p-sticky":""} ${o}`,children:[y&&y.data.variants.length>0?(0,r.jsxs)(r.Fragment,{children:[y.data.variants[0].color?(0,r.jsxs)("div",{className:"product-form product-variations product-color",children:[r.jsx("label",{children:"Color:"}),r.jsx("div",{className:"select-box",children:(0,r.jsxs)("select",{name:"color",className:"form-control select-color",onChange:e=>{p(e.target.value)},value:u,children:[r.jsx("option",{value:"null",children:"Choose an option"}),_.map(e=>isDisabled(e.name,m)?"":r.jsx("option",{value:e.name,children:e.name},"color-"+e.name))]})})]}):"",y.data.variants[0].size?(0,r.jsxs)("div",{className:"product-form product-variations product-size",children:[r.jsx("label",{children:"Size:"}),(0,r.jsxs)("div",{className:"product-form-group",children:[r.jsx("div",{className:"select-box",children:(0,r.jsxs)("select",{name:"size",className:"form-control select-size",onChange:e=>{h(e.target.value)},value:m,children:[r.jsx("option",{value:"null",children:"Choose an option"}),P.map(e=>isDisabled(u,e.name)?"":r.jsx("option",{value:e.name,children:e.name},"size-"+e.name))]})}),r.jsx(b(),{in:"null"!==u||"null"!==m,children:r.jsx("div",{className:"card-wrapper overflow-hidden reset-value-button w-100 mb-0",children:r.jsx(x.Z,{href:"#",className:"product-variation-clean",onClick:resetValueHandler,children:"Clean All"})})})]})]}):"",r.jsx("div",{className:"product-variation-price",children:r.jsx(b(),{in:f&&v>-1,children:r.jsx("div",{className:"card-wrapper",children:v>-1?r.jsx("div",{className:"single-product-price",children:y.data.variants[v].price?y.data.variants[v].sale_price?(0,r.jsxs)("div",{className:"product-price mb-0",children:[(0,r.jsxs)("ins",{className:"new-price",children:["$",(0,g.YM)(y.data.variants[v].sale_price)]}),(0,r.jsxs)("del",{className:"old-price",children:["$",(0,g.YM)(y.data.variants[v].price)]})]}):r.jsx("div",{className:"product-price mb-0",children:(0,r.jsxs)("ins",{className:"new-price",children:["$",(0,g.YM)(y.data.variants[v].price)]})}):""}):""})})})]}):"",r.jsx("hr",{className:"product-divider"}),(0,r.jsxs)("div",{className:"product-form product-qty pb-0",children:[r.jsx("label",{className:"d-none",children:"QTY:"}),(0,r.jsxs)("div",{className:"product-form-group",children:[r.jsx(q.Z,{max:y.data.stock,product:y,onChangeQty:function(e){k(e)}}),(0,r.jsxs)("button",{className:`btn-product btn-cart text-normal ls-normal font-weight-semi-bold ${f?"":"disabled"}`,onClick:()=>{if(y.data.stock>0&&f){if(y.data.variants.length>0){let e=y.data.name,a;e+=("null"!==u?"-"+u:"")+("null"!==m?"-"+m:""),a=y.data.price[0]===y.data.price[1]?y.data.price[0]:!y.data.variants[0].price&&y.data.discount>0?y.data.price[0]:y.data.variants[v].sale_price?y.data.variants[v].sale_price:y.data.variants[v].price,c({...y.data,name:e,qty:w,price:a})}else c({...y.data,qty:w,price:y.data.price[0]})}},children:[r.jsx("i",{className:"d-icon-bag"}),"Add to Cart"]})]})]}),r.jsx("hr",{className:"product-divider mb-3"}),(0,r.jsxs)("div",{className:"product-footer",children:[(0,r.jsxs)("div",{className:"social-links mr-4",children:[r.jsx(x.Z,{href:"#",className:"social-link social-facebook fab fa-facebook-f"}),r.jsx(x.Z,{href:"#",className:"social-link social-twitter fab fa-twitter"}),r.jsx(x.Z,{href:"#",className:"social-link social-pinterest fab fa-pinterest-p"})]})," ",r.jsx("span",{className:"divider d-lg-show"})," ",(0,r.jsxs)("a",{href:"#",className:"btn-product btn-wishlist",title:S?"Browse wishlist":"Add to wishlist",onClick:e=>{if(e.preventDefault(),l&&!S){let a=e.currentTarget;a.classList.add("load-more-overlay","loading"),l(y.data),setTimeout(()=>{a.classList.remove("load-more-overlay","loading")},1e3)}else a.push("/pages/wishlist")},children:[r.jsx("i",{className:S?"d-icon-heart-full":"d-icon-heart"})," ",S?"Browse wishlist":"Add to Wishlist"]})]})]})});var S=s(44),_=s(5316),P=s(4294),z=s(5396);let C=(0,p.Z)({ssr:!0})(function(){let e=(0,i.useRouter)().query.slug;if(!e)return"";let{data:a,loading:s,error:l}=(0,c.useQuery)(m.N4,{variables:{slug:e}}),[n,o]=(0,t.useState)(!1),p=a&&a.product.data,j=a&&a.product.related;return(0,t.useEffect)(()=>{!s&&p&&u()("main").on("done",function(){o(!0)}).on("progress",function(){o(!1)}),s&&o(!1)},[s,p]),(0,r.jsxs)("main",{className:"main single-product product-sticky-both",children:[r.jsx(d(),{children:r.jsx("title",{children:"Riode React eCommerce Template | Product Sticky Both"})}),r.jsx("h1",{className:"d-none",children:"Riode React eCommerce Template - Product Sticky Both"}),void 0!==p?r.jsx("div",{className:`page-content mb-10 pb-6 ${n?"":"d-none"}`,children:(0,r.jsxs)("div",{className:"container skeleton-body",children:[(0,r.jsxs)("div",{className:"product-navigation",children:[(0,r.jsxs)("ul",{className:"breadcrumb breadcrumb-lg",children:[r.jsx("li",{children:r.jsx(x.Z,{href:"/",children:r.jsx("i",{className:"d-icon-home"})})}),r.jsx("li",{children:r.jsx(x.Z,{href:"#",className:"active",children:"Products"})}),r.jsx("li",{children:"Detail"})]}),r.jsx(P.Z,{product:a.product})]}),r.jsx("div",{className:"product product-single product-sticky-both mb-8",children:(0,r.jsxs)("div",{className:"row",children:[r.jsx("div",{className:"col-lg-6",children:r.jsx(v.Z,{product:p,adClass:"col-lg-12 col-sm-6"})}),r.jsx("div",{className:"col-lg-3 col-md-6 order-lg-first",children:r.jsx(detail_left,{data:a,isSticky:!0})}),r.jsx("div",{className:"col-lg-3 col-md-6",children:r.jsx(y,{data:a,isSticky:!0})})]})}),r.jsx(S.Z,{product:p}),r.jsx(_.Z,{products:j,adClass:"pt-3 mt-2"})]})}):"",n&&!s?"":(0,r.jsxs)("div",{className:"skeleton-body sticky-both container mt-10 pt-3 mb-10",children:[(0,r.jsxs)("div",{className:"row p-relative",children:[r.jsx("div",{className:"woocommerce-product-gallery sticky col-lg-6 mt-3",children:r.jsx("div",{className:"skel-pro-gallery"})}),r.jsx("div",{className:"product-details sticky",children:r.jsx("div",{className:"skel-pro-summary mt-4 mt-md-0"})})]}),r.jsx("div",{className:"skel-pro-tabs"}),(0,r.jsxs)("section",{className:"pt-3 mt-4",children:[r.jsx("h2",{className:"title justify-content-center",children:"Related Products"}),r.jsx(h.Z,{adClass:"owl-carousel owl-theme owl-nav-full",options:z.F6,children:[1,2,3,4,5,6].map(e=>r.jsx("div",{className:"product-loading-overlay"},"popup-skel-"+e))})]})]})]})})},5487:e=>{e.exports=require("@apollo/react-hooks")},4414:e=>{e.exports=require("apollo-boost")},825:e=>{e.exports=require("graphql-tag")},3563:e=>{e.exports=require("imagesloaded")},9290:e=>{e.exports=require("next-apollo")},5648:e=>{e.exports=require("next-redux-wrapper")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},4601:e=>{e.exports=require("react-collapse")},4449:e=>{e.exports=require("react-countdown")},6405:e=>{e.exports=require("react-dom")},2791:e=>{e.exports=require("react-helmet")},4990:e=>{e.exports=require("react-image-lightbox")},2224:e=>{e.exports=require("react-image-magnifiers")},9252:e=>{e.exports=require("react-lazy-load-image-component")},9931:e=>{e.exports=require("react-modal")},9042:e=>{e.exports=require("react-owl-carousel2")},6022:e=>{e.exports=require("react-redux")},1635:e=>{e.exports=require("react-slide-toggle")},5973:e=>{e.exports=require("react-tabs")},1187:e=>{e.exports=require("react-toastify")},997:e=>{e.exports=require("react/jsx-runtime")},6695:e=>{e.exports=require("redux")},4161:e=>{e.exports=require("redux-persist")},1127:e=>{e.exports=require("redux-persist/integration/react")},8936:e=>{e.exports=require("redux-persist/lib/storage")},6477:e=>{e.exports=require("redux-saga/effects")},5998:e=>{e.exports=import("redux-saga")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var a=require("../../../webpack-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),s=a.X(0,[8376,4254,6114,9505,7500,4484,9950,2447,44,6208],()=>__webpack_exec__(4283));module.exports=s})();