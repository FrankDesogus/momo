(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[409],{7939:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/single/[slug]",function(){return a(107)}])},4079:function(e,s,a){"use strict";var t=a(5893);a(7294);var i=a(2679),l=a(7974),r=a(4496),c=a(8225),n=a(5396);s.Z=function(e){let{post:s,adClass:a="",isLazy:o=!1,isOriginal:d=!1,btnText:m="Read more",btnAdClass:h="btn-dark"}=e,p=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];return(0,t.jsxs)("div",{className:"post ".concat("gallery"===s.type?"":"overlay-zoom"," overlay-dark ").concat("video"===s.type?"post-video":""," ").concat(a),children:["image"===s.type||"video"===s.type?(0,t.jsxs)("figure",{className:"post-media",children:[o?(0,t.jsx)(l.Z,{href:"/blog/single/".concat(s.slug),children:d?(0,t.jsx)(i.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+s.large_picture[0].url,alt:"post image",width:380,height:230,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}}):(0,t.jsx)(i.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+s.picture[0].url,alt:"post image",width:s.picture[0].width,height:s.picture[0].height,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}})}):(0,t.jsx)(l.Z,{href:"/blog/single/".concat(s.slug),children:d?(0,t.jsx)("img",{src:"https://d-themes.com/react_asset_api/riode"+s.large_picture[0].url,alt:"post image",width:380,height:230}):(0,t.jsx)("img",{src:"https://d-themes.com/react_asset_api/riode"+s.picture[0].url,alt:"post image",width:s.picture[0].width,height:s.picture[0].height})}),"video"===s.type?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"video-play",onClick:c.X9}),(0,t.jsx)("video",{width:"380",children:(0,t.jsx)("source",{src:"https://d-themes.com/react_asset_api/riode"+s.video.url,type:"video/mp4"})})]}):"",(0,t.jsxs)("div",{className:"post-calendar",children:[(0,t.jsx)("span",{className:"post-day",children:new Date(s.date).getDay()+1}),(0,t.jsx)("span",{className:"post-month",children:p[new Date(s.date).getMonth()]})]})]}):(0,t.jsxs)("figure",{className:"post-media",children:[o?(0,t.jsx)(r.Z,{adClass:"owl-theme owl-dot-inner owl-dot-white gutter-no",options:n.cQ,children:s.picture.map((e,s)=>(0,t.jsx)(i.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+e.url,alt:"post gallery",width:e.width,height:e.height,effect:"opacity; transform",style:{backgroundColor:"#DEE6E8"}},e.title+"-"+s))}):(0,t.jsx)(r.Z,{adClass:"owl-theme owl-dot-inner owl-dot-white gutter-no",options:n.cQ,children:s.picture.map((e,s)=>(0,t.jsx)("img",{src:"https://d-themes.com/react_asset_api/riode"+e.url,alt:"post gallery",width:e.width,height:e.height},e.title+"-"+s))}),(0,t.jsxs)("div",{className:"post-calendar",children:[(0,t.jsx)("span",{className:"post-day",children:new Date(s.date).getDay()+1}),(0,t.jsx)("span",{className:"post-month",children:p[new Date(s.date).getMonth()]})]})]}),(0,t.jsxs)("div",{className:"post-details",children:[(0,t.jsx)("h4",{className:"post-title",children:(0,t.jsx)(l.Z,{href:"/blog/single/".concat(s.slug),children:s.title})}),(0,t.jsx)("p",{className:"post-content",children:s.content}),(0,t.jsxs)(l.Z,{href:"/blog/single/".concat(s.slug),className:"btn btn-link btn-underline ".concat(h),children:[m,(0,t.jsx)("i",{className:"d-icon-arrow-right"})]})]})]})}},5938:function(e,s,a){"use strict";a.d(s,{Z:function(){return h}});var t=a(5893),i=a(8385),l=a(5420),r=a(2806),c=a(2694),n=a(8209),o=a(7974),d=a(9619);a(7294);var m=a(2679),post_two=function(e){let{post:s,adClass:a="",isLazy:i=!1}=e;return(0,t.jsxs)("div",{className:"post post-list-sm ".concat(a),children:[(0,t.jsx)("figure",{className:"post-media",children:i?(0,t.jsx)(o.Z,{href:"/blog/single/".concat(s.slug),children:(0,t.jsx)(m.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+s.small_picture[0].url,alt:"post image",width:s.small_picture[0].width,height:s.small_picture[0].height,effect:"opacity",style:{backgroundColor:"#DEE6E8"}})}):(0,t.jsx)(o.Z,{href:"/blog/single/".concat(s.slug),children:(0,t.jsx)("img",{src:"https://d-themes.com/react_asset_api/riode"+s.small_picture[0].url,alt:"post image",width:s.small_picture[0].width,height:s.small_picture[0].height})})}),(0,t.jsxs)("div",{className:"post-details",children:[(0,t.jsx)("div",{className:"post-meta",children:(0,t.jsx)(o.Z,{href:"#",className:"post-date",children:new Date(s.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"})})}),(0,t.jsx)("h4",{className:"post-title",children:(0,t.jsx)(o.Z,{href:"/blog/single/".concat(s.slug),children:s.title})})]})]})},h=(0,c.Z)({ssr:!1})(function(){let{data:e,loading:s,error:a}=(0,i.a)(n.oG);e&&e.postSidebarData.categories;let c=e&&e.postSidebarData.recent,m=(0,l.useRouter)(),h=m.query;return(0,t.jsxs)("div",{className:"col-lg-3 right-sidebar sidebar-fixed sticky-sidebar-wrapper",children:[(0,t.jsx)("div",{className:"sidebar-overlay",onClick:e=>{document.querySelector("body").classList.remove("right-sidebar-active")},children:(0,t.jsx)(o.Z,{className:"sidebar-close",href:"#",children:(0,t.jsx)("i",{className:"close-icon"})})}),(0,t.jsx)("div",{className:"sidebar-toggle",onClick:e=>{document.querySelector("body").classList.toggle("right-sidebar-active")},children:(0,t.jsx)("i",{className:"fas fa-chevron-left"})}),(0,t.jsx)(r.Z,{offsetTop:88,className:"blog-sidebar-wrapper",children:(0,t.jsx)("div",{className:"sidebar-content",children:!s&&c?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"widget widget-search border-no mb-2",children:(0,t.jsxs)("form",{action:"#",className:"input-wrapper input-wrapper-inline btn-absolute",children:[(0,t.jsx)("input",{type:"text",className:"form-control",name:"search",autoComplete:"off",placeholder:"Search in Blog",required:!0}),(0,t.jsx)("button",{className:"btn btn-search btn-link",type:"submit",children:(0,t.jsx)("i",{className:"d-icon-search"})})]})}),(0,t.jsx)("div",{className:"widget widget-collapsible border-no",children:(0,t.jsx)(d.Z,{title:"<h3 class='widget-title border-no'>Blog Categories<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0,children:(0,t.jsxs)("ul",{className:"widget-body filter-items search-ul",children:[(0,t.jsx)("li",{className:"".concat("fashion"===h.category?"active":""),children:(0,t.jsx)(o.Z,{href:{pathname:"/blog/classic",query:{category:"fashion"}},scroll:!1,children:"Fashion"})}),(0,t.jsx)("li",{className:"".concat("lifestyle"===h.category?"active":""),children:(0,t.jsx)(o.Z,{href:{pathname:"/blog/classic",query:{category:"lifestyle"}},scroll:!1,children:"Lifestyle"})}),(0,t.jsx)("li",{className:"".concat("shopping"===h.category?"active":""),children:(0,t.jsx)(o.Z,{href:{pathname:"/blog/classic",query:{category:"shopping"}},scroll:!1,children:"Shopping"})}),(0,t.jsx)("li",{className:"".concat("sport"===h.category?"active":""),children:(0,t.jsx)(o.Z,{href:{pathname:"/blog/classic",query:{category:"sport"}},scroll:!1,children:"Sport"})}),(0,t.jsx)("li",{className:"".concat("travel"===h.category?"active":""),children:(0,t.jsx)(o.Z,{href:{pathname:"/blog/classic",query:{category:"travel"}},scroll:!1,children:"Travel"})})]})})}),(0,t.jsx)("div",{className:"widget widget-collapsible",children:(0,t.jsx)(d.Z,{title:"<h3 class='widget-title'>Popular Posts<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0,children:(0,t.jsx)("ul",{className:"widget-body",children:c.slice(0,3).map((e,s)=>(0,t.jsx)("div",{className:"post-col",children:(0,t.jsx)(post_two,{post:e})},"Small Post "+s))})})}),(0,t.jsx)("div",{className:"widget widget-collapsible",children:(0,t.jsx)(d.Z,{title:"<h3 class='widget-title'>About us<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0,children:(0,t.jsx)("ul",{className:"widget-body",children:(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt."})})})}),(0,t.jsx)("div",{className:"widget widget-collapsible widget-posts",children:(0,t.jsx)(d.Z,{title:"<h3 class='widget-title'>Tag Cloud<span class='toggle-btn p-0 parse-content'></span></h3>",type:"parse",expanded:!0,children:(0,t.jsxs)("ul",{className:"widget-body",children:[(0,t.jsx)(o.Z,{href:"#",className:"tag",children:"Bag"}),(0,t.jsx)(o.Z,{href:"#",className:"tag",children:"Classic"}),(0,t.jsx)(o.Z,{href:"#",className:"tag",children:"Converse"}),(0,t.jsx)(o.Z,{href:"#",className:"tag",children:"Leather"}),(0,t.jsx)(o.Z,{href:"#",className:"tag",children:"Fit"}),(0,t.jsx)(o.Z,{href:"#",className:"tag",children:"Green"}),(0,t.jsx)(o.Z,{href:"#",className:"tag",children:"Man"}),(0,t.jsx)(o.Z,{href:"#",className:"tag",children:"Jeans"}),(0,t.jsx)(o.Z,{href:"#",className:"tag",children:"Women"})]})})})]}):(0,t.jsx)("div",{className:"widget-2"})})})]})})},107:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return N}});var t=a(5893),i=a(5420),l=a(8385),r=a(2679),c=a(4593),n=a(2694),o=a(8209),d=a(7974),m=a(4496),h=a(9835),p=a(5938),u=a(7294),x=a(4079),g=a(5396);function RelatedPosts(e){let{posts:s,loading:a}=e;return(0,t.jsxs)("div",{className:"related-posts",children:[(0,t.jsx)("h3",{className:"title title-simple text-left text-normal font-weight-bold ls-normal",children:"Related Posts"}),(0,t.jsx)(m.Z,{adClass:"owl-theme",options:g.Ju,children:a?Array(parseInt(4)).fill(1).map((e,s)=>(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"skel-post"})},"Skeleton:"+s)):s?s.length?s.slice(0,s.length).map((e,s)=>(0,t.jsx)(u.Fragment,{children:(0,t.jsx)(x.Z,{post:e,btnAdClass:"btn-primary"})},"post-one"+s)):(0,t.jsx)("div",{className:"info-box with-icon",children:(0,t.jsx)("p",{className:"mt-4",children:"No blogs were found matching your selection."})}):""})]})}var j=a(8225),N=(0,n.Z)({ssr:!1})(function(){let e=(0,i.useRouter)().query.slug;if(!e)return"";let{data:s,loading:a,error:n}=(0,l.a)(o.QI,{variables:{slug:e}}),u=s&&s.post.data,x=s&&s.post.related;return n?(0,t.jsx)(h.default,{}):(0,t.jsxs)("main",{className:"main skeleton-body",children:[(0,t.jsx)(c.Z,{children:(0,t.jsx)("title",{children:"Riode React eCommerce Template | Blog Single"})}),(0,t.jsx)("h1",{className:"d-none",children:"Riode React eCommerce Template - Blog Single"}),(0,t.jsx)("nav",{className:"breadcrumb-nav",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("ul",{className:"breadcrumb",children:[(0,t.jsx)("li",{children:(0,t.jsx)(d.Z,{href:"/",children:(0,t.jsx)("i",{className:"d-icon-home"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(d.Z,{href:"/blog/classic",className:"active",children:"Blog"})}),(0,t.jsx)("li",{children:"Single Post"})]})})}),(0,t.jsx)("div",{className:"page-content with-sidebar",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row gutter-lg",children:[(0,t.jsxs)("div",{className:"col-lg-9",children:[a?(0,t.jsx)("div",{className:"skel-post"}):(0,t.jsxs)("div",{className:"post post-single ".concat("video"===u.type?"post-video":""),children:["image"===u.type||"video"===u.type?(0,t.jsxs)("figure",{className:"post-media",children:[(0,t.jsx)(d.Z,{href:"#",children:(0,t.jsx)(r.LazyLoadImage,{src:"https://d-themes.com/react_asset_api/riode"+u.large_picture[0].url,alt:"post image",width:"900",height:500,style:{backgroundColor:"#DEE6E8"}})}),"video"===u.type?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"video-play",onClick:j.X9}),(0,t.jsx)("video",{width:"380",children:(0,t.jsx)("source",{src:"https://d-themes.com/react_asset_api/riode"+u.video.url,type:"video/mp4"})})]}):""]}):(0,t.jsx)("figure",{className:"post-media",children:(0,t.jsx)(m.Z,{adClass:"owl-theme owl-dot-inner owl-dot-white gutter-no",options:g.cQ,children:u.picture.map((e,s)=>(0,t.jsx)("img",{src:"https://d-themes.com/react_asset_api/riode"+e.url,alt:"post gallery",width:e.width,height:e.height,style:{backgroundColor:"#DEE6E8"}},e.title+"-"+s))})}),(0,t.jsxs)("div",{className:"post-details",children:[(0,t.jsxs)("div",{className:"post-meta",children:["by ",(0,t.jsx)(d.Z,{href:"#",className:"post-author",children:u.author})," on ",(0,t.jsx)(d.Z,{href:"#",className:"post-date",children:new Date(u.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"})})," | ",(0,t.jsxs)(d.Z,{href:"#",className:"post-comment",children:[(0,t.jsx)("span",{children:u.comments})," Comments"]})]}),(0,t.jsx)("h4",{className:"post-title",children:(0,t.jsx)(d.Z,{href:"#",children:u.title})}),(0,t.jsxs)("div",{className:"post-body mb-7",children:[(0,t.jsx)("p",{className:"mb-5",children:u.content}),(0,t.jsxs)("p",{className:"mb-6",children:["Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ",(0,t.jsx)(d.Z,{href:"#",children:"ultrices sagittis"}),", mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."]}),(0,t.jsxs)("div",{className:"with-img row align-items-center",children:[(0,t.jsx)("div",{className:"col-md-6 mb-6",children:(0,t.jsxs)("figure",{children:[(0,t.jsx)(r.LazyLoadImage,{src:"./images/blog/1.jpg",alt:"post single image",width:336,height:415,effect:"opacity",className:"float-left",style:{backgroundColor:"#DEE6E8"}}),(0,t.jsxs)("figcaption",{className:"text-left mt-1",children:["Designe by ",(0,t.jsx)(d.Z,{href:"#",children:"Casper Dalin"})]})]})}),(0,t.jsxs)("div",{className:"col-md-6 mb-6",children:[(0,t.jsx)("h4",{className:"font-weight-semi-bold ls-s",children:"Quisque volutpat mattiseros."}),(0,t.jsx)("p",{className:"mb-8 col-lg-11",children:"Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. "}),(0,t.jsx)("h4",{className:"font-weight-semi-bold ls-s",children:"More Details"}),(0,t.jsxs)("ul",{className:"list list-type-check mb-6",children:[(0,t.jsx)("li",{children:"Praesent id enim sit amet."}),(0,t.jsx)("li",{children:"Tdio vulputate eleifend in in tortor. ellus massa."}),(0,t.jsx)("li",{children:"Massa ristique sit amet condim vel"}),(0,t.jsx)("li",{children:"Dilisis Facilisis quis sapien. Praesent id enim sit amet"}),(0,t.jsx)("li",{children:"Praesent id enim sit amet."}),(0,t.jsx)("li",{children:"Tdio vulputate eleifend in in tortor. ellus massa."})]})]})]}),(0,t.jsx)("blockquote",{className:"mt-1 mb-6 p-relative",children:(0,t.jsx)("p",{className:"font-weight-semi-bold ls-m",children:"“ Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. ”"})}),(0,t.jsx)("p",{children:"Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. "})]}),(0,t.jsxs)("div",{className:"post-author-detail",children:[(0,t.jsx)("figure",{className:"author-media",children:(0,t.jsx)(d.Z,{href:"#",children:(0,t.jsx)("img",{src:"./images/blog/comments/1.jpg",alt:"avatar",width:"50",height:"50"})})}),(0,t.jsxs)("div",{className:"author-body",children:[(0,t.jsxs)("div",{className:"author-header d-flex justify-content-between align-items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"author-title",children:"AUTHOR"}),(0,t.jsx)("h4",{className:"author-name font-weight-bold mb-0",children:"John Doe"})]}),(0,t.jsx)("div",{children:(0,t.jsxs)(d.Z,{href:"#",className:"author-link font-weight-semi-bold",children:["View all posts by John Doe ",(0,t.jsx)("i",{className:"d-icon-arrow-right"})]})})]}),(0,t.jsx)("div",{className:"author-content",children:(0,t.jsx)("p",{className:"mb-0",children:"Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros euerat. Aliquam erat volutpat."})})]})]}),(0,t.jsxs)("div",{className:"post-footer mt-7 mb-3",children:[(0,t.jsxs)("div",{className:"post-tags",children:[(0,t.jsx)(d.Z,{href:"#",className:"tag",children:"classic"}),(0,t.jsx)(d.Z,{href:"#",className:"tag",children:"converse"})]}),(0,t.jsxs)("div",{className:"social-icons",children:[(0,t.jsx)(d.Z,{href:"#",className:"social-icon social-facebook",title:"Facebook",children:(0,t.jsx)("i",{className:"fab fa-facebook-f"})}),(0,t.jsx)(d.Z,{href:"#",className:"social-icon social-twitter",title:"Twitter",children:(0,t.jsx)("i",{className:"fab fa-twitter"})}),(0,t.jsx)(d.Z,{href:"#",className:"social-icon social-pinterest",title:"Pinterest",children:(0,t.jsx)("i",{className:"fab fa-pinterest-p"})})]})]})]})]}),a?"":(0,t.jsxs)("nav",{className:"page-nav",children:[(0,t.jsxs)(d.Z,{className:"pager-link pager-link-prev",href:"/blog/single/".concat(x[0].slug),children:["Previous Post",(0,t.jsx)("span",{className:"pager-link-title",children:x[0].title})]}),(0,t.jsxs)(d.Z,{className:"pager-link pager-link-next",href:"/blog/single/".concat(x[x.length-1].slug),children:["Go To Post",(0,t.jsx)("span",{className:"pager-link-title",children:x[x.length-1].title})]})]}),(0,t.jsx)(RelatedPosts,{posts:x,loading:a}),a?"":(0,t.jsxs)("div",{className:"comments",children:[(0,t.jsxs)("h3",{className:"title title-simple text-left text-normal font-weight-bold",children:[u.comments," Comments"]}),u.comments>0?"":(0,t.jsx)("h3",{className:"title title-simple text-left text-normal font-weight-normal",style:{fontSize:"1.8rem"},children:"Be The First To Review “"+u.title+"”"}),(0,t.jsxs)("ul",{children:[u.comments>0?(0,t.jsxs)("li",{children:[(0,t.jsxs)("div",{className:"comment",children:[(0,t.jsx)("figure",{className:"comment-media",children:(0,t.jsx)(d.Z,{href:"#",children:(0,t.jsx)("img",{src:"images/blog/comments/1.jpg",alt:"avatar",width:"100",height:"100"})})}),(0,t.jsxs)("div",{className:"comment-body",children:[(0,t.jsxs)("div",{className:"comment-user",children:[(0,t.jsx)("span",{className:"comment-date",children:"November 9, 2018 at 2:19 pm"}),(0,t.jsx)("h4",{children:(0,t.jsx)(d.Z,{href:"#",children:"Jimmy Pearson"})})]}),(0,t.jsx)("div",{className:"comment-content mb-2",children:(0,t.jsx)("p",{children:"Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. "})}),(0,t.jsxs)(d.Z,{href:"#",className:"btn btn-link btn-reveal-right",children:["REPLY",(0,t.jsx)("i",{className:"d-icon-arrow-right"})]})]})]}),u.comments>1?(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:(0,t.jsxs)("div",{className:"comment",children:[(0,t.jsx)("figure",{className:"comment-media",children:(0,t.jsx)(d.Z,{href:"#",children:(0,t.jsx)("img",{src:"images/blog/comments/2.jpg",alt:"avatar",width:"100",height:"100"})})}),(0,t.jsxs)("div",{className:"comment-body",children:[(0,t.jsxs)("div",{className:"comment-user",children:[(0,t.jsx)("span",{className:"comment-date",children:"November 9, 2018 at 2:19 pm"}),(0,t.jsx)("h4",{children:(0,t.jsx)(d.Z,{href:"#",children:"Lena Knight"})})]}),(0,t.jsx)("div",{className:"comment-content mb-2",children:(0,t.jsx)("p",{children:"Morbi interdum mollis sapien. Sed ac risus."})}),(0,t.jsxs)(d.Z,{href:"#",className:"btn btn-link btn-reveal-right",children:["REPLY",(0,t.jsx)("i",{className:"d-icon-arrow-right"})]})]})]})})}):""]}):"",u.comments>2?(0,t.jsx)("li",{children:(0,t.jsxs)("div",{className:"comment",children:[(0,t.jsx)("figure",{className:"comment-media",children:(0,t.jsx)(d.Z,{href:"#",children:(0,t.jsx)("img",{src:"images/blog/comments/1.jpg",alt:"avatar",width:"100",height:"100"})})}),(0,t.jsxs)("div",{className:"comment-body",children:[(0,t.jsxs)("div",{className:"comment-user",children:[(0,t.jsx)("span",{className:"comment-date",children:"November 9, 2018 at 2:19 pm"}),(0,t.jsx)("h4",{children:(0,t.jsx)(d.Z,{href:"#",children:"Johnathan Castillo"})})]}),(0,t.jsx)("div",{className:"comment-content mb-2",children:(0,t.jsx)("p",{children:"Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."})}),(0,t.jsxs)(d.Z,{href:"#",className:"btn btn-link btn-reveal-right",children:["REPLY",(0,t.jsx)("i",{className:"d-icon-arrow-right"})]})]})]})}):""]})]}),(0,t.jsxs)("div",{className:"reply",children:[(0,t.jsxs)("div",{className:"title-wrapper text-left",children:[(0,t.jsx)("h3",{className:"title title-simple text-left text-normal",children:"Leave A Reply"}),(0,t.jsx)("p",{children:"Your email address will not be published. Required fields are marked *"})]}),(0,t.jsxs)("form",{action:"#",children:[(0,t.jsx)("textarea",{id:"reply-message",cols:"30",rows:"6",className:"form-control mb-4",placeholder:"Comment *",required:!0}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-6 mb-5",children:(0,t.jsx)("input",{type:"text",className:"form-control",id:"reply-name",name:"reply-name",placeholder:"Name *",required:!0})}),(0,t.jsx)("div",{className:"col-md-6 mb-5",children:(0,t.jsx)("input",{type:"email",className:"form-control",id:"reply-email",name:"reply-email",placeholder:"Email *",required:!0})})]}),(0,t.jsxs)("button",{type:"submit",className:"btn btn-primary btn-rounded",children:["POST COMMENT",(0,t.jsx)("i",{className:"d-icon-arrow-right"})]})]})]})]}),(0,t.jsx)(p.Z,{})]})})})]})})},9835:function(e,s,a){"use strict";a.r(s);var t=a(5893),i=a(7294),l=a(4593),r=a(7974),c=a(8225);s.default=i.memo(function(){return(0,i.useEffect)(()=>(window.addEventListener("scroll",c.K6,!0),()=>{window.removeEventListener("scroll",c.K6,!0)}),[]),(0,t.jsxs)("main",{className:"main",children:[(0,t.jsx)(l.Z,{children:(0,t.jsx)("title",{children:"Riode React eCommerce Template | 404"})}),(0,t.jsx)("h1",{className:"d-none",children:"Riode React eCommerce Template - 404"}),(0,t.jsx)("div",{className:"page-content",children:(0,t.jsxs)("section",{className:"error-section d-flex flex-column justify-content-center align-items-center text-center pl-3 pr-3",children:[(0,t.jsx)("h1",{className:"mb-2 ls-m",children:"Error 404"}),(0,t.jsx)("img",{src:"./images/subpages/404.png",alt:"error 404",width:"609",height:"131"}),(0,t.jsx)("h4",{className:"mt-7 mb-0 ls-m text-uppercase",children:"Ooopps! That page can’t be found."}),(0,t.jsx)("p",{className:"text-grey font-primary ls-m",children:"It looks like nothing was found at this location."}),(0,t.jsx)(r.Z,{href:"/",className:"btn btn-primary btn-rounded mb-4",children:"Go home"})]})})]})})}},function(e){e.O(0,[2806,9774,2888,179],function(){return e(e.s=7939)}),_N_E=e.O()}]);