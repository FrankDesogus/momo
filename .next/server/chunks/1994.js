"use strict";exports.id=1994,exports.ids=[1994],exports.modules={1994:(e,t,l)=>{l.d(t,{Z:()=>ToolBox});var r=l(997),o=l(5420),s=l(6689),i=l(7974),n=l(1040),a=l(8225);let sidebar_filter_three=function(){let e=(0,o.useRouter)(),[t,l]=(0,s.useState)(!0),c=e.query;(0,s.useEffect)(()=>(window.addEventListener("resize",resizeHandler,!1),document.querySelector("body").addEventListener("click",onBodyClick),()=>{window.removeEventListener("resize",resizeHandler),document.querySelector("body").removeEventListener("click",onBodyClick)}),[]),(0,s.useEffect)(()=>{t?l(!1):(0,a._M)()},[c]);let containsAttrInUrl=(e,t)=>{let l=c[e]?c[e].split(","):[];return"min_price"===e||"max_price"===e?l&&(""===t&&0===l.length||l.includes(t)):l&&l.includes(t)},getUrlForAttrs=(e,t)=>{let l=c[e]?c[e].split(","):[];return(l="min_price"===e||"max_price"===e?l.length>0&&l.includes(t)?[]:[t]:containsAttrInUrl(e,t)?l.filter(e=>e!==t):[...l,t]).join(",")},selectOptionHandler=function(e){e.preventDefault(),e.currentTarget.closest(".toolbox-item.select-menu").classList.toggle("opened")};function onBodyClick(e){e.target.closest(".select-menu.opened")||document.querySelector(".select-menu.opened")&&document.querySelector(".select-menu.opened").classList.remove("opened")}let hideSidebar=()=>{document.querySelector("body").classList.remove("sidebar-active")},resizeHandler=()=>{document.querySelector("body").classList.remove("sidebar-active")},selectFilterHandler=e=>{setTimeout(()=>{document.querySelector(".select-items").children.length>1?document.querySelector(".select-items").setAttribute("style","visibility: visible; opacity: 1; height: auto; margin-top: 2px; margin-bottom: 1.8rem"):document.querySelector(".select-items").setAttribute("style","")},100)};return(0,r.jsxs)("aside",{className:"sidebar shop-sidebar sidebar-fixed",children:[r.jsx("div",{className:"sidebar-overlay",onClick:hideSidebar}),r.jsx(i.Z,{className:"sidebar-close",href:"#",onClick:hideSidebar,children:r.jsx("i",{className:"d-icon-times"})}),(0,r.jsxs)("div",{className:"sidebar-content toolbox-left",children:[(0,r.jsxs)("div",{className:"toolbox-item select-menu",children:[r.jsx("a",{className:"select-menu-toggle",href:"#",onClick:selectOptionHandler,children:"Select Size"}),r.jsx("ul",{className:"filter-items",children:n.Z.sizes.map((t,l)=>r.jsx("li",{className:containsAttrInUrl("sizes",t.slug)?"active":"",onClick:selectFilterHandler,children:r.jsx(i.Z,{href:{pathname:e.pathname,query:{...c,page:1,sizes:getUrlForAttrs("sizes",t.slug),type:e.query.type?e.query.type:null}},scroll:!1,children:t.name})},t+" - "+l))})]}),(0,r.jsxs)("div",{className:"toolbox-item select-menu",children:[r.jsx("a",{className:"select-menu-toggle",href:"#",onClick:selectOptionHandler,children:"Select Color"}),r.jsx("ul",{className:"filter-items",children:n.Z.colors.map((t,l)=>r.jsx("li",{className:containsAttrInUrl("colors",t.slug)?"active":"",onClick:selectFilterHandler,children:r.jsx(i.Z,{href:{pathname:e.pathname,query:{...c,page:1,colors:getUrlForAttrs("colors",t.slug),type:e.query.type?e.query.type:null}},scroll:!1,children:t.name})},t+" - "+l))})]}),(0,r.jsxs)("div",{className:"toolbox-item select-menu price-with-count",children:[r.jsx("a",{className:"select-menu-toggle",href:"#",onClick:selectOptionHandler,children:"Select Price"}),r.jsx("ul",{className:"filter-items filter-price",children:[{min:"0",max:"50"},{min:"50",max:"100"},{min:"100",max:"200"},{min:"200",max:""}].map((t,l)=>r.jsx("li",{className:containsAttrInUrl("min_price",t.min)&&containsAttrInUrl("max_price",t.max)?"active":"",onClick:selectFilterHandler,children:r.jsx(i.Z,{href:{pathname:e.pathname,query:{...c,page:1,min_price:getUrlForAttrs("min_price",t.min),max_price:getUrlForAttrs("max_price",t.max),type:e.query.type?e.query.type:null}},scroll:!1,children:""===t.min&&""===t.max?"All":""===t.max?`$${t.min}.00 +`:`$${t.min}.00 - $${t.max}.00`})},"price-filter-"+l))})]})]})]})};function ToolBox(e){let{type:t="left"}=e,l=(0,o.useRouter)(),n=l.query,a=n.type?n.type:"grid";n.sortby&&n.sortby;let c=n.per_page?n.per_page:12,d=0;(0,s.useEffect)(()=>(window.addEventListener("scroll",stickyToolboxHandler),()=>{window.removeEventListener("scroll",stickyToolboxHandler)}),[]);let onChangeAttri=(e,t)=>{e.preventDefault();let r=l.pathname.replace("[grid]",n.grid),o=[`${t}=${e.target.value}`,"page=1"];for(let e in n)e!==t&&"page"!==e&&"grid"!==e&&o.push(e+"="+n[e]);r=r+"?"+o.join("&"),l.push(r)},showSidebar=()=>{"navigation"===t&&window.innerWidth>991?document.querySelector(".navigation-toggle-btn").click():document.querySelector("body").classList.add(`${"left"===t||"off-canvas"===t||"navigation"===t||"horizontal"===t?"sidebar-active":"right-sidebar-active"}`)},stickyToolboxHandler=e=>{let t=document.querySelector(".page-content")?document.querySelector(".page-content").offsetTop+document.querySelector("header").offsetHeight+100:600,l=document.querySelector(".sticky-toolbox"),r=0;if(l&&(r=l.offsetHeight),window.pageYOffset>=t&&window.innerWidth<768&&e.currentTarget.scrollY<d){if(l){if(l.classList.add("fixed"),!document.querySelector(".sticky-toolbox-wrapper")){let e=document.createElement("div");e.className="sticky-toolbox-wrapper",l.parentNode.insertBefore(e,l),document.querySelector(".sticky-toolbox-wrapper").insertAdjacentElement("beforeend",l),document.querySelector(".sticky-toolbox-wrapper").setAttribute("style","height: "+r+"px")}document.querySelector(".sticky-toolbox-wrapper").getAttribute("style")||document.querySelector(".sticky-toolbox-wrapper").setAttribute("style","height: "+r+"px")}}else l&&l.classList.remove("fixed"),document.querySelector(".sticky-toolbox-wrapper")&&document.querySelector(".sticky-toolbox-wrapper").removeAttribute("style");window.outerWidth>767&&document.querySelector(".sticky-toolbox-wrapper")&&(document.querySelector(".sticky-toolbox-wrapper").style.height="auto"),d=e.currentTarget.scrollY};return(0,r.jsxs)("nav",{className:`toolbox sticky-toolbox sticky-content fix-top ${"horizontal"===t?"toolbox-horizontal":""}`,children:["horizontal"===t?r.jsx(sidebar_filter_three,{}):"",(0,r.jsxs)("div",{className:"toolbox-left",children:["left"===t||"off-canvas"===t||"navigation"===t||"horizontal"===t?(0,r.jsxs)(i.Z,{href:"#",className:`toolbox-item left-sidebar-toggle btn btn-outline btn-primary btn-rounded ${"navigation"===t?"btn-icon-left btn-sm":"btn-sm btn-icon-right"} ${"off-canvas"===t||"navigation"===t?"":"d-lg-none"}`,onClick:showSidebar,children:["navigation"===t?r.jsx("i",{className:"d-icon-filter-2"}):"","Filter","navigation"===t?"":r.jsx("i",{className:"d-icon-arrow-right"})]}):"",(0,r.jsxs)("div",{className:`toolbox-item toolbox-sort ${"boxed"===t||"banner"===t?"select-box text-dark":"select-menu"}`,children:["boxed"===t||"banner"===t?r.jsx("label",{children:"Sort By :"}):"",(0,r.jsxs)("select",{name:"orderby",className:"form-control",defaultValue:n.sortby?n.sortby:"default",onChange:e=>onChangeAttri(e,"sortby"),children:[r.jsx("option",{value:"default",children:"Default"}),r.jsx("option",{value:"popularity",children:"Most Popular"}),r.jsx("option",{value:"rating",children:"Average rating"}),r.jsx("option",{value:"date",children:"Latest"}),r.jsx("option",{value:"price-low",children:"Sort forward price low"}),r.jsx("option",{value:"price-high",children:"Sort forward price high"}),r.jsx("option",{value:"",children:"Clear custom sort"})]})]})]}),(0,r.jsxs)("div",{className:"toolbox-right",children:[(0,r.jsxs)("div",{className:"toolbox-item toolbox-show select-box text-dark",children:[r.jsx("label",{children:"Show :"}),(0,r.jsxs)("select",{name:"count",className:"form-control",defaultValue:c,onChange:e=>onChangeAttri(e,"per_page"),children:[r.jsx("option",{value:"12",children:"12"}),r.jsx("option",{value:"24",children:"24"}),r.jsx("option",{value:"36",children:"36"})]})]}),(0,r.jsxs)("div",{className:`toolbox-item toolbox-layout ${"right"===t?"mr-lg-0":""}`,children:[r.jsx(i.Z,{href:{pathname:l.pathname,query:{...n,type:"list"}},scroll:!1,className:`d-icon-mode-list btn-layout ${"list"===a?"active":""}`}),r.jsx(i.Z,{href:{pathname:l.pathname,query:{...n,type:"grid"}},scroll:!1,className:`d-icon-mode-grid btn-layout ${"list"!==a?"active":""}`})]}),"right"===t?(0,r.jsxs)(i.Z,{href:"#",className:"toolbox-item right-sidebar-toggle btn btn-sm btn-outline btn-primary btn-rounded btn-icon-right d-lg-none",onClick:showSidebar,children:["Filter",r.jsx("i",{className:"d-icon-arrow-left"})]}):""]})]})}},1040:(e,t,l)=>{l.d(t,{Z:()=>r});let r={sizes:[{name:"Extra Large",slug:"xl",size:"XL"},{name:"Large",slug:"l",size:"L"},{name:"Medium",slug:"m",size:"M"},{name:"Small",slug:"s",size:"S"}],colors:[{name:"Black",slug:"black",color:"#333"},{name:"Blue",slug:"blue",color:"#1e73be"},{name:"Brown",slug:"brown",color:"#9e6924"},{name:"Green",slug:"green",color:"#56962e"}],brands:[{name:"Cinderella",slug:"cinderella"},{name:"Comedy",slug:"comedy"},{name:"RightCheck",slug:"rightcheck"},{name:"SkillStar",slug:"skillstar"},{name:"SLS",slug:"sls"}],tag:[{name:"Bag",slug:"bag"},{name:"Classic",slug:"classic"},{name:"Converse",slug:"converse"},{name:"Fit",slug:"fit"},{name:"Green",slug:"green"},{name:"Jack and Jones",slug:"jack-and-jones"},{name:"Jeans",slug:"jeans"},{name:"Jumper",slug:"jumper"},{name:"Leather",slug:"leather"},{name:"Diesel",slug:"diesel"},{name:"Man",slug:"man"}]}}};