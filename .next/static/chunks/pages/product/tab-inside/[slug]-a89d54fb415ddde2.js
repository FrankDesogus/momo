(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5026],{3281:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/tab-inside/[slug]",function(){return s(8286)}])},9950:function(e,t,s){"use strict";var c=s(5893),a=s(7294),l=s(2679),r=s(4416),i=s(7974),n=s(8803),o=s(5222),d=s(3862),u=s(8225);t.Z=(0,r.$j)(function(e){return{wishlist:e.wishlist.data?e.wishlist.data:[]}},{toggleWishlist:d.w.toggleWishlist,addToCart:n.Uw.addToCart,...o.n})(function(e){let t;let{product:s,adClass:r="text-center",toggleWishlist:n,wishlist:o,addToCart:d,openQuickview:m,isCategory:h=!0}=e;return t=o.findIndex(e=>e.slug===s.slug)>-1,(0,c.jsxs)("div",{className:"product text-left ".concat(r),children:[(0,c.jsxs)("figure",{className:"product-media",children:[(0,c.jsxs)(i.Z,{href:"/product/default/".concat(s.slug),children:[(0,c.jsx)(l.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/riode"+s.pictures[0].url,threshold:500,effect:"opacity",width:"300",height:"338"}),s.pictures.length>=2?(0,c.jsx)(l.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/riode"+s.pictures[1].url,threshold:500,width:"300",height:"338",effect:"opacity",wrapperClassName:"product-image-hover"}):""]}),(0,c.jsxs)("div",{className:"product-label-group",children:[s.is_new?(0,c.jsx)("label",{className:"product-label label-new",children:"New"}):"",s.is_top?(0,c.jsx)("label",{className:"product-label label-top",children:"Top"}):"",s.discount>0?0===s.variants.length?(0,c.jsxs)("label",{className:"product-label label-sale",children:[s.discount,"% OFF"]}):(0,c.jsx)("label",{className:"product-label label-sale",children:"Sale"}):""]}),(0,c.jsxs)("div",{className:"product-action-vertical",children:[s.variants.length>0?(0,c.jsx)(i.Z,{href:"/product/default/".concat(s.slug),className:"btn-product-icon btn-cart",title:"Go to product",children:(0,c.jsx)("i",{className:"d-icon-arrow-right"})}):(0,c.jsx)("a",{href:"#",className:"btn-product-icon btn-cart",title:"Add to cart",onClick:e=>{e.preventDefault(),d({...s,qty:1,price:s.price[0]})},children:(0,c.jsx)("i",{className:"d-icon-bag"})}),(0,c.jsx)("a",{href:"#",className:"btn-product-icon btn-wishlist",title:t?"Remove from wishlist":"Add to wishlist",onClick:e=>{n&&n(s),e.preventDefault();let t=e.currentTarget;t.classList.add("load-more-overlay","loading"),setTimeout(()=>{t.classList.remove("load-more-overlay","loading")},1e3)},children:(0,c.jsx)("i",{className:t?"d-icon-heart-full":"d-icon-heart"})})]}),(0,c.jsx)("div",{className:"product-action",children:(0,c.jsx)(i.Z,{href:"#",className:"btn-product btn-quickview",title:"Quick View",onClick:()=>{m(s.slug)},children:"Quick View"})})]}),(0,c.jsxs)("div",{className:"product-details",children:[h?(0,c.jsx)("div",{className:"product-cat",children:s.categories?s.categories.map((e,t)=>(0,c.jsx)(a.Fragment,{children:(0,c.jsxs)(i.Z,{href:{pathname:"/shop",query:{category:e.slug}},children:[e.name,t<s.categories.length-1?", ":""]})},e.name+"-"+t)):""}):"",(0,c.jsx)("h3",{className:"product-name",children:(0,c.jsx)(i.Z,{href:"/product/default/".concat(s.slug),children:s.name})}),(0,c.jsx)("div",{className:"product-price",children:s.price[0]!==s.price[1]?0===s.variants.length||s.variants.length>0&&!s.variants[0].price?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("ins",{className:"new-price",children:["$",(0,u.YM)(s.price[0])]}),(0,c.jsxs)("del",{className:"old-price",children:["$",(0,u.YM)(s.price[1])]})]}):(0,c.jsxs)("del",{className:"new-price",children:["$",(0,u.YM)(s.price[0])," – $",(0,u.YM)(s.price[1])]}):(0,c.jsxs)("ins",{className:"new-price",children:["$",(0,u.YM)(s.price[0])]})}),(0,c.jsxs)("div",{className:"ratings-container",children:[(0,c.jsxs)("div",{className:"ratings-full",children:[(0,c.jsx)("span",{className:"ratings",style:{width:20*s.ratings+"%"}}),(0,c.jsx)("span",{className:"tooltiptext tooltip-top",children:(0,u.YM)(s.ratings)})]}),(0,c.jsxs)(i.Z,{href:"/product/default/".concat(s.slug),className:"rating-reviews",children:["( ",s.reviews," reviews )"]})]})]})]})})},684:function(e,t,s){"use strict";var c=s(5893),a=s(7294),l=s(2879);s(3396),t.Z=function(e){let{images:t,product:s}=e,[r,i]=(0,a.useState)(!1),[n,o]=(0,a.useState)(0);return(0,a.useEffect)(()=>{i(e.isOpen)},[e.isOpen]),(0,a.useEffect)(()=>{o(e.index)},[e.index]),(0,c.jsx)(c.Fragment,{children:r?(0,c.jsx)(l.Z,{mainSrc:"https://d-themes.com/react_asset_api/riode"+t[n].url,nextSrc:"https://d-themes.com/react_asset_api/riode"+t[(n+1)%t.length].url,prevSrc:"https://d-themes.com/react_asset_api/riode"+t[(n+t.length-1)%t.length].url,onCloseRequest:()=>{e.changeOpenState(!1)},onMovePrevRequest:()=>{o((n+t.length-1)%t.length)},onMoveNextRequest:()=>{o((n+1)%t.length)},animationDisabled:!1,animationDuration:300,imageTitle:s.name,imagePadding:80,clickOutsideToClose:!0}):""})}},8191:function(e,t,s){"use strict";s.d(t,{Z:function(){return MediaFive}});var c=s(5893),a=s(7294),l=s(4047),r=s(7974),i=s(4496),n=s(6814),o=s(684),d=s(5396);function MediaFive(e){let{product:t,adClass:s=""}=e,[u,m]=(0,a.useState)(0),[h,p]=(0,a.useState)(0),[x,g]=(0,a.useState)(!1),[v,j]=(0,a.useState)(null),b=t.large_pictures?t.large_pictures:t.pictures;(0,a.useEffect)(()=>{m(0)},[window.location.pathname]),(0,a.useEffect)(()=>{null!==v&&null!==v.current&&u>=0&&v.current.$car.to(u,300,!0)},[u]);let setIndexHandler=e=>{e!==u&&m(e)};return(0,c.jsxs)("div",{className:"product-gallery product-gallery-vertical product-gallery-sticky ".concat(s),children:[(0,c.jsxs)("div",{className:"product-label-group",children:[0===t.stock?(0,c.jsx)("label",{className:"product-label label-out",children:"out"}):"",t.is_top?(0,c.jsx)("label",{className:"product-label label-top",children:"top"}):"",t.is_new?(0,c.jsx)("label",{className:"product-label label-new",children:"new"}):"",t.discount?(0,c.jsx)("label",{className:"product-label label-sale",children:"sale"}):""]}),(0,c.jsx)(i.Z,{adClass:"product-single-carousel owl-theme owl-nav-inner",options:d.Hr,onChangeIndex:setIndexHandler,onChangeRef:e=>{void 0!==e.current&&j(e)},events:{onTranslate:function(e){e.target&&document.querySelector(".product-thumbs")&&(document.querySelector(".product-thumbs").querySelector(".product-thumb.active").classList.remove("active"),document.querySelector(".product-thumbs").querySelectorAll(".product-thumb")[e.item.index].classList.add("active"))}},children:b.map((e,t)=>(0,c.jsx)("div",{children:(0,c.jsx)(l.lb,{imageSrc:"https://d-themes.com/react_asset_api/riode"+e.url,imageAlt:"magnifier",largeImageSrc:"https://d-themes.com/react_asset_api/riode"+e.url,dragToMove:!1,mouseActivation:"hover",cursorStyleActive:"crosshair",className:"product-image large-image"})},e+"-"+t))}),(0,c.jsx)(r.Z,{href:"#",className:"product-image-full",onClick:()=>{g(!0)},children:(0,c.jsx)("i",{className:"d-icon-zoom"})}),(0,c.jsx)(n.Z,{product:t,index:u,onChangeIndex:setIndexHandler}),(0,c.jsx)(o.Z,{images:b,isOpen:x,changeOpenState:e=>{g(e)},index:u,product:t})]})}},5316:function(e,t,s){"use strict";s.d(t,{Z:function(){return RelatedProducts}});var c=s(5893),a=s(4496),l=s(9950),r=s(5396);function RelatedProducts(e){let{products:t,adClass:s="pt-3 mt-10"}=e;return t.length>0?(0,c.jsxs)("section",{className:"".concat(s),children:[(0,c.jsx)("h2",{className:"title justify-content-center",children:"Related Products"}),(0,c.jsx)(a.Z,{adClass:"owl-carousel owl-theme owl-nav-full",options:r.F6,children:t&&t.slice(0,5).map((e,t)=>(0,c.jsx)(l.Z,{product:e,adClass:""},"product-two-"+t))})]}):""}},6814:function(e,t,s){"use strict";var c=s(5893),a=s(7294),l=s(4496),r=s(5396);t.Z=a.memo(function(e){let{product:t,index:s=0}=e,i=t.pictures,[n,o]=(0,a.useState)(null);(0,a.useEffect)(()=>{null!==n&&s>=0&&(n.current.$car.to(s,300,!0),document.querySelector(".product-thumbs")&&(document.querySelector(".product-thumbs .owl-stage").querySelector(".product-thumb.active")&&document.querySelector(".product-thumbs .owl-stage").querySelector(".product-thumb.active").classList.remove("active"),document.querySelector(".product-thumbs .owl-stage").querySelectorAll(".owl-item")[s]&&document.querySelector(".product-thumbs .owl-stage").querySelectorAll(".owl-item")[s]&&document.querySelector(".product-thumbs .owl-stage").querySelectorAll(".owl-item")[s].querySelector(".product-thumb").classList.add("active")))},[s]);let thumbActiveHandler=(t,s)=>{e.onChangeIndex(s),document.querySelector(".product-thumbs")&&document.querySelector(".product-thumbs .owl-stage").querySelector(".product-thumb.active").classList.remove("active"),t.currentTarget.classList.add("active")};return(0,c.jsx)("div",{className:"product-thumbs-wrap product-thumbs-two",children:(0,c.jsx)(l.Z,{adClass:"product-thumbs product-thumb-carousel",options:r.tv,onChangeRef:e=>{void 0!==e.current&&null===n&&o(e)},children:i.map((e,t)=>(0,c.jsx)("div",{className:"product-thumb ".concat(0===t?"active":""),onClick:e=>{thumbActiveHandler(e,t)},children:(0,c.jsx)("img",{src:"https://d-themes.com/react_asset_api/riode"+e.url,alt:"product thumbnail",width:"137",height:"137"})},e+"-2-"+t))})})})},8286:function(e,t,s){"use strict";s.r(t);var c=s(5893),a=s(7294),l=s(5420),r=s(8385),i=s(4593),n=s(7564),o=s.n(n),d=s(2694),u=s(8209),m=s(4496),h=s(8191),p=s(8839),x=s(5316),g=s(5396);t.default=(0,d.Z)({ssr:!1})(function(){let e=(0,l.useRouter)().query.slug;if(!e)return"";let{data:t,loading:s,error:n}=(0,r.a)(u.N4,{variables:{slug:e}}),[d,v]=(0,a.useState)(!1),j=t&&t.product.data,b=t&&t.product.related;return(0,a.useEffect)(()=>{!s&&j&&o()("main").on("done",function(){v(!0)}).on("progress",function(){v(!1)}),s&&v(!1)},[s,j]),(0,c.jsxs)("main",{className:"main mt-6 single-product",children:[(0,c.jsx)(i.Z,{children:(0,c.jsx)("title",{children:"Riode React eCommerce Template | Product Masonry"})}),(0,c.jsx)("h1",{className:"d-none",children:"Riode React eCommerce Template - Product Masonry"}),void 0!==j?(0,c.jsx)("div",{className:"page-content mb-10 pb-6 ".concat(d?"":"d-none"),children:(0,c.jsxs)("div",{className:"container skeleton-body",children:[(0,c.jsxs)("div",{className:"product product-single row mb-2",children:[(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsx)(h.Z,{product:j,isSticky:!0,adClass:"pb-0"})}),(0,c.jsx)("div",{className:"col-md-6",children:(0,c.jsx)(p.Z,{data:t,isDesc:!0,adClass:"pb-0 mb-6"})})]}),(0,c.jsx)(x.Z,{products:b})]})}):"",d&&!s?"":(0,c.jsxs)("div",{className:"skeleton-body container mb-10",children:[(0,c.jsxs)("div",{className:"row mb-7",children:[(0,c.jsx)("div",{className:"col-md-6 sticky-sidebar-wrapper ",children:(0,c.jsx)("div",{className:"skel-pro-gallery"})}),(0,c.jsxs)("div",{className:"col-md-6",children:[(0,c.jsx)("div",{className:"skel-pro-summary mt-4 mt-md-0"}),(0,c.jsx)("div",{className:"skel-pro-tabs"})]})]}),(0,c.jsxs)("section",{className:"pt-3 mt-4",children:[(0,c.jsx)("h2",{className:"title justify-content-center",children:"Related Products"}),(0,c.jsx)(m.Z,{adClass:"owl-carousel owl-theme owl-nav-full",options:g.F6,children:[1,2,3,4,5,6].map(e=>(0,c.jsx)("div",{className:"product-loading-overlay"},"popup-skel-"+e))})]})]})]})})}},function(e){e.O(0,[2879,8839,9774,2888,179],function(){return e(e.s=3281)}),_N_E=e.O()}]);