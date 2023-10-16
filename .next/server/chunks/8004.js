"use strict";exports.id=8004,exports.ids=[8004],exports.modules={8004:(e,s,a)=>{a.d(s,{Z:()=>u});var t=a(997),l=a(6689),r=a.n(l),i=a(9252),c=a(6022),d=a(7974),n=a(8803),o=a(5222),h=a(3862),p=a(8225);let u=(0,c.connect)(function(e){return{wishlist:e.wishlist.data?e.wishlist.data:[]}},{toggleWishlist:h.w.toggleWishlist,addToCart:n.Uw.addToCart,...o.n})(function(e){let s;let{product:a,adClass:l,toggleWishlist:c,wishlist:n,addToCart:o,openQuickview:h}=e;return s=n.findIndex(e=>e.slug===a.slug)>-1,(0,t.jsxs)("div",{className:`product product-list ${l} ${a.variants.length>0?"product-variable":""}`,children:[(0,t.jsxs)("figure",{className:"product-media",children:[(0,t.jsxs)(d.Z,{href:`/product/default/${a.slug}`,children:[t.jsx(i.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/riode"+a.pictures[0].url,threshold:500,effect:"opacity",width:"300",height:"338"}),a.pictures.length>=2?t.jsx(i.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/riode"+a.pictures[1].url,threshold:500,width:"300",height:"338",effect:"opacity",wrapperClassName:"product-image-hover"}):""]}),(0,t.jsxs)("div",{className:"product-label-group",children:[a.is_new?t.jsx("label",{className:"product-label label-new",children:"New"}):"",a.is_top?t.jsx("label",{className:"product-label label-top",children:"Top"}):"",a.discount>0?0===a.variants.length?(0,t.jsxs)("label",{className:"product-label label-sale",children:[a.discount,"% OFF"]}):t.jsx("label",{className:"product-label label-sale",children:"Sale"}):""]})]}),(0,t.jsxs)("div",{className:"product-details",children:[t.jsx("div",{className:"product-cat",children:a.categories?a.categories.map((e,s)=>t.jsx(r().Fragment,{children:(0,t.jsxs)(d.Z,{href:{pathname:"/shop",query:{category:e.slug}},children:[e.name,s<a.categories.length-1?", ":""]})},e.name+"-"+s)):""}),t.jsx("h3",{className:"product-name",children:t.jsx(d.Z,{href:`/product/default/${a.slug}`,children:a.name})}),t.jsx("div",{className:"product-price",children:a.price[0]!==a.price[1]?0===a.variants.length||a.variants.length>0&&!a.variants[0].price?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("ins",{className:"new-price",children:["$",(0,p.YM)(a.price[0])]}),(0,t.jsxs)("del",{className:"old-price",children:["$",(0,p.YM)(a.price[1])]})]}):(0,t.jsxs)("del",{className:"new-price",children:["$",(0,p.YM)(a.price[0])," – $",(0,p.YM)(a.price[1])]}):(0,t.jsxs)("ins",{className:"new-price",children:["$",(0,p.YM)(a.price[0])]})}),(0,t.jsxs)("div",{className:"ratings-container",children:[(0,t.jsxs)("div",{className:"ratings-full",children:[t.jsx("span",{className:"ratings",style:{width:20*a.ratings+"%"}}),t.jsx("span",{className:"tooltiptext tooltip-top",children:(0,p.YM)(a.ratings)})]}),(0,t.jsxs)(d.Z,{href:`/product/default/${a.slug}`,className:"rating-reviews",children:["( ",a.reviews," reviews )"]})]}),t.jsx("p",{className:"product-short-desc",children:a.short_description}),(0,t.jsxs)("div",{className:"product-action",children:[a.variants.length>0?t.jsx(d.Z,{href:`/product/default/${a.slug}`,className:"btn-product btn-cart",title:"Go to product",children:t.jsx("span",{children:"Select Options"})}):(0,t.jsxs)("a",{href:"#",className:"btn-product btn-cart",title:"Add to cart",onClick:e=>{e.preventDefault(),o({...a,qty:1,price:a.price[0]})},children:[t.jsx("i",{className:"d-icon-bag"}),t.jsx("span",{children:"Add to cart"})]}),t.jsx("a",{href:"#",className:"btn-product-icon btn-wishlist",title:s?"Remove from wishlist":"Add to wishlist",onClick:e=>{c&&c(a),e.preventDefault();let s=e.currentTarget;s.classList.add("load-more-overlay","loading"),setTimeout(()=>{s.classList.remove("load-more-overlay","loading")},1e3)},children:t.jsx("i",{className:s?"d-icon-heart-full":"d-icon-heart"})}),t.jsx(d.Z,{href:"#",className:"btn-product-icon btn-quickview",title:"Quick View",onClick:()=>{h(a.slug)},children:t.jsx("i",{className:"d-icon-search"})})]})]})]})})}};