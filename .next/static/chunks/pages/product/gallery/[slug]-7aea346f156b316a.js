(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8238],{7552:function(a,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/gallery/[slug]",function(){return s(6749)}])},6749:function(a,e,s){"use strict";s.r(e),s.d(e,{default:function(){return S}});var l=s(5893),i=s(7294),t=s(5420),r=s(8385),c=s(4593),n=s(7564),d=s.n(n),o=s(2694),u=s(8209),m=s(7974),p=s(4496),h=s(4047),x=s(684),j=s(5396);function MediaFour(a){let{product:e}=a,[s,t]=(0,i.useState)(!1),[r,c]=(0,i.useState)(0),n=e.large_pictures?e.large_pictures:e.pictures,openLightBox=a=>{a.preventDefault(),c(parseInt(a.currentTarget.getAttribute("index"))),t(!0)};return(0,l.jsxs)("div",{className:"product-gallery product-extended mb-6",children:[(0,l.jsxs)("div",{className:"product-label-group",children:[0===e.stock?(0,l.jsx)("label",{className:"product-label label-out",children:"out"}):"",e.is_top?(0,l.jsx)("label",{className:"product-label label-top",children:"top"}):"",e.is_new?(0,l.jsx)("label",{className:"product-label label-new",children:"new"}):"",e.discount?(0,l.jsx)("label",{className:"product-label label-sale",children:"sale"}):""]}),(0,l.jsx)(p.Z,{adClass:"product-gallery-carousel owl-nav-full owl-theme",options:j.hx,children:n.map((a,e)=>(0,l.jsxs)("div",{children:[(0,l.jsx)(h.lb,{imageSrc:"https://d-themes.com/react_asset_api/riode"+a.url,imageAlt:"magnifier",largeImageSrc:"https://d-themes.com/react_asset_api/riode"+a.url,dragToMove:!1,mouseActivation:"hover",cursorStyleActive:"crosshair",className:"product-image large-image"}),(0,l.jsx)("a",{href:"#",className:"product-image-full",onClick:openLightBox,index:e,children:(0,l.jsx)("i",{className:"d-icon-zoom"})})]},a+"-"+e))}),(0,l.jsx)(x.Z,{images:n,isOpen:s,changeOpenState:a=>{t(a)},index:r,product:e})]})}var v=s(4416),g=s(6180),N=s.n(g),f=s(2065),b=s(2381),w=s(3862),k=s(8803),y=s(8225),C=(0,v.$j)(function(a){return{wishlist:a.wishlist.data?a.wishlist.data:[]}},{toggleWishlist:w.w.toggleWishlist,addToCart:k.Uw.addToCart})(function(a){let e=(0,t.useRouter)(),{data:s,isSticky:r=!1,isDesc:c=!1}=a,{toggleWishlist:n,addToCart:d,wishlist:o}=a,[u,p]=(0,i.useState)("null"),[h,x]=(0,i.useState)("null"),[j,v]=(0,i.useState)(0),[g,w]=(0,i.useState)(!1),[k,C]=(0,i.useState)(1),_=s&&s.product,z,Z=[],S=[];z=o.findIndex(a=>a.slug===_.data.slug)>-1,_.data&&_.data.variants.length>0&&(_.data.variants[0].size&&_.data.variants.forEach(a=>{-1===S.findIndex(e=>e.name===a.size.name)&&S.push({name:a.size.name,value:a.size.size})}),_.data.variants[0].color&&_.data.variants.forEach(a=>{-1===Z.findIndex(e=>e.name===a.color.name)&&Z.push({name:a.color.name,value:a.color.color})})),(0,i.useEffect)(()=>{v(-1),resetValueHandler()},[_]),(0,i.useEffect)(()=>{_.data.variants.length>0?"null"!==h&&"null"!==u||"null"===h&&null===_.data.variants[0].size&&"null"!==u||"null"===u&&null===_.data.variants[0].color&&"null"!==h?(w(!0),v(_.data.variants.findIndex(a=>null!==a.size&&null!==a.color&&a.color.name===u&&a.size.name===h||null===a.size&&a.color.name===u||null===a.color&&a.size.name===h))):w(!1):w(!0),0===_.stock&&w(!1)},[u,h,_]);let toggleColorHandler=a=>{isDisabled(a.name,h)||(u===a.name?p("null"):p(a.name))},toggleSizeHandler=a=>{isDisabled(u,a.name)||(h===a.name?x("null"):x(a.name))},addToCartHandler=()=>{if(_.data.stock>0&&g){if(_.data.variants.length>0){let a=_.data.name,e;a+=("null"!==u?"-"+u:"")+("null"!==h?"-"+h:""),e=_.data.price[0]===_.data.price[1]?_.data.price[0]:!_.data.variants[0].price&&_.data.discount>0?_.data.price[0]:_.data.variants[j].sale_price?_.data.variants[j].sale_price:_.data.variants[j].price,d({..._.data,name:a,qty:k,price:e})}else d({..._.data,qty:k,price:_.data.price[0]})}},resetValueHandler=a=>{p("null"),x("null")};function isDisabled(a,e){return"null"!==a&&"null"!==e&&(0===S.length?-1===_.data.variants.findIndex(a=>a.color.name===u):0===Z.length?-1===_.data.variants.findIndex(a=>a.size.name===h):-1===_.data.variants.findIndex(s=>s.color.name===a&&s.size.name===e))}return(0,l.jsxs)("div",{className:"product-details row pl-0",children:[(0,l.jsxs)("div",{className:"col-md-6",children:[(0,l.jsx)("h2",{className:"product-name mt-3",children:_.data.name}),(0,l.jsxs)("div",{className:"product-meta",children:["SKU: ",(0,l.jsx)("span",{className:"product-sku",children:_.data.sku}),"CATEGORIES: ",(0,l.jsx)("span",{className:"product-brand",children:_.data.categories.map((a,e)=>(0,l.jsxs)(i.Fragment,{children:[(0,l.jsx)(m.Z,{href:{pathname:"/shop",query:{category:a.slug}},children:a.name}),e<_.data.categories.length-1?", ":""]},a.name+"-"+e))})]}),(0,l.jsxs)("div",{className:"ratings-container",children:[(0,l.jsxs)("div",{className:"ratings-full",children:[(0,l.jsx)("span",{className:"ratings",style:{width:20*_.data.ratings+"%"}}),(0,l.jsx)("span",{className:"tooltiptext tooltip-top",children:(0,y.YM)(_.data.ratings)})]}),(0,l.jsxs)(m.Z,{href:"#",className:"rating-reviews",children:["( ",_.data.reviews," reviews )"]})]}),(0,l.jsx)("p",{className:"product-short-desc",children:_.data.short_description}),(0,l.jsxs)("ul",{className:"product-status mt-4 mb-4 list-type-check list-style-none pl-0",children:[(0,l.jsx)("li",{children:"Praesent id enim sit amet."}),(0,l.jsx)("li",{children:"Tdio vulputate eleifend in in tortor. ellus massa.Dristique sitiismonec."}),(0,l.jsx)("li",{children:"Massa ristique sit amet condim vel, facilisis quimequistiqutiqu amet condim."})]})]}),(0,l.jsxs)("div",{className:"col-md-6 pl-2",children:[(0,l.jsx)("div",{className:"product-price",children:_.data.price[0]!==_.data.price[1]?0===_.data.variants.length||_.data.variants.length>0&&!_.data.variants[0].price?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("ins",{className:"new-price",children:["$",(0,y.YM)(_.data.price[0])]}),(0,l.jsxs)("del",{className:"old-price",children:["$",(0,y.YM)(_.data.price[1])]})]}):(0,l.jsxs)("del",{className:"new-price",children:["$",(0,y.YM)(_.data.price[0])," – $",(0,y.YM)(_.data.price[1])]}):(0,l.jsxs)("ins",{className:"new-price",children:["$",(0,y.YM)(_.data.price[0])]})}),_.data.price[0]!==_.data.price[1]&&0===_.data.variants.length?(0,l.jsx)(f.Z,{type:2}):"",_&&_.data.variants.length>0?(0,l.jsxs)(l.Fragment,{children:[_.data.variants[0].color?(0,l.jsxs)("div",{className:"product-form product-color",children:[(0,l.jsx)("label",{children:"Color:"}),(0,l.jsx)("div",{className:"product-variations",children:Z.map(a=>(0,l.jsx)(m.Z,{href:"#",className:"color ".concat(u===a.name?"active":""," ").concat(isDisabled(a.name,h)?"disabled":""),style:{backgroundColor:"".concat(a.value)},onClick:e=>toggleColorHandler(a)},"color-"+a.name))})]}):"",_.data.variants[0].size?(0,l.jsxs)("div",{className:"product-form product-size",children:[(0,l.jsx)("label",{children:"Size:"}),(0,l.jsxs)("div",{className:"product-form-group",children:[(0,l.jsx)("div",{className:"product-variations",children:S.map(a=>(0,l.jsx)(m.Z,{href:"#",className:"size ".concat(h===a.name?"active":""," ").concat(isDisabled(u,a.name)?"disabled":""),onClick:e=>toggleSizeHandler(a),children:a.value},"size-"+a.name))}),(0,l.jsx)(N(),{in:"null"!==u||"null"!==h,children:(0,l.jsx)("div",{className:"card-wrapper overflow-hidden reset-value-button w-100 mb-0",children:(0,l.jsx)(m.Z,{href:"#",className:"product-variation-clean",onClick:resetValueHandler,children:"Clean All"})})})]})]}):"",(0,l.jsx)("div",{className:"product-variation-price",children:(0,l.jsx)(N(),{in:g&&j>-1,children:(0,l.jsx)("div",{className:"card-wrapper",children:j>-1?(0,l.jsx)("div",{className:"single-product-price",children:_.data.variants[j].price?_.data.variants[j].sale_price?(0,l.jsxs)("div",{className:"product-price mb-0",children:[(0,l.jsxs)("ins",{className:"new-price",children:["$",(0,y.YM)(_.data.variants[j].sale_price)]}),(0,l.jsxs)("del",{className:"old-price",children:["$",(0,y.YM)(_.data.variants[j].price)]})]}):(0,l.jsx)("div",{className:"product-price mb-0",children:(0,l.jsxs)("ins",{className:"new-price",children:["$",(0,y.YM)(_.data.variants[j].price)]})}):""}):""})})})]}):"",(0,l.jsx)("hr",{className:"product-divider"}),(0,l.jsxs)("div",{className:"product-form product-qty",children:[(0,l.jsx)("label",{className:"d-none",children:"QTY:"}),(0,l.jsxs)("div",{className:"product-form-group mr-2",children:[(0,l.jsx)(b.Z,{max:_.data.stock,product:_,onChangeQty:function(a){C(a)}}),(0,l.jsxs)("button",{className:"btn-product btn-cart text-normal ls-normal font-weight-semi-bold ".concat(g?"":"disabled"),onClick:addToCartHandler,onClick:addToCartHandler,children:[(0,l.jsx)("i",{className:"d-icon-bag"}),"Add to Cart"]})]})]}),(0,l.jsx)("hr",{className:"product-divider mb-3"}),(0,l.jsxs)("div",{className:"product-footer",children:[(0,l.jsxs)("div",{className:"social-links mr-4",children:[(0,l.jsx)(m.Z,{href:"#",className:"social-link social-facebook fab fa-facebook-f"}),(0,l.jsx)(m.Z,{href:"#",className:"social-link social-twitter fab fa-twitter"}),(0,l.jsx)(m.Z,{href:"#",className:"social-link social-pinterest fab fa-pinterest-p"})]}),(0,l.jsx)("div",{className:"product-action",children:(0,l.jsxs)("a",{href:"#",className:"btn-product btn-wishlist mr-6",title:z?"Browse wishlist":"Add to wishlist",onClick:a=>{if(a.preventDefault(),n&&!z){let e=a.currentTarget;e.classList.add("load-more-overlay","loading"),n(_.data),setTimeout(()=>{e.classList.remove("load-more-overlay","loading")},1e3)}else e.push("/pages/wishlist")},children:[(0,l.jsx)("i",{className:z?"d-icon-heart-full":"d-icon-heart"})," ",z?"Browse wishlist":"Add to Wishlist"]})})]})]})]})}),_=s(44),z=s(5316),Z=s(4294),S=(0,o.Z)({ssr:!1})(function(){let a=(0,t.useRouter)().query.slug;if(!a)return"";let{data:e,loading:s,error:n}=(0,r.a)(u.N4,{variables:{slug:a}}),[o,h]=(0,i.useState)(!1),x=e&&e.product.data,v=e&&e.product.related;return(0,i.useEffect)(()=>{!s&&x&&d()("main").on("done",function(){h(!0)}).on("progress",function(){h(!1)}),s&&h(!1)},[s,x]),(0,l.jsxs)("main",{className:"main single-product product-layout-gallery",children:[(0,l.jsx)(c.Z,{children:(0,l.jsx)("title",{children:"Riode React eCommerce Template | Product Gallery"})}),(0,l.jsx)("h1",{className:"d-none",children:"Riode React eCommerce Template - Product Gallery"}),void 0!==x?(0,l.jsx)("div",{className:"page-content mb-10 pb-6 ".concat(o?"":"d-none"),children:(0,l.jsxs)("div",{className:"container skeleton-body",children:[(0,l.jsxs)("div",{className:"product-navigation",children:[(0,l.jsxs)("ul",{className:"breadcrumb breadcrumb-lg",children:[(0,l.jsx)("li",{children:(0,l.jsx)(m.Z,{href:"/",children:(0,l.jsx)("i",{className:"d-icon-home"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(m.Z,{href:"#",className:"active",children:"Products"})}),(0,l.jsx)("li",{children:"Detail"})]}),(0,l.jsx)(Z.Z,{product:e.product})]}),(0,l.jsxs)("div",{className:"product product-single mb-4",children:[(0,l.jsx)(MediaFour,{product:x}),(0,l.jsx)(C,{data:e})]}),(0,l.jsx)(_.Z,{product:x}),(0,l.jsx)(z.Z,{products:v})]})}):"",o&&!s?"":(0,l.jsxs)("div",{className:"skeleton-body product product-single container mt-10 pt-3 mb-10",children:[(0,l.jsxs)("div",{className:"pg-gallery mb-4",children:[(0,l.jsx)("div",{className:"skel-pro-gallery mb-6"}),(0,l.jsx)("div",{className:"skel-pro-summary"})]}),(0,l.jsx)("div",{className:"skel-pro-tabs"}),(0,l.jsxs)("section",{className:"pt-3 mt-4",children:[(0,l.jsx)("h2",{className:"title justify-content-center",children:"Related Products"}),(0,l.jsx)(p.Z,{adClass:"owl-carousel owl-theme owl-nav-full",options:j.F6,children:[1,2,3,4,5,6].map(a=>(0,l.jsx)("div",{className:"product-loading-overlay"},"popup-skel-"+a))})]})]})]})})}},function(a){a.O(0,[2879,417,9774,2888,179],function(){return a(a.s=7552)}),_N_E=a.O()}]);