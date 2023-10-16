"use strict";exports.id=9950,exports.ids=[9950],exports.modules={9950:(e,s,t)=>{t.d(s,{Z:()=>u});var a=t(997),l=t(6689),i=t.n(l),r=t(9252),c=t(6022),d=t(7974),n=t(8803),o=t(5222),h=t(3862),p=t(8225);let u=(0,c.connect)(function(e){return{wishlist:e.wishlist.data?e.wishlist.data:[]}},{toggleWishlist:h.w.toggleWishlist,addToCart:n.Uw.addToCart,...o.n})(function(e){let s;let{product:t,adClass:l="text-center",toggleWishlist:c,wishlist:n,addToCart:o,openQuickview:h,isCategory:u=!0}=e;return s=n.findIndex(e=>e.slug===t.slug)>-1,(0,a.jsxs)("div",{className:`product text-left ${l}`,children:[(0,a.jsxs)("figure",{className:"product-media",children:[(0,a.jsxs)(d.Z,{href:`/product/default/${t.slug}`,children:[a.jsx(r.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/riode"+t.pictures[0].url,threshold:500,effect:"opacity",width:"300",height:"338"}),t.pictures.length>=2?a.jsx(r.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/riode"+t.pictures[1].url,threshold:500,width:"300",height:"338",effect:"opacity",wrapperClassName:"product-image-hover"}):""]}),(0,a.jsxs)("div",{className:"product-label-group",children:[t.is_new?a.jsx("label",{className:"product-label label-new",children:"New"}):"",t.is_top?a.jsx("label",{className:"product-label label-top",children:"Top"}):"",t.discount>0?0===t.variants.length?(0,a.jsxs)("label",{className:"product-label label-sale",children:[t.discount,"% OFF"]}):a.jsx("label",{className:"product-label label-sale",children:"Sale"}):""]}),(0,a.jsxs)("div",{className:"product-action-vertical",children:[t.variants.length>0?a.jsx(d.Z,{href:`/product/default/${t.slug}`,className:"btn-product-icon btn-cart",title:"Go to product",children:a.jsx("i",{className:"d-icon-arrow-right"})}):a.jsx("a",{href:"#",className:"btn-product-icon btn-cart",title:"Add to cart",onClick:e=>{e.preventDefault(),o({...t,qty:1,price:t.price[0]})},children:a.jsx("i",{className:"d-icon-bag"})}),a.jsx("a",{href:"#",className:"btn-product-icon btn-wishlist",title:s?"Remove from wishlist":"Add to wishlist",onClick:e=>{c&&c(t),e.preventDefault();let s=e.currentTarget;s.classList.add("load-more-overlay","loading"),setTimeout(()=>{s.classList.remove("load-more-overlay","loading")},1e3)},children:a.jsx("i",{className:s?"d-icon-heart-full":"d-icon-heart"})})]}),a.jsx("div",{className:"product-action",children:a.jsx(d.Z,{href:"#",className:"btn-product btn-quickview",title:"Quick View",onClick:()=>{h(t.slug)},children:"Quick View"})})]}),(0,a.jsxs)("div",{className:"product-details",children:[u?a.jsx("div",{className:"product-cat",children:t.categories?t.categories.map((e,s)=>a.jsx(i().Fragment,{children:(0,a.jsxs)(d.Z,{href:{pathname:"/shop",query:{category:e.slug}},children:[e.name,s<t.categories.length-1?", ":""]})},e.name+"-"+s)):""}):"",a.jsx("h3",{className:"product-name",children:a.jsx(d.Z,{href:`/product/default/${t.slug}`,children:t.name})}),a.jsx("div",{className:"product-price",children:t.price[0]!==t.price[1]?0===t.variants.length||t.variants.length>0&&!t.variants[0].price?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("ins",{className:"new-price",children:["$",(0,p.YM)(t.price[0])]}),(0,a.jsxs)("del",{className:"old-price",children:["$",(0,p.YM)(t.price[1])]})]}):(0,a.jsxs)("del",{className:"new-price",children:["$",(0,p.YM)(t.price[0])," – $",(0,p.YM)(t.price[1])]}):(0,a.jsxs)("ins",{className:"new-price",children:["$",(0,p.YM)(t.price[0])]})}),(0,a.jsxs)("div",{className:"ratings-container",children:[(0,a.jsxs)("div",{className:"ratings-full",children:[a.jsx("span",{className:"ratings",style:{width:20*t.ratings+"%"}}),a.jsx("span",{className:"tooltiptext tooltip-top",children:(0,p.YM)(t.ratings)})]}),(0,a.jsxs)(d.Z,{href:`/product/default/${t.slug}`,className:"rating-reviews",children:["( ",t.reviews," reviews )"]})]})]})]})})}};