import{cf as Vt,cg as Pe,ah as Ot,a6 as Mt,bU as jt,X as Lt,d as ue,D as ce,J as w,r as T,bI as Ut,ch as Bt,a as x,j as Ge,a5 as qe,A as Zt,C as c,N as A,ba as d,c1 as Qe,bi as Me,ar as Wt,a1 as Xt,ag as Yt,ci as Ft,Q as se,ak as je,E as et,cj as Kt,I as Ht,bC as Jt,b5 as Le,bV as Ue,a9 as Gt,ac as qt,ab as Qt,ad as en,ck as tn,a3 as G,a4 as q}from"./index-CKOHag-y.js";function nn(e){return Vt(Pe(e).toLowerCase())}function on(e,n,r,l){for(var f=-1,p=e==null?0:e.length;++f<p;)r=n(r,e[f],f,e);return r}function rn(e){return function(n){return e==null?void 0:e[n]}}var an={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},sn=rn(an),ln=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,un="\\u0300-\\u036f",cn="\\ufe20-\\ufe2f",dn="\\u20d0-\\u20ff",fn=un+cn+dn,vn="["+fn+"]",xn=RegExp(vn,"g");function hn(e){return e=Pe(e),e&&e.replace(ln,sn).replace(xn,"")}var pn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function gn(e){return e.match(pn)||[]}var mn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function bn(e){return mn.test(e)}var tt="\\ud800-\\udfff",wn="\\u0300-\\u036f",yn="\\ufe20-\\ufe2f",Sn="\\u20d0-\\u20ff",Cn=wn+yn+Sn,nt="\\u2700-\\u27bf",ot="a-z\\xdf-\\xf6\\xf8-\\xff",Rn="\\xac\\xb1\\xd7\\xf7",zn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Pn="\\u2000-\\u206f",In=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rt="A-Z\\xc0-\\xd6\\xd8-\\xde",kn="\\ufe0e\\ufe0f",at=Rn+zn+Pn+In,st="['’]",Be="["+at+"]",Dn="["+Cn+"]",it="\\d+",Nn="["+nt+"]",lt="["+ot+"]",ut="[^"+tt+at+it+nt+ot+rt+"]",An="\\ud83c[\\udffb-\\udfff]",En="(?:"+Dn+"|"+An+")",Tn="[^"+tt+"]",ct="(?:\\ud83c[\\udde6-\\uddff]){2}",dt="[\\ud800-\\udbff][\\udc00-\\udfff]",Y="["+rt+"]",_n="\\u200d",Ze="(?:"+lt+"|"+ut+")",$n="(?:"+Y+"|"+ut+")",We="(?:"+st+"(?:d|ll|m|re|s|t|ve))?",Xe="(?:"+st+"(?:D|LL|M|RE|S|T|VE))?",ft=En+"?",vt="["+kn+"]?",Vn="(?:"+_n+"(?:"+[Tn,ct,dt].join("|")+")"+vt+ft+")*",On="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Mn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",jn=vt+ft+Vn,Ln="(?:"+[Nn,ct,dt].join("|")+")"+jn,Un=RegExp([Y+"?"+lt+"+"+We+"(?="+[Be,Y,"$"].join("|")+")",$n+"+"+Xe+"(?="+[Be,Y+Ze,"$"].join("|")+")",Y+"?"+Ze+"+"+We,Y+"+"+Xe,Mn,On,it,Ln].join("|"),"g");function Bn(e){return e.match(Un)||[]}function Zn(e,n,r){return e=Pe(e),n=n,n===void 0?bn(e)?Bn(e):gn(e):e.match(n)||[]}var Wn="['’]",Xn=RegExp(Wn,"g");function Yn(e){return function(n){return on(Zn(hn(n).replace(Xn,"")),e,"")}}var Ye=Yn(function(e,n,r){return n=n.toLowerCase(),e+(r?nn(n):n)});const xt=Lt("n-carousel-methods");function Fn(e){Ot(xt,e)}function Ie(e="unknown",n="component"){const r=Mt(xt);return r||jt(e,`\`${n}\` must be placed inside \`n-carousel\`.`),r}function Kn(){return w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function Hn(){return w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const Jn=ue({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=ce(e),{isVertical:r,isPrevDisabled:l,isNextDisabled:f,prev:p,next:P}=Ie();return{mergedClsPrefix:n,isVertical:r,isPrevDisabled:l,isNextDisabled:f,prev:p,next:P}},render(){const{mergedClsPrefix:e}=this;return w("div",{class:`${e}-carousel__arrow-group`},w("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Kn()),w("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Hn()))}}),Gn={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},qn=ue({name:"CarouselDots",props:Gn,setup(e){const{mergedClsPrefixRef:n}=ce(e),r=T([]),l=Ie();function f(g,v){switch(g.key){case"Enter":case" ":g.preventDefault(),l.to(v);return}e.keyboard&&y(g)}function p(g){e.trigger==="hover"&&l.to(g)}function P(g){e.trigger==="click"&&l.to(g)}function y(g){var v;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const b=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();if(b==="input"||b==="textarea")return;const{code:R}=g,O=R==="PageUp"||R==="ArrowUp",M=R==="PageDown"||R==="ArrowDown",C=R==="PageUp"||R==="ArrowRight",z=R==="PageDown"||R==="ArrowLeft",_=l.isVertical(),j=_?O:C,$=_?M:z;!j&&!$||(g.preventDefault(),j&&!l.isNextDisabled()?(l.next(),S(l.currentIndexRef.value)):$&&!l.isPrevDisabled()&&(l.prev(),S(l.currentIndexRef.value)))}function S(g){var v;(v=r.value[g])===null||v===void 0||v.focus()}return Ut(()=>r.value.length=0),{mergedClsPrefix:n,dotEls:r,handleKeydown:f,handleMouseenter:p,handleClick:P}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return w("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Bt(this.total,r=>{const l=r===this.currentIndex;return w("div",{"aria-selected":l,ref:f=>n.push(f),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:r,onClick:()=>{this.handleClick(r)},onMouseenter:()=>{this.handleMouseenter(r)},onKeydown:f=>{this.handleKeydown(f,r)}})}))}}),le="CarouselItem";function Qn(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===le}const eo=ue({name:le,setup(e){const{mergedClsPrefixRef:n}=ce(e),r=Ie(Ye(le),`n-${Ye(le)}`),l=T(),f=x(()=>{const{value:v}=l;return v?r.getSlideIndex(v):-1}),p=x(()=>r.isPrev(f.value)),P=x(()=>r.isNext(f.value)),y=x(()=>r.isActive(f.value)),S=x(()=>r.getSlideStyle(f.value));Ge(()=>{r.addSlide(l.value)}),qe(()=>{r.removeSlide(l.value)});function g(v){const{value:b}=f;b!==void 0&&(r==null||r.onCarouselItemClick(b,v))}return{mergedClsPrefix:n,selfElRef:l,isPrev:p,isNext:P,isActive:y,index:f,style:S,handleClick:g}},render(){var e;const{$slots:n,mergedClsPrefix:r,isPrev:l,isNext:f,isActive:p,index:P,style:y}=this,S=[`${r}-carousel__slide`,{[`${r}-carousel__slide--current`]:p,[`${r}-carousel__slide--prev`]:l,[`${r}-carousel__slide--next`]:f}];return w("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":P,"aria-hidden":!p,style:y,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:l,isNext:f,isActive:p,index:P}))}}),to=Zt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[c("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[c("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[A("> img",`
 display: block;
 `)])]),c("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[d("dot",[c("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[A("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),d("active",`
 background-color: var(--n-dot-color-active);
 `)])]),d("line",[c("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[A("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),d("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),c("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[A("svg",`
 height: 1em;
 width: 1em;
 `),A("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),d("vertical",`
 touch-action: pan-x;
 `,[c("slides",`
 flex-direction: column;
 `),d("fade",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),d("card",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[d("current",`
 transform: translateY(-50%) translateZ(0);
 `),d("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),d("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),d("usercontrol",[c("slides",[A(">",[A("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),d("left",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[d("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[d("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `)]),c("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),d("vertical",[c("arrow",`
 transform: rotate(90deg);
 `)]),d("show-arrow",[d("bottom",[c("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),d("top",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),d("left",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),d("right",[c("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),d("left",[c("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[A("> *:first-child",`
 margin-bottom: 12px;
 `)])]),d("right",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[d("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[d("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[A("> *:first-child",`
 margin-bottom: 12px;
 `)])]),d("top",[c("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[d("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 top: 12px;
 right: 12px;
 `,[A("> *:first-child",`
 margin-right: 12px;
 `)])]),d("bottom",[c("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[d("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[A("> *:first-child",`
 margin-right: 12px;
 `)])]),d("fade",[c("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[d("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),d("card",[c("slides",`
 perspective: 1000px;
 `),c("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[d("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),d("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),d("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]);function no(e){const{length:n}=e;return n>1&&(e.push(Fe(e[0],0,"append")),e.unshift(Fe(e[n-1],n-1,"prepend"))),e}function Fe(e,n,r){return Qe(e,{key:`carousel-item-duplicate-${n}-${r}`})}function Ke(e,n,r){return n===1?0:r?e===0?n-3:e===n-1?0:e-1:e}function Re(e,n){return n?e+1:e}function oo(e,n,r){return e<0?null:e===0?r?n-1:null:e-1}function ro(e,n,r){return e>n-1?null:e===n-1?r?0:null:e+1}function ao(e,n){return n&&e>3?e-2:e}function He(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Je(e,n){let{offsetWidth:r,offsetHeight:l}=e;if(n){const f=getComputedStyle(e);r=r-Number.parseFloat(f.getPropertyValue("padding-left"))-Number.parseFloat(f.getPropertyValue("padding-right")),l=l-Number.parseFloat(f.getPropertyValue("padding-top"))-Number.parseFloat(f.getPropertyValue("padding-bottom"))}return{width:r,height:l}}function ie(e,n,r){return e<n?n:e>r?r:e}function so(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,r=e.match(n);if(r){const[,l,,f="ms"]=r;return Number(l)*(f==="ms"?1:1e3)}return 0}const io=["transitionDuration","transitionTimingFunction"],lo=Object.assign(Object.assign({},et.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let ze=!1;const fo=ue({name:"Carousel",props:lo,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=ce(e),l=T(null),f=T(null),p=T([]),P={value:[]},y=x(()=>e.direction==="vertical"),S=x(()=>y.value?"height":"width"),g=x(()=>y.value?"bottom":"right"),v=x(()=>e.effect==="slide"),b=x(()=>e.loop&&e.slidesPerView===1&&v.value),R=x(()=>e.effect==="custom"),O=x(()=>!v.value||e.centeredSlides?1:e.slidesPerView),M=x(()=>R.value?1:e.slidesPerView),C=x(()=>O.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),z=T({width:0,height:0}),_=T(0),j=x(()=>{const{value:t}=p;if(!t.length)return[];_.value;const{value:o}=C;if(o)return t.map(m=>Je(m));const{value:a}=M,{value:i}=z,{value:u}=S;let s=i[u];if(a!=="auto"){const{spaceBetween:m}=e,I=s-(a-1)*m,ae=1/Math.max(1,a);s=I*ae}const h=Object.assign(Object.assign({},i),{[u]:s});return t.map(()=>h)}),$=x(()=>{const{value:t}=j;if(!t.length)return[];const{centeredSlides:o,spaceBetween:a}=e,{value:i}=S,{[i]:u}=z.value;let s=0;return t.map(({[i]:h})=>{let m=s;return o&&(m+=(h-u)/2),s+=h+a,m})}),ke=T(!1),de=x(()=>{const{transitionStyle:t}=e;return t?Me(t,io):{}}),fe=x(()=>R.value?0:so(de.value.transitionDuration)),De=x(()=>{const{value:t}=p;if(!t.length)return[];const o=!(C.value||M.value===1),a=h=>{if(o){const{value:m}=S;return{[m]:`${j.value[h][m]}px`}}};if(R.value)return t.map((h,m)=>a(m));const{effect:i,spaceBetween:u}=e,{value:s}=g;return t.reduce((h,m,I)=>{const ae=Object.assign(Object.assign({},a(I)),{[`margin-${s}`]:`${u}px`});return h.push(ae),ke.value&&(i==="fade"||i==="card")&&Object.assign(ae,de.value),h},[])}),k=x(()=>{const{value:t}=O,{length:o}=p.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:a}=j,{length:i}=a;if(!i)return o;const{value:u}=$,{value:s}=S,h=z.value[s];let m=a[a.length-1][s],I=i;for(;I>1&&m<h;)I--,m+=u[I]-u[I-1];return ie(I+1,1,i)}}),ve=x(()=>ao(k.value,b.value)),ht=Re(e.defaultIndex,b.value),xe=T(Ke(ht,k.value,b.value)),E=Wt(Xt(e,"currentIndex"),xe),D=x(()=>Re(E.value,b.value));function F(t){var o,a;t=ie(t,0,k.value-1);const i=Ke(t,k.value,b.value),{value:u}=E;i!==E.value&&(xe.value=i,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,i,u),(a=e.onUpdateCurrentIndex)===null||a===void 0||a.call(e,i,u))}function he(t=D.value){return oo(t,k.value,e.loop)}function pe(t=D.value){return ro(t,k.value,e.loop)}function pt(t){const o=B(t);return o!==null&&he()===o}function gt(t){const o=B(t);return o!==null&&pe()===o}function Ne(t){return D.value===B(t)}function mt(t){return E.value===t}function Ae(){return he()===null}function Ee(){return pe()===null}let U=0;function ge(t){const o=ie(Re(t,b.value),0,k.value);(t!==E.value||o!==D.value)&&F(o)}function Q(){const t=he();t!==null&&(U=-1,F(t))}function K(){const t=pe();t!==null&&(U=1,F(t))}let N=!1;function bt(){(!N||!b.value)&&Q()}function wt(){(!N||!b.value)&&K()}let L=0;const me=T({});function ee(t,o=0){me.value=Object.assign({},de.value,{transform:y.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function H(t=0){v.value?be(D.value,t):L!==0&&(!N&&t>0&&(N=!0),ee(L=0,t))}function be(t,o){const a=Te(t);a!==L&&o>0&&(N=!0),L=Te(D.value),ee(a,o)}function Te(t){let o;return t>=k.value-1?o=_e():o=$.value[t]||0,o}function _e(){if(O.value==="auto"){const{value:t}=S,{[t]:o}=z.value,{value:a}=$,i=a[a.length-1];let u;if(i===void 0)u=o;else{const{value:s}=j;u=i+s[s.length-1][t]}return u-o}else{const{value:t}=$;return t[k.value-1]||0}}const J={currentIndexRef:E,to:ge,prev:bt,next:wt,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:pt,isNext:gt,isActive:Ne,isPrevDisabled:Ae,isNextDisabled:Ee,getSlideIndex:B,getSlideStyle:Ct,addSlide:yt,removeSlide:St,onCarouselItemClick:Rt};Fn(J);function yt(t){t&&p.value.push(t)}function St(t){if(!t)return;const o=B(t);o!==-1&&p.value.splice(o,1)}function B(t){return typeof t=="number"?t:t?p.value.indexOf(t):-1}function Ct(t){const o=B(t);if(o!==-1){const a=[De.value[o]],i=J.isPrev(o),u=J.isNext(o);return i&&a.push(e.prevSlideStyle||""),u&&a.push(e.nextSlideStyle||""),en(a)}}let we=0,ye=0,V=0,Se=0,te=!1,Ce=!1;function Rt(t,o){let a=!N&&!te&&!Ce;e.effect==="card"&&a&&!Ne(t)&&(ge(t),a=!1),a||(o.preventDefault(),o.stopPropagation())}let ne=null;function oe(){ne&&(clearInterval(ne),ne=null)}function Z(){oe(),!e.autoplay||ve.value<2||(ne=window.setInterval(K,e.interval))}function $e(t){var o;if(ze||!(!((o=f.value)===null||o===void 0)&&o.contains(tn(t))))return;ze=!0,te=!0,Ce=!1,Se=Date.now(),oe(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const a=He(t)?t.touches[0]:t;y.value?ye=a.clientY:we=a.clientX,e.touchable&&(G("touchmove",document,re),G("touchend",document,W),G("touchcancel",document,W)),e.draggable&&(G("mousemove",document,re),G("mouseup",document,W))}function re(t){const{value:o}=y,{value:a}=S,i=He(t)?t.touches[0]:t,u=o?i.clientY-ye:i.clientX-we,s=z.value[a];V=ie(u,-s,s),t.cancelable&&t.preventDefault(),v.value&&ee(L-V,0)}function W(){const{value:t}=D;let o=t;if(!N&&V!==0&&v.value){const a=L-V,i=[...$.value.slice(0,k.value-1),_e()];let u=null;for(let s=0;s<i.length;s++){const h=Math.abs(i[s]-a);if(u!==null&&u<h)break;u=h,o=s}}if(o===t){const a=Date.now()-Se,{value:i}=S,u=z.value[i];V>u/2||V/a>.4?Q():(V<-u/2||V/a<-.4)&&K()}o!==null&&o!==t?(Ce=!0,F(o),je(()=>{(!b.value||xe.value!==E.value)&&H(fe.value)})):H(fe.value),Ve(),Z()}function Ve(){te&&(ze=!1),te=!1,we=0,ye=0,V=0,Se=0,q("touchmove",document,re),q("touchend",document,W),q("touchcancel",document,W),q("mousemove",document,re),q("mouseup",document,W)}function zt(){if(v.value&&N){const{value:t}=D;be(t,0)}else Z();v.value&&(me.value.transitionDuration="0ms"),N=!1}function Pt(t){if(t.preventDefault(),N)return;let{deltaX:o,deltaY:a}=t;t.shiftKey&&!o&&(o=a);const i=-1,u=1,s=(o||a)>0?u:i;let h=0,m=0;y.value?m=s:h=s;const I=10;(m*a>=I||h*o>=I)&&(s===u&&!Ee()?K():s===i&&!Ae()&&Q())}function It(){z.value=Je(l.value,!0),Z()}function kt(){C.value&&_.value++}function Dt(){e.autoplay&&oe()}function Nt(){e.autoplay&&Z()}Ge(()=>{Yt(Z),requestAnimationFrame(()=>ke.value=!0)}),qe(()=>{Ve(),oe()}),Ft(()=>{const{value:t}=p,{value:o}=P,a=new Map,i=s=>a.has(s)?a.get(s):-1;let u=!1;for(let s=0;s<t.length;s++){const h=o.findIndex(m=>m.el===t[s]);h!==s&&(u=!0),a.set(t[s],h)}u&&t.sort((s,h)=>i(s)-i(h))}),se(D,(t,o)=>{if(t===o){U=0;return}if(Z(),v.value){if(b.value){const{value:a}=k;U===-1&&o===1&&t===a-2?t=0:U===1&&o===a-2&&t===1&&(t=a-1)}be(t,fe.value)}else H();U=0},{immediate:!0}),se([b,O],()=>void je(()=>{F(D.value)})),se($,()=>{v.value&&H()},{deep:!0}),se(v,t=>{t?H():(N=!1,ee(L=0))});const At=x(()=>({onTouchstartPassive:e.touchable?$e:void 0,onMousedown:e.draggable?$e:void 0,onWheel:e.mousewheel?Pt:void 0})),Et=x(()=>Object.assign(Object.assign({},Me(J,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:ve.value,currentIndex:E.value})),Tt=x(()=>({total:ve.value,currentIndex:E.value,to:J.to})),_t={getCurrentIndex:()=>E.value,to:ge,prev:Q,next:K},$t=et("Carousel","-carousel",to,Kt,e,n),Oe=x(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:a,dotColorActive:i,dotColorFocus:u,dotLineWidth:s,dotLineWidthActive:h,arrowColor:m}}=$t.value;return{"--n-bezier":t,"--n-dot-color":a,"--n-dot-color-focus":u,"--n-dot-color-active":i,"--n-dot-size":o,"--n-dot-line-width":s,"--n-dot-line-width-active":h,"--n-arrow-color":m}}),X=r?Ht("carousel",void 0,Oe,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:l,slidesElRef:f,slideVNodes:P,duplicatedable:b,userWantsControl:R,autoSlideSize:C,realIndex:D,slideStyles:De,translateStyle:me,slidesControlListeners:At,handleTransitionEnd:zt,handleResize:It,handleSlideResize:kt,handleMouseenter:Dt,handleMouseleave:Nt,isActive:mt,arrowSlotProps:Et,dotSlotProps:Tt},_t),{cssVars:r?void 0:Oe,themeClass:X==null?void 0:X.themeClass,onRender:X==null?void 0:X.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:r,userWantsControl:l,slideStyles:f,dotType:p,dotPlacement:P,slidesControlListeners:y,transitionProps:S={},arrowSlotProps:g,dotSlotProps:v,$slots:{default:b,dots:R,arrow:O}}=this,M=b&&Jt(b())||[];let C=uo(M);return C.length||(C=M.map(z=>w(eo,null,{default:()=>Qe(z)}))),this.duplicatedable&&(C=no(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(z=>w(Le,{onResize:this.handleSlideResize},{default:()=>z}))),(e=this.onRender)===null||e===void 0||e.call(this),w("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${P}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,l&&`${n}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),w(Le,{onResize:this.handleResize},{default:()=>w("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?C.map((z,_)=>w("div",{style:f[_],key:_},Gt(w(Qt,Object.assign({},S),{default:()=>z}),[[qt,this.isActive(_)]]))):C)}),this.showDots&&v.total>1&&Ue(R,v,()=>[w(qn,{key:p+P,total:v.total,currentIndex:v.currentIndex,dotType:p,trigger:this.trigger,keyboard:this.keyboard})]),r&&Ue(O,g,()=>[w(Jn,null)]))}});function uo(e){return e.reduce((n,r)=>(Qn(r)&&n.push(r),n),[])}export{fo as _,eo as a,Yn as c};
