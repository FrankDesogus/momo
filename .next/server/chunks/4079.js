"use strict";exports.id=4079,exports.ids=[4079],exports.modules={4079:(e,t,s)=>{s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=s(997);s(6689);var i=s(9252),r=s(7974),o=s(4496),l=s(8225),d=s(5396);let __WEBPACK_DEFAULT_EXPORT__=function(e){let{post:t,adClass:s="",isLazy:c=!1,isOriginal:h=!1,btnText:n="Read more",btnAdClass:p="btn-dark"}=e,m=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];return(0,a.jsxs)("div",{className:`post ${"gallery"===t.type?"":"overlay-zoom"} overlay-dark ${"video"===t.type?"post-video":""} ${s}`,children:["image"===t.type||"video"===t.type?(0,a.jsxs)("figure",{className:"post-media",children:[c?a.jsx(r.Z,{href:`/blog/single/${t.slug}`,children:h?a.jsx(i.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+t.large_picture[0].url,alt:"post image",width:380,height:230,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}}):a.jsx(i.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+t.picture[0].url,alt:"post image",width:t.picture[0].width,height:t.picture[0].height,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}})}):a.jsx(r.Z,{href:`/blog/single/${t.slug}`,children:h?a.jsx("img",{src:"https://d-themes.com/react_asset_api/riode"+t.large_picture[0].url,alt:"post image",width:380,height:230}):a.jsx("img",{src:"https://d-themes.com/react_asset_api/riode"+t.picture[0].url,alt:"post image",width:t.picture[0].width,height:t.picture[0].height})}),"video"===t.type?(0,a.jsxs)(a.Fragment,{children:[a.jsx("span",{className:"video-play",onClick:l.X9}),a.jsx("video",{width:"380",children:a.jsx("source",{src:"https://d-themes.com/react_asset_api/riode"+t.video.url,type:"video/mp4"})})]}):"",(0,a.jsxs)("div",{className:"post-calendar",children:[a.jsx("span",{className:"post-day",children:new Date(t.date).getDay()+1}),a.jsx("span",{className:"post-month",children:m[new Date(t.date).getMonth()]})]})]}):(0,a.jsxs)("figure",{className:"post-media",children:[c?a.jsx(o.Z,{adClass:"owl-theme owl-dot-inner owl-dot-white gutter-no",options:d.cQ,children:t.picture.map((e,t)=>a.jsx(i.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+e.url,alt:"post gallery",width:e.width,height:e.height,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}},e.title+"-"+t))}):a.jsx(o.Z,{adClass:"owl-theme owl-dot-inner owl-dot-white gutter-no",options:d.cQ,children:t.picture.map((e,t)=>a.jsx("img",{src:"https://d-themes.com/react_asset_api/riode"+e.url,alt:"post gallery",width:e.width,height:e.height},e.title+"-"+t))}),(0,a.jsxs)("div",{className:"post-calendar",children:[a.jsx("span",{className:"post-day",children:new Date(t.date).getDay()+1}),a.jsx("span",{className:"post-month",children:m[new Date(t.date).getMonth()]})]})]}),(0,a.jsxs)("div",{className:"post-details",children:[a.jsx("h4",{className:"post-title",children:a.jsx(r.Z,{href:`/blog/single/${t.slug}`,children:t.title})}),a.jsx("p",{className:"post-content",children:t.content}),(0,a.jsxs)(r.Z,{href:`/blog/single/${t.slug}`,className:`btn btn-link btn-underline ${p}`,children:[n,a.jsx("i",{className:"d-icon-arrow-right"})]})]})]})}}};