"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7857],{8273:function(e,n,r){r.r(n),r.d(n,{CountUp:function(){return a}});var t=function(){return(t=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var s in n=arguments[r])Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e}).apply(this,arguments)},a=function(){function i(e,n,r){var a=this;this.endVal=n,this.options=r,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){a.startTime||(a.startTime=e);var n=e-a.startTime;a.remaining=a.duration-n,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(n,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(n,a.startVal,a.endVal-a.startVal,a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(n/a.duration);var r=a.countDown?a.frameVal<a.endVal:a.frameVal>a.endVal;a.frameVal=r?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),n<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.options.onCompleteCallback&&a.options.onCompleteCallback()},this.formatNumber=function(e){var n,r,s,o=(Math.abs(e).toFixed(a.options.decimalPlaces)+"").split(".");if(n=o[0],r=o.length>1?a.options.decimal+o[1]:"",a.options.useGrouping){s="";for(var u=3,l=0,c=0,f=n.length;c<f;++c)a.options.useIndianSeparators&&4===c&&(u=2,l=1),0!==c&&l%u==0&&(s=a.options.separator+s),l++,s=n[f-c-1]+s;n=s}return a.options.numerals&&a.options.numerals.length&&(n=n.replace(/[0-9]/g,function(e){return a.options.numerals[+e]}),r=r.replace(/[0-9]/g,function(e){return a.options.numerals[+e]})),(e<0?"-":"")+a.options.prefix+n+r+a.options.suffix},this.easeOutExpo=function(e,n,r,a){return r*(1-Math.pow(2,-10*e/a))*1024/1023+n},this.options=t(t({},this.defaults),r),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return a.handleScroll(a)}),window.onscroll=function(){window.onScrollFns.forEach(function(e){return e()})},this.handleScroll(this)))}return i.prototype.handleScroll=function(e){if(e&&window&&!e.once){var n=window.innerHeight+window.scrollY,r=e.el.getBoundingClientRect(),a=r.top+window.pageYOffset,s=r.top+r.height+window.pageYOffset;s<n&&s>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>s||a>n)&&!e.paused&&e.reset()}},i.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>e,Math.abs(e-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var n=this.countDown?1:-1;this.endVal=e+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},i.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},i.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},i.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},i.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},i.prototype.printValue=function(e){var n;if(this.el){var r=this.formattingFn(e);(null===(n=this.options.plugin)||void 0===n?void 0:n.render)?this.options.plugin.render(this.el,r):"INPUT"===this.el.tagName?this.el.value=r:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=r:this.el.innerHTML=r}},i.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},i.prototype.validateValue=function(e){var n=Number(e);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},i.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},i}()},7857:function(e,n,r){var a=r(7294),s=r(8273);function ownKeys(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function _objectSpread2(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(r),!0).forEach(function(n){var a,s;a=n,s=r[n],(a=function(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,n||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}(a))in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,n){if(null==e)return{};var r,a,s=function(e,n){if(null==e)return{};var r,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,a=Array(n);r<n;r++)a[r]=e[r];return a}var o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?a.useLayoutEffect:a.useEffect;function useEventCallback(e){var n=a.useRef(e);return o(function(){n.current=e}),a.useCallback(function(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return n.current.apply(void 0,r)},[])}var createCountUpInstance=function(e,n){var r=n.decimal,a=n.decimals,o=n.duration,u=n.easingFn,l=n.end,c=n.formattingFn,f=n.numerals,p=n.prefix,h=n.separator,d=n.start,m=n.suffix,y=n.useEasing,g=n.useGrouping,b=n.useIndianSeparators,v=n.enableScrollSpy,V=n.scrollSpyDelay,E=n.scrollSpyOnce;return new s.CountUp(e,l,{startVal:d,duration:o,decimal:r,decimalPlaces:a,easingFn:u,formattingFn:c,numerals:f,separator:h,prefix:p,suffix:m,useEasing:y,useIndianSeparators:b,useGrouping:g,enableScrollSpy:v,scrollSpyDelay:V,scrollSpyOnce:E})},u=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],l={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},useCountUp=function(e){var n=Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==(function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,s,o,u,l=[],c=!0,f=!1;try{if(o=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;c=!1}else for(;!(c=(a=o.call(r)).done)&&(l.push(a.value),l.length!==n);c=!0);}catch(e){f=!0,s=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(f)throw s}}return l}}(e,2)||function(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,n)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]})),r=a.useMemo(function(){return _objectSpread2(_objectSpread2({},l),n)},[e]),s=r.ref,o=r.startOnMount,c=r.enableReinitialize,f=r.delay,p=r.onEnd,h=r.onStart,d=r.onPauseResume,m=r.onReset,y=r.onUpdate,g=_objectWithoutProperties(r,u),b=a.useRef(),v=a.useRef(),V=a.useRef(!1),E=useEventCallback(function(){return createCountUpInstance("string"==typeof s?s:s.current,g)}),w=useEventCallback(function(e){var n=b.current;if(n&&!e)return n;var r=E();return b.current=r,r}),S=useEventCallback(function(){var run=function(){return w(!0).start(function(){null==p||p({pauseResume:O,reset:C,start:F,update:j})})};f&&f>0?v.current=setTimeout(run,1e3*f):run(),null==h||h({pauseResume:O,reset:C,update:j})}),O=useEventCallback(function(){w().pauseResume(),null==d||d({reset:C,start:F,update:j})}),C=useEventCallback(function(){w().el&&(v.current&&clearTimeout(v.current),w().reset(),null==m||m({pauseResume:O,start:F,update:j}))}),j=useEventCallback(function(e){w().update(e),null==y||y({pauseResume:O,reset:C,start:F})}),F=useEventCallback(function(){C(),S()}),A=useEventCallback(function(e){o&&(e&&C(),S())});return a.useEffect(function(){V.current?c&&A(!0):(V.current=!0,A())},[c,V,A,f,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),a.useEffect(function(){return function(){C()}},[C]),{start:F,pauseResume:O,reset:C,update:j,getCountUp:w}},c=["className","redraw","containerProps","children","style"];n.ZP=function(e){var n=e.className,r=e.redraw,s=e.containerProps,o=e.children,u=e.style,l=_objectWithoutProperties(e,c),f=a.useRef(null),p=a.useRef(!1),h=useCountUp(_objectSpread2(_objectSpread2({},l),{},{ref:f,startOnMount:"function"!=typeof o||0===e.delay,enableReinitialize:!1})),d=h.start,m=h.reset,y=h.update,g=h.pauseResume,b=h.getCountUp,v=useEventCallback(function(){d()}),V=useEventCallback(function(n){e.preserveValue||m(),y(n)}),E=useEventCallback(function(){if("function"==typeof e.children&&!(f.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}b()});a.useEffect(function(){E()},[E]),a.useEffect(function(){p.current&&V(e.end)},[e.end,V]);var w=r&&e;return(a.useEffect(function(){r&&p.current&&v()},[v,r,w]),a.useEffect(function(){!r&&p.current&&v()},[v,r,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),a.useEffect(function(){p.current=!0},[]),"function"==typeof o)?o({countUpRef:f,start:d,reset:m,update:y,pauseResume:g,getCountUp:b}):a.createElement("span",_extends({className:n,ref:f,style:u},s),void 0!==e.start?b().formattingFn(e.start):"")}}}]);