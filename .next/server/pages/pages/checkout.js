"use strict";(()=>{var e={};e.id=3065,e.ids=[3065,2888,660],e.modules={4718:(e,s,a)=>{a.a(e,async(e,r)=>{try{a.r(s),a.d(s,{config:()=>j,default:()=>x,getServerSideProps:()=>u,getStaticPaths:()=>h,getStaticProps:()=>p,reportWebVitals:()=>b,routeModule:()=>q,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>g,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>N});var t=a(1961),l=a(2667),c=a(9032),i=a(4484),o=a(7500),n=a(5874),d=e([o]);o=(d.then?(await d)():d)[0];let m=t.PagesRouteModule,x=(0,c.l)(n,"default"),p=(0,c.l)(n,"getStaticProps"),h=(0,c.l)(n,"getStaticPaths"),u=(0,c.l)(n,"getServerSideProps"),j=(0,c.l)(n,"config"),b=(0,c.l)(n,"reportWebVitals"),N=(0,c.l)(n,"unstable_getStaticProps"),f=(0,c.l)(n,"unstable_getStaticPaths"),y=(0,c.l)(n,"unstable_getStaticParams"),v=(0,c.l)(n,"unstable_getServerProps"),g=(0,c.l)(n,"unstable_getServerSideProps"),q=new m({definition:{kind:l.x.PAGES,page:"/pages/checkout",pathname:"/pages/checkout",bundlePath:"",filename:""},components:{App:o.default,Document:i.default},userland:n});r()}catch(e){r(e)}})},5874:(e,s,a)=>{a.r(s),a.d(s,{default:()=>u});var r=a(997),t=a(6689),l=a(6022),c=a(2791),i=a.n(c),o=a(4601),n=a.n(o),d=a(7974),m=a(9619),x=a(1635),p=a.n(x),h=a(8225);let u=(0,l.connect)(function(e){return{cartList:e.cart.data?e.cart.data:[]}})(function(e){let{cartList:s}=e,[a,l]=(0,t.useState)(!1);return(0,r.jsxs)("main",{className:"main checkout",children:[r.jsx(i(),{children:r.jsx("title",{children:"Riode React eCommerce Template | Checkout"})}),r.jsx("h1",{className:"d-none",children:"Riode React eCommerce Template - Checkout"}),(0,r.jsxs)("div",{className:`page-content pt-7 pb-10 ${s.length>0?"mb-10":"mb-2"}`,children:[(0,r.jsxs)("div",{className:"step-by pr-4 pl-4",children:[r.jsx("h3",{className:"title title-simple title-step",children:r.jsx(d.Z,{href:"/pages/cart",children:"1. Shopping Cart"})}),r.jsx("h3",{className:"title title-simple title-step active",children:r.jsx(d.Z,{href:"#",children:"2. Checkout"})}),r.jsx("h3",{className:"title title-simple title-step",children:r.jsx(d.Z,{href:"/pages/order",children:"3. Order Complete"})})]}),r.jsx("div",{className:"container mt-7",children:s.length>0?(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"card accordion",children:r.jsx(m.Z,{type:"parse",title:"<div class='alert alert-light alert-primary alert-icon mb-4 card-header'>   <i class='fas fa-exclamation-circle'></i> <span class='text-body'>Returning customer?</span> <a href='#' class='text-primary collapse'>Click here to login</a>   </div>",children:(0,r.jsxs)("div",{className:"alert-body collapsed",children:[r.jsx("p",{children:"If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section."}),(0,r.jsxs)("div",{className:"row cols-md-2",children:[(0,r.jsxs)("form",{className:"mb-4 mb-md-0",children:[r.jsx("label",{htmlFor:"username",children:"Username Or Email *"}),r.jsx("input",{type:"text",className:"input-text form-control mb-0",name:"username",id:"username",autoComplete:"username"})]}),(0,r.jsxs)("form",{className:"mb-4 mb-md-0",children:[r.jsx("label",{htmlFor:"password",children:"Password *"}),r.jsx("input",{className:"input-text form-control mb-0",type:"password",name:"password",id:"password",autoComplete:"current-password"})]})]}),(0,r.jsxs)("div",{className:"checkbox d-flex align-items-center justify-content-between",children:[(0,r.jsxs)("div",{className:"form-checkbox pt-0 mb-0",children:[r.jsx("input",{type:"checkbox",className:"custom-checkbox",id:"signin-remember",name:"signin-remember"}),r.jsx("label",{className:"form-control-label",htmlFor:"signin-remember",children:"Remember Me"})]}),r.jsx(d.Z,{href:"#",className:"lost-link",children:"Lost your password?"})]}),(0,r.jsxs)("div",{className:"link-group",children:[r.jsx(d.Z,{href:"#",className:"btn btn-dark btn-rounded mb-4",children:"Login"})," ",r.jsx("span",{className:"d-inline-block text-body font-weight-semi-bold",children:"or Login With"})," ",(0,r.jsxs)("div",{className:"social-links mb-4",children:[r.jsx(d.Z,{href:"#",className:"social-link social-google fab fa-google"}),r.jsx(d.Z,{href:"#",className:"social-link social-facebook fab fa-facebook-f"}),r.jsx(d.Z,{href:"#",className:"social-link social-twitter fab fa-twitter"})]})]})]})})}),r.jsx("div",{className:"card accordion",children:r.jsx(m.Z,{title:"   <div class='alert alert-light alert-primary alert-icon mb-4 card-header'>   <i class='fas fa-exclamation-circle'></i>   <span class='text-body'>Have a coupon?</span>   <a href='#' class='text-primary'>Click here to enter your code</a>   </div>",type:"parse",children:(0,r.jsxs)("div",{className:"alert-body mb-4 collapsed",children:[r.jsx("p",{children:"If you have a coupon code, please apply it below."}),(0,r.jsxs)("form",{className:"check-coupon-box d-flex",children:[r.jsx("input",{type:"text",name:"coupon_code",className:"input-text form-control text-grey ls-m mr-4",id:"coupon_code",placeholder:"Coupon code"}),r.jsx("button",{type:"submit",className:"btn btn-dark btn-rounded btn-outline",children:"Apply Coupon"})]})]})})}),r.jsx("form",{action:"#",className:"form",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-lg-7 mb-6 mb-lg-0 pr-lg-4",children:[r.jsx("h3",{className:"title title-simple text-left text-uppercase",children:"Billing Details"}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-xs-6",children:[r.jsx("label",{children:"First Name *"}),r.jsx("input",{type:"text",className:"form-control",name:"first-name",required:!0})]}),(0,r.jsxs)("div",{className:"col-xs-6",children:[r.jsx("label",{children:"Last Name *"}),r.jsx("input",{type:"text",className:"form-control",name:"last-name",required:!0})]})]}),r.jsx("label",{children:"Company Name (Optional)"}),r.jsx("input",{type:"text",className:"form-control",name:"company-name",required:!0}),r.jsx("label",{children:"Country / Region *"}),r.jsx("div",{className:"select-box",children:(0,r.jsxs)("select",{name:"country",className:"form-control",defaultValue:"us",children:[r.jsx("option",{value:"us",children:"United States (US)"}),r.jsx("option",{value:"uk",children:" United Kingdom"}),r.jsx("option",{value:"fr",children:"France"}),r.jsx("option",{value:"aus",children:"Austria"})]})}),r.jsx("label",{children:"Street Address *"}),r.jsx("input",{type:"text",className:"form-control",name:"address1",required:!0,placeholder:"House number and street name"}),r.jsx("input",{type:"text",className:"form-control",name:"address2",required:!0,placeholder:"Apartment, suite, unit, etc. (optional)"}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-xs-6",children:[r.jsx("label",{children:"Town / City *"}),r.jsx("input",{type:"text",className:"form-control",name:"city",required:!0})]}),(0,r.jsxs)("div",{className:"col-xs-6",children:[r.jsx("label",{children:"State *"}),r.jsx("input",{type:"text",className:"form-control",name:"state",required:!0})]})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-xs-6",children:[r.jsx("label",{children:"ZIP *"}),r.jsx("input",{type:"text",className:"form-control",name:"zip",required:!0})]}),(0,r.jsxs)("div",{className:"col-xs-6",children:[r.jsx("label",{children:"Phone *"}),r.jsx("input",{type:"text",className:"form-control",name:"phone",required:!0})]})]}),r.jsx("label",{children:"Email Address *"}),r.jsx("input",{type:"text",className:"form-control",name:"email-address",required:!0}),r.jsx(p(),{duration:300,collapsed:!0,children:({onToggle:e,setCollapsibleElement:s})=>(0,r.jsxs)("div",{className:"form-checkbox mb-0 pt-0",children:[r.jsx("input",{type:"checkbox",className:"custom-checkbox",id:"create-account",name:"create-account",onChange:e}),r.jsx("label",{className:"form-control-label ls-s",htmlFor:"create-account",children:"Create an account?"}),(0,r.jsxs)("div",{ref:s,style:{overflow:"hidden"},children:[(0,r.jsxs)("label",{htmlFor:"account_username",className:"pt-4",children:["Account username\xa0",r.jsx("abbr",{className:"required",title:"required",children:"*"})]}),r.jsx("input",{type:"text",className:"form-control",name:"account_username",id:"account_username",placeholder:"Username",rows:"5"}),(0,r.jsxs)("label",{htmlFor:"account_password",children:["Create account password\xa0",r.jsx("abbr",{className:"required",title:"required",children:"*"})]}),r.jsx("input",{type:"password",className:"form-control mb-3",name:"account_password",id:"account_password",placeholder:"Password",rows:"5"})]})]})}),r.jsx(p(),{duration:300,collapsed:!0,children:({onToggle:e,setCollapsibleElement:s})=>(0,r.jsxs)("div",{className:"form-checkbox mb-6",children:[r.jsx("input",{type:"checkbox",className:"custom-checkbox",id:"different-address",name:"different-address",onChange:e}),r.jsx("label",{className:"form-control-label ls-s",htmlFor:"different-address",children:"Ship to a different address?"}),(0,r.jsxs)("div",{ref:s,style:{overflow:"hidden"},children:[(0,r.jsxs)("div",{className:"row pt-4",children:[(0,r.jsxs)("div",{className:"col-xs-6",children:[r.jsx("label",{children:"First Name *"}),r.jsx("input",{type:"text",className:"form-control",name:"first-name",required:!0})]}),(0,r.jsxs)("div",{className:"col-xs-6",children:[r.jsx("label",{children:"Last Name *"}),r.jsx("input",{type:"text",className:"form-control",name:"last-name",required:!0})]})]}),r.jsx("label",{children:"Company Name (Optional)"}),r.jsx("input",{type:"text",className:"form-control",name:"company-name",required:!0}),r.jsx("label",{children:"Country / Region *"}),r.jsx("div",{className:"select-box",children:(0,r.jsxs)("select",{name:"country",className:"form-control",defaultValue:"us",children:[r.jsx("option",{value:"us",children:"United States (US)"}),r.jsx("option",{value:"uk",children:" United Kingdom"}),r.jsx("option",{value:"fr",children:"France"}),r.jsx("option",{value:"aus",children:"Austria"})]})}),r.jsx("label",{children:"Street Address *"}),r.jsx("input",{type:"text",className:"form-control",name:"address1",required:!0,placeholder:"House number and street name"}),r.jsx("input",{type:"text",className:"form-control",name:"address2",required:!0,placeholder:"Apartment, suite, unit, etc. (optional)"}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-xs-6",children:[r.jsx("label",{children:"Town / City *"}),r.jsx("input",{type:"text",className:"form-control",name:"city",required:!0})]}),(0,r.jsxs)("div",{className:"col-xs-6",children:[r.jsx("label",{children:"State *"}),r.jsx("input",{type:"text",className:"form-control",name:"state",required:!0})]})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-xs-6",children:[r.jsx("label",{children:"ZIP *"}),r.jsx("input",{type:"text",className:"form-control",name:"zip",required:!0})]}),(0,r.jsxs)("div",{className:"col-xs-6",children:[r.jsx("label",{children:"Phone *"}),r.jsx("input",{type:"text",className:"form-control",name:"phone",required:!0})]})]})]})]})}),r.jsx("h2",{className:"title title-simple text-uppercase text-left mt-6",children:"Additional Information"}),r.jsx("label",{children:"Order Notes (Optional)"}),r.jsx("textarea",{className:"form-control pb-2 pt-2 mb-0",cols:"30",rows:"5",placeholder:"Notes about your order, e.g. special notes for delivery"})]}),r.jsx("aside",{className:"col-lg-5 sticky-sidebar-wrapper",children:r.jsx("div",{className:"sticky-sidebar mt-1","data-sticky-options":"{'bottom': 50}",children:(0,r.jsxs)("div",{className:"summary pt-5",children:[r.jsx("h3",{className:"title title-simple text-left text-uppercase",children:"Your Order"}),(0,r.jsxs)("table",{className:"order-table",children:[r.jsx("thead",{children:(0,r.jsxs)("tr",{children:[r.jsx("th",{children:"Product"}),r.jsx("th",{})]})}),(0,r.jsxs)("tbody",{children:[s.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{className:"product-name",children:[e.name," ",(0,r.jsxs)("span",{className:"product-quantity",children:["\xd7\xa0",e.qty]})]}),(0,r.jsxs)("td",{className:"product-total text-body",children:["$",(0,h.YM)(e.price*e.qty)]})]},"checkout-"+e.name)),(0,r.jsxs)("tr",{className:"summary-subtotal",children:[r.jsx("td",{children:r.jsx("h4",{className:"summary-subtitle",children:"Subtotal"})}),(0,r.jsxs)("td",{className:"summary-subtotal-price pb-0 pt-0",children:["$",(0,h.YM)((0,h.m_)(s))]})]}),r.jsx("tr",{className:"sumnary-shipping shipping-row-last",children:(0,r.jsxs)("td",{colSpan:"2",children:[r.jsx("h4",{className:"summary-subtitle",children:"Calculate Shipping"}),(0,r.jsxs)("ul",{children:[r.jsx("li",{children:(0,r.jsxs)("div",{className:"custom-radio",children:[r.jsx("input",{type:"radio",id:"flat_rate",name:"shipping",className:"custom-control-input",defaultChecked:!0}),r.jsx("label",{className:"custom-control-label",htmlFor:"flat_rate",children:"Flat rate"})]})}),r.jsx("li",{children:(0,r.jsxs)("div",{className:"custom-radio",children:[r.jsx("input",{type:"radio",id:"free-shipping",name:"shipping",className:"custom-control-input"}),r.jsx("label",{className:"custom-control-label",htmlFor:"free-shipping",children:"Free shipping"})]})}),r.jsx("li",{children:(0,r.jsxs)("div",{className:"custom-radio",children:[r.jsx("input",{type:"radio",id:"local_pickup",name:"shipping",className:"custom-control-input"}),r.jsx("label",{className:"custom-control-label",htmlFor:"local_pickup",children:"Local pickup"})]})})]})]})}),(0,r.jsxs)("tr",{className:"summary-total",children:[r.jsx("td",{className:"pb-0",children:r.jsx("h4",{className:"summary-subtitle",children:"Total"})}),r.jsx("td",{className:" pt-0 pb-0",children:(0,r.jsxs)("p",{className:"summary-total-price ls-s text-primary",children:["$",(0,h.YM)((0,h.m_)(s))]})})]})]})]}),(0,r.jsxs)("div",{className:"payment accordion radio-type",children:[r.jsx("h4",{className:"summary-subtitle ls-m pb-3",children:"Payment Methods"}),(0,r.jsxs)("div",{className:"checkbox-group",children:[r.jsx("div",{className:"card-header",children:r.jsx(d.Z,{href:"#",className:`text-body text-normal ls-m ${a?"collapse":""}`,onClick:()=>{a||l(!a)},children:"Check payments"})}),r.jsx(n(),{in:a,children:r.jsx("div",{className:"card-wrapper",children:r.jsx("div",{className:"card-body ls-m overflow-hidden",children:"Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode."})})}),r.jsx("div",{className:"card-header",children:r.jsx(d.Z,{href:"#",className:`text-body text-normal ls-m ${a?"":"collapse"}`,onClick:()=>{a&&l(!a)},children:"Cash on delivery"})}),r.jsx(n(),{in:!a,children:r.jsx("div",{className:"card-wrapper",children:r.jsx("div",{className:"card-body ls-m overflow-hidden",children:"Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode."})})})]})]}),(0,r.jsxs)("div",{className:"form-checkbox mt-4 mb-5",children:[r.jsx("input",{type:"checkbox",className:"custom-checkbox",id:"terms-condition",name:"terms-condition"}),(0,r.jsxs)("label",{className:"form-control-label",htmlFor:"terms-condition",children:["I have read and agree to the website ",r.jsx(d.Z,{href:"#",children:"terms and conditions "}),"*"]})]}),r.jsx("button",{type:"submit",className:"btn btn-dark btn-rounded btn-order",children:"Place Order"})]})})})]})})]}):(0,r.jsxs)("div",{className:"empty-cart text-center",children:[r.jsx("p",{children:"Your cart is currently empty."}),r.jsx("i",{className:"cart-empty d-icon-bag"}),r.jsx("p",{className:"return-to-shop mb-0",children:r.jsx(d.Z,{className:"button wc-backward btn btn-dark btn-md",href:"/shop",children:"Return to shop"})})]})})]})]})})},5487:e=>{e.exports=require("@apollo/react-hooks")},4414:e=>{e.exports=require("apollo-boost")},825:e=>{e.exports=require("graphql-tag")},3563:e=>{e.exports=require("imagesloaded")},9290:e=>{e.exports=require("next-apollo")},5648:e=>{e.exports=require("next-redux-wrapper")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},4601:e=>{e.exports=require("react-collapse")},4449:e=>{e.exports=require("react-countdown")},6405:e=>{e.exports=require("react-dom")},2791:e=>{e.exports=require("react-helmet")},2224:e=>{e.exports=require("react-image-magnifiers")},9252:e=>{e.exports=require("react-lazy-load-image-component")},9931:e=>{e.exports=require("react-modal")},9042:e=>{e.exports=require("react-owl-carousel2")},6022:e=>{e.exports=require("react-redux")},1635:e=>{e.exports=require("react-slide-toggle")},5973:e=>{e.exports=require("react-tabs")},1187:e=>{e.exports=require("react-toastify")},997:e=>{e.exports=require("react/jsx-runtime")},6695:e=>{e.exports=require("redux")},4161:e=>{e.exports=require("redux-persist")},1127:e=>{e.exports=require("redux-persist/integration/react")},8936:e=>{e.exports=require("redux-persist/lib/storage")},6477:e=>{e.exports=require("redux-saga/effects")},5998:e=>{e.exports=import("redux-saga")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var s=require("../../webpack-runtime.js");s.C(e);var __webpack_exec__=e=>s(s.s=e),a=s.X(0,[8376,4254,6114,9505,7500,4484],()=>__webpack_exec__(4718));module.exports=a})();